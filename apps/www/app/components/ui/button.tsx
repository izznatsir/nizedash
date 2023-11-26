import { CommitIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import React from "react";
import {
	Button as RacButton,
	type ButtonProps as RacButtonProps,
} from "react-aria-components";
import { tm } from "~/utils/classname";
import { isFunction } from "~/utils/typeof";

export interface ButtonProps extends RacButtonProps {
	isPending?: boolean;
}

let ButtonVariants = cva("h-7 w-full px-3 rounded", {
	variants: {
		variant: {},
	},
	defaultVariants: {},
});

export let Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	function Button({ children, className, isPending, isDisabled, ...props }) {
		isDisabled = isPending ? isPending : isDisabled;

		return (
			<RacButton
				{...props}
				className={(renderProps) =>
					tm(
						"",
						isFunction(className)
							? className(renderProps)
							: className,
					)
				}
				isDisabled={isDisabled}
			>
				{(renderProps) => (
					<>
						{isFunction(children)
							? children(renderProps)
							: children}
						{isPending ? (
							<CommitIcon className="animate-spin" />
						) : null}
					</>
				)}
			</RacButton>
		);
	},
);
Button.displayName = "Button";
