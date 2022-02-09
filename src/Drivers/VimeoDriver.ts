import Driver from "./Driver";

class VimeoDriver implements Driver {
	private regex: RegExp;

	constructor() {
		this.regex = /((?:(https:\/\/|http:\/\/)?(www.?)?vimeo.com\/)(\w+)?.*)/g;
	}

	validate(url: string): boolean {
		return this.regex.test(url);
	}
	getId(url: string): string {
		return url.replace(this.regex, "$4");
	}
	getEmbedURL(url: string): string {
		return `https://player.vimeo.com/video/${this.getId(url)}`;
	}
}
export default VimeoDriver;
