import { fontFamily } from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";
import rac from "tailwindcss-react-aria-components";

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./app/**/*.{ts,tsx}"],
	theme: {
		colors: getColorAliases(),
		fontFamily: { sans: ["Inter", ...fontFamily.sans] },
		fontSize: {
			base: ["0.75rem"],
		},
	},
	plugins: [animate, rac()],
};

function getColorAliases() {
	let colorsTheme = {
		neutral: {},
		informative: {},
		positive: {},
		cautionary: {},
		negative: {},
	};

	let SCALE_USAGE_MAP = {
		1: ["base"],
		2: ["bg-subtle"],
		3: ["bg", "border-subtle"],
		4: ["bg-hover"],
		5: ["bg-active"],
		6: ["line"],
		7: ["border"],
		8: ["border-hover", "focus-ring"],
		9: ["solid", "placeholder"],
		10: ["solid-hover"],
		11: ["text"],
		12: ["text-contrast"],
	};

	for (let scale = 1; scale <= 12; scale++) {
		for (let semantic of Object.keys(colorsTheme)) {
			let usages = SCALE_USAGE_MAP[scale];
			for (let usage of usages) {
				colorsTheme[semantic][usage] =
					`hsl(var(--color-${semantic}-${scale}) / <alpha-value>)`;
			}
		}
	}

	return colorsTheme;
}
