"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtblocks.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtcompiler.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
var React = require("react");
function showUploadInstructionsAsync(fn, url, confirmAsync) {
    var resolve;
    var reject;
    var deferred = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    var boardName = pxt.appTarget.appTheme.boardName || "???";
    var boardDriveName = pxt.appTarget.appTheme.driveDisplayName || pxt.appTarget.compile.driveName || "???";
    // https://msdn.microsoft.com/en-us/library/cc848897.aspx
    // "For security reasons, data URIs are restricted to downloaded resources.
    // Data URIs cannot be used for navigation, for scripting, or to populate frame or iframe elements"
    var downloadAgain = !pxt.BrowserUtils.isIE() && !pxt.BrowserUtils.isEdge();
    var docUrl = pxt.appTarget.appTheme.usbDocs;
    var jsx = React.createElement("div", { className: "ui three column grid stackable" },
        React.createElement("div", { className: "column" },
            React.createElement("div", { className: "ui" },
                React.createElement("div", { className: "image" },
                    React.createElement("img", { className: "ui medium rounded image download-step", src: "./static/download/connect.png" })),
                React.createElement("div", { className: "content" },
                    React.createElement("div", { className: "description" },
                        React.createElement("span", { className: "ui blue circular label" }, "1"),
                        lf("Take the USB cable you connected to your computer. Plug it into your Circuit Playground Express."))))),
        React.createElement("div", { className: "column" },
            React.createElement("div", { className: "ui" },
                React.createElement("div", { className: "image" },
                    React.createElement("img", { className: "ui medium rounded image download-step", src: "./static/download/reset.png" })),
                React.createElement("div", { className: "content" },
                    React.createElement("div", { className: "description" },
                        React.createElement("span", { className: "ui blue circular label" }, "2"),
                        lf("Press the RESET button to go into programming mode. When the lights turn green, you're ready to go."))))),
        React.createElement("div", { className: "column" },
            React.createElement("div", { className: "ui" },
                React.createElement("div", { className: "image" },
                    React.createElement("img", { className: "ui medium rounded image download-step", src: "./static/download/transfer.png" })),
                React.createElement("div", { className: "content" },
                    React.createElement("div", { className: "description" },
                        React.createElement("span", { className: "ui blue circular label" }, "3"),
                        lf("Click and drag the file you downloaded onto {0}.", boardDriveName))))));
    return confirmAsync({
        header: lf("Download completed..."),
        jsx: jsx,
        hasCloseIcon: true,
        hideCancel: true,
        hideAgree: true,
        size: 'large',
        buttons: [downloadAgain ? {
                label: fn,
                icon: "download",
                class: "lightgrey focused",
                url: url,
                fileName: fn
            } : undefined, docUrl ? {
                label: lf("Help"),
                icon: "help",
                class: "lightgrey focused",
                url: docUrl
            } : undefined]
        //timeout: 20000
    }).then(function () { });
}
pxt.editor.initExtensionsAsync = function (opts) {
    pxt.debug('loading pxt-adafruit target extensions...');
    var res = {
        showUploadInstructionsAsync: showUploadInstructionsAsync
    };
    return Promise.resolve(res);
};
