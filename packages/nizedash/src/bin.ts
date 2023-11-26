#!/usr/bin/env node
import { generateColors } from "./commands/colors.js";

function main() {
	let [command, ...args] = process.argv.slice(2);

	switch (command) {
		case "colors": {
			generateColors();
			break;
		}
	}
}

try {
	main();
} catch (error) {
	console.error(error);
	process.exit(1);
}
