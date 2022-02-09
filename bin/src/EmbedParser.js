"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const ParserConfig_1 = __importDefault(require("./ParserConfig"));
exports.config = ParserConfig_1.default;
class EmbedParser {
    constructor(drivers) {
        this.drivers = drivers;
    }
    addDriver(driver) {
        this.drivers.push(driver);
    }
    parse(url) {
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
exports.default = EmbedParser;
