import { cn } from "@/lib/utils";

export default function SectionNumberTitle({
	number,
	title,
	className,
}: {
	number: string;
	title: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"col font-medium text-sm sm:text-lg leading-none -tracking-[3%] uppercase text-black",
				className
			)}
		>
			<span>{number}</span>
			<h3>{title}</h3>
		</div>
	);
}
