"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const node_1 = __importDefault(require("../node"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'result';
const Result = props => {
    const { title, subTitle, extra } = props;
    return (React.createElement(react_native_1.View, { style: style_1.default[prefixCls] },
        React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-icon`] },
            React.createElement(react_native_1.Image, { source: { uri: 'https://smebimage.fuliaoyi.com/Fn1h5MKI-USpwK48WeC4uHCPCrvT' }, style: style_1.default.successIcon })),
        React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-title`] }, title),
        React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-subTitle`] }, subTitle),
        React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-extra`] }, extra)));
};
exports.default = Result;
