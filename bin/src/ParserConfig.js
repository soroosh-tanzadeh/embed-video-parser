"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AparatDriver_1 = __importDefault(require("./Drivers/AparatDriver"));
const VimeoDriver_1 = __importDefault(require("./Drivers/VimeoDriver"));
const YoutubeDriver_1 = __importDefault(require("./Drivers/YoutubeDriver"));
const drivers = [
    {
        driver: new YoutubeDriver_1.default(),
        name: "youtube",
    },
    {
        driver: new VimeoDriver_1.default(),
        name: "vimeo",
    },
    {
        driver: new AparatDriver_1.default(),
        name: "aparat",
    },
];
exports.default = drivers;
