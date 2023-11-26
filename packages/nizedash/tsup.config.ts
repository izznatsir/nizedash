import { type Options } from "tsup";

export default {
	bundle: true,
	entry: ["./src/bin.ts"],
	format: "esm",
	minify: true,
	platform: "node",
	target: "node20",
} satisfies Options;
