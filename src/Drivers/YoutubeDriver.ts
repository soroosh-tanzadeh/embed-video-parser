import Driver from "./Driver";

class YoutubeDriver implements Driver {
	private regex: RegExp;

	constructor() {
		this.regex = /(?:(?:https?:)?\/\/)?(?:www\.)?youtu(?:be\.com\/(?:watch\?(?:.*?&(?:amp;)?)*v=|v\/|embed\/)|\.be\/)([\w‌​\-]+)(?:(?:&(?:amp;)?|\?)[\w\?=]*)*/g;
	}

	validate(url: string): boolean {
		return this.regex.test(url);
	}
	getId(url: string): string {
		return url.replace(this.regex, "$1");
	}
	getEmbedURL(url: string): string {
		return `https://www.youtube.com/embed/${this.getId(url)}`;
	}
}
export default YoutubeDriver;
