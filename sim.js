var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pxsim;
(function (pxsim) {
    var jctwo;
    (function (jctwo) {
        function readsome() { return 52; }
        jctwo.readsome = readsome;
    })(jctwo = pxsim.jctwo || (pxsim.jctwo = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts"/>
/// <reference path="../built/common-sim.d.ts"/>
/// <reference path="../libs/core/dal.d.ts"/>
/// <reference path="../libs/jcstubborn/sim/jcstubborn.ts"/>
var pxsim;
(function (pxsim) {
    var CPlayPinName;
    (function (CPlayPinName) {
        CPlayPinName.A0 = -1;
        CPlayPinName.A1 = -1;
        CPlayPinName.A2 = -1;
        CPlayPinName.A3 = -1;
        CPlayPinName.A4 = -1;
        CPlayPinName.A5 = -1;
        CPlayPinName.A6 = -1;
        CPlayPinName.A7 = -1;
        CPlayPinName.A8 = -1;
        CPlayPinName.A9 = -1;
        CPlayPinName.D4 = -1;
        CPlayPinName.D5 = -1;
        CPlayPinName.D6 = -1;
        CPlayPinName.D7 = -1;
        CPlayPinName.D8 = -1;
        CPlayPinName.D13 = -1;
        CPlayPinName.IR_IN = -1;
        CPlayPinName.IR_OUT = -1;
        CPlayPinName.LED = -1;
        CPlayPinName.TX = -1;
        CPlayPinName.RX = -1;
        function init() {
            var v = CPlayPinName;
            for (var _i = 0, _a = Object.keys(v); _i < _a.length; _i++) {
                var k = _a[_i];
                var key = pxsim.getConfigKey("PIN_" + k);
                if (key != null) {
                    v[k] = pxsim.getConfig(key);
                }
            }
        }
        CPlayPinName.init = init;
    })(CPlayPinName = pxsim.CPlayPinName || (pxsim.CPlayPinName = {}));
    var DalBoard = /** @class */ (function (_super) {
        __extends(DalBoard, _super);
        function DalBoard() {
            var _this = _super.call(this) || this;
            _this.invertAccelerometerYAxis = true;
            CPlayPinName.init();
            _this._neopixelState = {};
            _this.bus.setNotify(1023 /* DEVICE_ID_NOTIFY */, 1022 /* DEVICE_ID_NOTIFY_ONE */);
            //components
            _this.storageState = new pxsim.StorageState();
            _this.builtinParts["neopixel"] = _this.neopixelState(CPlayPinName.D8);
            _this.builtinParts["buttonpair"] = _this.buttonState = new pxsim.CommonButtonState();
            _this.builtinParts["switch"] = _this.slideSwitchState = new pxsim.SlideSwitchState();
            _this.builtinParts["audio"] = _this.audioState = new pxsim.AudioState();
            _this.builtinParts["lightsensor"] = _this.lightSensorState = new pxsim.AnalogSensorState(17 /* DEVICE_ID_LIGHT_SENSOR */, 0, 255);
            _this.builtinParts["thermometer"] = _this.thermometerState = new pxsim.AnalogSensorState(8 /* DEVICE_ID_THERMOMETER */, -5, 50);
            _this.builtinParts["soundsensor"] = _this.microphoneState = new pxsim.AnalogSensorState(18 /* DEVICE_ID_TOUCH_SENSOR */ + 1, 0, 255);
            _this.builtinParts["capacitivesensor"] = _this.capacitiveSensorState = new pxsim.CapacitiveSensorState({
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                6: 4,
                9: 5,
                10: 6,
                12: 7
            });
            _this.builtinParts["accelerometer"] = _this.accelerometerState = new pxsim.AccelerometerState(pxsim.runtime);
            _this.builtinParts["edgeconnector"] = _this.edgeConnectorState = new pxsim.EdgeConnectorState({
                pins: [
                    pxsim.CPlayPinName.A0,
                    pxsim.CPlayPinName.A1,
                    pxsim.CPlayPinName.A2,
                    pxsim.CPlayPinName.A3,
                    pxsim.CPlayPinName.A4,
                    pxsim.CPlayPinName.A5,
                    pxsim.CPlayPinName.A6,
                    pxsim.CPlayPinName.A7,
                    pxsim.CPlayPinName.A8,
                    pxsim.CPlayPinName.A9,
                    pxsim.CPlayPinName.D4,
                    pxsim.CPlayPinName.D5,
                    pxsim.CPlayPinName.D6,
                    pxsim.CPlayPinName.D7,
                    pxsim.CPlayPinName.D8,
                    pxsim.CPlayPinName.D13,
                    pxsim.CPlayPinName.IR_IN,
                    pxsim.CPlayPinName.IR_OUT
                ]
            });
            _this.builtinParts["microservo"] = _this.edgeConnectorState;
            _this.builtinVisuals["microservo"] = function () { return new pxsim.visuals.MicroServoView(); };
            _this.builtinPartVisuals["microservo"] = function (xy) { return pxsim.visuals.mkMicroServoPart(xy); };
            _this.touchButtonState = new pxsim.TouchButtonState([
                pxsim.CPlayPinName.A1,
                pxsim.CPlayPinName.A2,
                pxsim.CPlayPinName.A3,
                pxsim.CPlayPinName.A4,
                pxsim.CPlayPinName.A5,
                pxsim.CPlayPinName.A6,
                pxsim.CPlayPinName.A7
            ]);
            _this.builtinParts["ir"] = _this.irState = new pxsim.InfraredState();
            return _this;
        }
        DalBoard.prototype.receiveMessage = function (msg) {
            if (!pxsim.runtime || pxsim.runtime.dead)
                return;
            switch (msg.type || "") {
                case "eventbus": {
                    var ev = msg;
                    this.bus.queue(ev.id, ev.eventid, ev.value);
                    break;
                }
                case "serial": {
                    var data = msg.data || "";
                    // TODO
                    break;
                }
                case "irpacket":
                    var irpacket = msg;
                    this.irState.receive(irpacket.packet);
                    break;
            }
        };
        DalBoard.prototype.initAsync = function (msg) {
            _super.prototype.initAsync.call(this, msg);
            var options = (msg.options || {});
            var boardDef = msg.boardDefinition;
            var cmpsList = msg.parts;
            var cmpDefs = msg.partDefinitions || {};
            var fnArgs = msg.fnArgs;
            var opts = {
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: "100%",
                maxHeight: "100%",
            };
            this.viewHost = new pxsim.visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: boardDef.visual,
                boardDef: boardDef
            }), opts);
            document.body.innerHTML = ""; // clear children
            document.body.appendChild(this.view = this.viewHost.getView());
            return Promise.resolve();
        };
        DalBoard.prototype.screenshotAsync = function (width) {
            return this.viewHost.screenshotAsync(width);
        };
        DalBoard.prototype.tryGetNeopixelState = function (pinId) {
            return this._neopixelState[pinId];
        };
        DalBoard.prototype.neopixelState = function (pinId) {
            var state = this._neopixelState[pinId];
            if (!state)
                state = this._neopixelState[pinId] = new pxsim.CommonNeoPixelState();
            return state;
        };
        DalBoard.prototype.defaultNeopixelPin = function () {
            return this.edgeConnectorState.getPin(CPlayPinName.D8);
        };
        DalBoard.prototype.getDefaultPitchPin = function () {
            return this.edgeConnectorState.getPin(CPlayPinName.D6);
        };
        return DalBoard;
    }(pxsim.CoreBoard));
    pxsim.DalBoard = DalBoard;
    function initRuntimeWithDalBoard() {
        pxsim.U.assert(!pxsim.runtime.board);
        var b = new DalBoard();
        pxsim.runtime.board = b;
        pxsim.runtime.postError = function (e) {
            // TODO
            pxsim.runtime.updateDisplay();
        };
    }
    pxsim.initRuntimeWithDalBoard = initRuntimeWithDalBoard;
    if (!pxsim.initCurrentRuntime) {
        pxsim.initCurrentRuntime = initRuntimeWithDalBoard;
    }
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        var MB_STYLE = "\n        svg.sim {\n            box-sizing: border-box;\n            width: 100%;\n            height: 100%;\n            display: block;\n        }\n        svg.sim.grayscale {\n            -moz-filter: grayscale(1);\n            -webkit-filter: grayscale(1);\n            filter: grayscale(1);\n        }\n        .sim-button {\n            pointer-events: none;\n        }\n\n        .sim-button-outer {\n            cursor: pointer;\n        }\n        .sim-button-outer:hover {\n            stroke-width: 1px;\n            stroke: orange !important;\n        }\n        .sim-button-nut {\n            fill:#704A4A;\n            pointer-events:none;\n        }\n        .sim-button-nut:hover {\n            stroke:1px solid #704A4A;\n        }\n        .sim-pin-touch:hover {\n            stroke:#D4AF37;\n            stroke-width:1px;\n        }\n\n        .sim-pin-touch.touched:hover {\n            stroke:darkorange;\n        }\n\n        .sim-led-back:hover {\n            stroke:#fff;\n            stroke-width:3px;\n        }\n        .sim-led:hover {\n            stroke:#ff7f7f;\n            stroke-width:3px;\n        }\n\n        .sim-systemled {\n            fill:#333;\n            stroke:#555;\n            stroke-width: 1px;\n        }\n\n        .sim-light-level-button {\n            stroke:#f1c40f;\n            stroke-width: 1px;\n        }\n\n        .sim-pin-level-button {\n            stroke:darkorange;\n            stroke-width: 1px;\n        }\n\n        .sim-sound-level-button {\n            stroke:#7f8c8d;\n            stroke-width: 1px;\n        }\n\n        .sim-antenna {\n            stroke:#555;\n            stroke-width: 2px;\n        }\n\n        .sim-text {\n            font-family:\"Lucida Console\", Monaco, monospace;\n            font-size:8px;\n            fill:#fff;\n            pointer-events: none; user-select: none;\n        }\n        .sim-text.small {\n            font-size:6px;\n        }\n        .sim-text.inverted {\n            fill:#000;\n        }\n\n        .sim-text-pin {\n            font-family:\"Lucida Console\", Monaco, monospace;\n            font-size:5px;\n            fill:#fff;\n            pointer-events: none;\n        }\n\n        .sim-thermometer {\n            stroke:#aaa;\n            stroke-width: 1px;\n        }\n\n        #rgbledcircle:hover {\n            r:8px;\n        }\n\n        #SLIDE_HOVER {\n            cursor: pointer;\n        }\n        .sim-slide-switch:hover #SLIDE_HOVER {\n            stroke:orange !important;\n            stroke-width: 1px;\n        }\n\n        .sim-slide-switch-inner.on {\n            fill:#ff0000 !important;\n        }\n\n        /* animations */\n        .sim-theme-glow {\n            animation-name: sim-theme-glow-animation;\n            animation-timing-function: ease-in-out;\n            animation-direction: alternate;\n            animation-iteration-count: infinite;\n            animation-duration: 1.25s;\n        }\n        @keyframes sim-theme-glow-animation {\n            from { opacity: 1; }\n            to   { opacity: 0.75; }\n        }\n\n        .sim-flash {\n            animation-name: sim-flash-animation;\n            animation-duration: 0.1s;\n        }\n\n        @keyframes sim-flash-animation {\n            from { fill: yellow; }\n            to   { fill: default; }\n        }\n\n        .sim-flash-stroke {\n            animation-name: sim-flash-stroke-animation;\n            animation-duration: 0.4s;\n            animation-timing-function: ease-in;\n        }\n\n        @keyframes sim-flash-stroke-animation {\n            from { stroke: yellow; }\n            to   { stroke: default; }\n        }\n\n\n        .sim-sound-stroke {\n            animation-name: sim-sound-stroke-animation;\n            animation-duration: 0.4s;\n        }\n\n        @keyframes sim-sound-stroke-animation {\n            from { stroke: yellow; }\n            to   { stroke: default; }\n        }\n\n        /* wireframe */\n        .sim-wireframe * {\n            fill: none;\n            stroke: black;\n        }\n        .sim-wireframe .sim-display,\n        .sim-wireframe .sim-led,\n        .sim-wireframe .sim-led-back,\n        .sim-wireframe .sim-head,\n        .sim-wireframe .sim-theme,\n        .sim-wireframe .sim-button-group,\n        .sim-wireframe .sim-button-label,\n        .sim-wireframe .sim-button,\n        .sim-wireframe .sim-text-pin\n        {\n            visibility: hidden;\n        }\n        .sim-wireframe .sim-label\n        {\n            stroke: none;\n            fill: #777;\n        }\n        .sim-wireframe .sim-board {\n            stroke-width: 2px;\n        }\n        *:focus {\n            outline: none;\n        }\n        .sim-button-outer:focus,\n        .sim-slide-switch:focus,\n        .sim-pin:focus,\n        .sim-thermometer:focus,\n        .sim-button-group:focus .sim-button-outer,\n        .sim-light-level-button:focus,\n        .sim-sound-level-button:focus {\n            stroke: #4D90FE;\n            stroke-width: 2px !important;\n         }\n        .no-drag {\n            user-drag: none;\n            user-select: none;\n            -moz-user-select: none;\n            -webkit-user-drag: none;\n            -webkit-user-select: none;\n            -ms-user-select: none;\n        }\n    ";
        var pinNames = [
            { 'name': "PIN_A0", 'touch': 0, 'text': null, tooltip: "A0 - Speaker" },
            { 'name': "PIN_A1", 'touch': 1, 'text': null, tooltip: "~A1" },
            { 'name': "PIN_A2", 'touch': 1, 'text': null, tooltip: "~A2" },
            { 'name': "PIN_A3", 'touch': 1, 'text': null, tooltip: "~A3" },
            { 'name': "PIN_A4", 'touch': 1, 'text': null, tooltip: "A4 - SCL" },
            { 'name': "PIN_A5", 'touch': 1, 'text': null, tooltip: "A5 - SDA" },
            { 'name': "PIN_A6", 'touch': 1, 'text': null, tooltip: "A6 - RX" },
            { 'name': "PIN_A7", 'touch': 1, 'text': null, tooltip: "A7 - TX" },
            { 'name': "GND_0", 'touch': 0, 'text': null, tooltip: "Ground" },
            { 'name': "GND_1", 'touch': 0, 'text': null, tooltip: "Ground" },
            { 'name': "GND_2", 'touch': 0, 'text': null, tooltip: "Ground" },
            { 'name': "VBATT", 'touch': 0, 'text': null, tooltip: "Battery power" },
            { 'name': "PWR_0", 'touch': 0, 'text': null, tooltip: "+3.3V" },
            { 'name': "PWR_1", 'touch': 0, 'text': null, tooltip: "+3.3V" },
            { 'name': "PWR_2", 'touch': 0, 'text': null, tooltip: "+3.3V" }
        ];
        var MB_WIDTH = 180.09375;
        var MB_HEIGHT = 179.22874;
        visuals.themes = ["#3ADCFE"].map(function (accent) {
            return {
                accent: accent,
                pin: "#D4AF37",
                pinTouched: "#FFA500",
                pinActive: "#FF5500",
                ledOn: "#ff7777",
                ledOff: "#fff",
                buttonOuter: "#979797",
                buttonUps: ["#000", "#000", "#000"],
                buttonDown: "#FFA500",
                virtualButtonDown: "#FFA500",
                virtualButtonOuter: "#333",
                virtualButtonUp: "#FFF",
                lightLevelOn: "yellow",
                lightLevelOff: "#555",
                soundLevelOn: "#7f8c8d",
                soundLevelOff: "#555",
                gestureButtonOn: "#FFA500",
                gestureButtonOff: "#B4009E"
            };
        });
        function randomTheme() {
            return visuals.themes[Math.floor(Math.random() * visuals.themes.length)];
        }
        visuals.randomTheme = randomTheme;
        var CircuitPlaygroundBoardSvg = /** @class */ (function () {
            function CircuitPlaygroundBoardSvg(props) {
                var _this = this;
                this.props = props;
                this.pinNmToCoord = {};
                this.lastFlashTime = 0;
                this.lastIrReceiverFlash = 0;
                this.lastIrTransmitterFlash = 0;
                this.fixPinIds();
                this.buildDom();
                if (props && props.wireframe)
                    pxsim.U.addClass(this.element, "sim-wireframe");
                if (props && props.theme)
                    this.updateTheme();
                if (props && props.runtime) {
                    this.board = this.props.runtime.board;
                    this.board.updateSubscribers.push(function () { return _this.updateState(); });
                    this.updateState();
                    this.attachEvents();
                }
            }
            CircuitPlaygroundBoardSvg.prototype.fixPinIds = function () {
                for (var _i = 0, pinNames_1 = pinNames; _i < pinNames_1.length; _i++) {
                    var pn = pinNames_1[_i];
                    var key = pxsim.getConfigKey(pn.name);
                    if (key != null)
                        pn.id = pxsim.getConfig(key);
                }
            };
            CircuitPlaygroundBoardSvg.prototype.getView = function () {
                return {
                    el: this.element,
                    y: 0,
                    x: 0,
                    w: MB_WIDTH,
                    h: MB_HEIGHT
                };
            };
            CircuitPlaygroundBoardSvg.prototype.getCoord = function (pinNm) {
                return this.pinNmToCoord[pinNm];
            };
            CircuitPlaygroundBoardSvg.prototype.highlightPin = function (pinNm) {
                //TODO: for instructions
            };
            CircuitPlaygroundBoardSvg.prototype.getPinDist = function () {
                return 10;
            };
            CircuitPlaygroundBoardSvg.prototype.recordPinCoords = function () {
                var _this = this;
                pinNames.forEach(function (pin, i) {
                    var nm = pin.name;
                    var p = _this.pins[i];
                    var r = p.getBoundingClientRect();
                    _this.pinNmToCoord[nm] = [r.left + r.width / 2, r.top + r.height / 2];
                });
            };
            CircuitPlaygroundBoardSvg.prototype.updateTheme = function () {
                var theme = this.props.theme;
                pxsim.svg.fills(this.buttonsOuter, theme.buttonOuter);
                pxsim.svg.fill(this.buttons[0], theme.buttonUps[0]);
                pxsim.svg.fill(this.buttons[1], theme.buttonUps[1]);
                pxsim.svg.fill(this.buttons[2], theme.buttonUps[2]);
                if (this.shakeButtonGroup) {
                    pxsim.svg.fill(this.shakeButtonGroup, this.props.theme.gestureButtonOff);
                }
                pxsim.svg.setGradientColors(this.lightLevelGradient, theme.lightLevelOn, theme.lightLevelOff);
                pxsim.svg.setGradientColors(this.thermometerGradient, theme.ledOff, theme.ledOn);
                pxsim.svg.setGradientColors(this.soundLevelGradient, theme.soundLevelOn, theme.soundLevelOff);
                for (var id in this.pinControls) {
                    if (this.pinControls[id])
                        this.pinControls[id].updateTheme();
                }
            };
            CircuitPlaygroundBoardSvg.prototype.updateState = function () {
                var state = this.board;
                if (!state)
                    return;
                var theme = this.props.theme;
                var bpState = state.buttonState;
                var buttons = bpState.buttons;
                pxsim.svg.fill(this.buttons[0], buttons[0].pressed ? theme.buttonDown : theme.buttonUps[0]);
                pxsim.svg.fill(this.buttons[1], buttons[1].pressed ? theme.buttonDown : theme.buttonUps[1]);
                this.updatePins();
                this.updateTilt();
                this.updateRedLED();
                this.updateNeoPixels();
                this.updateSwitch();
                this.updateSound();
                this.updateLightLevel();
                this.updateSoundLevel();
                this.updateButtonAB();
                this.updateGestures();
                this.updateTemperature();
                this.updateInfrared();
                if (!pxsim.runtime || pxsim.runtime.dead)
                    pxsim.U.addClass(this.element, "grayscale");
                else
                    pxsim.U.removeClass(this.element, "grayscale");
            };
            CircuitPlaygroundBoardSvg.prototype.flashSystemLed = function () {
                if (!this.systemLed)
                    this.systemLed = pxsim.svg.child(this.g, "circle", { class: "sim-systemled", cx: 75, cy: MB_HEIGHT - 171, r: 2 });
                var now = Date.now();
                if (now - this.lastFlashTime > 150) {
                    this.lastFlashTime = now;
                    pxsim.svg.animate(this.systemLed, "sim-flash");
                }
            };
            CircuitPlaygroundBoardSvg.prototype.flashIrReceiver = function () {
                if (!this.irReceiver)
                    this.irReceiver = this.element.getElementById("path2054");
                var now = Date.now();
                if (now - this.lastIrReceiverFlash > 200) {
                    this.lastIrReceiverFlash = now;
                    pxsim.svg.animate(this.irReceiver, 'sim-flash-stroke');
                }
            };
            CircuitPlaygroundBoardSvg.prototype.flashIrTransmitter = function () {
                if (!this.irTransmitter)
                    this.irTransmitter = this.element.getElementById("path2062");
                var now = Date.now();
                if (now - this.lastIrTransmitterFlash > 200) {
                    this.lastIrTransmitterFlash = now;
                    pxsim.svg.animate(this.irTransmitter, 'sim-flash-stroke');
                }
            };
            CircuitPlaygroundBoardSvg.prototype.updateInfrared = function () {
                var state = this.board;
                if (!state)
                    return;
                if (state.irState.packetReceived) {
                    state.irState.packetReceived = false;
                    this.flashIrReceiver();
                }
            };
            CircuitPlaygroundBoardSvg.prototype.updateRedLED = function () {
                var state = this.board;
                if (!state)
                    return;
                var ledPin = state.edgeConnectorState.getPin(pxsim.CPlayPinName.D13);
                var ledOn = ledPin.value > 0;
                if (!this.redLED)
                    this.redLED = this.element.getElementById("SERIAL_LED");
                var fillColor = ledOn ? "#FF0000" : "#000000";
                pxsim.svg.fill(this.redLED, fillColor);
            };
            CircuitPlaygroundBoardSvg.prototype.updateNeoPixels = function () {
                var state = this.board;
                if (!state)
                    return;
                var neopixelState = state.tryGetNeopixelState(state.defaultNeopixelPin().id);
                if (!neopixelState)
                    return;
                var n = Math.min(10, neopixelState.length);
                for (var i = 0; i < n; i++) {
                    var rgb = neopixelState.pixelColor(i);
                    var p_inner = this.element.getElementById("LED" + i);
                    if (!p_inner)
                        continue;
                    if (!rgb || (rgb.length == 3 && rgb[0] == 0 && rgb[1] == 0 && rgb[2] == 0)) {
                        // Clear the pixel
                        pxsim.svg.fill(p_inner, "rgb(200,200,200)");
                        pxsim.svg.filter(p_inner, null);
                        p_inner.style.stroke = "none";
                        continue;
                    }
                    var hsl = visuals.rgbToHsl([rgb[0], rgb[1], rgb[2]]);
                    var h = hsl[0], s = hsl[1], l = hsl[2];
                    var lx = Math.max(l * 1.3, 85);
                    // at least 10% luminosity
                    l = l * 90 / 100 + 10;
                    p_inner.style.stroke = "hsl(" + h + ", " + s + "%, " + Math.min(l * 3, 75) + "%)";
                    p_inner.style.strokeWidth = "1.5";
                    pxsim.svg.fill(p_inner, "hsl(" + h + ", " + s + "%, " + lx + "%)");
                    pxsim.svg.filter(p_inner, "url(#neopixelglow)");
                }
            };
            CircuitPlaygroundBoardSvg.prototype.updateSwitch = function () {
                var _this = this;
                var state = this.board;
                if (!state || !state.slideSwitchState)
                    return;
                var slideSwitchState = state.slideSwitchState;
                if (!this.slideSwitch) {
                    this.slideSwitch = this.element.getElementById("SLIDE");
                    pxsim.U.addClass(this.slideSwitch, "sim-slide-switch");
                    this.slideSwitch.addEventListener(pxsim.pointerEvents.up, function (ev) { return _this.slideSwitchHandler(); });
                    pxsim.accessibility.enableKeyboardInteraction(this.slideSwitch, null, function () { return _this.slideSwitchHandler(); });
                    pxsim.accessibility.makeFocusable(this.slideSwitch);
                    this.renderSwitchAria();
                    this.element.getElementById("SLIDE_HOUSING").addEventListener(pxsim.pointerEvents.up, function (ev) { return _this.slideSwitchHandler(); });
                    this.element.getElementById("SLIDE_INNER").addEventListener(pxsim.pointerEvents.up, function (ev) { return _this.slideSwitchHandler(); });
                }
            };
            CircuitPlaygroundBoardSvg.prototype.slideSwitchHandler = function () {
                var state = this.board;
                var slideSwitchState = state.slideSwitchState;
                slideSwitchState.setState(!slideSwitchState.isLeft());
                var switchSlide = this.element.getElementById("SLIDE_INNER");
                pxsim.U.addClass(switchSlide, "sim-slide-switch-inner");
                if (slideSwitchState.isLeft()) {
                    pxsim.U.addClass(switchSlide, "on");
                    switchSlide.setAttribute("transform", "translate(-5,0)");
                }
                else {
                    pxsim.U.removeClass(switchSlide, "on");
                    switchSlide.removeAttribute("transform");
                }
                this.renderSwitchAria();
            };
            CircuitPlaygroundBoardSvg.prototype.renderSwitchAria = function () {
                var status = this.board.slideSwitchState.isLeft() ? "On" : "Off";
                pxsim.accessibility.setAria(this.slideSwitch, "button", "On/Off Switch. Current state : " + status);
                this.slideSwitch.setAttribute("aria-pressed", this.board.slideSwitchState.isLeft().toString());
            };
            CircuitPlaygroundBoardSvg.prototype.updateSound = function () {
                var state = this.board;
                if (!state || !state.audioState)
                    return;
                var audioState = state.audioState;
                // FIXME
                // let soundBoard = this.element.getElementById('g4656') as SVGGElement;
                // if (audioState.isPlaying()) {
                //     svg.addClass(soundBoard, "sim-sound-stroke");
                // } else {
                //     svg.removeClass(soundBoard, "sim-sound-stroke");
                // }
            };
            CircuitPlaygroundBoardSvg.prototype.updatePins = function () {
                var _this = this;
                var state = this.board;
                if (!state || !state.edgeConnectorState || !state.capacitiveSensorState)
                    return;
                state.edgeConnectorState.pins.forEach(function (pin, i) { return _this.updatePin(pin, i); });
            };
            CircuitPlaygroundBoardSvg.prototype.updatePin = function (pin, index) {
                if (!pin || !this.pins[index])
                    return;
                if (pin.used) {
                    if (this.pinControls[pin.id] === undefined) {
                        var pinName = pinNames.filter(function (a) { return a.id === pin.id; })[0];
                        if (pinName) {
                            this.pinControls[pin.id] = new visuals.AnalogPinControl(this, this.defs, pin.id, pinName.name);
                        }
                        else {
                            // TODO: Surface pin controls for sensor pins in some way?
                            this.pinControls[pin.id] = null;
                        }
                    }
                    if (this.pinControls[pin.id]) {
                        this.pinControls[pin.id].updateValue();
                    }
                }
            };
            CircuitPlaygroundBoardSvg.prototype.updateLightLevel = function () {
                var _this = this;
                var state = this.board;
                if (!state || !state.lightSensorState.sensorUsed)
                    return;
                if (!this.lightLevelButton) {
                    var gid = "gradient-light-level";
                    this.lightLevelGradient = pxsim.svg.linearGradient(this.defs, gid);
                    var cy_1 = 15;
                    var r_1 = 10;
                    this.lightLevelButton = pxsim.svg.child(this.g, "circle", {
                        cx: "12px", cy: cy_1 + "px", r: r_1 + "px",
                        class: 'sim-light-level-button no-drag',
                        fill: "url(#" + gid + ")"
                    });
                    var pt_1 = this.element.createSVGPoint();
                    pxsim.svg.buttonEvents(this.lightLevelButton, 
                    // move
                    function (ev) {
                        var pos = pxsim.svg.cursorPoint(pt_1, _this.element, ev);
                        var rs = r_1 / 2;
                        var level = Math.max(0, Math.min(255, Math.floor((pos.y - (cy_1 - rs)) / (2 * rs) * 255)));
                        if (level != _this.board.lightSensorState.getLevel()) {
                            _this.board.lightSensorState.setLevel(level);
                            _this.applyLightLevel();
                        }
                    }, 
                    // start
                    function (ev) { }, 
                    // stop
                    function (ev) { }, 
                    // keydown
                    function (ev) {
                        var charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode;
                        if (charCode === 40 || charCode === 37) { // Down/Left arrow
                            if (_this.board.lightSensorState.getLevel() === 0) {
                                _this.board.lightSensorState.setLevel(255);
                            }
                            else {
                                _this.board.lightSensorState.setLevel(_this.board.lightSensorState.getLevel() - 1);
                            }
                            _this.applyLightLevel();
                        }
                        else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                            if (_this.board.lightSensorState.getLevel() === 255) {
                                _this.board.lightSensorState.setLevel(0);
                            }
                            else {
                                _this.board.lightSensorState.setLevel(_this.board.lightSensorState.getLevel() + 1);
                            }
                            _this.applyLightLevel();
                        }
                    });
                    this.lightLevelText = pxsim.svg.child(this.g, "text", { x: 23, y: cy_1 + r_1 - 15, text: '', class: 'sim-text' });
                    this.updateTheme();
                    pxsim.accessibility.makeFocusable(this.lightLevelButton);
                    pxsim.accessibility.setAria(this.lightLevelButton, "slider", "Light level");
                    this.lightLevelButton.setAttribute("aria-valuemin", "0");
                    this.lightLevelButton.setAttribute("aria-valuemax", "255");
                    this.lightLevelButton.setAttribute("aria-orientation", "vertical");
                    this.lightLevelButton.setAttribute("aria-valuenow", "128");
                }
                pxsim.svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(state.lightSensorState.getLevel() * 100 / 255))) + '%');
                this.lightLevelText.textContent = state.lightSensorState.getLevel().toString();
            };
            CircuitPlaygroundBoardSvg.prototype.applyLightLevel = function () {
                var lv = this.board.lightSensorState.getLevel();
                pxsim.svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(lv * 100 / 255))) + '%');
                this.lightLevelText.textContent = lv.toString();
                this.lightLevelButton.setAttribute("aria-valuenow", lv.toString());
                pxsim.accessibility.setLiveContent(lv.toString());
            };
            CircuitPlaygroundBoardSvg.prototype.updateSoundLevel = function () {
                var _this = this;
                var state = this.board;
                if (!state || !state.microphoneState.sensorUsed)
                    return;
                if (!this.soundLevelButton) {
                    var gid = "gradient-sound-level";
                    this.soundLevelGradient = pxsim.svg.linearGradient(this.defs, gid);
                    var cy_2 = 165;
                    var r_2 = 10;
                    this.soundLevelButton = pxsim.svg.child(this.g, "circle", {
                        cx: "12px", cy: cy_2 + "px", r: r_2 + "px",
                        class: 'sim-sound-level-button no-drag',
                        fill: "url(#" + gid + ")"
                    });
                    var pt_2 = this.element.createSVGPoint();
                    pxsim.svg.buttonEvents(this.soundLevelButton, 
                    // move
                    function (ev) {
                        var pos = pxsim.svg.cursorPoint(pt_2, _this.element, ev);
                        var rs = r_2 / 2;
                        var level = Math.max(0, Math.min(255, Math.floor((pos.y - (cy_2 - rs)) / (2 * rs) * 255)));
                        if (level != _this.board.microphoneState.getLevel()) {
                            _this.board.microphoneState.setLevel(255 - level);
                            _this.applySoundLevel();
                        }
                    }, 
                    // start
                    function (ev) { }, 
                    // stop
                    function (ev) { }, 
                    // keydown
                    function (ev) {
                        var charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode;
                        if (charCode === 40 || charCode === 37) { // Down/Left arrow
                            if (_this.board.microphoneState.getLevel() === 0) {
                                _this.board.microphoneState.setLevel(255);
                            }
                            else {
                                _this.board.microphoneState.setLevel(_this.board.microphoneState.getLevel() - 1);
                            }
                            _this.applySoundLevel();
                        }
                        else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                            if (_this.board.microphoneState.getLevel() === 255) {
                                _this.board.microphoneState.setLevel(0);
                            }
                            else {
                                _this.board.microphoneState.setLevel(_this.board.microphoneState.getLevel() + 1);
                            }
                            _this.applySoundLevel();
                        }
                    });
                    this.soundLevelText = pxsim.svg.child(this.g, "text", { x: 23, y: cy_2 + r_2 - 3, text: '', class: 'sim-text' });
                    this.updateTheme();
                    pxsim.accessibility.makeFocusable(this.soundLevelButton);
                    pxsim.accessibility.setAria(this.soundLevelButton, "slider", "Noise level");
                    this.soundLevelButton.setAttribute("aria-valuemin", "0");
                    this.soundLevelButton.setAttribute("aria-valuemax", "255");
                    this.soundLevelButton.setAttribute("aria-orientation", "vertical");
                    this.soundLevelButton.setAttribute("aria-valuenow", "128");
                }
                pxsim.svg.setGradientValue(this.soundLevelGradient, Math.min(100, Math.max(0, Math.floor((255 - state.microphoneState.getLevel()) * 100 / 255))) + '%');
                this.soundLevelText.textContent = state.microphoneState.getLevel().toString();
            };
            CircuitPlaygroundBoardSvg.prototype.applySoundLevel = function () {
                var lv = this.board.microphoneState.getLevel();
                pxsim.svg.setGradientValue(this.soundLevelGradient, Math.min(100, Math.max(0, Math.floor((255 - lv) * 100 / 255))) + '%');
                this.soundLevelText.textContent = lv.toString();
                this.soundLevelButton.setAttribute("aria-valuenow", lv.toString());
                pxsim.accessibility.setLiveContent(lv.toString());
            };
            CircuitPlaygroundBoardSvg.prototype.updateTemperature = function () {
                var _this = this;
                var state = this.board;
                if (!state || !state.thermometerState || !state.thermometerState.sensorUsed)
                    return;
                // Celsius
                var tmin = -5;
                var tmax = 50;
                if (!this.thermometer) {
                    var gid = "gradient-thermometer";
                    this.thermometerGradient = pxsim.svg.linearGradient(this.defs, gid);
                    this.thermometer = pxsim.svg.child(this.g, "rect", {
                        class: "sim-thermometer no-drag",
                        x: 170,
                        y: 3,
                        width: 7,
                        height: 32,
                        rx: 2, ry: 2,
                        fill: "url(#" + gid + ")"
                    });
                    this.thermometerText = pxsim.svg.child(this.g, "text", { class: 'sim-text', x: 148, y: 10 });
                    this.updateTheme();
                    var pt_3 = this.element.createSVGPoint();
                    pxsim.svg.buttonEvents(this.thermometer, 
                    // move
                    function (ev) {
                        var cur = pxsim.svg.cursorPoint(pt_3, _this.element, ev);
                        var t = Math.max(0, Math.min(1, (35 - cur.y) / 30));
                        state.thermometerState.setLevel(Math.floor(tmin + t * (tmax - tmin)));
                        _this.updateTemperature();
                    }, 
                    // start
                    function (ev) { }, 
                    // stop
                    function (ev) { }, 
                    // keydown
                    function (ev) {
                        var charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode;
                        if (charCode === 40 || charCode === 37) { // Down/Left arrow
                            if (state.thermometerState.getLevel() === -5) {
                                state.thermometerState.setLevel(50);
                            }
                            else {
                                state.thermometerState.setLevel(state.thermometerState.getLevel() - 1);
                            }
                            _this.updateTemperature();
                        }
                        else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                            if (state.thermometerState.getLevel() === 50) {
                                state.thermometerState.setLevel(-5);
                            }
                            else {
                                state.thermometerState.setLevel(state.thermometerState.getLevel() + 1);
                            }
                            _this.updateTemperature();
                        }
                    });
                    pxsim.accessibility.makeFocusable(this.thermometer);
                    pxsim.accessibility.setAria(this.thermometer, "slider", "Thermometer");
                    this.thermometer.setAttribute("aria-valuemin", tmin.toString());
                    this.thermometer.setAttribute("aria-valuemax", tmax.toString());
                    this.thermometer.setAttribute("aria-orientation", "vertical");
                }
                var t = Math.max(tmin, Math.min(tmax, state.thermometerState.getLevel()));
                var per = Math.floor((state.thermometerState.getLevel() - tmin) / (tmax - tmin) * 100);
                pxsim.svg.setGradientValue(this.thermometerGradient, 100 - per + "%");
                var unit = "°C";
                if (state.thermometerUnitState == pxsim.TemperatureUnit.Fahrenheit) {
                    unit = "°F";
                    t = ((t * 18) / 10 + 32) >> 0;
                }
                this.thermometerText.textContent = t + unit;
                this.thermometer.setAttribute("aria-valuenow", t.toString());
                this.thermometer.setAttribute("aria-valuetext", t + unit);
                pxsim.accessibility.setLiveContent(t + unit);
            };
            CircuitPlaygroundBoardSvg.prototype.updateButtonAB = function () {
                var state = this.board;
                if (state.buttonState.usesButtonAB) {
                    this.buttonsOuter[2].style.visibility = "visible";
                    this.buttons[2].style.visibility = "visible";
                    this.updateTheme();
                }
            };
            CircuitPlaygroundBoardSvg.prototype.updateGestures = function () {
                var _this = this;
                var state = this.board;
                if (state.accelerometerState.useShake && !this.shakeButtonGroup) {
                    var btnr = 2;
                    var width = 22;
                    var height = 10;
                    var btng_1 = pxsim.svg.child(this.g, "g", { class: "sim-button-group" });
                    this.shakeButtonGroup = btng_1;
                    this.shakeText = pxsim.svg.child(this.g, "text", { x: 81, y: 32, class: "sim-text small" });
                    this.shakeText.textContent = "SHAKE";
                    pxsim.svg.child(btng_1, "rect", { class: "sim-button-outer", x: 79, y: 25, rx: btnr, ry: btnr, width: width, height: height });
                    pxsim.svg.fill(btng_1, this.props.theme.gestureButtonOff);
                    pxsim.pointerEvents.down.forEach(function (evid) { return _this.shakeButtonGroup.addEventListener(evid, function (ev) {
                        var state = _this.board;
                        pxsim.svg.fill(btng_1, _this.props.theme.gestureButtonOn);
                        pxsim.U.addClass(_this.shakeText, "inverted");
                    }); });
                    this.shakeButtonGroup.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                        var state = _this.board;
                        pxsim.svg.fill(btng_1, _this.props.theme.gestureButtonOff);
                        pxsim.U.removeClass(_this.shakeText, "inverted");
                    });
                    this.shakeButtonGroup.addEventListener(pxsim.pointerEvents.up, function (ev) {
                        var state = _this.board;
                        pxsim.svg.fill(btng_1, _this.props.theme.gestureButtonOff);
                        _this.board.bus.queue(13 /* DEVICE_ID_GESTURE */, 11); // GESTURE_SHAKE
                        pxsim.U.removeClass(_this.shakeText, "inverted");
                    });
                    pxsim.accessibility.makeFocusable(this.shakeButtonGroup);
                    pxsim.accessibility.enableKeyboardInteraction(this.shakeButtonGroup, function () {
                        _this.board.bus.queue(13 /* DEVICE_ID_GESTURE */, 11);
                    });
                    pxsim.accessibility.setAria(this.shakeButtonGroup, "button", "Shake the board");
                }
            };
            CircuitPlaygroundBoardSvg.prototype.updateTilt = function () {
                if (this.props.disableTilt)
                    return;
                var state = this.board;
                if (!state || !state.accelerometerState.accelerometer.isActive)
                    return;
                var x = state.accelerometerState.accelerometer.getX();
                var y = state.accelerometerState.accelerometer.getY();
                var af = 8 / 1023;
                var s = 1 - Math.min(0.1, Math.pow(Math.max(Math.abs(x), Math.abs(y)) / 1023, 2) / 35);
                this.element.style.transform = "perspective(30em) rotateX(" + y * af + "deg) rotateY(" + x * af + "deg) scale(" + s + ", " + s + ")";
                this.element.style.perspectiveOrigin = "50% 50% 50%";
                this.element.style.perspective = "30em";
            };
            CircuitPlaygroundBoardSvg.prototype.buildDom = function () {
                var _this = this;
                this.element = new DOMParser().parseFromString(visuals.BOARD_SVG, "image/svg+xml").querySelector("svg");
                pxsim.svg.hydrate(this.element, {
                    "version": "1.0",
                    "viewBox": "0 0 " + MB_WIDTH + " " + MB_HEIGHT,
                    "class": "sim",
                    "x": "0px",
                    "y": "0px",
                    "width": MB_WIDTH + "px",
                    "height": MB_HEIGHT + "px",
                });
                this.style = pxsim.svg.child(this.element, "style", {});
                this.style.textContent = MB_STYLE;
                this.defs = pxsim.svg.child(this.element, "defs", {});
                this.g = pxsim.svg.elt("g");
                this.element.appendChild(this.g);
                // filters
                var glow = pxsim.svg.child(this.defs, "filter", { id: "filterglow", x: "-5%", y: "-5%", width: "120%", height: "120%" });
                pxsim.svg.child(glow, "feGaussianBlur", { stdDeviation: "5", result: "glow" });
                var merge = pxsim.svg.child(glow, "feMerge", {});
                for (var i = 0; i < 3; ++i)
                    pxsim.svg.child(merge, "feMergeNode", { in: "glow" });
                var neopixelglow = pxsim.svg.child(this.defs, "filter", { id: "neopixelglow", x: "-300%", y: "-300%", width: "600%", height: "600%" });
                pxsim.svg.child(neopixelglow, "feGaussianBlur", { stdDeviation: "4.3", result: "coloredBlur" });
                var neopixelmerge = pxsim.svg.child(neopixelglow, "feMerge", {});
                pxsim.svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" });
                pxsim.svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" });
                pxsim.svg.child(neopixelmerge, "feMergeNode", { in: "SourceGraphic" });
                var neopixelState = pxsim.board().neopixelState;
                if (neopixelState) {
                    for (var i = 0; i < neopixelState.length; i++) {
                        // let p_outer = svg.title(this.element.getElementById(`LED${i}_OUTER`) as SVGPathElement, "NeoPixel " + i);
                        var p_inner = pxsim.svg.title(this.element.getElementById("LED" + i), "NeoPixel " + i);
                    }
                }
                var btnids = ["BTN_A", "BTN_B"];
                this.buttonsOuter = btnids.map(function (n) {
                    var btn = _this.element.getElementById(n + "_OUTER");
                    var label = "";
                    if (n === "BTN_A") {
                        label = "A";
                    }
                    else {
                        label = "B";
                    }
                    pxsim.accessibility.makeFocusable(btn);
                    pxsim.accessibility.setAria(btn, "button", label);
                    return btn;
                });
                this.buttonsOuter.forEach(function (b) { return pxsim.U.addClass(b, "sim-button-outer"); });
                this.buttons = btnids.map(function (n) { return _this.element.getElementById(n + "_INNER"); });
                this.buttons.forEach(function (b) { return pxsim.U.addClass(b, "sim-button"); });
                this.pins = pinNames.map(function (pin, i) {
                    var n = pin.name;
                    var p = _this.element.getElementById(n);
                    if (p) {
                        pxsim.U.addClass(p, "sim-pin");
                        if (pin.tooltip)
                            pxsim.svg.hydrate(p, { title: pin.tooltip });
                    }
                    return p;
                });
                this.pinControls = {};
                // BTN A+B
                var outerBtn = function (left, top, label) {
                    var button = _this.mkBtn(left, top, label);
                    _this.buttonsOuter.push(button.outer);
                    _this.buttons.push(button.inner);
                    return button;
                };
                var ab = outerBtn(165, MB_HEIGHT - 15, "A+B");
                var abtext = pxsim.svg.child(ab.outer, "text", { x: 163, y: MB_HEIGHT - 18, class: "sim-text" });
                abtext.textContent = "A+B";
                this.buttonsOuter[2].style.visibility = "hidden";
                this.buttons[2].style.visibility = "hidden";
            };
            CircuitPlaygroundBoardSvg.prototype.mkBtn = function (left, top, label) {
                var btnr = 2;
                var btnw = 10;
                var btnn = 1.6;
                var btnnm = 2;
                var btnb = 3;
                var btng = pxsim.svg.child(this.g, "g", { class: "sim-button-group" });
                pxsim.accessibility.makeFocusable(btng);
                pxsim.accessibility.setAria(btng, "button", label);
                pxsim.svg.child(btng, "rect", { class: "sim-button-outer", x: left, y: top, rx: btnr, ry: btnr, width: btnw, height: btnw });
                var outer = btng;
                var inner = pxsim.svg.child(btng, "circle", {
                    class: "sim-button",
                    cx: left + btnw / 2,
                    cy: top + btnw / 2,
                    r: btnb
                });
                return { outer: outer, inner: inner };
            };
            CircuitPlaygroundBoardSvg.prototype.attachEvents = function () {
                var _this = this;
                pxsim.Runtime.messagePosted = function (msg) {
                    switch (msg.type || "") {
                        case "serial":
                            _this.flashSystemLed();
                            break;
                        case "irpacket":
                            _this.flashIrTransmitter();
                            break;
                    }
                };
                var tiltDecayer = 0;
                this.element.addEventListener(pxsim.pointerEvents.move, function (ev) {
                    var state = _this.board;
                    if (!state.accelerometerState.accelerometer.isActive)
                        return;
                    if (tiltDecayer) {
                        clearInterval(tiltDecayer);
                        tiltDecayer = 0;
                    }
                    var bbox = _this.element.getBoundingClientRect();
                    // ev.clientX and ev.clientY are not defined on mobile iOS
                    var xPos = ev.clientX != null ? ev.clientX : ev.pageX;
                    var yPos = ev.clientY != null ? ev.clientY : ev.pageY;
                    var ax = (xPos - bbox.width / 2) / (bbox.width / 3);
                    var ay = (yPos - bbox.height / 2) / (bbox.height / 3);
                    var x = -Math.max(-1023, Math.min(1023, Math.floor(ax * 1023)));
                    var y = Math.max(-1023, Math.min(1023, Math.floor(ay * 1023)));
                    var z2 = 1023 * 1023 - x * x - y * y;
                    var z = Math.floor((z2 > 0 ? -1 : 1) * Math.sqrt(Math.abs(z2)));
                    state.accelerometerState.accelerometer.update(-x, y, z);
                    _this.updateTilt();
                }, false);
                this.element.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                    var state = _this.board;
                    if (!state.accelerometerState.accelerometer.isActive)
                        return;
                    if (!tiltDecayer) {
                        tiltDecayer = setInterval(function () {
                            var accx = state.accelerometerState.accelerometer.getX(pxsim.MicroBitCoordinateSystem.RAW);
                            accx = Math.floor(Math.abs(accx) * 0.85) * (accx > 0 ? 1 : -1);
                            var accy = state.accelerometerState.accelerometer.getY(pxsim.MicroBitCoordinateSystem.RAW);
                            accy = Math.floor(Math.abs(accy) * 0.85) * (accy > 0 ? 1 : -1);
                            var accz = -Math.sqrt(Math.max(0, 1023 * 1023 - accx * accx - accy * accy));
                            if (Math.abs(accx) <= 24 && Math.abs(accy) <= 24) {
                                clearInterval(tiltDecayer);
                                tiltDecayer = 0;
                                accx = 0;
                                accy = 0;
                                accz = -1023;
                            }
                            state.accelerometerState.accelerometer.update(accx, -accy, accz);
                            _this.updateTilt();
                        }, 50);
                    }
                }, false);
                var bpState = this.board.buttonState;
                var stateButtons = bpState.buttons;
                this.buttonsOuter.forEach(function (btn, index) {
                    var button = stateButtons[index];
                    pxsim.pointerEvents.down.forEach(function (evid) { return btn.addEventListener(evid, function (ev) {
                        button.setPressed(true);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonDown);
                    }); });
                    btn.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                        button.setPressed(false);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonUps[index]);
                    });
                    btn.addEventListener(pxsim.pointerEvents.up, function (ev) {
                        button.setPressed(false);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonUps[index]);
                    });
                    pxsim.accessibility.enableKeyboardInteraction(btn, function () {
                        button.setPressed(true);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonDown);
                    }, function () {
                        button.setPressed(false);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonUps[index]);
                    });
                });
            };
            return CircuitPlaygroundBoardSvg;
        }());
        visuals.CircuitPlaygroundBoardSvg = CircuitPlaygroundBoardSvg;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.BOARD_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"svg2\" width=\"180.094\" height=\"179.229\"><defs id=\"defs6\"><clipPath id=\"clipPath32\"><path d=\"M0 143.383h144.075V0H0v143.383z\" id=\"path34\"/></clipPath><clipPath id=\"clipPath44\"><path d=\"M0 143.383h144.075V0H0v143.383z\" id=\"path46\"/></clipPath><clipPath id=\"clipPath512\"><path d=\"M0 143.383h144.075V0H0v143.383z\" id=\"path514\"/></clipPath><clipPath id=\"clipPath636\"><path d=\"M0 143.383h144.075V0H0v143.383z\" id=\"path638\"/></clipPath></defs><g id=\"g10\" transform=\"matrix(1.25 0 0 -1.25 0 179.229)\"><g id=\"g28\"><g id=\"g30\" clip-path=\"url(#clipPath32)\"><g id=\"g36\" transform=\"translate(142.274 72.087)\"><path fill=\"#010101\" d=\"M0 0a4.535 4.535 0 0 0-9.071.016v.015A4.535 4.535 0 1 0 0 .016V0zm-3.867-22.452a4.537 4.537 0 0 0-9.071.015v.016a4.535 4.535 0 1 0 9.071-.016v-.015zm-11.41 64.778a4.536 4.536 0 0 0-9.072.015v.016a4.535 4.535 0 0 0 9.072-.016v-.015zm0-84.651a4.535 4.535 0 1 0-9.072.015v.016a4.535 4.535 0 0 0 9.072-.016v-.015zM-32.94 57.047a4.536 4.536 0 1 0-9.072.015v.016a4.537 4.537 0 0 0 9.072-.016v-.015zm0-114.094a4.536 4.536 0 1 0-9.072.016v.015a4.537 4.537 0 0 0 9.072-.015v-.016zM-58.756 64.438a1.276 1.276 0 0 0-2.551.003v.003a1.276 1.276 0 1 0 2.551-.003v-.003zm-2.126-9.067a1.134 1.134 0 1 0-.001 2.267 1.134 1.134 0 0 0 .001-2.267m-3.826 2.692a.993.993 0 1 0 .001 1.985.993.993 0 0 0-.001-1.985m.141-83.611a1.417 1.417 0 0 0-2.835.004v.003a1.418 1.418 0 0 0 2.835-.003v-.004zm51.629 48.032a4.535 4.535 0 0 0 9.071-.016v-.016a4.536 4.536 0 0 0-9.071.016v.016zm-60.133-48.032a1.417 1.417 0 0 0-2.835.004v.003a1.418 1.418 0 0 0 2.835-.003v-.004zm-3.685 84.604a.992.992 0 1 0 1.984 0 .992.992 0 0 0-1.984 0m-1.701-2.554a1.134 1.134 0 1 0-2.268.002v.002a1.134 1.134 0 0 0 2.268-.002v-.002zm-3.259 7.939v.003a1.276 1.276 0 1 0 2.551-.003v-.003a1.277 1.277 0 0 0-2.551.003M-98.461-57.045a4.535 4.535 0 1 0-9.071.014v.012a4.535 4.535 0 1 0 9.071-.012v-.014zm-9.251 113.941a4.535 4.535 0 1 0 9.071-.013v-.014a4.537 4.537 0 0 0-9.071.014v.013zm-7.692-99.939a4.535 4.535 0 0 0-4.542-4.528 4.535 4.535 0 0 0-4.529 4.542v.012a4.535 4.535 0 1 0 9.071-.012v-.014zm-9.791 85.217a4.535 4.535 0 1 0 9.071-.013v-.013a4.535 4.535 0 1 0-9.071.013v.013zm-2.159-65.344a4.535 4.535 0 1 0-9.071.014v.012a4.535 4.535 0 1 0 9.071-.012v-.014zM-140.472.016v.013a4.535 4.535 0 1 0 9.071-.013V.002a4.535 4.535 0 1 0-9.071.014m3.867 22.465a4.536 4.536 0 0 0 9.071-.013v-.013a4.535 4.535 0 1 0-9.071.013v.013zM1.109 9.85C-3.32 41.771-28.415 66.866-60.336 71.295h-19.8c-39.403-5.467-66.913-41.842-61.446-81.244 5.468-39.404 41.843-66.913 81.246-61.446C-20.934-65.928 6.576-29.553 1.109 9.85\" id=\"path38\"/></g></g></g><g id=\"g40\"><g id=\"g42\" clip-path=\"url(#clipPath44)\"><g id=\"g48\" transform=\"translate(131.271 69.12)\"><path d=\"M0 0a1.882 1.882 0 0 1-.416.627 2.493 2.493 0 0 1-.528.4L-2.533.352l.552-1.301.516.22-.315.744.783.333c.091-.054.176-.127.256-.221.08-.094.146-.202.199-.327.064-.153.095-.304.091-.454a.992.992 0 0 0-.112-.434 1.354 1.354 0 0 0-.312-.387 1.89 1.89 0 0 0-.505-.306l-.03-.013a1.77 1.77 0 0 0-.537-.139 1.39 1.39 0 0 0-.488.041 1.06 1.06 0 0 0-.396.208.96.96 0 0 0-.265.363 1.086 1.086 0 0 0-.101.492c.009.145.039.288.087.429l-.615.151a2.038 2.038 0 0 1-.087-.626c.007-.202.062-.425.166-.668.101-.239.24-.438.415-.598.174-.158.373-.276.594-.353a1.84 1.84 0 0 1 .716-.094c.254.015.512.077.772.188l.041.017c.272.115.503.261.69.434.188.173.33.364.427.572.096.209.144.43.144.665C.153-.477.102-.239 0 0\" id=\"path50\" fill=\"#fff\"/></g><g id=\"g52\" transform=\"translate(126.814 70.516)\"><path d=\"M0 0l3.851.021-.004.62L1.201.627l2.637 1.762-.003.541-3.85-.021.003-.621 2.569.013L-.003.594 0 0z\" id=\"path54\" fill=\"#fff\"/></g><g id=\"g56\" transform=\"translate(129.228 76.812)\"><path d=\"M0 0c.175-.008.358-.052.553-.129l.03-.013c.191-.076.353-.171.484-.285a1.22 1.22 0 0 0 .301-.375c.068-.135.103-.282.106-.439a1.247 1.247 0 0 0-.095-.48l-.198-.496-2.502 1.001.198.495c.065.164.153.302.263.413.11.113.237.194.381.245.145.05.305.071.479.063m-1.252.143a1.95 1.95 0 0 1-.405-.644l-.438-1.093L1.48-3.023l.437 1.092c.103.256.151.505.147.747a1.65 1.65 0 0 1-.148.679c-.096.21-.236.399-.422.568a2.17 2.17 0 0 1-.671.411L.782.49a2.163 2.163 0 0 1-.766.164A1.653 1.653 0 0 1-1.252.143\" id=\"path58\" fill=\"#fff\"/></g><g id=\"g60\" transform=\"translate(12.627 76.742)\"><path d=\"M0 0a1.667 1.667 0 0 1-.14-.63 1.624 1.624 0 0 1 .154-.71c.074-.168.169-.31.284-.428a1.12 1.12 0 0 1 .843-.35c.161.003.323.04.488.113l.015.006c.154.069.277.154.368.256a.975.975 0 0 1 .253.716 1.892 1.892 0 0 1-.057.395l1.414-.441.458.202-.909 2.064L2.643.96 3.23-.374 1.833.033 1.5-.205l.078-.176c.108-.244.145-.461.111-.648a.515.515 0 0 0-.321-.4l-.015-.007a.573.573 0 0 0-.48-.013.645.645 0 0 0-.333.346.936.936 0 0 0-.088.481c.016.15.056.297.121.441L0 0z\" id=\"path62\" fill=\"#fff\"/></g><g id=\"g64\" transform=\"translate(13.288 73.55)\"><path d=\"M0 0l.713.162-.155.686-.714-.161L0 0z\" id=\"path66\" fill=\"#fff\"/></g><g id=\"g68\" transform=\"translate(17.27 73.14)\"><path d=\"M0 0l-.578.004-.01-1.457-1.107.942-.402-.08-.001-.192c-.002-.268-.057-.48-.164-.637a.518.518 0 0 0-.457-.233h-.016a.576.576 0 0 0-.444.184.645.645 0 0 0-.161.452c.001.188.04.346.116.476.076.129.173.247.291.353l-.448.398a1.645 1.645 0 0 1-.386-.517 1.626 1.626 0 0 1-.151-.711 1.404 1.404 0 0 1 .085-.506 1.125 1.125 0 0 1 .625-.664 1.26 1.26 0 0 1 .491-.097h.017a.974.974 0 0 1 .964.631c.05.124.087.252.11.383l1.109-.979.501-.004L0 0z\" id=\"path70\" fill=\"#fff\"/></g><g id=\"g72\" transform=\"translate(17.139 69.703)\"><path d=\"M0 0l-4.096.006-.193-.557 3.222-2.525.22.634-2.439 1.846 3.059-.059L0 0z\" id=\"path74\" fill=\"#fff\"/></g><g id=\"g76\" transform=\"translate(40.201 24.29)\"><path d=\"M0 0l-.069-.557.801-.1-.105-.845a.946.946 0 0 0-.319-.11 1.192 1.192 0 0 0-.383-.008c-.163.019-.31.07-.438.148a.98.98 0 0 0-.319.315 1.322 1.322 0 0 0-.177.465c-.035.177-.04.375-.012.589l.003.034c.025.197.075.374.151.533.075.159.168.293.28.401.111.108.237.188.379.239.141.05.29.066.447.046.196-.024.355-.078.476-.159C.835.909.944.813 1.041.7l.439.456a1.947 1.947 0 0 1-.497.389 1.841 1.841 0 0 1-.66.193 1.682 1.682 0 0 1-.726-.058 1.736 1.736 0 0 1-.604-.337 1.84 1.84 0 0 1-.44-.572 2.286 2.286 0 0 1-.225-.762l-.006-.043a2.339 2.339 0 0 1 .029-.816 1.83 1.83 0 0 1 .28-.656 1.56 1.56 0 0 1 .503-.459c.203-.118.434-.192.692-.225a1.88 1.88 0 0 1 .752.044c.227.065.431.15.61.256l.214 1.714L0 0z\" id=\"path78\" fill=\"#fff\"/></g><g id=\"g80\" transform=\"translate(45.353 24.19)\"><path d=\"M0 0l-1.249-2.245L-1.48.822l-.519.288-1.871-3.363.542-.303 1.286 2.313.242-3.162.472-.262L.543-.303 0 0z\" id=\"path82\" fill=\"#fff\"/></g><g id=\"g84\" transform=\"translate(47.637 20.119)\"><path d=\"M0 0a1.73 1.73 0 0 0-.384-.418L-.41-.437A1.719 1.719 0 0 0-.896-.72a1.208 1.208 0 0 0-.474-.077 1.016 1.016 0 0 0-.434.123 1.255 1.255 0 0 0-.373.319l-.334.416 2.1 1.688.335-.416c.111-.138.187-.281.23-.432A.99.99 0 0 0 .18.449 1.28 1.28 0 0 0 0 0m.378 1.69l-.737.918L-3.361.196l.737-.918c.172-.214.365-.379.578-.494.213-.116.435-.183.664-.204.231-.019.465.01.703.088.238.078.467.206.687.383l.034.027c.22.177.394.373.52.588.126.214.205.436.234.664.03.23.012.459-.058.691a1.946 1.946 0 0 1-.36.669\" id=\"path86\" fill=\"#fff\"/></g><g id=\"g88\" transform=\"translate(25.375 39.134)\"><path d=\"M0 0l.132.578-2.594.595-.132-.579.986-.226-.728-3.175.622-.141.728 3.174L0 0z\" id=\"path90\" fill=\"#fff\"/></g><g id=\"g92\" transform=\"translate(28.692 38.068)\"><path d=\"M0 0l-.62.344-1.366-.826-.008 1.591-.634.353.067-2.197-1.982-1.143.619-.345 1.445.876.016-1.689.639-.356-.081 2.299L0 0z\" id=\"path94\" fill=\"#fff\"/></g><g id=\"g96\" transform=\"translate(31.83 32.661)\"><path d=\"M0 0l-1.21-1.106-.427 1.012L0 0zm-2.11-2.77L.91.036.67.604l-4.116-.2.249-.592.96.058.581-1.38-.713-.645.259-.615z\" id=\"path98\" fill=\"#fff\"/></g><g id=\"g100\" transform=\"translate(32.882 30.078)\"><path d=\"M0 0l.088-1.675-3.346 1.307.036-.693L.223-2.36l.478.024L.577.031 0 0z\" id=\"path102\" fill=\"#fff\"/></g><g id=\"g104\" transform=\"translate(13.783 57.551)\"><path d=\"M0 0l.662 1.161.607-.345c.21-.12.345-.26.405-.421.061-.162.036-.337-.072-.528l-.006-.011a.633.633 0 0 0-.412-.322C1.009-.505.813-.464.597-.34L0 0zm5.611-2.339l-.465.536-1.566-.311.533 1.498-.476.548-.684-2.088-1.999-.355-.042 1.479c.245-.043.479-.021.699.066.221.088.406.26.552.519l.011.018c.088.154.142.306.165.456.023.153.015.298-.023.438-.044.16-.126.311-.246.452-.121.14-.277.264-.467.373l-1.209.689-1.907-3.344.554-.316.673 1.179.535-.305A.098.098 0 0 1 .285-.82l.037-1.591.499-.285.344-.396 1.656.333-.56-1.595.48-.552.707 2.189 2.163.378z\" id=\"path106\" fill=\"#fff\"/></g><g id=\"g108\" transform=\"translate(18.978 49.007)\"><path d=\"M0 0l1.544-.555-1.547-.546L0 0zm-1.473.521l.908-.322-.005-1.496-.909-.316-.001-.664L2.396-.876l.001.615-3.867 1.425-.003-.643z\" id=\"path110\" fill=\"#fff\"/></g><g id=\"g112\" transform=\"translate(18.789 44.972)\"><path d=\"M0 0a.64.64 0 0 0-.346-.387.698.698 0 0 0-.535.004l-.01.004a.76.76 0 0 0-.422.342c-.085.154-.092.328-.021.521a.635.635 0 0 0 .36.394.74.74 0 0 0 .545-.009l.011-.003A.7.7 0 0 0-.012.521.632.632 0 0 0 0 0m1.151.887a3.576 3.576 0 0 1-.785.397l-.037.014c-.189.07-.358.123-.511.157a2.24 2.24 0 0 1-.411.06 1.32 1.32 0 0 1-.63-.116 1.208 1.208 0 0 1-.375-.274 1.397 1.397 0 0 1-.264-.45 1.326 1.326 0 0 1-.084-.506 1.22 1.22 0 0 1 .401-.874c.126-.118.28-.21.462-.277l.01-.003c.185-.07.36-.099.523-.091.162.008.309.044.439.109s.243.155.34.27c.097.115.173.246.228.393a1.067 1.067 0 0 1-.046.88C.562.516.702.443.83.358c.128-.085.232-.178.314-.28a.82.82 0 0 0 .164-.332.64.64 0 0 0-.032-.371.87.87 0 0 0-.206-.326 1.641 1.641 0 0 0-.291-.223l.363-.47c.157.099.291.21.401.335.11.125.199.282.269.468.083.223.111.439.084.646a1.31 1.31 0 0 1-.227.582 1.985 1.985 0 0 1-.518.5\" id=\"path114\" fill=\"#fff\"/></g><g id=\"g116\" transform=\"translate(126.257 53.676)\"><path d=\"M0 0l-.446-1.006L-1.635.126 0 0zm-2.534.202L.428-2.664l.26.587-.698.661L.6-.05l.958-.077.271.607-4.113.285-.25-.563z\" id=\"path118\" fill=\"#fff\"/></g><g id=\"g120\" transform=\"translate(125.57 57.196)\"><path d=\"M0 0l-.348-.873.489-.274.252.58 2.455-2.072.407.485L.291.345 0 0z\" id=\"path122\" fill=\"#fff\"/></g><g id=\"g124\" transform=\"translate(117.279 36.658)\"><path d=\"M0 0l-.822-.73-.614 1.522L0 0zm-2.224 1.232l1.51-3.835.483.427-.364.891 1.12.992.839-.468.499.442-3.626 1.961-.461-.41z\" id=\"path126\" fill=\"#fff\"/></g><g id=\"g128\" transform=\"translate(120.233 37.22)\"><path d=\"M0 0a.602.602 0 0 0-.346-.025.83.83 0 0 0-.34.169c-.108.086-.21.204-.306.35a2.714 2.714 0 0 0-.258.526l-.016.041c-.151.407-.201.75-.149 1.029.053.279.193.46.419.545a.579.579 0 0 0 .344.024.797.797 0 0 0 .336-.169c.108-.086.211-.204.307-.352.098-.15.182-.324.258-.524l.014-.041C.416 1.166.466.824.416.545.365.268.227.086 0 0m.855 1.859a2.856 2.856 0 0 1-.376.713c-.151.2-.314.359-.493.474a1.322 1.322 0 0 1-.565.211c-.2.026-.402 0-.608-.077a1.275 1.275 0 0 1-.517-.346 1.324 1.324 0 0 1-.291-.534 1.947 1.947 0 0 1-.06-.682c.02-.252.08-.513.182-.784l.02-.057c.104-.275.228-.512.376-.715.148-.201.311-.359.489-.474A1.27 1.27 0 0 1 .191-.544c.208.078.381.193.516.346.136.152.232.33.292.534.059.204.078.431.061.68-.02.249-.081.511-.184.787l-.021.056z\" id=\"path130\" fill=\"#fff\"/></g><g id=\"g132\" transform=\"translate(16.25 98.948)\"><path d=\"M0 0c.09-.156.195-.286.316-.392.122-.106.253-.183.391-.233a.99.99 0 0 1 .433-.053c.15.014.298.064.445.147l.01.006c.12.069.218.15.293.241a.919.919 0 0 1 .164.315c.035.12.052.255.051.404a3.74 3.74 0 0 1-.045.51 3.912 3.912 0 0 0-.05.434c-.005.116 0 .211.013.287.014.076.04.137.076.183a.472.472 0 0 0 .141.119l.005.002a.401.401 0 0 0 .351.03c.122-.043.227-.142.314-.294.077-.134.121-.28.135-.44a2.081 2.081 0 0 0-.02-.49l.605-.071a1.788 1.788 0 0 1-.211 1.274 1.447 1.447 0 0 1-.313.387 1.207 1.207 0 0 1-.385.223 1.006 1.006 0 0 1-.844-.088l-.009-.005a1.024 1.024 0 0 1-.313-.262.918.918 0 0 1-.159-.335 1.48 1.48 0 0 1-.038-.421c.006-.155.024-.33.055-.523a3.01 3.01 0 0 0 .051-.402 1.016 1.016 0 0 0-.019-.268.403.403 0 0 0-.209-.282L1.23.001a.439.439 0 0 0-.386-.034C.71.015.597.12.504.282.402.46.349.642.343.828c-.004.185.013.371.053.559l-.606.096A2.062 2.062 0 0 1-.247.695C-.206.448-.124.216 0 0\" id=\"path134\" fill=\"#fff\"/></g><g id=\"g136\" transform=\"translate(20.318 97.716)\"><path d=\"M0 0l.094-.525c.03-.173.028-.336-.006-.49a.984.984 0 0 0-.196-.409A1.258 1.258 0 0 0-.48-1.73a1.739 1.739 0 0 0-.538-.182l-.033-.006a1.694 1.694 0 0 0-.561-.013 1.2 1.2 0 0 0-.454.16 1.001 1.001 0 0 0-.321.317 1.234 1.234 0 0 0-.173.458l-.093.525L0 0zm-3.128-1.103c.048-.271.139-.507.269-.711.131-.205.292-.37.484-.499.193-.127.412-.213.658-.259.246-.046.509-.044.787.005l.043.007c.278.05.524.138.738.266A1.648 1.648 0 0 1 .658-1.19c.052.236.052.489.005.76L.457.729-3.334.057l.206-1.16z\" id=\"path138\" fill=\"#fff\"/></g><g id=\"g140\" transform=\"translate(18.527 92.485)\"><path d=\"M0 0l.222 1.077 1.402-.85L0 0zm2.52.344L-.986 2.513l-.131-.631.825-.496-.304-1.465-.953-.129-.135-.651 4.078.6.126.603z\" id=\"path142\" fill=\"#fff\"/></g><g id=\"g144\" transform=\"translate(14.384 86.826)\"><path d=\"M0 0l.896.64.451-1.577L0 0zm2.085-1.457L.981 2.514.457 2.14l.27-.924L-.49.345l-.787.552-.541-.387 3.402-2.326.501.359z\" id=\"path146\" fill=\"#fff\"/></g><g id=\"g148\" transform=\"translate(12.89 85.46)\"><path d=\"M0 0l-.426.142a1.443 1.443 0 0 0-.228-.167 1.14 1.14 0 0 0-.298-.123.756.756 0 0 0-.534.032c-.16.075-.266.212-.319.409l-.003.012a.671.671 0 0 0 .05.531.672.672 0 0 0 .435.311.94.94 0 0 0 .443.017c.142-.029.291-.083.444-.159l.228.551a1.811 1.811 0 0 1-.608.203 1.619 1.619 0 0 1-.666-.045 1.487 1.487 0 0 1-.486-.225A1.173 1.173 0 0 1-2.46.661a1.45 1.45 0 0 1 .047-.543l.003-.011c.053-.197.13-.36.232-.489.101-.129.217-.225.348-.291.132-.064.274-.101.426-.11.152-.008.309.01.467.053a1.394 1.394 0 0 1 .472.217l.18-.903-1.444-.389.15-.557 1.965.529L0 0z\" id=\"path150\" fill=\"#fff\"/></g><g id=\"g152\" transform=\"translate(28.708 117.02)\"><path d=\"M0 0a1.25 1.25 0 0 1 .337-.307.982.982 0 0 1 .413-.138c.15-.016.306.002.465.055l.011.004c.132.044.244.103.336.177a.919.919 0 0 1 .224.276c.057.11.101.24.131.386.028.146.047.316.057.509.007.176.021.32.039.435.018.114.042.207.07.278a.413.413 0 0 0 .111.164.495.495 0 0 0 .162.088l.005.002c.122.04.239.026.35-.041.111-.068.194-.184.25-.352.047-.147.062-.299.043-.457a2.095 2.095 0 0 0-.117-.476l.578-.192c.091.215.14.431.145.647a1.87 1.87 0 0 1-.096.643 1.452 1.452 0 0 1-.231.443 1.136 1.136 0 0 1-.331.295 1.011 1.011 0 0 1-.845.083l-.01-.002a1.055 1.055 0 0 1-.359-.194.896.896 0 0 1-.224-.297 1.459 1.459 0 0 1-.12-.405 4.59 4.59 0 0 1-.051-.523 3.131 3.131 0 0 0-.031-.405.982.982 0 0 0-.072-.258.406.406 0 0 0-.261-.234L.974.202a.446.446 0 0 0-.386.044C.468.319.378.445.319.623c-.064.195-.08.384-.048.566.033.183.087.363.165.538l-.576.216a2.022 2.022 0 0 1-.193-.765C-.343.927-.309.684-.23.447-.175.277-.098.128 0 0\" id=\"path154\" fill=\"#fff\"/></g><g id=\"g156\" transform=\"translate(31.675 116.198)\"><path d=\"M0 0a2.372 2.372 0 0 1-.798.132h-.038A2.418 2.418 0 0 1-1.64.008a1.869 1.869 0 0 1-.619-.347 1.527 1.527 0 0 1-.398-.533 1.6 1.6 0 0 1-.142-.678 1.655 1.655 0 0 1 .138-.705c.093-.202.226-.387.402-.556l.452.372a1.927 1.927 0 0 0-.287.38.95.95 0 0 0-.112.474c.001.15.034.291.101.42.066.13.159.243.279.338.119.095.264.168.435.221.171.052.361.079.57.078H-.8c.206-.001.393-.028.561-.082.168-.054.312-.128.431-.223.119-.096.211-.209.277-.339a.908.908 0 0 0 .097-.421.931.931 0 0 0-.108-.46 1.765 1.765 0 0 0-.269-.364l.49-.387c.143.157.258.33.347.519.089.188.133.418.134.689.002.25-.045.479-.14.691a1.589 1.589 0 0 1-.4.545A1.877 1.877 0 0 1 0 0\" id=\"path158\" fill=\"#fff\"/></g><g id=\"g160\" transform=\"translate(29.177 112.477)\"><path d=\"M0 0l3.087-1.053.205.603L-.351.794l-.739-2.165.557-.191L0 0z\" id=\"path162\" fill=\"#fff\"/></g><g id=\"g164\" transform=\"translate(25.2 106.376)\"><path d=\"M0 0l.949.558.309-1.611L0 0zm1.946-1.638l-.743 4.054-.556-.326.186-.944-1.29-.758-.735.621-.574-.338L1.415-1.95l.531.312z\" id=\"path166\" fill=\"#fff\"/></g><g id=\"g168\" transform=\"translate(22.433 104.002)\"><path d=\"M0 0l-.276 1.521 1.071.194L0 0zm1.306 2.35l-1.678-.304-.149.823-.595-.108.149-.823-.47-.085.094-.525.472.085.446-2.462.557.101 1.343 2.86-.169.438z\" id=\"path170\" fill=\"#fff\"/></g><g id=\"g172\" transform=\"translate(96.982 22.657)\"><path d=\"M0 0l1.57-2.627-2.814 1.202-.455-.523 3.796-1.538.387.442L.441.505 0 0z\" id=\"path174\" fill=\"#fff\"/></g><g id=\"g176\" transform=\"translate(101.073 21.591)\"><path d=\"M0 0a.793.793 0 0 0-.612-.382.858.858 0 0 0-.372.054 1.189 1.189 0 0 0-.362.22c-.116.1-.221.225-.315.377l-.018.028a1.71 1.71 0 0 0-.203.45 1.16 1.16 0 0 0-.04.414.864.864 0 0 0 .115.355.782.782 0 0 0 .262.262.74.74 0 0 0 .356.121.823.823 0 0 0 .371-.052c.124-.047.244-.119.359-.221.116-.103.221-.229.313-.378l.018-.028c.096-.154.164-.304.203-.451C.114.622.128.484.115.354A.827.827 0 0 0 0 0m.356 1.521l-.025.041c-.131.209-.28.381-.449.518-.17.138-.35.236-.538.293a1.385 1.385 0 0 1-1.151-.157 1.407 1.407 0 0 1-.44-.424 1.34 1.34 0 0 1-.209-.545 1.635 1.635 0 0 1 .025-.616c.048-.214.137-.426.268-.636l.025-.04c.131-.21.282-.384.451-.52.168-.137.348-.234.537-.291A1.37 1.37 0 0 1 0-.699a1.376 1.376 0 0 1 .65.967C.681.464.673.67.624.884a2.023 2.023 0 0 1-.268.637\" id=\"path178\" fill=\"#fff\"/></g><g id=\"g180\" transform=\"translate(103.81 25.475)\"><path d=\"M0 0l-.529-.132.502-2.009c.064-.258.052-.466-.035-.626a.647.647 0 0 0-.436-.314c-.209-.052-.389-.026-.541.078-.151.104-.26.286-.324.547l-.498 1.991-.535-.133.499-1.996a1.68 1.68 0 0 1 .225-.537c.096-.144.21-.259.342-.34.131-.081.276-.13.435-.147a1.45 1.45 0 0 1 .512.042c.181.045.339.113.475.203a.986.986 0 0 1 .318.341c.078.135.125.29.141.466.017.174-.002.372-.057.589L0 0z\" id=\"path182\" fill=\"#fff\"/></g><g id=\"g184\" transform=\"translate(106.582 25.525)\"><path d=\"M0 0l-2.299-.023.005-.513.874.01.029-2.813.551.006-.028 2.812.873.008L0 0z\" id=\"path186\" fill=\"#fff\"/></g><g id=\"g188\" transform=\"translate(46.09 123.362)\"><path d=\"M0 0l-.389.331-.476-.56-.589.501A.917.917 0 0 0-1.38.57c.044.103.107.201.186.295a.984.984 0 0 0 .332.259.901.901 0 0 0 .398.084c.141-.001.288-.033.441-.095C.13 1.05.282.956.432.828l.023-.02C.592.691.702.564.786.428.869.292.924.153.95.015a.915.915 0 0 0-.194-.77.996.996 0 0 0-.359-.283 1.561 1.561 0 0 0-.383-.104l.127-.56c.2.035.381.096.543.184.163.087.321.223.477.406.152.18.259.373.317.58.057.207.072.417.044.628a1.646 1.646 0 0 1-.214.619 2.092 2.092 0 0 1-.466.551l-.031.026a2.148 2.148 0 0 1-.634.386c-.217.082-.43.12-.639.113a1.41 1.41 0 0 1-.599-.153 1.675 1.675 0 0 1-.517-.413 1.703 1.703 0 0 1-.34-.594 2.275 2.275 0 0 1-.11-.592L-.833-.978 0 0z\" id=\"path190\" fill=\"#fff\"/></g><g id=\"g192\" transform=\"translate(43.322 119.386)\"><path d=\"M0 0l-1.088 2.066L1.362.718l.478.251L.21 4.066l-.5-.262L.83 1.675l-2.526 1.388-.435-.229L-.5-.263 0 0z\" id=\"path194\" fill=\"#fff\"/></g><g id=\"g196\" transform=\"translate(39.01 120.649)\"><path d=\"M0 0c.032.156.088.291.166.404a.9.9 0 0 0 .303.278c.123.071.264.117.424.135l.481.061.305-2.431-.482-.06a1.126 1.126 0 0 0-.444.027.906.906 0 0 0-.362.196 1.16 1.16 0 0 0-.261.353c-.07.143-.117.309-.141.497l-.004.029C-.037-.325-.033-.154 0 0m.005-1.811a1.5 1.5 0 0 1 .562-.284c.213-.057.443-.071.691-.039l1.061.133-.435 3.473-1.062-.134a1.739 1.739 0 0 1-.659-.211A1.517 1.517 0 0 1-.578.125 2.016 2.016 0 0 1-.609-.59l.005-.04c.032-.255.101-.482.207-.682a1.6 1.6 0 0 1 .402-.499\" id=\"path198\" fill=\"#fff\"/></g><g id=\"g200\" transform=\"translate(126.718 89.823)\"><path d=\"M0 0l.634-.898-1.579-.443L0 0zm-1.471-2.075L2.508-.998l-.371.527-.925-.264L.349.488l.557.784-.384.543-2.348-3.387.355-.503z\" id=\"path202\" fill=\"#fff\"/></g><g id=\"g204\" transform=\"translate(124.32 91.539)\"><path d=\"M0 0c-.19.085-.34.175-.447.267A.667.667 0 0 0-.663.63a.58.58 0 0 0 .044.422c.067.127.185.211.357.254a.788.788 0 0 0 .226.021.98.98 0 0 0 .244-.045c.086-.026.18-.066.283-.117.104-.053.224-.119.36-.198L2.354.122l.492.121-.579 2.366-.561-.138.377-1.544-.994.551c-.169.102-.32.188-.455.259a2.304 2.304 0 0 1-.383.165 1.385 1.385 0 0 1-.35.064 1.297 1.297 0 0 1-.36-.041l-.011-.003a1.114 1.114 0 0 1-.415-.189.967.967 0 0 1-.275-.313 1.083 1.083 0 0 1-.124-.406 1.362 1.362 0 0 1 .036-.47c.066-.271.182-.488.346-.649.164-.162.372-.295.624-.4L0 0z\" id=\"path206\" fill=\"#fff\"/></g><g id=\"g208\" transform=\"translate(116.418 108.349)\"><path d=\"M0 0l.785-.77-1.474-.719L0 0zm-1.074-2.305l3.72 1.776-.459.45-.864-.425L.256.543l.407.872-.476.466-1.702-3.754.441-.432z\" id=\"path210\" fill=\"#fff\"/></g><g id=\"g212\" transform=\"translate(113.544 108.82)\"><path d=\"M0 0l-.669 1.294L.75.976l.318.256-.089.172c-.123.238-.173.451-.151.64.022.188.12.329.296.419l.015.008c.166.086.325.1.477.043a.643.643 0 0 0 .355-.325.935.935 0 0 0 .118-.475 1.435 1.435 0 0 0-.094-.446l.583-.146c.074.199.108.412.101.637a1.645 1.645 0 0 1-.199.7c-.084.163-.188.3-.31.41-.123.11-.257.189-.402.239-.147.051-.3.07-.46.057a1.27 1.27 0 0 1-.481-.143l-.015-.007a1.068 1.068 0 0 1-.351-.279.98.98 0 0 1-.208-.729c.014-.134.041-.264.082-.392l-1.439.352-.445-.23L-.513-.266 0 0z\" id=\"path214\" fill=\"#fff\"/></g><g id=\"g216\" transform=\"translate(102.783 121.115)\"><path d=\"M0 0a1.036 1.036 0 0 1 .017-.448.951.951 0 0 1 .173-.347c.08-.1.177-.184.292-.252a1.9 1.9 0 0 1 .365-.165l-1.135-.953-.077-.495 2.228-.348.089.571-1.439.225 1.094.957-.019.408-.191.03c-.264.042-.466.127-.604.255a.515.515 0 0 0-.164.487l.002.016a.57.57 0 0 0 .248.412.649.649 0 0 0 .471.093.942.942 0 0 0 .453-.185c.117-.094.218-.207.304-.34l.462.385c-.117.178-.268.33-.455.458a1.638 1.638 0 0 1-.68.254 1.452 1.452 0 0 1-.515-.009A1.18 1.18 0 0 1 .488.825 1.088 1.088 0 0 1 .171.488 1.26 1.26 0 0 1 .002.016L0 0z\" id=\"path218\" fill=\"#fff\"/></g><g id=\"g220\" transform=\"translate(102.886 122.375)\"><path d=\"M0 0l-.659.249-.258-.685.658-.249L0 0z\" id=\"path222\" fill=\"#fff\"/></g><g id=\"g224\" transform=\"translate(99.32 123.004)\"><path d=\"M0 0a1.105 1.105 0 0 1-.174-.414 1.006 1.006 0 0 1 .013-.388c.03-.124.084-.241.159-.351.077-.111.163-.211.261-.303l-1.428-.389-.278-.416L.428-3.512l.32.481-1.212.808 1.397.408.153.379-.16.107c-.222.149-.37.311-.443.486a.522.522 0 0 0 .056.511l.009.014a.57.57 0 0 0 .397.269.644.644 0 0 0 .468-.114.93.93 0 0 0 .333-.358 1.44 1.44 0 0 0 .135-.436l.58.155a1.639 1.639 0 0 1-.221.607 1.638 1.638 0 0 1-.511.516c-.153.102-.31.171-.47.207A1.184 1.184 0 0 1 .79.544 1.1 1.1 0 0 1 .361.371 1.261 1.261 0 0 1 .009.014L0 0z\" id=\"path226\" fill=\"#fff\"/></g><g id=\"g228\" transform=\"translate(95.729 123.013)\"><path d=\"M0 0l2.824 1.176-1.593-2.612.452-.526 2.069 3.535-.383.447L-.437.51 0 0z\" id=\"path230\" fill=\"#fff\"/></g><g id=\"g232\" transform=\"translate(92.768 137.866)\"><path d=\"M0 0h2.694v-.534c0-.176-.03-.336-.09-.481a1.008 1.008 0 0 0-.264-.369 1.263 1.263 0 0 0-.421-.236 1.72 1.72 0 0 0-.562-.085h-.033c-.205 0-.389.028-.554.085a1.22 1.22 0 0 0-.418.236 1.003 1.003 0 0 0-.262.369C.029-.87 0-.71 0-.534V0zm-.047-1.862c.166-.159.367-.284.602-.371.234-.088.493-.132.775-.132h.045c.281 0 .539.044.771.132.234.087.434.212.6.371.168.16.297.351.389.575.092.224.136.473.136.748V.638H-.578V-.539c0-.275.047-.524.141-.748a1.66 1.66 0 0 1 .39-.575\" id=\"path234\" fill=\"#fff\"/></g><g id=\"g236\" transform=\"translate(96.067 134.274)\"><path d=\"M0 0l-.297.891-.55-.105.182-.604h-3.212v-.633H0V0z\" id=\"path238\" fill=\"#fff\"/></g><g id=\"g240\" transform=\"translate(92.465 131.078)\"><path d=\"M0 0c.105-.111.233-.199.382-.262a1.28 1.28 0 0 1 .492-.092h.017c.168 0 .315.028.439.084a.952.952 0 0 1 .316.226c.086.094.155.202.205.327.049.125.085.253.106.385l1.117-.974h.5V1.95h-.577V.492l-1.114.936-.401-.083v-.193c0-.267-.052-.48-.16-.637A.513.513 0 0 0 .867.277H.852a.572.572 0 0 0-.446.182.649.649 0 0 0-.164.451c0 .188.037.346.112.476.076.131.171.249.289.355l-.452.396A1.627 1.627 0 0 1-.336.904c0-.182.029-.351.088-.506C-.189.245-.107.112 0 0\" id=\"path242\" fill=\"#fff\"/></g><g id=\"g244\" transform=\"translate(48.27 132.976)\"><path d=\"M0 0c.066.128.16.239.281.332.121.094.266.166.437.218.17.051.358.077.564.077h.038c.209 0 .398-.026.567-.077a1.35 1.35 0 0 0 .431-.215.965.965 0 0 0 .278-.33.9.9 0 0 0 .099-.418.903.903 0 0 0-.099-.418.99.99 0 0 0-.281-.333 1.369 1.369 0 0 0-.437-.22 1.888 1.888 0 0 0-.564-.08h-.038c-.209 0-.398.027-.567.077a1.35 1.35 0 0 0-.431.215.976.976 0 0 0-.278.33.9.9 0 0 0-.099.418c0 .154.033.295.099.424m-.135-1.645c.175-.15.382-.268.622-.352.24-.084.503-.126.789-.126h.055c.286 0 .548.041.787.123.238.083.444.199.616.35a1.603 1.603 0 0 1 .55 1.226c0 .253-.049.485-.146.694a1.592 1.592 0 0 1-.407.538c-.174.15-.381.267-.622.352-.24.084-.503.126-.789.126h-.055a2.4 2.4 0 0 1-.786-.123 1.83 1.83 0 0 1-.616-.35A1.606 1.606 0 0 1-.542.274a1.612 1.612 0 0 1-.145-.687c0-.253.048-.483.145-.692.098-.209.233-.39.407-.54\" id=\"path246\" fill=\"#fff\"/></g><g id=\"g248\" transform=\"translate(49.007 135.45)\"><path d=\"M0 0h-.429v-.622h2.915V0H.72C.519 0 .361.05.248.151A.507.507 0 0 0 .077.55c0 .165.054.293.162.385.108.091.265.137.47.137h1.777v.622H.533c-.311 0-.559-.079-.742-.237C-.393 1.3-.484 1.08-.484.798c0-.198.048-.361.146-.487C-.241.185-.128.08 0 0\" id=\"path250\" fill=\"#fff\"/></g><g id=\"g252\" transform=\"translate(49.634 90.236)\"><path d=\"M0 0l.55 1.545L1.1 0H0zm.253 2.398l-1.414-3.872h.643l.32.908h1.496l.318-.908h.666L.868 2.398H.253z\" id=\"path254\" fill=\"#fff\"/></g><g id=\"g256\" transform=\"translate(52.51 89.856)\"><path d=\"M0 0c0 .091.017.176.052.253a.537.537 0 0 0 .145.192.7.7 0 0 0 .218.121C.497.596.588.61.687.61a.805.805 0 0 0 .27-.044.663.663 0 0 0 .217-.121.543.543 0 0 0 .143-.192A.606.606 0 0 0 1.369 0v-.011a.567.567 0 0 0-.184-.435C1.062-.56.896-.616.687-.616c-.208 0-.375.056-.5.17A.562.562 0 0 0 0-.011V0zm.099 1.724a.52.52 0 0 0 .165.4c.11.102.251.153.423.153a.596.596 0 0 0 .423-.153.52.52 0 0 0 .165-.4v-.011a.55.55 0 0 0-.167-.421.59.59 0 0 0-.421-.159.583.583 0 0 0-.42.161.553.553 0 0 0-.168.419v.011zM-.251-.85a1.21 1.21 0 0 1 .414-.223 1.72 1.72 0 0 1 .522-.077c.186 0 .359.026.518.077.159.052.297.125.414.22.117.096.209.211.275.347.066.135.098.288.098.456v.022c0 .235-.057.426-.174.575a1.238 1.238 0 0 1-.453.355c.155.084.28.196.374.335a.9.9 0 0 1 .144.523v.022a.945.945 0 0 1-.341.739c-.106.09-.232.161-.377.212a1.402 1.402 0 0 1-.476.077c-.172 0-.332-.025-.478-.077a1.173 1.173 0 0 1-.38-.214 1.005 1.005 0 0 1-.25-.328.942.942 0 0 1-.091-.409V1.76c0-.209.049-.384.146-.523.097-.139.22-.251.371-.335A1.154 1.154 0 0 1-.448.547C-.564.395-.622.2-.622-.039v-.016c0-.165.033-.315.099-.448.066-.134.157-.25.272-.347\" id=\"path258\" fill=\"#fff\"/></g><g id=\"g260\" transform=\"translate(91.984 102.407)\"><path d=\"M0 0l.55 1.545L1.1 0H0zm.253 2.398l-1.414-3.872h.643l.32.908h1.496l.318-.908h.666L.868 2.398H.253z\" id=\"path262\" fill=\"#fff\"/></g><g id=\"g264\" transform=\"translate(96.174 103.537)\"><path d=\"M0 0a.746.746 0 0 0-.18-.516.62.62 0 0 0-.488-.201.642.642 0 0 0-.486.19c-.121.127-.182.301-.182.522v.011c0 .213.058.39.174.53.116.14.277.21.483.21.21 0 .375-.069.497-.205A.775.775 0 0 0 0 .006V0zm-.197-2.524c.182.093.34.229.469.407.13.178.23.397.297.657.069.26.102.557.102.891v.039c0 .197-.011.373-.032.528C.616.151.586.288.548.407a1.494 1.494 0 0 1-.141.314 1.21 1.21 0 0 1-.574.497 1.36 1.36 0 0 1-.515.089c-.183 0-.352-.034-.508-.099a1.216 1.216 0 0 1-.671-.696 1.424 1.424 0 0 1-.097-.531v-.017c0-.194.03-.367.091-.519.06-.153.143-.28.248-.382.104-.103.228-.181.374-.234.144-.054.3-.08.465-.08.172 0 .325.032.459.095.134.064.248.15.343.259a2.102 2.102 0 0 0-.057-.446 1.304 1.304 0 0 0-.157-.381.868.868 0 0 0-.258-.264.654.654 0 0 0-.359-.099.88.88 0 0 0-.384.083 1.624 1.624 0 0 0-.352.225l-.319-.504a1.95 1.95 0 0 1 .481-.28c.167-.068.355-.102.564-.102.231 0 .438.047.622.141\" id=\"path266\" fill=\"#fff\"/></g><g id=\"g268\" transform=\"translate(44.473 85.925)\"><path d=\"M0 0c0-.187-.025-.355-.077-.505a1.106 1.106 0 0 0-.215-.38.936.936 0 0 0-.335-.238 1.141 1.141 0 0 0-.437-.082h-.486v2.45h.486c.16 0 .305-.028.437-.082A.92.92 0 0 0-.292.922C-.2.817-.129.69-.077.54-.025.39 0 .22 0 .03V0zm-.38 1.645c-.203.084-.43.125-.68.125h-1.07v-3.5h1.07c.25 0 .477.043.68.127.203.085.378.204.523.355.145.152.257.334.337.548.081.213.121.449.121.705v.04c0 .257-.04.491-.121.703-.08.211-.192.393-.337.544-.145.152-.32.27-.523.353\" id=\"path270\" fill=\"#fff\"/></g><g id=\"g272\" transform=\"translate(45.778 85.44)\"><path d=\"M0 0l.99 1.405V0H0zm1.54-1.245v.76h.435V0H1.54v2.275h-.515L-.64-.065l.08-.42H.99v-.76h.55z\" id=\"path274\" fill=\"#fff\"/></g><g id=\"g276\" transform=\"translate(56.502 86.447)\"><path d=\"M0 0h.92v-2.96h.58V0h.92v.473l.984-1.648L2.335-2.96h.644l.76 1.335L4.5-2.96h.665l-1.08 1.79L5.114.54H4.47L3.75-.72 3.04.54H0V0z\" id=\"path278\" fill=\"#fff\"/></g><g id=\"g280\" transform=\"translate(83.71 85.246)\"><path d=\"M0 0h-.625v1.215H.01c.22 0 .39-.05.511-.15C.64.965.7.815.7.615v-.01C.7.422.64.275.521.165.4.055.227 0 0 0m3.965 1.74H3.32L2.601.48l-.71 1.26H1.23L2.255.025l-.971-1.62L.56-.405c.213.077.387.199.523.368.135.168.202.387.202.657v.02c0 .16-.025.305-.075.435a.95.95 0 0 1-.215.335 1.038 1.038 0 0 1-.397.245 1.586 1.586 0 0 1-.538.085h-1.265v-3.5h.58v1.235h.56c.017 0 .028.002.035.005l.745-1.24H1.83l.76 1.335.761-1.335h.665L2.936.03l1.029 1.71z\" id=\"path282\" fill=\"#fff\"/></g><g id=\"g284\" transform=\"translate(99.05 85.926)\"><path d=\"M0 0c0-.187-.025-.355-.077-.505a1.106 1.106 0 0 0-.215-.38.936.936 0 0 0-.335-.238 1.141 1.141 0 0 0-.437-.082h-.486v2.45h.486c.16 0 .305-.028.437-.082A.92.92 0 0 0-.292.922C-.2.817-.129.69-.077.54-.025.39 0 .22 0 .03V0zm.48-.7c.081.213.121.449.121.705v.04c0 .257-.04.491-.121.703-.08.211-.192.393-.337.544-.145.152-.32.27-.523.353-.203.084-.43.125-.68.125h-1.07v-3.5h1.07c.25 0 .477.043.68.127.203.085.378.204.523.355.145.152.257.334.337.548\" id=\"path286\" fill=\"#fff\"/></g><g id=\"g288\" transform=\"translate(101.21 84.846)\"><path d=\"M0 0a.616.616 0 0 0-.455-.17.857.857 0 0 0-.393.09c-.118.06-.235.142-.352.245l-.33-.43c.143-.137.305-.244.485-.322.18-.079.378-.118.595-.118.174 0 .334.028.48.082a1.1 1.1 0 0 1 .38.238c.107.103.19.228.247.373.059.145.088.307.088.487v.01C.745.672.716.833.657.97a.905.905 0 0 1-.237.338.98.98 0 0 1-.348.197 1.347 1.347 0 0 1-.422.065c-.096 0-.18-.008-.253-.023a1.73 1.73 0 0 1-.211-.057l.054.835H.601v.525H-1.25l-.095-1.7.34-.225c.073.037.153.068.24.093.087.024.183.037.29.037A.688.688 0 0 0-.013.9.538.538 0 0 0 .17.465v-.01A.616.616 0 0 0 0 0\" id=\"path290\" fill=\"#fff\"/></g><g id=\"g292\" transform=\"translate(47.855 40.792)\"><path d=\"M0 0l.55 1.545L1.1 0H0zm.253 2.397l-1.414-3.872h.643l.32.909h1.496l.318-.909h.666L.868 2.397H.253z\" id=\"path294\" fill=\"#fff\"/></g><g id=\"g296\" transform=\"translate(51.584 39.835)\"><path d=\"M0 0a.605.605 0 0 0-.333.097.806.806 0 0 0-.258.275c-.072.12-.127.266-.165.437-.039.17-.057.365-.057.582v.045c0 .433.073.772.219 1.015.147.243.341.364.583.364a.595.595 0 0 0 .33-.096.835.835 0 0 0 .256-.276c.071-.12.126-.266.165-.439.038-.173.058-.366.058-.58V1.38C.798.945.726.607.58.364.436.121.242 0 0 0m1.054-.036c.126.171.224.376.294.616.069.24.104.507.104.8v.06c0 .294-.035.561-.104.801a1.92 1.92 0 0 1-.294.615 1.36 1.36 0 0 1-.457.397A1.258 1.258 0 0 1 0 3.394c-.224 0-.426-.048-.604-.144a1.389 1.389 0 0 1-.46-.398 1.918 1.918 0 0 1-.294-.62 2.855 2.855 0 0 1-.105-.796v-.061c0-.294.034-.561.102-.801.068-.24.165-.445.292-.616A1.267 1.267 0 0 1-.011-.578c.224 0 .425.048.605.143.179.095.333.228.46.399\" id=\"path298\" fill=\"#fff\"/></g><g id=\"g300\" transform=\"translate(100.184 93.845)\"><path d=\"M0 0c-.977 0-1.771.794-1.771 1.771 0 .502.209.968.591 1.311l.118.106V10.7c0 .586.476 1.063 1.062 1.063.586 0 1.062-.477 1.062-1.063V3.188l.118-.106c.382-.343.591-.809.591-1.311C1.771.794.977 0 0 0m0 12.472A1.773 1.773 0 0 1-1.771 10.7V3.497a2.474 2.474 0 0 1-.709-1.726A2.483 2.483 0 0 1 0-.709a2.483 2.483 0 0 1 2.48 2.48c0 .643-.256 1.262-.709 1.726V10.7c0 .977-.794 1.772-1.771 1.772\" id=\"path302\" fill=\"#fff\"/></g><g id=\"g304\" transform=\"translate(100.822 96.78)\"><path d=\"M0 0v5.12h-1.275V0a1.332 1.332 0 0 1-.708-1.164 1.347 1.347 0 0 1 2.692 0C.709-.656.416-.229 0 0\" id=\"path306\" fill=\"#fff\"/></g><g id=\"g308\" transform=\"translate(51.533 93.743)\"><path d=\"M0 0a5.332 5.332 0 0 0-4.49 2.48A5.33 5.33 0 0 0 0 4.96a5.33 5.33 0 0 0 4.491-2.48A5.334 5.334 0 0 0 0 0m5.211 2.303l.103.177-.103.178A6.04 6.04 0 0 1 0 5.669a6.042 6.042 0 0 1-5.211-3.011l-.103-.178.103-.177A6.044 6.044 0 0 1 0-.709a6.043 6.043 0 0 1 5.211 3.012\" id=\"path310\" fill=\"#fff\"/></g><g id=\"g312\" transform=\"translate(51.533 95.16)\"><path d=\"M0 0a1.062 1.062 0 1 0 0 2.124A1.062 1.062 0 0 0 0 0m0 3.189a2.126 2.126 0 1 1 0-4.252 2.126 2.126 0 0 1 0 4.252\" id=\"path314\" fill=\"#fff\"/></g><g id=\"g316\" transform=\"translate(98.7 43.228)\"><path d=\"M0 0a.355.355 0 0 1-.354-.354c0-.977.794-1.772 1.771-1.772.977 0 1.771.795 1.771 1.772 0 .284.111.55.313.751l1.421 1.421c.601.603.933 1.404.933 2.255 0 .852-.332 1.653-.934 2.256-1.205 1.203-3.305 1.203-4.51 0a3.173 3.173 0 0 1-.934-2.256.355.355 0 0 1 .709 0c0 .662.257 1.285.727 1.754.936.938 2.569.937 3.507.001.469-.47.726-1.093.726-1.755A2.46 2.46 0 0 0 4.42 2.32L2.999.899a1.765 1.765 0 0 1-.52-1.253 1.064 1.064 0 0 0-2.125 0A.355.355 0 0 1 0 0\" id=\"path318\" fill=\"#fff\"/></g><g id=\"g320\" transform=\"translate(99.594 45.815)\"><path d=\"M0 0a.355.355 0 0 1-.354-.354v-.522a.355.355 0 0 1 .708 0v.218c.531.153.92.644.92 1.224 0 .554-.428 1.023-.892 1.2a1.418 1.418 0 0 0 2.806-.28.355.355 0 0 1 .709 0 2.129 2.129 0 0 1-2.126 2.126A2.129 2.129 0 0 1-.354 1.486c0-.195.159-.354.354-.354.213 0 .565-.274.565-.566A.566.566 0 0 0 0 0\" id=\"path322\" fill=\"#fff\"/></g><g id=\"g324\" transform=\"translate(54.315 41.913)\"><path d=\"M0 0v-5.125a1.867 1.867 0 0 1-.749.084c-.826-.072-1.497-.613-1.497-1.209 0-.595.671-1.019 1.497-.946.827.072 1.498.613 1.498 1.209v4.479l3.674.913v-3.244a1.847 1.847 0 0 1-.749.084c-.826-.072-1.496-.613-1.496-1.209 0-.595.67-1.018 1.496-.946.827.072 1.497.613 1.497 1.208v5.988l-.001-.001L0 0z\" id=\"path326\" fill=\"#fff\"/></g><g id=\"g328\" transform=\"translate(35.175 70.194)\"><path d=\"M0 0v9.579l-5.98-4.79L0 0z\" id=\"path330\" fill=\"#fff\"/></g><g id=\"g332\" transform=\"translate(66.982 86.45)\"><path d=\"M0 0h.571c.199 0 .351-.045.459-.135.109-.09.162-.225.162-.405v-.009a.508.508 0 0 0-.162-.396c-.108-.099-.263-.149-.468-.149H0V0zm0-1.566h.504c.015 0 .025.001.031.004l.671-1.116h.603l-.743 1.22c.192.069.349.179.47.331.122.151.183.348.183.591v.018c0 .144-.023.275-.068.392a.85.85 0 0 1-.193.301.964.964 0 0 1-.358.221 1.433 1.433 0 0 1-.484.076H-.522v-3.15H0v1.112z\" id=\"path334\" fill=\"#fff\"/></g><g id=\"g336\" transform=\"translate(70.986 84.246)\"><path d=\"M0 0h-1.489v.877h1.301v.473h-1.301v.855h1.467v.472h-1.985v-3.15H0V0z\" id=\"path338\" fill=\"#fff\"/></g><g id=\"g340\" transform=\"translate(72.649 84.317)\"><path d=\"M0 0a.54.54 0 0 0-.362-.112.924.924 0 0 0-.452.108c-.134.071-.259.16-.376.265l-.315-.391c.171-.16.353-.275.544-.347.192-.072.391-.108.595-.108.146 0 .282.022.407.065a.992.992 0 0 1 .323.183.806.806 0 0 1 .214.285.887.887 0 0 1 .077.376v.009a.728.728 0 0 1-.21.551c-.07.074-.158.14-.264.2A2.93 2.93 0 0 1-.2 1.26a3.047 3.047 0 0 0-.328.142 1.045 1.045 0 0 0-.199.126.326.326 0 0 0-.098.128.377.377 0 0 0-.028.149v.004c0 .105.041.192.122.261a.505.505 0 0 0 .337.103.858.858 0 0 0 .368-.083c.118-.055.231-.127.338-.214l.298.401a1.455 1.455 0 0 1-.99.369c-.147 0-.281-.021-.403-.065a.953.953 0 0 1-.315-.183.823.823 0 0 1-.281-.634v-.009c0-.126.02-.235.059-.328a.721.721 0 0 1 .173-.25c.076-.074.17-.14.283-.198C-.751.92-.62.862-.47.806c.126-.045.228-.088.306-.129A.851.851 0 0 0 .019.556.345.345 0 0 0 .133.292V.288A.36.36 0 0 0 0 0\" id=\"path342\" fill=\"#fff\"/></g><g id=\"g344\" transform=\"translate(73.997 85.123)\"><path d=\"M0 0h1.301v.472H0v.856h1.467V1.8H-.518v-3.15h2.007v.473H0V0z\" id=\"path346\" fill=\"#fff\"/></g><g id=\"g348\" transform=\"translate(75.63 86.437)\"><path d=\"M0 0h.828v-2.664h.523V0h.828v.486H0V0z\" id=\"path350\" fill=\"#fff\"/></g><g id=\"g352\" transform=\"translate(64.67 58.292)\"><path d=\"M0 0a2.482 2.482 0 0 0-2.48 2.48A2.482 2.482 0 0 0 0 4.96a2.482 2.482 0 0 0 2.48-2.48A2.482 2.482 0 0 0 0 0m6.236 2.48L4.4 3.54v-.705H3.153A3.171 3.171 0 0 1 .354 5.633v1.248h.706L0 8.717l-1.06-1.836h.706V5.633c-1.591-.179-2.835-1.516-2.835-3.153A3.193 3.193 0 0 1 0-.709c1.637 0 2.974 1.245 3.153 2.835H4.4V1.42l1.836 1.06z\" id=\"path354\" fill=\"#fff\"/></g><g id=\"g356\" transform=\"translate(63.577 61.92)\"><path d=\"M0 0h1.498L-.05-2.291v-.387h2.201v.473H.603L2.151.086v.387H0V0z\" id=\"path358\" fill=\"#fff\"/></g><g id=\"g360\" transform=\"translate(64.426 67.482)\"><path d=\"M0 0h.522v1.26L1.58 3.15H.999L.266 1.786-.463 3.15h-.599L0 1.256V0z\" id=\"path362\" fill=\"#fff\"/></g><g id=\"g364\" transform=\"translate(72.609 62.314)\"><path d=\"M0 0l-.648-1.135L-1.287 0h-.594l.922-1.544-.963-1.606h.581l.684 1.201.684-1.201h.598l-.972 1.611L.58 0H0z\" id=\"path366\" fill=\"#fff\"/></g><g id=\"g368\" transform=\"translate(71.518 34.28)\"><path d=\"M0 0c0-.187-.025-.354-.077-.505a1.125 1.125 0 0 0-.215-.38.921.921 0 0 0-.335-.237 1.123 1.123 0 0 0-.437-.083h-.486v2.45h.486c.16 0 .305-.027.437-.082a.929.929 0 0 0 .335-.24A1.15 1.15 0 0 0-.077.54C-.025.391 0 .221 0 .03V0zm.143 1.293c-.145.151-.32.269-.523.353-.203.083-.43.125-.68.125h-1.07v-3.5h1.07c.25 0 .477.042.68.126A1.532 1.532 0 0 1 .48-.7c.081.214.121.449.121.705v.04c0 .257-.04.491-.121.703-.08.211-.192.393-.337.545\" id=\"path370\" fill=\"#fff\"/></g><g id=\"g372\" transform=\"translate(72.313 35.525)\"><path d=\"M0 0h1.525L.181-2.975h.63L2.155.09v.435H0V0z\" id=\"path374\" fill=\"#fff\"/></g><g id=\"g376\" transform=\"translate(54.161 117.39)\"><path d=\"M0 0v2.45h.485c.16 0 .306-.028.437-.082a.892.892 0 0 0 .335-.241c.092-.105.164-.232.216-.382.051-.15.077-.32.077-.51v-.03c0-.186-.026-.355-.077-.505a1.107 1.107 0 0 0-.216-.38.905.905 0 0 0-.335-.237A1.12 1.12 0 0 0 .485 0H0zm1.17-.397a1.516 1.516 0 0 1 .86.902c.08.213.12.449.12.705v.04c0 .257-.04.491-.12.703-.08.211-.193.393-.338.545a1.495 1.495 0 0 1-.522.352c-.203.084-.43.125-.68.125H-.58v-3.5H.49c.25 0 .477.043.68.128\" id=\"path378\" fill=\"#fff\"/></g><g id=\"g380\" transform=\"translate(57.041 117.86)\"><path d=\"M0 0c0 .083.016.16.047.23C.079.3.123.358.18.405a.64.64 0 0 0 .197.11c.075.027.158.04.248.04A.736.736 0 0 0 .87.515a.617.617 0 0 0 .197-.11.475.475 0 0 0 .13-.175.548.548 0 0 0 .048-.23v-.01a.513.513 0 0 0-.168-.395.64.64 0 0 0-.452-.155.65.65 0 0 0-.455.155A.512.512 0 0 0 0-.01V0zm.09 1.567c0 .149.05.27.15.364.1.092.228.139.385.139a.546.546 0 0 0 .385-.139c.1-.094.15-.215.15-.364v-.009a.504.504 0 0 0-.153-.384.533.533 0 0 0-.382-.144.531.531 0 0 0-.383.147.505.505 0 0 0-.152.381v.009zM-.229-.772c.105-.089.231-.157.377-.203a1.55 1.55 0 0 1 .475-.07c.169 0 .326.023.471.07.145.046.27.113.377.2a.931.931 0 0 1 .249.315c.06.123.09.262.09.415v.02a.825.825 0 0 1-.159.523A1.14 1.14 0 0 1 1.24.82c.14.076.253.178.34.305.087.126.13.285.13.475v.02a.871.871 0 0 1-.31.672 1.091 1.091 0 0 1-.343.193c-.131.047-.275.07-.432.07-.157 0-.302-.023-.435-.07a1.065 1.065 0 0 1-.345-.195.865.865 0 0 1-.31-.67V1.6c0-.19.044-.349.132-.475A1 1 0 0 1 .005.82 1.054 1.054 0 0 1-.408.498a.858.858 0 0 1-.157-.533V-.05c0-.15.03-.286.089-.408a.967.967 0 0 1 .247-.314\" id=\"path382\" fill=\"#fff\"/></g><g id=\"g388\" transform=\"translate(108.9 79.772)\"><path d=\"M0 0v-9.579L5.98-4.79 0 0z\" id=\"path390\" fill=\"#fff\"/></g><g id=\"g392\" transform=\"translate(114.408 33.542)\"><path d=\"M0 0c-.319.224-.829.582-.964.769C-.739.791-.133.622.243.52a.213.213 0 0 1 .111.41c-.905.246-1.56.423-1.742.037C-1.567.58-1.013.191-.24-.351c.318-.222.826-.58.961-.765C.504-1.14-.11-.97-.487-.867c-.905.246-1.561.423-1.742.037-.18-.387.375-.775 1.149-1.318.317-.223.825-.58.958-.765-.203-.025-.83.146-1.207.249a.214.214 0 0 1-.261-.149.212.212 0 0 1 .15-.261c.525-.143.965-.263 1.279-.263.226 0 .387.064.464.227.178.385-.374.773-1.145 1.313-.319.224-.829.582-.964.769.228.02.83-.147 1.207-.249.906-.246 1.561-.425 1.743-.038C1.325-.929.771-.54 0 0\" id=\"path394\" fill=\"#fff\"/></g><g id=\"g396\" transform=\"translate(59.07 82.946)\"><path d=\"M0 0a2.98 2.98 0 0 1-2.123-.88.285.285 0 0 1 .201-.484.28.28 0 0 1 .2.084c.92.92 2.525.919 3.444 0a.281.281 0 0 1 .401 0c.111.11.111.29 0 .401A2.982 2.982 0 0 1 0 0\" id=\"path398\" fill=\"#fff\"/></g><g id=\"g400\" transform=\"translate(57.908 81.105)\"><path d=\"M0 0a.285.285 0 0 1 0-.401.285.285 0 0 1 .401 0c.419.42 1.101.42 1.522 0a.282.282 0 0 1 .401 0c.11.111.11.291 0 .401C1.703.621.621.622 0 0\" id=\"path402\" fill=\"#fff\"/></g><g id=\"g404\" transform=\"translate(59.268 79.743)\"><path d=\"M0 0c.03.03.05.06.06.09.02.04.02.07.02.11C.08.28.05.35 0 .4a.18.18 0 0 1-.09.06C-.2.51-.32.48-.4.4A.297.297 0 0 1-.48.2c0-.08.03-.15.08-.2.05-.05.13-.08.2-.08.08 0 .15.03.2.08\" id=\"path406\" fill=\"#fff\"/></g><g id=\"g408\" transform=\"translate(86.712 80.94)\"><path d=\"M0 0c-.919-.919-2.522-.921-3.445 0a.283.283 0 1 1-.401-.401 2.986 2.986 0 0 1 2.123-.879C-.92-1.28-.166-.968.4-.4a.28.28 0 0 1 0 .4.282.282 0 0 1-.4 0\" id=\"path410\" fill=\"#fff\"/></g><g id=\"g412\" transform=\"translate(83.829 81.902)\"><path d=\"M0 0a.283.283 0 0 1 0-.401c.31-.31.722-.482 1.161-.482.44 0 .852.172 1.162.482.112.11.112.29 0 .401a.282.282 0 0 1-.4 0A1.102 1.102 0 0 0 .4 0 .283.283 0 0 1 0 0\" id=\"path414\" fill=\"#fff\"/></g><g id=\"g416\" transform=\"translate(85.188 82.463)\"><path d=\"M0 0c.03.03.05.06.061.09C.08.13.08.16.08.2c0 .04 0 .07-.019.11a.282.282 0 0 1-.46.09.293.293 0 0 1 0-.4A.293.293 0 0 1-.2-.08c.08 0 .15.03.2.08\" id=\"path418\" fill=\"#fff\"/></g><g id=\"g420\" transform=\"translate(33.251 75.005)\"><path d=\"M0 0l-.5 1.405L-1 0h1zm-.77 2.18h.56l1.285-3.52H.47l-.289.825H-1.18l-.29-.825h-.585L-.77 2.18z\" id=\"path422\"/></g><g id=\"g424\" transform=\"translate(112.124 74.267)\"><path d=\"M0 0a.43.43 0 0 1-.173.361c-.116.088-.284.132-.505.132h-.707v-.995h.733c.2 0 .359.042.476.127A.422.422 0 0 1 0-.01V0zm-.15 1.482a.413.413 0 0 1-.153.346c-.102.08-.249.12-.439.12h-.643v-.97h.608c.19 0 .342.042.457.125.113.083.17.206.17.37v.009zm-1.8.991H-.7c.19 0 .362-.026.517-.078a.938.938 0 0 0 .378-.223.801.801 0 0 0 .235-.591v-.015A.8.8 0 0 0 .107.897 1.314 1.314 0 0 0-.085.78 1.21 1.21 0 0 0 .393.488C.518.359.58.179.58-.054v-.02A.846.846 0 0 0 .237-.78a1.14 1.14 0 0 0-.392-.185 1.98 1.98 0 0 0-.51-.062H-1.95v3.5z\" id=\"path426\"/></g></g></g><g id=\"g428\" transform=\"translate(78.415 2.4)\"><path d=\"M0 0h-12.756\" id=\"path430\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g432\" transform=\"translate(60.7 12.32)\"><path d=\"M0 0v11.339\" id=\"path434\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g436\" transform=\"translate(60.7 23.659)\"><path d=\"M0 0h2.409\" id=\"path438\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g440\" transform=\"translate(63.108 23.659)\"><path d=\"M0 0v-7.086\" id=\"path442\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g444\" transform=\"translate(63.108 16.573)\"><path d=\"M0 0h3.969\" id=\"path446\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g448\" transform=\"translate(76.999 16.573)\"><path d=\"M0 0h3.969\" id=\"path450\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g452\" transform=\"translate(80.967 16.573)\"><path d=\"M0 0v7.086\" id=\"path454\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g456\" transform=\"translate(80.967 23.659)\"><path d=\"M0 0h2.409\" id=\"path458\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g460\" transform=\"translate(83.376 23.659)\"><path d=\"M0 0v-11.339\" id=\"path462\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g500\" transform=\"translate(79.124 128.025)\"><path d=\"M0 0h-2.268\" id=\"path502\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g504\" transform=\"translate(67.219 128.025)\"><path d=\"M0 0h-2.268\" id=\"path506\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g508\"><g id=\"g510\" clip-path=\"url(#clipPath512)\"><g id=\"g516\" transform=\"translate(82.81 140.78)\"><path d=\"M0 0v2.551\" id=\"path518\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g520\" transform=\"translate(82.81 143.332)\"><path d=\"M0 0h-21.543\" id=\"path522\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g524\" transform=\"translate(61.266 143.332)\"><path d=\"M0 0v-2.551\" id=\"path526\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g></g></g><g id=\"g616\" transform=\"translate(99.128 55.431)\"><path d=\"M0 0v8.504\" id=\"path618\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g620\" transform=\"translate(99.128 63.935)\"><path d=\"M0 0h11.338\" id=\"path622\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g624\" transform=\"translate(110.466 63.935)\"><path d=\"M0 0v-8.504\" id=\"path626\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g628\" transform=\"translate(110.466 55.431)\"><path d=\"M0 0h-11.338\" id=\"path630\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g640\" transform=\"translate(102.955 60.545)\"><path d=\"M0 0a.861.861 0 1 0 .001-1.723A.861.861 0 0 0 0 0z\" id=\"path642\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\"/></g><g id=\"g656\" transform=\"translate(74.59 63.324)\"><path d=\"M0 0h2.268\" id=\"path658\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g660\" transform=\"translate(76.857 63.324)\"><path d=\"M0 0v.993\" id=\"path662\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g664\" transform=\"translate(74.59 72.962)\"><path d=\"M0 0h2.268\" id=\"path666\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g668\" transform=\"translate(76.857 72.962)\"><path d=\"M0 0v-.992\" id=\"path670\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g672\" transform=\"translate(67.219 71.97)\"><path d=\"M0 0v.992\" id=\"path674\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g676\" transform=\"translate(67.219 72.962)\"><path d=\"M0 0h2.268\" id=\"path678\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g680\" transform=\"translate(69.486 63.324)\"><path d=\"M0 0h-2.268\" id=\"path682\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g684\" transform=\"translate(67.219 63.324)\"><path d=\"M0 0v.993\" id=\"path686\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g692\" transform=\"translate(89.137 134.743)\"><path d=\"M0 0h1.08H0m-.324-.432h1.728-1.728M.54.72L1.62-.72H-.54L.54.72\" id=\"path694\" fill=\"none\" stroke=\"#fff\" stroke-width=\".432\" stroke-linecap=\"round\"/></g><g id=\"g976\" transform=\"translate(53.498 134.023)\"><path d=\"M0 0h1.08H0m-.324-.432h1.728-1.728M.54.72L1.62-.72H-.54L.54.72\" id=\"path978\" fill=\"none\" stroke=\"#fff\" stroke-width=\".432\" stroke-linecap=\"round\"/></g><g id=\"g1040\" transform=\"translate(77.99 74.259)\"><path d=\"M0 0h-11.906\" id=\"path1042\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1044\" transform=\"translate(66.085 82.907)\"><path d=\"M0 0h11.906\" id=\"path1046\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1048\" transform=\"translate(51.238 51.989)\"><path d=\"M0 0h2.268\" id=\"path1050\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1052\" transform=\"translate(52.373 53.121)\"><path d=\"M0 0v-2.267\" id=\"path1054\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1056\" transform=\"translate(38.908 59.5)\"><path d=\"M0 0v-10.347\" id=\"path1058\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1060\" transform=\"translate(43.868 44.193)\"><path d=\"M0 0h10.205\" id=\"path1062\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1072\" transform=\"translate(51.238 57.658)\"><path d=\"M0 0h2.268\" id=\"path1074\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1076\" transform=\"translate(52.373 53.992)\"><path d=\"M0 0a2.004 2.004 0 1 0 0-4.007A2.004 2.004 0 0 0 0 0z\" id=\"path1078\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\"/></g><g id=\"g1080\" transform=\"translate(52.373 59.663)\"><path d=\"M0 0a2.004 2.004 0 1 0 0-4.008A2.004 2.004 0 0 0 0 0z\" id=\"path1082\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\"/></g><g id=\"g1084\" transform=\"translate(53.312 66.479)\"><path d=\"M0 0h-18.708\" id=\"path1086\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1088\" transform=\"translate(34.603 83.487)\"><path d=\"M0 0h18.708\" id=\"path1090\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1092\" transform=\"translate(53.312 78.384)\"><path d=\"M0 0v-6.803\" id=\"path1094\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1096\" transform=\"translate(34.603 71.58)\"><path d=\"M0 0v6.803\" id=\"path1098\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1100\" transform=\"translate(43.958 79.244)\"><path d=\"M0 0a4.262 4.262 0 1 0 0-8.523A4.262 4.262 0 0 0 0 0z\" id=\"path1102\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\"/></g><g id=\"g1104\" transform=\"translate(43.958 77.818)\"><path d=\"M0 0a2.835 2.835 0 1 0 0-5.67A2.835 2.835 0 0 0 0 0z\" id=\"path1106\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\"/></g><g id=\"g1108\" transform=\"translate(109.471 66.479)\"><path d=\"M0 0h-18.708\" id=\"path1110\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1112\" transform=\"translate(90.763 83.487)\"><path d=\"M0 0h18.708\" id=\"path1114\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1116\" transform=\"translate(109.471 78.384)\"><path d=\"M0 0v-6.803\" id=\"path1118\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1120\" transform=\"translate(90.763 71.58)\"><path d=\"M0 0v6.803\" id=\"path1122\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g id=\"g1124\" transform=\"translate(100.118 79.244)\"><path d=\"M0 0a4.262 4.262 0 1 0 0-8.523A4.262 4.262 0 0 0 0 0z\" id=\"path1126\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\"/></g><g id=\"g1128\" transform=\"translate(100.118 77.818)\"><path d=\"M0 0a2.835 2.835 0 1 0 0-5.668A2.835 2.835 0 0 0 0 0z\" id=\"path1130\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\"/></g><g id=\"g1132\" transform=\"translate(61.833 51.503)\"><path d=\"M0 0h20.41\" id=\"path1134\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1136\" transform=\"translate(82.243 51.503)\"><path d=\"M0 0v-9.921\" id=\"path1138\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1140\" transform=\"translate(82.243 41.582)\"><path d=\"M0 0h-20.41\" id=\"path1142\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1144\" transform=\"translate(61.833 41.582)\"><path d=\"M0 0v9.921\" id=\"path1146\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1164\" transform=\"translate(87.743 21.342)\"><path d=\"M0 0h-2.25\" id=\"path1166\" fill=\"none\" stroke=\"#fff\" stroke-width=\".864\" stroke-linecap=\"round\"/></g><g id=\"g1168\" transform=\"translate(86.618 23.558)\"><path d=\"M0 0a2.215 2.215 0 1 0 .002-4.43A2.215 2.215 0 0 0 0 0z\" id=\"path1170\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\"/></g><g id=\"g1172\" transform=\"translate(63.392 109.128)\"><path d=\"M0 0h-1.559\" id=\"path1174\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1176\" transform=\"translate(61.833 109.128)\"><path d=\"M0 0v-1.559\" id=\"path1178\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1180\" transform=\"translate(80.683 109.128)\"><path d=\"M0 0h1.56\" id=\"path1182\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1184\" transform=\"translate(82.243 109.128)\"><path d=\"M0 0v-1.559\" id=\"path1186\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1188\" transform=\"translate(82.243 90.277)\"><path d=\"M0 0v-1.559\" id=\"path1190\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1192\" transform=\"translate(82.243 88.718)\"><path d=\"M0 0h-1.56\" id=\"path1194\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1196\" transform=\"translate(61.526 89.563)\"><path d=\"M0 0h.648H0m0-.36h1.008H0m0-.36h1.368H0m0-.36h1.728H0m1.872-.144H0V.648l1.872-1.872\" id=\"path1198\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1200\" transform=\"translate(58.763 20.983)\"><path d=\"M0 0h-2.25\" id=\"path1202\" fill=\"none\" stroke=\"#fff\" stroke-width=\".864\" stroke-linecap=\"round\"/></g><g id=\"g1204\" transform=\"translate(57.638 22.108)\"><path d=\"M0 0v-2.25\" id=\"path1206\" fill=\"none\" stroke=\"#fff\" stroke-width=\".864\" stroke-linecap=\"round\"/></g><g id=\"g1208\" transform=\"translate(57.638 23.199)\"><path d=\"M0 0a2.216 2.216 0 1 0 0-4.432A2.216 2.216 0 0 0 0 0z\" id=\"path1210\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\"/></g><g id=\"g1212\" transform=\"translate(90.263 58.185)\"><path d=\"M0 0h5.669\" id=\"path1214\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1216\" transform=\"translate(90.263 64.42)\"><path d=\"M0 0h5.669\" id=\"path1218\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g id=\"g1288\" transform=\"translate(6.338 77.359)\"><path d=\"M0 0a5.256 5.256 0 1 0-.001-10.511A5.256 5.256 0 0 0 0 0z\" id=\"path1290\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1292\" transform=\"translate(104.797 134.405)\"><path d=\"M0 0a5.256 5.256 0 1 0 0-10.512A5.256 5.256 0 0 0 0 0z\" id=\"path1294\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><path d=\"M83.944 1.832h-4.535v9.638h4.535V1.832z\" id=\"path1300\" fill=\"#9a916c\"/><path d=\"M64.667 1.832h-4.535v9.638h4.535V1.832z\" id=\"path1302\" fill=\"#9a916c\"/><path d=\"M75.581 133.977h-2.834v5.669h2.834v-5.669z\" id=\"path1340\" fill=\"#9a916c\"/><path d=\"M71.329 133.977h-2.834v5.669h2.834v-5.669z\" id=\"path1342\" fill=\"#9a916c\"/><path d=\"M72.605 127.033h-1.134v3.827h1.134v-3.827z\" id=\"path1344\" fill=\"#9a916c\"/><path d=\"M74.447 127.033h-1.134v3.827h1.134v-3.827z\" id=\"path1346\" fill=\"#9a916c\"/><path d=\"M68.919 127.033h-1.134v3.827h1.134v-3.827z\" id=\"path1348\" fill=\"#9a916c\"/><path d=\"M70.762 127.033h-1.134v3.827h1.134v-3.827z\" id=\"path1350\" fill=\"#9a916c\"/><g id=\"g1352\" transform=\"translate(81.392 130.085)\"><path d=\"M0 0a1.493 1.493 0 1 0 0-2.987A1.493 1.493 0 0 0 0 0z\" id=\"path1354\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\".72\"/></g><g id=\"g1356\" transform=\"translate(79.899 128.592)\"><path d=\"M0 0a1.493 1.493 0 1 1 2.987-.004V0A1.494 1.494 0 1 1 0 .004V0zm0 1.494h4.481v-2.988H0v2.988z\" id=\"path1358\" fill=\"#9a916c\"/></g><g id=\"g1360\" transform=\"translate(62.684 130.085)\"><path d=\"M0 0a1.494 1.494 0 1 0 .001-2.987A1.494 1.494 0 0 0 0 0z\" id=\"path1362\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\".72\"/></g><g id=\"g1364\" transform=\"translate(61.19 128.592)\"><path d=\"M0 0a1.494 1.494 0 0 1 2.988-.004V0A1.494 1.494 0 0 1 0 0m-1.494 1.494h4.481v-2.988h-4.481v2.988z\" id=\"path1366\" fill=\"#9a916c\"/></g><g id=\"g1368\" transform=\"translate(82.243 138.876)\"><path d=\"M0 0a2.348 2.348 0 1 0 0-4.695A2.348 2.348 0 0 0 0 0z\" id=\"path1370\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"2.144\"/></g><path d=\"M79.895 138.876h4.695v-4.695h-4.695v4.695z\" id=\"path1372\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"2.144\"/><g id=\"g1374\" transform=\"translate(61.833 138.876)\"><path d=\"M0 0a2.348 2.348 0 1 0 0-4.697A2.348 2.348 0 0 0 0 0z\" id=\"path1376\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"2.144\"/></g><path d=\"M59.485 138.876h4.695v-4.695h-4.695v4.695z\" id=\"path1378\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"2.144\"/><path d=\"M76.29 127.033h-1.134v3.827h1.134v-3.827z\" id=\"path1380\" fill=\"#9a916c\"/><g id=\"g1398\" transform=\"translate(133.87 54.906)\"><path d=\"M0 0a5.256 5.256 0 1 0 0-10.512A5.256 5.256 0 0 0 0 0z\" id=\"path1400\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1406\" transform=\"translate(39.098 134.225)\"><path d=\"M0 0a5.255 5.255 0 1 0 0-10.51A5.255 5.255 0 0 0 0 0z\" id=\"path1408\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1410\" transform=\"translate(137.738 77.359)\"><path d=\"M0 0a5.256 5.256 0 1 0-.001-10.511A5.256 5.256 0 0 0 0 0z\" id=\"path1412\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1414\" transform=\"translate(39.278 20.31)\"><path d=\"M0 0a5.255 5.255 0 1 0 0-10.51A5.255 5.255 0 0 0 0 0z\" id=\"path1416\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><path d=\"M107.916 60.249h-2.692v1.275h2.692v-1.275z\" id=\"path1418\" fill=\"#9a916c\"/><path d=\"M104.372 60.249h-2.692v1.275h2.692v-1.275z\" id=\"path1420\" fill=\"#9a916c\"/><path d=\"M104.372 57.84h-2.692v1.276h2.692V57.84z\" id=\"path1422\" fill=\"#9a916c\"/><path d=\"M107.916 57.84h-2.692v1.276h2.692V57.84z\" id=\"path1424\" fill=\"#9a916c\"/><path d=\"M109.121 61.384h1.275v-3.401h-1.275v3.401z\" id=\"path1426\" fill=\"#9a916c\"/><path d=\"M107.916 62.588h-6.236v1.275h6.236v-1.275z\" id=\"path1428\" fill=\"#9a916c\"/><path d=\"M99.2 61.383h1.275v-3.401H99.2v3.401z\" id=\"path1430\" fill=\"#9a916c\"/><path d=\"M107.916 55.502h-6.236v1.275h6.236v-1.275z\" id=\"path1432\" fill=\"#9a916c\"/><path d=\"M76.574 64.953h-1.417v.709h1.417v-.709z\" id=\"path1446\" fill=\"#9a916c\"/><path d=\"M76.574 66.371h-1.417v.709h1.417v-.709z\" id=\"path1448\" fill=\"#9a916c\"/><path d=\"M76.574 67.787h-1.417v.709h1.417v-.709z\" id=\"path1450\" fill=\"#9a916c\"/><path d=\"M76.574 69.205h-1.417v.709h1.417v-.709z\" id=\"path1452\" fill=\"#9a916c\"/><path d=\"M76.574 70.623h-1.417v.708h1.417v-.708z\" id=\"path1454\" fill=\"#9a916c\"/><path d=\"M73.809 71.261H73.1v1.417h.709v-1.417z\" id=\"path1456\" fill=\"#9a916c\"/><path d=\"M72.392 71.261h-.708v1.417h.708v-1.417z\" id=\"path1458\" fill=\"#9a916c\"/><path d=\"M70.975 71.261h-.708v1.417h.708v-1.417z\" id=\"path1460\" fill=\"#9a916c\"/><path d=\"M67.502 71.332h1.417v-.708h-1.417v.708z\" id=\"path1462\" fill=\"#9a916c\"/><path d=\"M67.502 69.914h1.417v-.709h-1.417v.709z\" id=\"path1464\" fill=\"#9a916c\"/><path d=\"M67.502 68.497h1.417v-.709h-1.417v.709z\" id=\"path1466\" fill=\"#9a916c\"/><path d=\"M67.502 67.079h1.417v-.709h-1.417v.709z\" id=\"path1468\" fill=\"#9a916c\"/><path d=\"M67.502 65.662h1.417v-.708h-1.417v.708z\" id=\"path1470\" fill=\"#9a916c\"/><path d=\"M70.266 65.025h.708v-1.417h-.708v1.417z\" id=\"path1472\" fill=\"#9a916c\"/><path d=\"M71.683 65.025h.709v-1.418h-.709v1.418z\" id=\"path1474\" fill=\"#9a916c\"/><path d=\"M73.1 65.025h.709v-1.417H73.1v1.417z\" id=\"path1476\" fill=\"#9a916c\"/><g id=\"g1478\" transform=\"translate(133.87 99.81)\"><path d=\"M0 0a5.256 5.256 0 1 0 0-10.513A5.256 5.256 0 0 0 0 0z\" id=\"path1480\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1482\" transform=\"translate(122.46 119.684)\"><path d=\"M0 0a5.256 5.256 0 1 0 0-10.512A5.256 5.256 0 0 0 0 0z\" id=\"path1484\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1486\" transform=\"translate(122.46 35.033)\"><path d=\"M0 0a5.256 5.256 0 1 0 0-10.512A5.256 5.256 0 0 0 0 0z\" id=\"path1488\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><path d=\"M87.977 133.467h3.401v-3.401h-3.401v3.401z\" id=\"path1490\" fill=\"#9a916c\"/><path d=\"M87.977 139.42h3.401v-3.401h-3.401v3.401z\" id=\"path1492\" fill=\"#9a916c\"/><path d=\"M52.337 132.747h3.401v-3.402h-3.401v3.402z\" id=\"path1638\" fill=\"#9a916c\"/><path d=\"M52.337 138.7h3.401v-3.402h-3.401v3.402z\" id=\"path1640\" fill=\"#9a916c\"/><g id=\"g1696\" transform=\"translate(10.385 54.186)\"><path d=\"M0 0a5.255 5.255 0 1 0 0-10.51A5.255 5.255 0 0 0 0 0z\" id=\"path1698\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1700\" transform=\"translate(21.615 119.504)\"><path d=\"M0 0a5.255 5.255 0 1 0 0-10.51A5.255 5.255 0 0 0 0 0z\" id=\"path1702\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1704\" transform=\"translate(10.205 99.81)\"><path d=\"M0 0a5.256 5.256 0 1 0-.001-10.511A5.256 5.256 0 0 0 0 0z\" id=\"path1706\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><path d=\"M55.58 78.951h-5.669v3.402h5.669v-3.402z\" id=\"path1718\" fill=\"#9a916c\"/><path d=\"M38.005 78.951h-5.669v3.402h5.669v-3.402z\" id=\"path1720\" fill=\"#9a916c\"/><path d=\"M55.58 67.613h-5.669v3.401h5.669v-3.401z\" id=\"path1722\" fill=\"#9a916c\"/><path d=\"M38.005 67.613h-5.669v3.401h5.669v-3.401z\" id=\"path1724\" fill=\"#9a916c\"/><path d=\"M111.74 78.951h-5.669v3.402h5.669v-3.402z\" id=\"path1726\" fill=\"#9a916c\"/><path d=\"M94.165 78.951h-5.67v3.402h5.67v-3.402z\" id=\"path1728\" fill=\"#9a916c\"/><path d=\"M111.74 67.613h-5.669v3.401h5.669v-3.401z\" id=\"path1730\" fill=\"#9a916c\"/><path d=\"M94.165 67.613h-5.67v3.401h5.67v-3.401z\" id=\"path1732\" fill=\"#9a916c\"/><path d=\"M63.534 56.606h2.835v-4.252h-2.835v4.252z\" id=\"path1734\" fill=\"#9a916c\"/><path d=\"M63.534 40.732h2.835V36.48h-2.835v4.252z\" id=\"path1736\" fill=\"#9a916c\"/><path d=\"M70.621 56.606h2.834v-4.252h-2.834v4.252z\" id=\"path1738\" fill=\"#9a916c\"/><path d=\"M70.621 40.732h2.834V36.48h-2.834v4.252z\" id=\"path1740\" fill=\"#9a916c\"/><path d=\"M77.707 56.606h2.835v-4.252h-2.835v4.252z\" id=\"path1742\" fill=\"#9a916c\"/><path d=\"M77.707 40.732h2.835V36.48h-2.835v4.252z\" id=\"path1744\" fill=\"#9a916c\"/><g id=\"g1750\" transform=\"translate(22.334 34.313)\"><path d=\"M0 0a5.256 5.256 0 1 0 0-10.511A5.256 5.256 0 0 0 0 0z\" id=\"path1752\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1754\" transform=\"translate(115.598 125.36)\"><path d=\"M0 0a1.418 1.418 0 1 0-.002-2.836A1.418 1.418 0 0 0 0 0\" id=\"path1756\" fill=\"#9a916c\"/></g><g id=\"g1758\" transform=\"translate(28.118 20.6)\"><path d=\"M0 0a1.417 1.417 0 1 0 0-2.835A1.417 1.417 0 0 0 0 0\" id=\"path1760\" fill=\"#9a916c\"/></g><path d=\"M63.888 90.136h.708V88.01h-.708v2.126z\" id=\"path1762\" fill=\"#9a916c\"/><path d=\"M65.305 90.135h.709v-2.126h-.709v2.126z\" id=\"path1764\" fill=\"#9a916c\"/><path d=\"M66.723 90.135h.708v-2.126h-.708v2.126z\" id=\"path1766\" fill=\"#9a916c\"/><path d=\"M68.14 90.135h.708v-2.126h-.708v2.126z\" id=\"path1768\" fill=\"#9a916c\"/><path d=\"M69.558 90.136h.708V88.01h-.708v2.126z\" id=\"path1770\" fill=\"#9a916c\"/><path d=\"M70.975 90.135h.708v-2.126h-.708v2.126z\" id=\"path1772\" fill=\"#9a916c\"/><path d=\"M72.392 90.135h.709v-2.126h-.709v2.126z\" id=\"path1774\" fill=\"#9a916c\"/><path d=\"M73.809 90.135h.709v-2.126h-.709v2.126z\" id=\"path1776\" fill=\"#9a916c\"/><path d=\"M75.227 90.136h.708V88.01h-.708v2.126z\" id=\"path1778\" fill=\"#9a916c\"/><path d=\"M76.644 90.136h.709V88.01h-.709v2.126z\" id=\"path1780\" fill=\"#9a916c\"/><path d=\"M78.061 90.136h.709V88.01h-.709v2.126z\" id=\"path1782\" fill=\"#9a916c\"/><path d=\"M79.479 90.135h.708v-2.126h-.708v2.126z\" id=\"path1784\" fill=\"#9a916c\"/><path d=\"M82.952 90.773h-2.126v.708h2.126v-.708z\" id=\"path1786\" fill=\"#9a916c\"/><path d=\"M82.952 92.191h-2.126v.709h2.126v-.709z\" id=\"path1788\" fill=\"#9a916c\"/><path d=\"M82.952 93.608h-2.126v.708h2.126v-.708z\" id=\"path1790\" fill=\"#9a916c\"/><path d=\"M82.952 95.025h-2.126v.709h2.126v-.709z\" id=\"path1792\" fill=\"#9a916c\"/><path d=\"M82.952 96.443h-2.126v.708h2.126v-.708z\" id=\"path1794\" fill=\"#9a916c\"/><path d=\"M82.952 97.86h-2.126v.708h2.126v-.708z\" id=\"path1796\" fill=\"#9a916c\"/><path d=\"M82.952 99.277h-2.126v.708h2.126v-.708z\" id=\"path1798\" fill=\"#9a916c\"/><path d=\"M82.952 100.695h-2.126v.708h2.126v-.708z\" id=\"path1800\" fill=\"#9a916c\"/><path d=\"M82.952 102.112h-2.126v.708h2.126v-.708z\" id=\"path1802\" fill=\"#9a916c\"/><path d=\"M82.952 103.529h-2.126v.708h2.126v-.708z\" id=\"path1804\" fill=\"#9a916c\"/><path d=\"M82.952 104.947h-2.126v.708h2.126v-.708z\" id=\"path1806\" fill=\"#9a916c\"/><path d=\"M82.952 106.364h-2.126v.709h2.126v-.709z\" id=\"path1808\" fill=\"#9a916c\"/><path d=\"M80.187 107.71h-.709v2.126h.709v-2.126z\" id=\"path1810\" fill=\"#9a916c\"/><path d=\"M78.77 107.71h-.709v2.126h.709v-2.126z\" id=\"path1812\" fill=\"#9a916c\"/><path d=\"M77.353 107.71h-.709v2.126h.709v-2.126z\" id=\"path1814\" fill=\"#9a916c\"/><path d=\"M75.936 107.71h-.709v2.126h.709v-2.126z\" id=\"path1816\" fill=\"#9a916c\"/><path d=\"M74.518 107.71h-.709v2.126h.709v-2.126z\" id=\"path1818\" fill=\"#9a916c\"/><path d=\"M73.101 107.71h-.709v2.126h.709v-2.126z\" id=\"path1820\" fill=\"#9a916c\"/><path d=\"M71.684 107.71h-.708v2.126h.708v-2.126z\" id=\"path1822\" fill=\"#9a916c\"/><path d=\"M70.267 107.71h-.708v2.126h.708v-2.126z\" id=\"path1824\" fill=\"#9a916c\"/><path d=\"M68.849 107.71h-.708v2.126h.708v-2.126z\" id=\"path1826\" fill=\"#9a916c\"/><path d=\"M67.432 107.71h-.708v2.126h.708v-2.126z\" id=\"path1828\" fill=\"#9a916c\"/><path d=\"M66.014 107.71h-.708v2.126h.708v-2.126z\" id=\"path1830\" fill=\"#9a916c\"/><path d=\"M64.597 107.71h-.708v2.126h.708v-2.126z\" id=\"path1832\" fill=\"#9a916c\"/><path d=\"M61.125 107.073h2.126v-.709h-2.126v.709z\" id=\"path1834\" fill=\"#9a916c\"/><path d=\"M61.125 105.655h2.126v-.708h-2.126v.708z\" id=\"path1836\" fill=\"#9a916c\"/><path d=\"M61.125 104.238h2.126v-.708h-2.126v.708z\" id=\"path1838\" fill=\"#9a916c\"/><path d=\"M61.125 102.82h2.126v-.708h-2.126v.708z\" id=\"path1840\" fill=\"#9a916c\"/><path d=\"M61.125 101.403h2.126v-.709h-2.126v.709z\" id=\"path1842\" fill=\"#9a916c\"/><path d=\"M61.125 99.986h2.126v-.708h-2.126v.708z\" id=\"path1844\" fill=\"#9a916c\"/><path d=\"M61.125 98.569h2.126v-.709h-2.126v.709z\" id=\"path1846\" fill=\"#9a916c\"/><path d=\"M61.125 97.151h2.126v-.708h-2.126v.708z\" id=\"path1848\" fill=\"#9a916c\"/><path d=\"M61.125 95.734h2.126v-.708h-2.126v.708z\" id=\"path1850\" fill=\"#9a916c\"/><path d=\"M61.125 94.316h2.126v-.708h-2.126v.708z\" id=\"path1852\" fill=\"#9a916c\"/><path d=\"M61.125 92.899h2.126v-.709h-2.126v.709z\" id=\"path1854\" fill=\"#9a916c\"/><path d=\"M61.125 91.482h2.126v-.708h-2.126v.708z\" id=\"path1856\" fill=\"#9a916c\"/><path d=\"M65.376 105.584h13.322V92.261H65.376v13.323z\" id=\"path1858\" fill=\"#9a916c\"/><g id=\"g1860\" transform=\"translate(115.957 20.6)\"><path d=\"M0 0a1.418 1.418 0 1 0 0-2.836A1.418 1.418 0 0 0 0 0\" id=\"path1862\" fill=\"#9a916c\"/></g><path d=\"M94.976 59.567h1.771v-.779h-1.771v.779z\" id=\"path1864\" fill=\"#9a916c\"/><path d=\"M94.975 60.984h1.772v-.779h-1.772v.779z\" id=\"path1866\" fill=\"#9a916c\"/><path d=\"M94.976 62.402h1.771v-.779h-1.771v.779z\" id=\"path1868\" fill=\"#9a916c\"/><path d=\"M94.975 63.819h1.772v-.779h-1.772v.779z\" id=\"path1870\" fill=\"#9a916c\"/><path d=\"M89.448 63.819h1.771v-.78h-1.771v.78z\" id=\"path1872\" fill=\"#9a916c\"/><path d=\"M89.449 62.402h1.771v-.78h-1.771v.78z\" id=\"path1874\" fill=\"#9a916c\"/><path d=\"M89.448 60.985h1.771v-.78h-1.771v.78z\" id=\"path1876\" fill=\"#9a916c\"/><path d=\"M89.449 59.567h1.771v-.78h-1.771v.78z\" id=\"path1878\" fill=\"#9a916c\"/><path d=\"M94.373 59.035h-2.551v4.536h2.551v-4.536z\" id=\"path1880\" fill=\"#9a916c\"/><g id=\"g1912\" transform=\"translate(104.797 20.31)\"><path d=\"M0 0a5.256 5.256 0 1 0 0-10.512A5.256 5.256 0 0 0 0 0z\" id=\"path1914\" fill=\"none\" stroke=\"#9a916c\" stroke-width=\"1.44\"/></g><g id=\"g1916\" transform=\"translate(13.044 72.102)\"><path d=\"M0 0a7.795 7.795 0 0 1-7.795 7.795h-4.534A72.712 72.712 0 0 1-12.756 0c0-2.635.151-5.233.427-7.795h4.534A7.795 7.795 0 0 1 0 0m-6.662-4.677a4.677 4.677 0 1 0 0 9.354 4.677 4.677 0 0 0 0-9.354\" id=\"PWR_1\" fill=\"#9a916c\"/></g><g id=\"g1920\" transform=\"translate(101.444 123.342)\"><path d=\"M0 0a7.795 7.795 0 0 1 10.648 2.853l2.267 3.927a72.71 72.71 0 0 1-6.537 4.267 72.808 72.808 0 0 1-6.964 3.528l-2.267-3.927A7.794 7.794 0 0 1 0 0m-.72 8.108A4.679 4.679 0 1 0 .992 1.719 4.677 4.677 0 0 0-.72 8.108\" id=\"PWR_2\" fill=\"#9a916c\"/></g><g id=\"g1924\" transform=\"translate(80.541 4.242)\"><path d=\"M0 0h2.835v14.882h-22.677V0h2.834v-2.126H0V0z\" id=\"path1926\" fill=\"#666\"/></g><path d=\"M79.125 7.785H76.29v8.504h2.835V7.785z\" id=\"path1928\"/><path d=\"M67.785 7.785H64.95v8.504h2.835V7.785z\" id=\"path1930\"/><path d=\"M79.125 16.288H76.29v2.835h2.835v-2.835z\" id=\"path1932\" fill=\"#333\"/><path d=\"M67.785 16.288H64.95v2.835h2.835v-2.835z\" id=\"path1934\" fill=\"#333\"/><path d=\"M83.376 19.123h-2.269v4.252h2.269v-4.252z\" id=\"path1936\" fill=\"#333\"/><path d=\"M62.967 19.123h-2.268v4.252h2.268v-4.252z\" id=\"path1938\" fill=\"#333\"/><path d=\"M83.376 134.274H60.699v3.969h22.677v-3.969z\" id=\"path1998\" fill=\"#b4b4b4\"/><path d=\"M72.321 127.117h-.567v3.402h.567v-3.402z\" id=\"path2000\" fill=\"#dcdcdc\"/><path d=\"M70.478 127.117h-.567v3.402h.567v-3.402z\" id=\"path2002\" fill=\"#dcdcdc\"/><path d=\"M68.636 127.117h-.567v3.402h.567v-3.402z\" id=\"path2004\" fill=\"#dcdcdc\"/><path d=\"M74.164 127.117h-.567v3.402h.567v-3.402z\" id=\"path2006\" fill=\"#dcdcdc\"/><path d=\"M76.006 127.117h-.567v3.402h.567v-3.402z\" id=\"path2008\" fill=\"#dcdcdc\"/><path d=\"M79.125 128.606H64.952v.709h14.173v-.709z\" id=\"path2010\" fill=\"#b4b4b4\"/><path d=\"M79.125 128.888H64.952v2.976h14.173v-2.976z\" id=\"path2012\"/><g id=\"g2014\" transform=\"translate(68.636 130.59)\"><path d=\"M0 0v.709h1.417v-2.552h3.969V.709h1.417V0h2.268v-2.126h5.102V11.48H-7.37V-2.126h5.102V0H0z\" id=\"path2016\" fill=\"#dcdcdc\"/></g><g id=\"g2018\" transform=\"translate(79.266 134.984)\"><path d=\"M0 0h-1.417l-.284 4.252H.283L0 0z\" id=\"path2020\"/></g><g id=\"g2022\" transform=\"translate(66.227 134.984)\"><path d=\"M0 0h-1.418l-.283 4.252H.283L0 0z\" id=\"path2024\"/></g><g id=\"g2026\" transform=\"translate(82.242 142.07)\"><path d=\"M0 0h-20.409l.568 1.701L-.566 1.7 0 0z\" id=\"path2028\" fill=\"#f0f0f0\"/></g><g id=\"g2030\" transform=\"translate(82.81 142.07)\"><path d=\"M0 0h-.567L0 1.7h.567L0 0z\" id=\"path2032\" fill=\"#b4b4b4\"/></g><g id=\"g2034\" transform=\"translate(61.833 142.07)\"><path d=\"M0 0h-.567l-.567 1.701h.567L0 0z\" id=\"path2036\" fill=\"#b4b4b4\"/></g><g id=\"g5814\"><g transform=\"translate(86.699 71.559)\" id=\"g576\"><path id=\"path578\" d=\"M0 0h-1.701\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(84.998 71.559)\" id=\"g580\"><path id=\"path582\" d=\"M0 0h-1.7\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(86.699 73.26)\" id=\"g588\"><path id=\"path590\" d=\"M0 0h-3.401\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(83.297 73.26)\" id=\"g592\"><path id=\"path594\" d=\"M0 0l1.7-1.7\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><path id=\"path1390\" d=\"M87.124 74.938h-4.252v4.252h4.252v-4.252z\" fill=\"#9a916c\"/><path id=\"path1392\" d=\"M87.124 66.455h-4.252v4.252h4.252v-4.252z\" fill=\"#9a916c\"/><g transform=\"translate(87.158 76.876)\" id=\"g2050\"><path id=\"path2052\" d=\"M0 0v-8.106a.27.27 0 0 0-.27-.271h-3.781a.27.27 0 0 0-.269.271V0c0 .149.121.27.269.27H-.27C-.12.271 0 .149 0 0\" fill=\"#decd87\"/></g><path id=\"path2054\" d=\"M82.837 75.795h4.32v-5.944h-4.32v5.944z\" fill=\"#f2f2f2\"/><g transform=\"translate(84.99 71.114)\" id=\"g2056\"><path id=\"path2058\" d=\"M0 0a1.72 1.72 0 1 0 0 3.44A1.72 1.72 0 0 0 0 0\" fill=\"#ccc\"/></g></g><g id=\"TX\"><g transform=\"translate(60.778 71.559)\" id=\"g596\"><path id=\"path598\" d=\"M0 0h-1.701\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(59.078 71.559)\" id=\"g600\"><path id=\"path602\" d=\"M0 0h-1.701\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(59.078 71.559)\" id=\"g604\"><path id=\"path606\" d=\"M0 0l1.701 1.7\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(60.778 73.26)\" id=\"g608\"><path id=\"path610\" d=\"M0 0h-3.401\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(57.377 73.26)\" id=\"g612\"><path id=\"path614\" d=\"M0 0l1.701-1.7\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><path id=\"path1394\" d=\"M61.204 74.938h-4.252v4.252h4.252v-4.252z\" fill=\"#9a916c\"/><path id=\"path1396\" d=\"M61.204 66.455h-4.252v4.252h4.252v-4.252z\" fill=\"#9a916c\"/><g transform=\"translate(61.238 76.876)\" id=\"g2060\"><path id=\"path2062\" d=\"M0 0v-8.106a.27.27 0 0 0-.27-.271h-3.781a.27.27 0 0 0-.269.271V0c0 .149.121.27.269.27H-.27C-.12.271 0 .149 0 0\" fill=\"#decd87\"/></g><path id=\"path2064\" d=\"M56.917 75.795h4.32v-5.944h-4.32v5.944z\" fill=\"#f2f2f2\"/><g transform=\"translate(59.07 71.114)\" id=\"g2066\"><path id=\"path2068\" d=\"M0 0a1.72 1.72 0 1 0 0 3.44A1.72 1.72 0 0 0 0 0\" fill=\"#ccc\"/></g></g><g id=\"g2070\" transform=\"translate(127.569 51.945)\"><path d=\"M0 0a7.794 7.794 0 0 1 4.658-9.991l4.261-1.551a72.566 72.566 0 0 1 3.067 7.179 72.285 72.285 0 0 1 2.265 7.471L9.99 4.658A7.793 7.793 0 0 1 0 0m7.859 2.116a4.677 4.677 0 1 0-3.198-8.79 4.677 4.677 0 0 0 3.198 8.79\" id=\"PIN_A1\" fill=\"#9a916c\"/></g><g id=\"g2080\" transform=\"translate(42.45 123.162)\"><path d=\"M0 0a7.796 7.796 0 0 1 2.853 10.648L.586 14.575a72.576 72.576 0 0 1-6.964-3.528 73.012 73.012 0 0 1-6.538-4.267l2.268-3.927A7.795 7.795 0 0 1 0 0m-7.382 3.431A4.678 4.678 0 1 0 .721 8.108 4.678 4.678 0 0 0-7.382 3.43\" id=\"GND_0\" fill=\"#9a916c\"/></g><g id=\"g2084\" transform=\"translate(131.032 72.103)\"><path d=\"M0 0a7.795 7.795 0 0 1 7.795-7.795h4.534c.275 2.562.427 5.16.427 7.795s-.152 5.233-.427 7.795H7.795A7.795 7.795 0 0 1 0 0m6.662 4.677a4.677 4.677 0 1 0 0-9.354 4.677 4.677 0 0 0 0 9.354\" id=\"GND_2\" fill=\"#9a916c\"/></g><g id=\"g2088\" transform=\"translate(42.631 20.864)\"><path d=\"M0 0a7.795 7.795 0 0 1-10.648-2.853l-2.267-3.926a72.643 72.643 0 0 1 6.537-4.268 72.798 72.798 0 0 1 6.964-3.527l2.267 3.926A7.794 7.794 0 0 1 0 0m.719-8.107a4.675 4.675 0 0 0-6.388-1.712 4.675 4.675 0 0 0-1.712 6.388A4.676 4.676 0 0 0-.993-1.719 4.675 4.675 0 0 0 .719-8.107\" id=\"GND_1\" fill=\"#9a916c\"/></g><g id=\"g2092\" transform=\"translate(109.552 55.431)\"><path d=\"M0 0h-9.509c-.506 0-.915.381-.915.851v6.802c0 .469.409.851.915.851H0c.505 0 .915-.38.915-.851V.851C.913.381.505 0 0 0\" id=\"path2094\" fill=\"#decd87\"/></g><g id=\"MICROPHONE\" transform=\"translate(100.043 55.94)\"><path d=\"M0 0c-.201 0-.367.152-.367.34v6.804c0 .187.166.339.367.339h9.509c.201 0 .366-.152.366-.339V.34c0-.188-.165-.34-.366-.34H0z\" id=\"path2098\" fill=\"#e9ddaf\"/></g><g id=\"g2100\" transform=\"translate(102.547 59.683)\"><path d=\"M0 0a.851.851 0 1 0 1.702 0A.851.851 0 0 0 0 0\" id=\"path2102\" fill=\"#540\"/></g><path d=\"M76.289 63.891h-8.503v8.504h8.503v-8.504z\" id=\"path2112\" fill=\"#333\"/><g id=\"g2114\" transform=\"translate(127.568 92.262)\"><path d=\"M0 0a7.796 7.796 0 0 1 9.991-4.659l4.261 1.551a72.531 72.531 0 0 1-2.265 7.471 72.566 72.566 0 0 1-3.067 7.179L4.659 9.991A7.796 7.796 0 0 1 0 0m4.661 6.673a4.677 4.677 0 1 0 3.197-8.79 4.677 4.677 0 0 0-3.197 8.79\" id=\"PIN_A2\" fill=\"#9a916c\"/></g><g id=\"g2118\" transform=\"translate(117.323 110.118)\"><path d=\"M0 0a7.795 7.795 0 0 1 10.982-.961l3.473 2.915a72.289 72.289 0 0 1-4.684 6.245 72.673 72.673 0 0 1-5.336 5.697L.961 10.982A7.795 7.795 0 0 1 0 0m2.098 7.865A4.677 4.677 0 1 0 8.108.701a4.677 4.677 0 0 0-6.01 7.164\" id=\"PIN_A3\" fill=\"#9a916c\"/></g><g id=\"g2122\" transform=\"translate(117.324 34.088)\"><path d=\"M0 0a7.793 7.793 0 0 1 .961-10.981l3.473-2.915a72.495 72.495 0 0 1 5.337 5.697 72.354 72.354 0 0 1 4.684 6.246L10.981.961A7.793 7.793 0 0 1 0 0m8.109-.699a4.676 4.676 0 0 0 .577-6.589 4.676 4.676 0 1 0-7.165 6.013 4.676 4.676 0 0 0 6.588.576\" id=\"PIN_A0\" fill=\"#9a916c\"/></g><g id=\"g2126\" transform=\"translate(91.45 137.295)\"><path d=\"M0 0v-5.103a.283.283 0 0 0-.283-.283h-2.978a.283.283 0 0 0-.282.283v5.102c0 .157.127.283.282.283h2.978A.282.282 0 0 0 0 0\" id=\"path2128\" fill=\"#dcdcdc\"/></g><path d=\"M87.907 136.515h3.543v-3.543h-3.543v3.543z\" id=\"SERIAL_LED\" fill=\"red\"/><g id=\"g2132\" transform=\"translate(89.678 135.31)\"><path d=\"M0 0a.567.567 0 1 0 0-1.134A.567.567 0 0 0 0 0\" id=\"path2134\" fill=\"#a00000\"/></g><g id=\"g2144\" transform=\"translate(111.19 51.193)\"><path d=\"M0 0a4.252 4.252 0 1 0 7.364-4.253A4.252 4.252 0 0 0 0 0\" id=\"LED6\" fill=\"#c8c8c8\"/></g><g id=\"g2164\" transform=\"translate(94.39 33.671)\"><path d=\"M0 0a4.252 4.252 0 1 0 4.252-7.365A4.252 4.252 0 0 0 0 0\" id=\"LED5\" fill=\"#c8c8c8\"/></g><g id=\"g2182\" transform=\"translate(116.38 71.383)\"><path d=\"M0 0a4.252 4.252 0 1 0 8.504 0A4.252 4.252 0 0 0 0 0\" id=\"LED7\" fill=\"#c8c8c8\"/></g><g id=\"g2200\" transform=\"translate(110.829 93.374)\"><path d=\"M0 0a4.253 4.253 0 1 0 7.367 4.252A4.253 4.253 0 0 0 0 0\" id=\"LED8\" fill=\"#c8c8c8\"/></g><g id=\"g2220\" transform=\"translate(94.028 110.535)\"><path d=\"M0 0a4.252 4.252 0 1 0 4.253 7.364A4.252 4.252 0 0 0 0 0\" id=\"LED9\" fill=\"#c8c8c8\"/></g><g id=\"g2240\" transform=\"translate(49.327 110.894)\"><path d=\"M0 0a4.253 4.253 0 1 0-4.252 7.367A4.253 4.253 0 0 0 0 0\" id=\"LED0\" fill=\"#c8c8c8\"/></g><g id=\"g2260\" transform=\"translate(33.605 94.093)\"><path d=\"M0 0a4.252 4.252 0 1 0-7.366 4.253A4.252 4.252 0 0 0 0 0\" id=\"LED1\" fill=\"#c8c8c8\"/></g><g id=\"g2278\" transform=\"translate(27.696 72.102)\"><path d=\"M0 0a4.252 4.252 0 1 0-8.505 0A4.252 4.252 0 0 0 0 0\" id=\"LED2\" fill=\"#c8c8c8\"/></g><g id=\"g2296\" transform=\"translate(33.606 49.032)\"><path d=\"M0 0a4.253 4.253 0 1 0-7.366-4.253A4.253 4.253 0 0 0 0 0\" id=\"LED3\" fill=\"#c8c8c8\"/></g><g id=\"g2316\" transform=\"translate(51.127 32.95)\"><path d=\"M0 0a4.252 4.252 0 1 0-4.252-7.365A4.252 4.252 0 0 0 0 0\" id=\"LED4\" fill=\"#c8c8c8\"/></g><g id=\"g2328\" transform=\"translate(55.81 136.575)\"><path d=\"M0 0v-5.103a.283.283 0 0 0-.283-.283H-3.26a.283.283 0 0 0-.283.283v5.102c0 .157.127.283.283.283h2.977A.282.282 0 0 0 0 0\" id=\"path2330\" fill=\"#dcdcdc\"/></g><path d=\"M52.266 135.795h3.543v-3.543h-3.543v3.543z\" id=\"PWR_LED\" fill=\"#0f0\"/><g id=\"g2334\" transform=\"translate(54.038 134.59)\"><path d=\"M0 0a.567.567 0 1 0 0-1.134A.567.567 0 0 0 0 0\" id=\"path2336\" fill=\"#00b400\"/></g><g id=\"g2406\" transform=\"translate(67.077 75.606)\"><path d=\"M0 0v-1.275h9.922V0h1.417v1.417H9.922v3.119h1.417v1.417H9.922v1.276H0V5.953h-1.417V4.536H0V1.417h-1.417V0H0z\" id=\"path2408\" fill=\"#dcdcdc\"/></g><g id=\"g2410\" transform=\"translate(72.038 76.103)\"><path d=\"M0 0a2.48 2.48 0 1 0 0 4.96A2.48 2.48 0 0 0 0 0\" id=\"path2412\" fill=\"#1e1e1e\"/></g><path d=\"M77.423 74.331h-.566v8.504h.566v-8.504z\" id=\"path2414\" fill=\"#b4b4b4\"/><path d=\"M67.219 74.331h-.567v8.504h.567v-8.504z\" id=\"path2416\" fill=\"#b4b4b4\"/><g id=\"g2418\" transform=\"translate(16.687 51.224)\"><path d=\"M0 0a7.795 7.795 0 0 1-9.991 4.658l-4.26-1.551a72.507 72.507 0 0 1 2.264-7.47 72.708 72.708 0 0 1 3.068-7.179l4.26 1.551A7.795 7.795 0 0 1 0 0m-4.661-6.674a4.677 4.677 0 1 0-3.198 8.79 4.677 4.677 0 0 0 3.198-8.79\" id=\"PIN_A6\" fill=\"#9a916c\"/></g><g id=\"g2422\" transform=\"translate(26.752 109.937)\"><path d=\"M0 0a7.794 7.794 0 0 1-.961 10.981l-3.473 2.915a72.695 72.695 0 0 1-5.338-5.697 72.845 72.845 0 0 1-4.683-6.245l3.473-2.915A7.795 7.795 0 0 1 0 0m-8.11.699a4.678 4.678 0 1 0 6.015 7.166A4.678 4.678 0 0 0-8.11.7\" id=\"PIN_A4\" fill=\"#9a916c\"/></g><g id=\"g2426\" transform=\"translate(16.506 92.261)\"><path d=\"M0 0a7.794 7.794 0 0 1-4.659 9.991l-4.26 1.551a72.81 72.81 0 0 1-3.068-7.179 72.772 72.772 0 0 1-2.264-7.471l4.26-1.551A7.795 7.795 0 0 1 0 0m-7.86-2.116a4.676 4.676 0 1 0 3.199 8.789A4.676 4.676 0 1 0-7.86-2.116\" id=\"PIN_A5\" fill=\"#9a916c\"/></g><path d=\"M59.986 54.953h-2.147v1.134h2.147v-1.134z\" id=\"path2434\" fill=\"#dcdcdc\"/><g id=\"g2436\" transform=\"translate(42.27 65.27)\"><path d=\"M0 0h14.173l3.544-3.543v-14.174l-3.544-3.543H0l-3.543 3.543v14.174L0 0z\" id=\"SPEAKER\" fill=\"#333\"/></g><g id=\"g2440\" transform=\"translate(39.279 54.317)\"><path d=\"M0 0l1.781 1.076 1.781 1.076.041-2.08.042-2.08-1.823 1.004L0 0z\" id=\"path2442\" fill=\"#4d4d4d\"/></g><g id=\"g2444\" transform=\"translate(56.097 46.118)\"><path d=\"M0 0a1.97 1.97 0 1 0 0 3.94A1.97 1.97 0 0 0 0 0\" id=\"path2446\" fill=\"#666\"/></g><g id=\"g2448\" transform=\"translate(56.28 49.294)\"><path d=\"M0 0v-1.088h1.088v-.332H0v-1.088h-.328v1.088h-1.088v.332h1.088V0H0z\" id=\"path2450\"/></g><g id=\"g2452\" transform=\"translate(34.887 68.463)\"><path d=\"M0 0v-1.983h18.141V0h1.701v1.7h-1.701v9.639h1.701v1.701h-1.701v1.983H0V13.04h-1.701v-1.701H0V1.7h-1.701V0H0z\" id=\"BTN_A_OUTER\" fill=\"#dcdcdc\"/></g><g id=\"g2456\" transform=\"translate(43.957 70.73)\"><path d=\"M0 0a4.252 4.252 0 1 0 0 8.505A4.252 4.252 0 0 0 0 0\" id=\"BTN_A_INNER\" fill=\"#1e1e1e\"/></g><path d=\"M53.264 66.479h-.567v17.008h.567V66.479z\" id=\"path2460\" fill=\"#b4b4b4\"/><path d=\"M35.17 66.479h-.567v17.008h.567V66.479z\" id=\"path2462\" fill=\"#b4b4b4\"/><g id=\"g2464\" transform=\"translate(91.047 68.463)\"><path d=\"M0 0v-1.983h18.141V0h1.701v1.7h-1.701v9.639h1.701v1.701h-1.701v1.983H0V13.04h-1.701v-1.701H0V1.7h-1.701V0H0z\" id=\"BTN_B_OUTER\" fill=\"#dcdcdc\"/></g><g id=\"g2468\" transform=\"translate(100.118 70.73)\"><path d=\"M0 0a4.252 4.252 0 1 0 0 8.504A4.252 4.252 0 0 0 0 0\" id=\"BTN_B_INNER\" fill=\"#1e1e1e\"/></g><path d=\"M109.424 66.479h-.567v17.008h.567V66.479z\" id=\"path2472\" fill=\"#b4b4b4\"/><path d=\"M91.331 66.479h-.567v17.008h.567V66.479z\" id=\"path2474\" fill=\"#b4b4b4\"/><path d=\"M78.038 55.042h2.3v-17h-2.3v17z\" id=\"path2476\" fill=\"#dcdcdc\"/><path d=\"M70.938 55.042h2.3v-17h-2.3v17z\" id=\"path2478\" fill=\"#dcdcdc\"/><path d=\"M63.838 55.042h2.3v-17h-2.3v17z\" id=\"path2480\" fill=\"#dcdcdc\"/><path d=\"M78.038 52.243h2.3v-11.3h-2.3v11.3z\" id=\"path2482\" fill=\"#b4b4b4\"/><path d=\"M70.938 52.243h2.3v-11.3h-2.3v11.3z\" id=\"path2484\" fill=\"#b4b4b4\"/><path d=\"M63.838 52.243h2.3v-11.3h-2.3v11.3z\" id=\"path2486\" fill=\"#b4b4b4\"/><path d=\"M62.138 51.542h19.8v-9.899h-19.8v9.899z\" id=\"SLIDE_HOUSING\"/><g id=\"SLIDE\" transform=\"matrix(1 0 0 -1 80.538 51.542)\"><path d=\"M0 0v2.9h1.4v4.201H0V10h-4.2V7.101h-8.5V10H-17V7.101h-1.4V2.9h1.4V0H0z\" id=\"SLIDE_HOVER\" fill=\"#dcdcdc\"/></g><path d=\"M72.038 44.342h4.3v-2.8h-4.3v2.8z\" id=\"SLIDE_INNER\" fill=\"#333\"/><g id=\"g2496\" transform=\"translate(69.938 47.943)\"><path d=\"M0 0a1.4 1.4 0 1 0 0-2.8A1.4 1.4 0 0 0 0 0\" id=\"path2498\" fill=\"#b4b4b4\"/></g><g id=\"g2500\" transform=\"translate(74.137 47.943)\"><path d=\"M0 0a1.4 1.4 0 1 0 0-2.8A1.4 1.4 0 0 0 0 0\" id=\"path2502\" fill=\"#b4b4b4\"/></g><g id=\"g5750\"><g transform=\"translate(93.143 93.766)\" id=\"g1148\"><path id=\"path1150\" d=\"M0 0v5.994\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(93.143 99.76)\" id=\"g1152\"><path id=\"path1154\" d=\"M0 0h3.149\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(96.293 99.76)\" id=\"g1156\"><path id=\"path1158\" d=\"M0 0v-5.994\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><g transform=\"translate(96.293 93.766)\" id=\"g1160\"><path id=\"path1162\" d=\"M0 0h-3.149\" fill=\"none\" stroke=\"#fff\" stroke-width=\".576\" stroke-linecap=\"round\"/></g><path id=\"path1746\" d=\"M93.868 96.173h1.7v-1.701h-1.7v1.701z\" fill=\"#9a916c\"/><path id=\"path1748\" d=\"M93.868 99.053h1.7v-1.701h-1.7v1.701z\" fill=\"#9a916c\"/><g transform=\"translate(95.426 97.896)\" id=\"g2504\"><path id=\"path2506\" d=\"M0 0v-2.268a.283.283 0 0 0-.283-.283h-.85a.284.284 0 0 0-.284.283V0c0 .157.127.283.283.283h.85A.282.282 0 0 0 0 0\" fill=\"#dcdcdc\"/></g><path id=\"path2508\" d=\"M94.009 97.471h1.417v-1.417h-1.417v1.417z\" fill=\"#333\"/></g><g id=\"g2510\" transform=\"translate(27.473 33.367)\"><path d=\"M0 0a7.795 7.795 0 0 1-10.982.961l-3.473-2.914a72.548 72.548 0 0 1 4.683-6.246 72.695 72.695 0 0 1 5.338-5.697l3.473 2.915A7.794 7.794 0 0 1 0 0m-2.097-7.865A4.677 4.677 0 1 0-8.11-.699a4.677 4.677 0 0 0 6.013-7.166\" id=\"PIN_A7\" fill=\"#9a916c\"/></g><path d=\"M61.866 108.887h19.843V89.044H61.866v19.843z\" id=\"path2514\" fill=\"#333\"/><path d=\"M90.263 64.022h5.669v-5.669h-5.669v5.669z\" id=\"path2516\" fill=\"#333\"/><g id=\"g2518\" transform=\"translate(94.923 59.044)\"><path d=\"M0 0a.288.288 0 1 0 .576 0A.288.288 0 0 0 0 0\" id=\"path2520\" fill=\"#666\"/></g><g id=\"g5765\"><g transform=\"translate(39.645 97.928)\" id=\"g1224\"><path id=\"path1226\" d=\"M0 0h2.126\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g transform=\"translate(41.771 97.928)\" id=\"g1228\"><path id=\"path1230\" d=\"M0 0h.283\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g transform=\"translate(42.054 97.928)\" id=\"g1232\"><path id=\"path1234\" d=\"M0 0h2.977\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g transform=\"translate(45.03 97.928)\" id=\"g1236\"><path id=\"path1238\" d=\"M0 0v-3.411\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g transform=\"translate(45.03 94.517)\" id=\"g1240\"><path id=\"path1242\" d=\"M0 0h-2.977\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g transform=\"translate(41.771 94.517)\" id=\"g1244\"><path id=\"path1246\" d=\"M0 0h-2.126\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g transform=\"translate(39.645 94.517)\" id=\"g1248\"><path id=\"path1250\" d=\"M0 0v3.411\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g transform=\"translate(41.771 97.928)\" id=\"g1252\"><path id=\"path1254\" d=\"M0 0v-3.411\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g transform=\"translate(41.771 94.517)\" id=\"g1256\"><path id=\"path1258\" d=\"M0 0h.283\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><g transform=\"translate(42.054 94.517)\" id=\"g1260\"><path id=\"path1262\" d=\"M0 0v3.411\" fill=\"none\" stroke=\"#fff\" stroke-width=\".36\" stroke-linecap=\"round\"/></g><path id=\"path1882\" d=\"M39.078 97.357h2.268v-2.268h-2.268v2.268z\" fill=\"#9a916c\"/><path id=\"path1884\" d=\"M43.33 97.357h2.268v-2.268H43.33v2.268z\" fill=\"#9a916c\"/><g transform=\"translate(44.322 95.089)\" id=\"g2522\"><path id=\"path2524\" d=\"M0 0h-3.969a.284.284 0 0 0-.283.284v1.701c0 .156.127.283.283.283H0a.283.283 0 0 0 .283-.283V.284A.283.283 0 0 0 0 0\" fill=\"#dcdcdc\"/></g><path id=\"path2526\" d=\"M40.637 97.357h3.402v-2.268h-3.402v2.268z\" fill=\"#fff\"/><path id=\"path2528\" d=\"M40.92 97.074h1.701v-1.701H40.92v1.701z\"/><g transform=\"translate(41.771 96.577)\" id=\"g2530\"><path id=\"path2532\" d=\"M0 0a.354.354 0 1 0 0-.708A.354.354 0 0 0 0 0\" fill=\"#fff\"/></g></g><g id=\"g2580\" transform=\"translate(101.445 20.865)\"><path d=\"M0 0a7.795 7.795 0 0 1-2.854-10.648l2.268-3.927a72.576 72.576 0 0 1 6.964 3.528 72.71 72.71 0 0 1 6.537 4.267l-2.267 3.926A7.795 7.795 0 0 1 0 0m7.382-3.432A4.678 4.678 0 1 0-.721-8.107a4.678 4.678 0 0 0 8.103 4.675\" id=\"VBATT\" fill=\"#9a916c\"/></g></g></svg>";
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.mkBoardView = function (opts) {
            return new visuals.CircuitPlaygroundBoardSvg({
                runtime: pxsim.runtime,
                theme: visuals.randomTheme(),
                disableTilt: false,
                wireframe: opts.wireframe,
            });
        };
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        var AnalogPinControl = /** @class */ (function () {
            function AnalogPinControl(parent, defs, id, name) {
                this.parent = parent;
                this.defs = defs;
                this.id = id;
                this.pin = pxsim.board().edgeConnectorState.getPin(this.id);
                // Init the button events
                this.outerElement = parent.element.getElementById(name);
                pxsim.U.addClass(this.outerElement, "sim-pin-touch");
                this.addButtonEvents();
                if (this.pin.used) {
                    pxsim.accessibility.makeFocusable(this.outerElement);
                    pxsim.accessibility.setAria(this.outerElement, "button", this.outerElement.firstChild.textContent);
                }
                // Init the gradient controls
                // const gid = `gradient-${CPlayPinName[id]}-level`;
                // this.innerCircle = parent.element.getElementById("PIN_CONNECTOR_" + CPlayPinName[id]) as SVGCircleElement;
                // this.gradient = svg.linearGradient(this.defs, gid);
                // this.innerCircle.setAttribute("fill", `url(#${gid})`);
                // this.innerCircle.setAttribute("class", "sim-light-level-button")
                // this.addLevelControlEvents()
                this.updateTheme();
            }
            AnalogPinControl.prototype.updateTheme = function () {
                var theme = this.parent.props.theme;
                pxsim.svg.setGradientColors(this.gradient, theme.lightLevelOff, 'darkorange');
            };
            AnalogPinControl.prototype.updateValue = function () {
                var value = this.pin.value;
                if (value === this.currentValue) {
                    return;
                }
                this.currentValue = value;
                // svg.setGradientValue(this.gradient, 100 - Math.min(100, Math.max(0, Math.floor(value * 100 / 1023))) + '%')
                // if (this.innerCircle.childNodes.length) {
                //    this.innerCircle.removeChild(this.innerCircle.childNodes[0])
                // }
                pxsim.svg.title(this.outerElement, value.toString());
            };
            AnalogPinControl.prototype.addButtonEvents = function () {
                var _this = this;
                pxsim.pointerEvents.down.forEach(function (evid) { return _this.outerElement.addEventListener(evid, function (ev) {
                    _this.pin.touched = true;
                    pxsim.U.addClass(_this.outerElement, "touched");
                    var b = pxsim.pxtcore.getTouchButton(_this.id);
                    if (b)
                        b.setPressed(true);
                }); });
                this.outerElement.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                    _this.pin.touched = false;
                    pxsim.U.removeClass(_this.outerElement, "touched");
                    var b = pxsim.pxtcore.getTouchButton(_this.id);
                    if (b)
                        b.setPressed(false);
                });
                this.outerElement.addEventListener(pxsim.pointerEvents.up, function (ev) {
                    _this.pin.touched = false;
                    pxsim.U.removeClass(_this.outerElement, "touched");
                    var b = pxsim.pxtcore.getTouchButton(_this.id);
                    if (b)
                        b.setPressed(false);
                });
                pxsim.accessibility.enableKeyboardInteraction(this.outerElement, function () {
                    _this.pin.touched = true;
                    pxsim.U.addClass(_this.outerElement, "touched");
                    var b = pxsim.pxtcore.getTouchButton(_this.id);
                    if (b)
                        b.setPressed(true);
                }, function () {
                    _this.pin.touched = false;
                    pxsim.U.removeClass(_this.outerElement, "touched");
                    var b = pxsim.pxtcore.getTouchButton(_this.id);
                    if (b)
                        b.setPressed(false);
                });
            };
            AnalogPinControl.prototype.addLevelControlEvents = function () {
                var _this = this;
                var cy = parseFloat(this.innerCircle.getAttribute("cy"));
                var r = parseFloat(this.innerCircle.getAttribute("r"));
                var pt = this.parent.element.createSVGPoint();
                pxsim.svg.buttonEvents(this.innerCircle, function (ev) {
                    var pos = pxsim.svg.cursorPoint(pt, _this.parent.element, ev);
                    var rs = r / 2;
                    var level = Math.max(0, Math.min(1023, Math.floor((1 - (pos.y - (cy - rs)) / (2 * rs)) * 1023)));
                    if (level != _this.pin.value) {
                        _this.pin.value = level;
                        _this.updateValue();
                    }
                }, function (ev) { }, function (ev) { });
            };
            return AnalogPinControl;
        }());
        visuals.AnalogPinControl = AnalogPinControl;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
