import { cn } from "@/lib/utils";

type ImageViewProps = {
	className?: string;
	title?: string;
};

export default function ImageView({ className, title }: ImageViewProps) {
	return (
		<div
			className={cn(
				"bg-cover overflow-hidden rounded-[0.938rem] relative bg-no-repeat",
				className
			)}
		>
			<div className="absolute inset-0 linear-shad col justify-end p-6 md:p-10">
				{title ? (
					<h3 className="font-syne text-bold text-2xl md:text-3xl lg:text-5xl text-white leading-none tracking-[-3%] font-bold">
						{title}
					</h3>
				) : null}
			</div>
		</div>
	);
}
