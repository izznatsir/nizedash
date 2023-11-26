import { CommitIcon } from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import {
	Button as RacButton,
	type ButtonProps as RacButtonProps,
} from "react-aria-components";
import { tm } from "~/utils/classname";
import { isFunction } from "~/utils/typeof";

let ButtonVariants = cva(
	[
		"w-fit rounded font-medium transition-colors",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-informative-focus-ring",
		"disabled:text-neutral-placeholder disabled:cursor-not-allowed",
	],
	{
		variants: {
			variant: {
				ghost: [
					"h-7 px-3 text-neutral-text",
					"hover:bg-neutral-bg hover:text-neutral-text-contrast",
					"disabled:relative disabled:bg-neutral-bg-active",
				],
				link: [
					"text-informative-text",
					"hover:text-informative-text-contrast hover:bg-informative-bg",
				],
				primary: [
					"h-7 px-3 bg-informative-bg border border-informative-border text-informative-text",
					"hover:bg-informative-bg-hover hover:text-informative-text-contrast hover:border-informative-border-hover",
					"disabled:relative disabled:bg-neutral-bg-active disabled:border disabled:border-neutral-border",
				],
				secondary: [
					"h-7 px-3 bg-neutral-bg-subtle border border-neutral-border text-neutral-text",
					"hover:bg-neutral-bg hover:text-neutral-text-contrast hover:border-e-neutral-border-hover",
					"disabled:relative disabled:bg-neutral-bg-active disabled:border disabled:border-neutral-border",
				],
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);

export interface ButtonProps
	extends RacButtonProps,
		VariantProps<typeof ButtonVariants> {
	isPending?: boolean;
}

export let Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(
		{ children, className, isPending, isDisabled, variant, ...props },
		ref,
	) {
		isDisabled = isPending ? isPending : isDisabled;
		isPending = isPending && variant !== "link";

		return (
			<RacButton
				{...props}
				className={(renderProps) =>
					tm(
						ButtonVariants({
							variant,
						}),
						isFunction(className)
							? className(renderProps)
							: className,
					)
				}
				isDisabled={isDisabled}
				ref={ref}
			>
				{(renderProps) => (
					<>
						<div
							className={tm("contents", isPending && "invisible")}
						>
							{isFunction(children)
								? children(renderProps)
								: children}
						</div>
						{isPending && (
							<div className="absolute inset-0 flex items-center justify-center">
								<CommitIcon className="animate-spin" />
							</div>
						)}
					</>
				)}
			</RacButton>
		);
	},
);
Button.displayName = "Button";
