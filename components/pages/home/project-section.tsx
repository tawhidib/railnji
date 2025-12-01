import ImageView from "@/components/common/image-view";
import SectionNumberTitle from "@/components/common/section-number-title";
import SectionTopArea from "@/components/common/section-top-area";
import Image from "next/image";

export default function ProjectSection() {
	return (
		<div className="relative" id="filmography">
			<div className="col gap-10 md:gap-20.5 container py-15 md:py-30 relative">
				<SectionNumberTitle number="02/" title="projects" />
				<div>
					<SectionTopArea
						text="Filmography"
						href="/filmography"
						className="mb-8"
					/>
					<ImageView
						title="Variety/Reality Shows"
						className="w-full aspect-1200/594 bg-[url('/assets/images/vr-show.jpg')] mb-5"
					/>
					<div className="flex gap-5">
						<ImageView
							title="Music Shows"
							className="grow-694 aspect-694/562 bg-[url('/assets/images/music-show.jpg')]"
						/>
						<ImageView
							title="Live Shows"
							className="grow-490 aspect-490/562 bg-[url('/assets/images/live-show.jpg')] bg-center"
						/>
					</div>
					<div className="mt-12 mb-8" id="art-works">
						<SectionTopArea
							text="3D Animation/Art Works"
							href="/art-works"
						/>
					</div>
					<ImageView className="w-full aspect-1200/594 bg-[url('/assets/images/3d-art.png')] mb-5" />
				</div>
			</div>
			<Image
				src="/assets/images/section-2-bg.png"
				alt=""
				width={1773.9543286995913}
				height={1736.612043901271}
				className="absolute top-0 right-0 -z-1"
			/>
		</div>
	);
}
