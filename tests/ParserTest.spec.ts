import { config, default as EmbedParser } from "../src/EmbedParser";

const parser: EmbedParser = new EmbedParser(config);

test("Test Parser for Youtuber", () => {
	const embed = parser.parse("https://www.youtube.com/watch?v=nrTw4w1xJck&t=1106s");
	expect(embed?.id).toBe("nrTw4w1xJck");
	expect(embed?.name).toBe("youtube");
	expect(embed?.embed).toBe("https://www.youtube.com/embed/nrTw4w1xJck");
});

test("Test Parser for Aparat", () => {
	const embed = parser.parse("https://www.aparat.com/v/uJ1dh?playlist=248969");
	expect(embed?.id).toBe("uJ1dh");
	expect(embed?.name).toBe("aparat");
	expect(embed?.embed).toBe("https://www.aparat.com/video/video/embed/videohash/uJ1dh/vt/frame");
});

test("Test Parser for Vimeo", () => {
	const embed = parser.parse("https://vimeo.com/673993283");
	expect(embed?.id).toBe("673993283");
	expect(embed?.name).toBe("vimeo");
	expect(embed?.embed).toBe("https://player.vimeo.com/video/673993283");
});
