import { UploadIcon } from "@radix-ui/react-icons";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="flex h-full flex-col items-center justify-center gap-3">
			<h2>Primary</h2>
			<Button>Button</Button>
			<h2>Pending</h2>
			<Button className="flex items-center gap-2" isPending>
				<UploadIcon />
				Button
			</Button>
			<h2>Button Link</h2>
			<Button variant="link">Button Link</Button>
			<h2>Secondary</h2>
			<Button variant="secondary">Button</Button>
			<h2>Ghost</h2>
			<Button variant="ghost">Button</Button>
		</div>
	);
}
