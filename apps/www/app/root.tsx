import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useNavigate,
} from "@remix-run/react";
import { RouterProvider } from "react-aria-components";
import "@fontsource/inter/latin.css";
import "./styles/colors.css";
import "./styles/tailwind.css";

export default function Component() {
	let navigate = useNavigate();

	return (
		<html
			className="bg-neutral-base text-neutral-text-contrast h-[100dvh] text-[20px]"
			lang="en"
		>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body className="contents text-base">
				<RouterProvider navigate={navigate}>
					<Outlet />
				</RouterProvider>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
