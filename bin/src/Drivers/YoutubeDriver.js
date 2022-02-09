"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YoutubeDriver {
    constructor() {
        this.regex = /(?:(?:https?:)?\/\/)?(?:www\.)?youtu(?:be\.com\/(?:watch\?(?:.*?&(?:amp;)?)*v=|v\/|embed\/)|\.be\/)([\w‌​\-]+)(?:(?:&(?:amp;)?|\?)[\w\?=]*)*/g;
    }
    validate(url) {
        return this.regex.test(url);
    }
    getId(url) {
        return url.replace(this.regex, "$1");
    }
    getEmbedURL(url) {
        return `https://www.youtube.com/embed/${this.getId(url)}`;
    }
}
exports.default = YoutubeDriver;
