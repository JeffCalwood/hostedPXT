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
        "/hostedPXT/semantic.js",
        "/hostedPXT/main.js",
        "/hostedPXT/pxtapp.js",
        "/hostedPXT/typescript.js",
        "/hostedPXT/marked/marked.min.js",
        "/hostedPXT/highlight.js/highlight.pack.js",
        "/hostedPXT/jquery.js",
        "/hostedPXT/pxtlib.js",
        "/hostedPXT/pxtcompiler.js",
        "/hostedPXT/pxtpy.js",
        "/hostedPXT/pxtblockly.js",
        "/hostedPXT/pxtwinrt.js",
        "/hostedPXT/pxteditor.js",
        "/hostedPXT/pxtsim.js",
        "/hostedPXT/pxtembed.js",
        "/hostedPXT/pxtworker.js",
        "/hostedPXT/pxtweb.js",
        "/hostedPXT/blockly.css",
        "/hostedPXT/semantic.css",
        "/hostedPXT/rtlsemantic.css",
        // blockly
        "/hostedPXT/blockly/media/sprites.png",
        "/hostedPXT/blockly/media/click.mp3",
        "/hostedPXT/blockly/media/disconnect.wav",
        "/hostedPXT/blockly/media/delete.mp3",
        // monaco; keep in sync with webapp/public/index.html
        "/hostedPXT/vs/loader.js",
        "/hostedPXT/vs/base/worker/workerMain.js",
        "/hostedPXT/vs/basic-languages/bat/bat.js",
        "/hostedPXT/vs/basic-languages/cpp/cpp.js",
        "/hostedPXT/vs/basic-languages/python/python.js",
        "/hostedPXT/vs/basic-languages/markdown/markdown.js",
        "/hostedPXT/vs/editor/editor.main.css",
        "/hostedPXT/vs/editor/editor.main.js",
        "/hostedPXT/vs/editor/editor.main.nls.js",
        "/hostedPXT/vs/language/json/jsonMode.js",
        "/hostedPXT/vs/language/json/jsonWorker.js",
        // charts
        "/hostedPXT/smoothie/smoothie_compressed.js",
        "/hostedPXT/images/Bars_black.gif",
        // gifjs
        "/hostedPXT/gifjs/gif.js",
        // ai
        "/hostedPXT/ai.0.js",
        // target
        "/hostedPXT/target.js",
        // These macros should be replaced by the backend
        "/hostedPXT/fieldeditors.js",
        "/hostedPXT/editor.js",
        "",
        "@targetUrl@/hostedPXT/monacoworker.js",
        "@targetUrl@/hostedPXT/worker.js"
    ];
    // Replaced by the backend by a list of encoded urls separated by semicolons
    var cachedHexFiles = decodeURLs("");
    var cachedTargetImages = decodeURLs("%2FhostedPXT%2Fdocs%5Cstatic%5Clogo.svg;%2FhostedPXT%2Fdocs%5Cstatic%5Clogo.square.svg;%2FhostedPXT%2Fdocs%5Cstatic%5Clogo.square.svg;%2FhostedPXT%2Fdocs%5Cstatic%5Clogo.square.svg;%2FhostedPXT%2Fdocs%5Cstatic%5Cicons%5Candroid-chrome-192x192.png;%2FhostedPXT%2Fdocs%5Cstatic%5Cicons%5Candroid-chrome-192x192.png;%2FhostedPXT%2Fdocs%5Cstatic%5CMicrosoft-logo_rgb_c-gray-square.png;%2FhostedPXT%2Fdocs%5Cstatic%5CMicrosoft-logo_rgb_c-white.png;%2FhostedPXT%2Fdocs%5Cstatic%5Cgetting-started%5CCN-banner.jpg");
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
