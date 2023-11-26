import React from "react";

export function useDebounce<Args extends Array<unknown>>(
	callback: (...args: Args) => void,
	timeout?: number,
) {
	let timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
	return (...args: Args) => {
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => callback(...args), timeout);
	};
}
