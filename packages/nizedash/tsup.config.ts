import { type Options } from "tsup";

export default [
	{
		bundle: true,
		entry: ["./src/bin.ts"],
		format: "esm",
		minify: true,
		platform: "node",
		target: "node20",
	},
	{
		bundle: true,
		dts: true,
		entry: ["./src/index.ts"],
		format: "esm",
		minify: false,
		platform: "node",
		sourcemap: true,
		target: "node20",
	},
] satisfies Options[];
