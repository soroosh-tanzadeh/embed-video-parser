"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AparatDriver_1 = __importDefault(require("../src/Drivers/AparatDriver"));
const VimeoDriver_1 = __importDefault(require("../src/Drivers/VimeoDriver"));
const YoutubeDriver_1 = __importDefault(require("../src/Drivers/YoutubeDriver"));
// Check Youtube Driver
test("Youtuber Driver Check", () => {
    const driver = new YoutubeDriver_1.default();
    expect(driver.validate("https://www.youtube.com/watch?v=r9HdJ8P6GQI")).toBe(true);
    expect(driver.getId("https://www.youtube.com/watch?v=r9HdJ8P6GQI")).toBe("r9HdJ8P6GQI");
    expect(driver.getEmbedURL("https://www.youtube.com/watch?v=r9HdJ8P6GQI")).toBe("https://www.youtube.com/embed/r9HdJ8P6GQI");
});
// Check Aparat Driver
test("Aparat Driver Check", () => {
    const driver = new AparatDriver_1.default();
    expect(driver.validate("https://www.aparat.com/v/uJ1dh?playlist=248969")).toBe(true);
    expect(driver.getId("https://www.aparat.com/v/uJ1dh?playlist=248969")).toBe("uJ1dh");
    expect(driver.getEmbedURL("https://www.aparat.com/v/uJ1dh?playlist=248969")).toBe("https://www.aparat.com/video/video/embed/videohash/uJ1dh/vt/frame");
});
// Check Aparat Driver
test("Vimeo Driver Check", () => {
    const driver = new VimeoDriver_1.default();
    expect(driver.validate("https://vimeo.com/673993283")).toBe(true);
    expect(driver.getId("https://vimeo.com/673993283")).toBe("673993283");
    expect(driver.getEmbedURL("https://vimeo.com/673993283")).toBe("https://player.vimeo.com/video/673993283");
});
