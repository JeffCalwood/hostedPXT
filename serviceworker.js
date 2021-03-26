initWebappServiceWorker();
function initWebappServiceWorker() {
    // Empty string for released, otherwise contains the ref or version path
    var ref = "@relprefix@".replace("---", "").replace(/^\//, "");
    // We don't do offline for version paths, only named releases
    var isNamedEndpoint = ref.indexOf("/") === -1;
    // pxtRelId is replaced with the commit hash for this release
    var refCacheName = "makecode;" + ref + ";@pxtRelId@";
    var cdnUrl = "@cdnUrl@";
    var webappUrls = [
        // The current page
        "@targetUrl@/" + ref,
        "@simUrl@",
        // webapp files
        "/semantic.js",
        "/main.js",
        "/pxtapp.js",
        "/typescript.js",
        "/marked/marked.min.js",
        "/highlight.js/highlight.pack.js",
        "/jquery.js",
        "/pxtlib.js",
        "/pxtcompiler.js",
        "/pxtpy.js",
        "/pxtblockly.js",
        "/pxtwinrt.js",
        "/pxteditor.js",
        "/pxtsim.js",
        "/pxtembed.js",
        "/pxtworker.js",
        "/pxtweb.js",
        "/blockly.css",
        "/semantic.css",
        "/rtlsemantic.css",
        // blockly
        "/blockly/media/sprites.png",
        "/blockly/media/click.mp3",
        "/blockly/media/disconnect.wav",
        "/blockly/media/delete.mp3",
        // monaco; keep in sync with webapp/public/index.html
        "/vs/loader.js",
        "/vs/base/worker/workerMain.js",
        "/vs/basic-languages/bat/bat.js",
        "/vs/basic-languages/cpp/cpp.js",
        "/vs/basic-languages/python/python.js",
        "/vs/basic-languages/markdown/markdown.js",
        "/vs/editor/editor.main.css",
        "/vs/editor/editor.main.js",
        "/vs/editor/editor.main.nls.js",
        "/vs/language/json/jsonMode.js",
        "/vs/language/json/jsonWorker.js",
        // charts
        "/smoothie/smoothie_compressed.js",
        "/images/Bars_black.gif",
        // gifjs
        "/gifjs/gif.js",
        // ai
        "/ai.0.js",
        // target
        "/target.js",
        // These macros should be replaced by the backend
        "/fieldeditors.js",
        "/editor.js",
        "",
        "@targetUrl@/monacoworker.js",
        "@targetUrl@/worker.js"
    ];
    // Replaced by the backend by a list of encoded urls separated by semicolons
    var cachedHexFiles = decodeURLs("");
    var cachedTargetImages = decodeURLs("%2Fdocs%5Cstatic%5Clogo.svg;%2Fdocs%5Cstatic%5Clogo.square.svg;%2Fdocs%5Cstatic%5Clogo.square.svg;%2Fdocs%5Cstatic%5Clogo.square.svg;%2Fdocs%5Cstatic%5Cicons%5Candroid-chrome-192x192.png;%2Fdocs%5Cstatic%5Cicons%5Candroid-chrome-192x192.png;%2Fdocs%5Cstatic%5CMicrosoft-logo_rgb_c-gray-square.png;%2Fdocs%5Cstatic%5CMicrosoft-logo_rgb_c-white.png;%2Fdocs%5Cstatic%5Cgetting-started%5CCN-banner.jpg");
    // Duplicate entries in this list will cause an exception so call dedupe
    // just in case
    var allFiles = dedupe(webappUrls.concat(cachedTargetImages)
        .map(function (url) { return url.trim(); })
        .filter(function (url) { return !!url && url.indexOf("@") !== 0; }));
    var didInstall = false;
    self.addEventListener("install", function (ev) {
        if (!isNamedEndpoint) {
            console.log("Skipping service worker install for unnamed endpoint");
            return;
        }
        didInstall = true;
        console.log("Installing service worker...");
        ev.waitUntil(caches.open(refCacheName)
            .then(function (cache) {
            console.log("Opened cache");
            console.log("Caching:\n" + allFiles.join("\n"));
            return cache.addAll(allFiles).then(function () { return cache; });
        })
            .then(function (cache) {
            return cache.addAll(cachedHexFiles).catch(function (e) {
                // Hex files might return a 404 if they haven't hit the backend yet. We
                // need to catch the exception or the service worker will fail to install
                console.log("Failed to cache hexfiles");
            });
        })
            .then(function () { return self.skipWaiting(); }));
    });
    self.addEventListener("activate", function (ev) {
        if (!isNamedEndpoint) {
            console.log("Skipping service worker activate for unnamed endpoint");
            return;
        }
        console.log("Activating service worker...");
        ev.waitUntil(caches.keys()
            .then(function (cacheNames) {
            // Delete all caches that "belong" to this ref except for the current version
            var toDelete = cacheNames.filter(function (c) {
                var cacheRef = getRefFromCacheName(c);
                return cacheRef === null || (cacheRef === ref && c !== refCacheName);
            });
            return Promise.all(toDelete.map(function (name) { return caches.delete(name); }));
        })
            .then(function () {
            if (didInstall) {
                // Only notify clients for the first activation
                didInstall = false;
                return notifyAllClientsAsync();
            }
            return Promise.resolve();
        }));
    });
    self.addEventListener("fetch", function (ev) {
        ev.respondWith(caches.match(ev.request)
            .then(function (response) {
            return response || fetch(ev.request);
        }));
    });
    function dedupe(urls) {
        var res = [];
        for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
            var url = urls_1[_i];
            if (res.indexOf(url) === -1)
                res.push(url);
        }
        return res;
    }
    function getRefFromCacheName(name) {
        var parts = name.split(";");
        if (parts.length !== 3)
            return null;
        return parts[1];
    }
    function decodeURLs(encodedURLs) {
        // Charcode 64 is '@', we need to calculate it because otherwise the minifier
        // will combine the string concatenation into @cdnUrl@ and get mangled by the backend
        var cdnEscaped = String.fromCharCode(64) + "cdnUrl" + String.fromCharCode(64);
        return dedupe(encodedURLs.split(";")
            .map(function (encoded) { return decodeURIComponent(encoded).replace(cdnEscaped, cdnUrl).trim(); }));
    }
    function notifyAllClientsAsync() {
        var scope = self;
        return scope.clients.claim().then(function () { return scope.clients.matchAll(); }).then(function (clients) {
            clients.forEach(function (client) { return client.postMessage({
                type: "serviceworker",
                state: "activated",
                ref: ref
            }); });
        });
    }
}
