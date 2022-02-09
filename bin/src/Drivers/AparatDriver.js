"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AparatDriver {
    constructor() {
        this.regex = /((?:(https:\/\/|http:\/\/)?(www.?)?aparat.com\/v\/)(\w+)?.*)/g;
    }
    validate(url) {
        return this.regex.test(url);
    }
    getId(url) {
        return url.replace(this.regex, "$4");
    }
    getEmbedURL(url) {
        return `https://www.aparat.com/video/video/embed/videohash/${this.getId(url)}/vt/frame`;
    }
}
exports.default = AparatDriver;
