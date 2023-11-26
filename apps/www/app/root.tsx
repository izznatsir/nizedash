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

export default function Component() {
	let navigate = useNavigate();

	return (
		<html className="h-[100dvh] text-[20px]" lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body className="contents">
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
