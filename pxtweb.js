// redirect for IE11 (unsupported)
(function _() {
    if (typeof navigator !== "undefined" && /Trident/i.test(navigator.userAgent)
        && !/skipbrowsercheck=1/i.exec(window.location.href)
        && !/\/browsers/i.exec(window.location.href)) {
        window.location.href = "/browsers";
        return;
    }
})();
/// <reference path="../../pxtwinrt/winrtrefs.d.ts"/>
var pxt;
(function (pxt) {
    var eventBufferSizeLimit = 20;
    var queues = [];
    var analyticsLoaded = false;
    var interactiveConsent = false;
    var isProduction = false;
    var TelemetryQueue = /** @class */ (function () {
        function TelemetryQueue(log) {
            this.log = log;
            this.q = [];
            queues.push(this);
        }
        TelemetryQueue.prototype.track = function (a, b, c) {
            if (analyticsLoaded) {
                this.log(a, b, c);
            }
            else {
                this.q.push([a, b, c]);
                if (this.q.length > eventBufferSizeLimit)
                    this.q.shift();
            }
        };
        TelemetryQueue.prototype.flush = function () {
            while (this.q.length) {
                var _a = this.q.shift(), a = _a[0], b = _a[1], c = _a[2];
                this.log(a, b, c);
            }
        };
        return TelemetryQueue;
    }());
    var eventLogger;
    var exceptionLogger;
    // performance measuring, added here because this is amongst the first (typescript) code ever executed
    var perf;
    (function (perf) {
        var enabled;
        perf.stats = {
            durations: [],
            milestones: []
        };
        perf.perfReportLogged = false;
        function splitMs() {
            return Math.round(performance.now() - perf.startTimeMs);
        }
        perf.splitMs = splitMs;
        function prettyStr(ms) {
            ms = Math.round(ms);
            var r_ms = ms % 1000;
            var s = Math.floor(ms / 1000);
            var r_s = s % 60;
            var m = Math.floor(s / 60);
            if (m > 0)
                return m + "m" + r_s + "s";
            else if (s > 5)
                return s + "s";
            else if (s > 0)
                return s + "s" + r_ms + "ms";
            else
                return ms + "ms";
        }
        perf.prettyStr = prettyStr;
        function splitStr() {
            return prettyStr(splitMs());
        }
        perf.splitStr = splitStr;
        function recordMilestone(msg, time) {
            if (time === void 0) { time = splitMs(); }
            perf.stats.milestones.push([msg, time]);
        }
        perf.recordMilestone = recordMilestone;
        function init() {
            enabled = performance && !!performance.mark && !!performance.measure;
            if (enabled) {
                performance.measure("measure from the start of navigation to now");
                var navStartMeasure = performance.getEntriesByType("measure")[0];
                perf.startTimeMs = navStartMeasure.startTime;
            }
        }
        perf.init = init;
        function measureStart(name) {
            if (enabled)
                performance.mark(name + " start");
        }
        perf.measureStart = measureStart;
        function measureEnd(name) {
            if (enabled && performance.getEntriesByName(name + " start").length) {
                performance.mark(name + " end");
                performance.measure(name + " elapsed", name + " start", name + " end");
                var e = performance.getEntriesByName(name + " elapsed", "measure");
                if (e && e.length === 1) {
                    var measure = e[0];
                    var durMs = measure.duration;
                    if (durMs > 10) {
                        perf.stats.durations.push([name, measure.startTime, durMs]);
                    }
                }
                performance.clearMarks(name + " start");
                performance.clearMarks(name + " end");
                performance.clearMeasures(name + " elapsed");
            }
        }
        perf.measureEnd = measureEnd;
        function report(filter) {
            if (filter === void 0) { filter = null; }
            if (enabled) {
                var report_1 = "performance report:\n";
                for (var _i = 0, _a = perf.stats.milestones; _i < _a.length; _i++) {
                    var _b = _a[_i], msg = _b[0], time = _b[1];
                    if (!filter || msg.indexOf(filter) >= 0) {
                        var pretty = prettyStr(time);
                        report_1 += "\t\t" + msg + " @ " + pretty + "\n";
                    }
                }
                report_1 += "\n";
                for (var _c = 0, _d = perf.stats.durations; _c < _d.length; _c++) {
                    var _e = _d[_c], msg = _e[0], start = _e[1], duration = _e[2];
                    var filterIncl = filter && msg.indexOf(filter) >= 0;
                    if ((duration > 50 && !filter) || filterIncl) {
                        var pretty = prettyStr(duration);
                        report_1 += "\t\t" + msg + " took ~ " + pretty;
                        if (duration > 1000) {
                            report_1 += " (" + prettyStr(start) + " - " + prettyStr(start + duration) + ")";
                        }
                        report_1 += "\n";
                    }
                }
                console.log(report_1);
            }
            perf.perfReportLogged = true;
        }
        perf.report = report;
        (function () {
            init();
            recordMilestone("first JS running");
        })();
    })(perf = pxt.perf || (pxt.perf = {}));
    function initAnalyticsAsync() {
        if (isNotHosted()) {
            initializeAppInsightsInternal(false);
            return;
        }
        if (isNativeApp() || shouldHideCookieBanner()) {
            initializeAppInsightsInternal(true);
            return;
        }
        if (isSandboxMode() || window.pxtSkipAnalyticsCookie) {
            initializeAppInsightsInternal(false);
            return;
        }
        initializeAppInsightsInternal(true);
    }
    pxt.initAnalyticsAsync = initAnalyticsAsync;
    function aiTrackEvent(id, data, measures) {
        if (!eventLogger) {
            eventLogger = new TelemetryQueue(function (a, b, c) { return window.appInsights.trackEvent(a, b, c); });
        }
        eventLogger.track(id, data, measures);
    }
    pxt.aiTrackEvent = aiTrackEvent;
    function aiTrackException(err, kind, props) {
        if (!exceptionLogger) {
            exceptionLogger = new TelemetryQueue(function (a, b, c) { return window.appInsights.trackException(a, b, c); });
        }
        exceptionLogger.track(err, kind, props);
    }
    pxt.aiTrackException = aiTrackException;
    function initializeAppInsightsInternal(includeCookie) {
        if (includeCookie === void 0) { includeCookie = false; }
        // loadAppInsights is defined in docfiles/tracking.html
        var loadAI = window.loadAppInsights;
        if (loadAI) {
            isProduction = includeCookie;
            loadAI(includeCookie, telemetryInitializer);
            analyticsLoaded = true;
            queues.forEach(function (a) { return a.flush(); });
        }
    }
    pxt.initializeAppInsightsInternal = initializeAppInsightsInternal;
    function telemetryInitializer(envelope) {
        var pxtConfig = window.pxtConfig;
        if (typeof pxtConfig === "undefined" || !pxtConfig)
            return;
        var telemetryItem = envelope.data.baseData;
        telemetryItem.properties = telemetryItem.properties || {};
        telemetryItem.properties["target"] = pxtConfig.targetId;
        telemetryItem.properties["stage"] = (pxtConfig.relprefix || "/--").replace(/[^a-z]/ig, '');
        if (typeof Windows !== "undefined")
            telemetryItem.properties["WindowsApp"] = 1;
        var userAgent = navigator.userAgent.toLowerCase();
        var userAgentRegexResult = /\belectron\/(\d+\.\d+\.\d+.*?)(?: |$)/i.exec(userAgent); // Example navigator.userAgent: "Mozilla/5.0 Chrome/61.0.3163.100 Electron/2.0.0 Safari/537.36"
        if (userAgentRegexResult) {
            telemetryItem.properties["Electron"] = 1;
            telemetryItem.properties["ElectronVersion"] = userAgentRegexResult[1];
        }
        var pxtElectron = window.pxtElectron;
        if (typeof pxtElectron !== "undefined") {
            telemetryItem.properties["PxtElectron"] = 1;
            telemetryItem.properties["ElectronVersion"] = pxtElectron.versions.electronVersion;
            telemetryItem.properties["ChromiumVersion"] = pxtElectron.versions.chromiumVersion;
            telemetryItem.properties["NodeVersion"] = pxtElectron.versions.nodeVersion;
            telemetryItem.properties["PxtElectronVersion"] = pxtElectron.versions.pxtElectronVersion;
            telemetryItem.properties["PxtCoreVersion"] = pxtElectron.versions.pxtCoreVersion;
            telemetryItem.properties["PxtTargetVersion"] = pxtElectron.versions.pxtTargetVersion;
            telemetryItem.properties["PxtElectronIsProd"] = pxtElectron.versions.isProd;
        }
        // "cookie" does not actually correspond to whether or not we drop the cookie because we recently
        // switched to immediately dropping it rather than waiting. Instead, we maintain the legacy behavior
        // of only setting it to true for production sites where interactive consent has been obtained
        // so that we don't break legacy queries
        telemetryItem.properties["cookie"] = interactiveConsent && isProduction;
    }
    function setInteractiveConsent(enabled) {
        interactiveConsent = enabled;
    }
    pxt.setInteractiveConsent = setInteractiveConsent;
    /**
     * Checks for winrt, pxt-electron and Code Connection
     */
    function isNativeApp() {
        var hasWindow = typeof window !== "undefined";
        var isUwp = typeof Windows !== "undefined";
        var isPxtElectron = hasWindow && !!window.pxtElectron;
        var isCC = hasWindow && !!window.ipcRenderer || /ipc=1/.test(location.hash) || /ipc=1/.test(location.search); // In WKWebview, ipcRenderer is injected later, so use the URL query
        return isUwp || isPxtElectron || isCC;
    }
    /**
     * Checks whether we should hide the cookie banner
     */
    function shouldHideCookieBanner() {
        //We don't want a cookie notification when embedded in editor controllers, we'll use the url to determine that
        var noCookieBanner = isIFrame() && /nocookiebanner=1/i.test(window.location.href);
        return noCookieBanner;
    }
    function isIFrame() {
        try {
            return window && window.self !== window.top;
        }
        catch (e) {
            return false;
        }
    }
    function isNotHosted() {
        // If local serve, config will not exist. If served statically, we check the flag in the config
        var config = window.pxtConfig;
        return !config || config.isStatic;
    }
    /**
     * checks for sandbox
     */
    function isSandboxMode() {
        //This is restricted set from pxt.shell.isSandBoxMode and specific to share page
        //We don't want cookie notification in the share page
        var sandbox = /sandbox=1|#sandbox|#sandboxproject/i.test(window.location.href);
        return sandbox;
    }
})(pxt || (pxt = {}));
