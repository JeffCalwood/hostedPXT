(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/hostedPXT/",
    "verprefix": "",
    "workerjs": "/hostedPXT/worker.js",
    "monacoworkerjs": "/hostedPXT/monacoworker.js",
    "gifworkerjs": "/hostedPXT/gifjs/gif.worker.js",
    "serviceworkerjs": "/hostedPXT/serviceworker.js",
    "pxtVersion": "6.6.18",
    "pxtRelId": "",
    "pxtCdnUrl": "/hostedPXT/",
    "commitCdnUrl": "/hostedPXT/",
    "blobCdnUrl": "/hostedPXT/",
    "cdnUrl": "/hostedPXT/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "adafruit",
    "simUrl": "/hostedPXT/simulator.html",
    "simserviceworkerUrl": "/hostedPXT/simulatorserviceworker.js",
    "simworkerconfigUrl": "/hostedPXT/workerConfig.js",
    "partsUrl": "/hostedPXT/siminstructions.html",
    "runUrl": "/hostedPXT/run.html",
    "docsUrl": "/hostedPXT/docs.html",
    "multiUrl": "/hostedPXT/multi.html",
    "asseteditorUrl": "/hostedPXT/asseteditor.html",
    "isStatic": true
};

    var scripts = [
        "/hostedPXT/highlight.js/highlight.pack.js",
        "/hostedPXT/bluebird.min.js",
        "/hostedPXT/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/hostedPXT/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/hostedPXT/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/hostedPXT/target.js");
    scripts.push("/hostedPXT/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
