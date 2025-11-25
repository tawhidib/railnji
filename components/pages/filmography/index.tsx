import { PageSubtitle, PageTitle } from "@/components/common/page-title";
import Image from "next/image";

const FilmographyPageIndex = () => {
	return (
		<header className="h-screen bg-[url('/assets/images/about-hero.jpg')] bg-cover bg-center relative">
			<div className="w-full h-full bg-text3/30">
				<div className="main-container col gap-2 pt-50">
					<PageTitle title="Filmography" />
					<PageSubtitle text="Producer & director who stays up to late to create stories" />
					<PageSubtitle text="worth staying up late for" />
				</div>
			</div>
			<Image
				width={1701}
				height={318}
				src="/assets/images/rectangle.png"
				alt=""
				className="pointer-events-none absolute h-[318px] top-full w-full left-0 -translate-y-1/3"
			/>
		</header>
	);
};

export default FilmographyPageIndex;
