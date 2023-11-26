<<<<<<< HEAD
import * as palette from "@radix-ui/colors";
import { ColorTranslator } from "colortranslator";
import fse from "fs-extra/esm";
import * as path from "node:path";

type ColorName =
	| "gray"
	| "mauve"
	| "slate"
	| "sage"
	| "olive"
	| "sand"
	| "tomato"
	| "red"
	| "ruby"
	| "crimson"
	| "pink"
	| "plum"
	| "purple"
	| "violet"
	| "iris"
	| "indigo"
	| "blue"
	| "cyan"
	| "teal"
	| "jade"
	| "green"
	| "grass"
	| "bronze"
	| "gold"
	| "brown"
	| "orange"
	| "amber"
	| "yellow"
	| "lime"
	| "mint"
	| "sky";

type ColorsConfig = {
	overlay: boolean;
	cautionary: ColorName;
	informative: ColorName;
	negative: ColorName;
	neutral: ColorName;
	positive: ColorName;
};

let DEFAULT_COLORS_CONFIG: ColorsConfig = {
	overlay: true,
	cautionary: "yellow",
	informative: "blue",
	negative: "red",
	neutral: "slate",
	positive: "green",
};

export function generateColors({
	overlay,
	...config
}: ColorsConfig = DEFAULT_COLORS_CONFIG) {
	let stylesheet = ":root {\n";

	if (overlay) {
		Object.entries(palette.whiteA).forEach(([scale, value]) => {
			const scaleNumber = Number(scale.replace("whiteA", ""));
			const translator = new ColorTranslator(value, {
				anglesUnit: "deg",
			});
			const innerValue = `${translator.H} ${translator.S}% ${translator.L}% / ${translator.A}`;
			stylesheet += `\t--color-overlay-a${scaleNumber}: ${innerValue};\n`;
		});

		stylesheet += "\n";
	}

	Object.entries(config).forEach(([usage, color], index, array) => {
		const scales = palette[color];
		const alphaScales = palette[`${color}A`];

		if (usage === "neutral")
			stylesheet += `\t--color-${usage}: 0 0% 100%;\n`;

		Object.entries(scales).forEach(([scale, value]) => {
			const scaleNumber = Number(scale.replace(`${color}`, ""));
			const translator = new ColorTranslator(value, {
				anglesUnit: "deg",
			});
			const innerValue = `${translator.H} ${translator.S}% ${translator.L}%`;
			stylesheet += `\t--color-${usage}-${scaleNumber}: ${innerValue};\n`;
		});

		stylesheet += "\n";

		if (usage === "neutral")
			stylesheet += `\t--color-${usage}-a: 0 0% 100% / 0.95;\n`;

		Object.entries(alphaScales).forEach(([scale, value]) => {
			const scaleNumber = Number(scale.replace(`${color}A`, ""));
			const translator = new ColorTranslator(value, {
				anglesUnit: "deg",
			});
			const innerValue = `${translator.H} ${translator.S}% ${translator.L}% / ${translator.A}`;
			stylesheet += `\t--color-${usage}-a${scaleNumber}: ${innerValue};\n`;
		});

		if (index < array.length - 1) {
			stylesheet += "\n";
		}
	});

	stylesheet += "}\n\n:root.dark {\n";

	if (overlay) {
		Object.entries(palette.blackA).forEach(([scale, value]) => {
			const scaleNumber = Number(scale.replace("blackA", ""));
			const translator = new ColorTranslator(value, {
				anglesUnit: "deg",
			});
			const innerValue = `${translator.H} ${translator.S}% ${translator.L}% / ${translator.A}`;
			stylesheet += `\t--color-overlay-a${scaleNumber}: ${innerValue};\n`;
		});

		stylesheet += "\n";
	}

	Object.entries(config).forEach(([usage, color], index, array) => {
		const scales = palette[`${color}Dark`];
		const alphaScales = palette[`${color}DarkA`];

		if (usage === "neutral") stylesheet += `\t--color-${usage}: 0 0% 0%;\n`;

		Object.entries(scales).forEach(([scale, value]) => {
			const scaleNumber = Number(scale.replace(`${color}`, ""));
			const translator = new ColorTranslator(value, {
				anglesUnit: "deg",
			});
			const innerValue = `${translator.H} ${translator.S}% ${translator.L}%`;
			stylesheet += `\t--color-${usage}-${scaleNumber}: ${innerValue};\n`;
		});

		stylesheet += "\n";

		if (usage === "neutral")
			stylesheet += `\t--color-${usage}-a: 0 0% 0% / 0.95;\n`;

		Object.entries(alphaScales).forEach(([scale, value]) => {
			const scaleNumber = Number(scale.replace(`${color}A`, ""));
			const translator = new ColorTranslator(value, {
				anglesUnit: "deg",
			});
			const innerValue = `${translator.H} ${translator.S}% ${translator.L}% / ${translator.A}`;
			stylesheet += `\t--color-${usage}-a${scaleNumber}: ${innerValue};\n`;
		});

		if (index < array.length - 1) {
			stylesheet += "\n";
		}
	});

	stylesheet += "}\n";

	fse.outputFileSync(
		path.resolve(process.cwd(), "./app/styles/colors.css"),
		stylesheet,
		{ encoding: "utf-8" },
	);
}
=======
export function generateColors() {}
>>>>>>> 27ca61b (wip cli colors command)
