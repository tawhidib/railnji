import { cn } from "@/lib/utils";
import Link from "next/link";

type SectionTopAreaProps = {
	text: string;
	href?: string;
	className?: string;
};

export default function SectionTopArea({
	text,
	href,
	className,
}: SectionTopAreaProps) {
	return (
		<div className={cn("flex-between", className)}>
			<div className="col gap-5">
				<span className="bg-black h-[1.5px] w-8 md:w-10 lg:w-12.5" />
				<h3 className="text-black font-medium text-lg md:text-2xl -leading-[90%]">
					{text}
				</h3>
			</div>
			{href ? (
				<Link
					href={href}
					className="text-text3 text-sm md:text-base leading-loose font-medium rounded-[0.875rem] px-5 md:px-9 hero-link uppercase"
				>
					see all
				</Link>
			) : null}
		</div>
	);
}
