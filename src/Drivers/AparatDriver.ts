import Driver from "./Driver";

class AparatDriver implements Driver {
	private regex: RegExp;

	constructor() {
		this.regex = /((?:(https:\/\/|http:\/\/)?(www.?)?aparat.com\/v\/)(\w+)?.*)/g;
	}

	validate(url: string): boolean {
		return this.regex.test(url);
	}
	getId(url: string): string {
		return url.replace(this.regex, "$4");
	}
	getEmbedURL(url: string): string {
		return `https://www.aparat.com/video/video/embed/videohash/${this.getId(url)}/vt/frame`;
	}
}
export default AparatDriver;
