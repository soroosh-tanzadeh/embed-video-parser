import AparatDriver from "../src/Drivers/AparatDriver";
import YoutubeDriver from "../src/Drivers/YoutubeDriver";

// Check Youtube Driver
test("Youtuber Driver Check", () => {
	const driver = new YoutubeDriver();
	expect(driver.validate("https://www.youtube.com/watch?v=r9HdJ8P6GQI")).toBe(true);
	expect(driver.getId("https://www.youtube.com/watch?v=r9HdJ8P6GQI")).toBe("r9HdJ8P6GQI");
	expect(driver.getEmbedURL("https://www.youtube.com/watch?v=r9HdJ8P6GQI")).toBe("https://www.youtube.com/embed/r9HdJ8P6GQI");
});

// Check Aparat Driver
test("Aparat Driver Check", () => {
	const driver = new AparatDriver();
	expect(driver.validate("https://www.aparat.com/v/uJ1dh?playlist=248969")).toBe(true);
	expect(driver.getId("https://www.aparat.com/v/uJ1dh?playlist=248969")).toBe("uJ1dh");
	expect(driver.getEmbedURL("https://www.aparat.com/v/uJ1dh?playlist=248969")).toBe("https://www.aparat.com/video/video/embed/videohash/uJ1dh/vt/frame");
});
