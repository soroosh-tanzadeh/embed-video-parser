"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VimeoDriver = exports.AparatDriver = exports.YoutubeDriver = exports.ParserConfig = exports.EmbedParser = void 0;
const EmbedParser_1 = __importDefault(require("./EmbedParser"));
exports.EmbedParser = EmbedParser_1.default;
const ParserConfig_1 = __importDefault(require("./ParserConfig"));
exports.ParserConfig = ParserConfig_1.default;
const AparatDriver_1 = __importDefault(require("./Drivers/AparatDriver"));
exports.AparatDriver = AparatDriver_1.default;
const VimeoDriver_1 = __importDefault(require("./Drivers/VimeoDriver"));
exports.VimeoDriver = VimeoDriver_1.default;
const YoutubeDriver_1 = __importDefault(require("./Drivers/YoutubeDriver"));
exports.YoutubeDriver = YoutubeDriver_1.default;
const parser = new EmbedParser_1.default(ParserConfig_1.default);
exports.default = (url) => {
    return parser.parse(url);
};
