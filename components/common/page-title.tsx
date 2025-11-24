import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const PageTitle = ({
	title,
	className,
}: {
	title: string;
	className?: string;
}) => {
	return (
		<h1
			className={cn(
				"text-[10.625rem] text-white leading-[0.9] uppercase",
				className
			)}
		>
			{title}
		</h1>
	);
};

export const PageSubtitle = ({
	text,
	className,
}: {
	text: ReactNode;
	className?: string;
}) => {
	return (
		<h1
			className={cn(
				"text-2xl text-white leading-[1.4] font-dm-sans",
				className
			)}
		>
			{text}
		</h1>
	);
};
