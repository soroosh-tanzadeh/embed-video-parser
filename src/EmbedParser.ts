import DriverObject from "./Drivers/DriverObject";

class EmbedParser {
	private drivers: Array<DriverObject>;

	constructor(drivers: Array<DriverObject>) {
		this.drivers = drivers;
	}

	public addDriver(driver: DriverObject): void {
		this.drivers.push(driver);
	}

	public parse(url: string) {
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
	}
}

export default EmbedParser;
