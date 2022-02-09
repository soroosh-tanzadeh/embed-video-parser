import EmbedParser from "./EmbedParser";
import ParserConfig from "./ParserConfig";

import AparatDriver from "./Drivers/AparatDriver";
import DriverObject from "./Drivers/DriverObject";
import VimeoDriver from "./Drivers/VimeoDriver";
import YoutubeDriver from "./Drivers/YoutubeDriver";

export { EmbedParser, ParserConfig, YoutubeDriver, AparatDriver, DriverObject, VimeoDriver };

const parser: EmbedParser = new EmbedParser(ParserConfig);

export default (url: string) => {
	return parser.parse(url);
};
