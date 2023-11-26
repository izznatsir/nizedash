import animate from "tailwindcss-animate";
import rac from "tailwindcss-react-aria-components";

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./app/**/*.{ts,tsx}"],
	theme: {},
	plugins: [animate, rac()],
};
