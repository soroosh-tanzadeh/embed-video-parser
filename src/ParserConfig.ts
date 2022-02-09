import AparatDriver from "./Drivers/AparatDriver";
import DriverObject from "./Drivers/DriverObject";
import VimeoDriver from "./Drivers/VimeoDriver";
import YoutubeDriver from "./Drivers/YoutubeDriver";

const drivers: Array<DriverObject> = [
	{
		driver: new YoutubeDriver(),
		name: "youtube",
	},
	{
		driver: new VimeoDriver(),
		name: "vimeo",
	},
	{
		driver: new AparatDriver(),
		name: "aparat",
	},
];

export default drivers;
