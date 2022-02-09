"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VimeoDriver {
    constructor() {
        this.regex = /((?:(https:\/\/|http:\/\/)?(www.?)?vimeo.com\/)(\w+)?.*)/g;
    }
    validate(url) {
        return this.regex.test(url);
    }
    getId(url) {
        return url.replace(this.regex, "$4");
    }
    getEmbedURL(url) {
        return `https://player.vimeo.com/video/${this.getId(url)}`;
    }
}
exports.default = VimeoDriver;
