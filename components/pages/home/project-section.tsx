import ImageView from "@/components/common/image-view";
import SectionNumberTitle from "@/components/common/section-number-title";
import SectionTopArea from "@/components/common/section-top-area";

export default function ProjectSection() {
	return (
		<div className="col gap-20.5 container mt-30">
			<SectionNumberTitle number="02/" title="projects" />
			<div>
				<SectionTopArea
					text="filmography"
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
			</div>
		</div>
	);
}
