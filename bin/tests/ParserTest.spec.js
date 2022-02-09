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
Object.defineProperty(exports, "__esModule", { value: true });
const EmbedParser_1 = __importStar(require("../src/EmbedParser"));
const parser = new EmbedParser_1.default(EmbedParser_1.config);
test("Test Parser for Youtuber", () => {
    const embed = parser.parse("https://www.youtube.com/watch?v=nrTw4w1xJck&t=1106s");
    expect(embed === null || embed === void 0 ? void 0 : embed.id).toBe("nrTw4w1xJck");
    expect(embed === null || embed === void 0 ? void 0 : embed.name).toBe("youtube");
    expect(embed === null || embed === void 0 ? void 0 : embed.embed).toBe("https://www.youtube.com/embed/nrTw4w1xJck");
});
test("Test Parser for Aparat", () => {
    const embed = parser.parse("https://www.aparat.com/v/uJ1dh?playlist=248969");
    expect(embed === null || embed === void 0 ? void 0 : embed.id).toBe("uJ1dh");
    expect(embed === null || embed === void 0 ? void 0 : embed.name).toBe("aparat");
    expect(embed === null || embed === void 0 ? void 0 : embed.embed).toBe("https://www.aparat.com/video/video/embed/videohash/uJ1dh/vt/frame");
});
test("Test Parser for Vimeo", () => {
    const embed = parser.parse("https://vimeo.com/673993283");
    expect(embed === null || embed === void 0 ? void 0 : embed.id).toBe("673993283");
    expect(embed === null || embed === void 0 ? void 0 : embed.name).toBe("vimeo");
    expect(embed === null || embed === void 0 ? void 0 : embed.embed).toBe("https://player.vimeo.com/video/673993283");
});
