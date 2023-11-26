let SCALE_USAGE_MAP = {
	1: ["base"],
	2: ["bg"],
	3: ["bg-hover", "border-subtle"],
	4: ["bg-active"],
	5: ["bg-disabled"],
	6: ["line"],
	7: ["border"],
	8: ["border-hover", "focus-ring"],
	9: ["solid", "placeholder"],
	10: ["solid-hover"],
	11: ["text"],
	12: ["text-contrast"],
} as const;

type ColorScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type SemanticColor =
	| "neutral"
	| "informative"
	| "positive"
	| "cautionary"
	| "negative";

export function getColorAliases() {
	let colorsTheme: Record<SemanticColor, Record<string, string>> = {
		neutral: {},
		informative: {},
		positive: {},
		cautionary: {},
		negative: {},
	};

	for (let scale = 1; scale <= 12; scale++) {
		for (let semantic of Object.keys(colorsTheme)) {
			let usages = SCALE_USAGE_MAP[scale as ColorScale];
			for (let usage of usages) {
				colorsTheme[semantic as SemanticColor][usage] =
					`hsl(var(--color-neutral-${scale}) / <alpha-value>)`;
			}
		}
	}

	return colorsTheme;
}
