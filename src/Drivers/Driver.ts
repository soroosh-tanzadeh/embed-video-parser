interface Driver {
	validate(url: string): boolean;
	getId(url: string): string;
	getEmbedURL(url: string): string;
}

export default Driver;
