import DriverObject from "./Drivers/DriverObject";
import config from "./ParserConfig";

interface Embed {
	name: string;
	embed: string;
	id: string;
}

class EmbedParser {
	private drivers: Array<DriverObject>;

	constructor(drivers: Array<DriverObject>) {
		this.drivers = drivers;
	}

	public addDriver(driver: DriverObject): void {
		this.drivers.push(driver);
	}

	public parse(url: string): Embed | null {
		for (let i = 0; i < this.drivers.length; i++) {
			const driverObject = this.drivers[i];
			if (driverObject.driver.validate(url)) {
				return {
					name: driverObject.name,
					embed: driverObject.driver.getEmbedURL(url),
					id: driverObject.driver.getId(url),
				};
			}
		}
		return null;
	}
}

export default EmbedParser;
export { config };
