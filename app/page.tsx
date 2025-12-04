import LandingHeroArea from "@/components/pages/home/hero";
import NewsWritingsSection from "@/components/pages/home/news-writings-section";
import ProjectSection from "@/components/pages/home/project-section";
import SectionOne from "@/components/pages/home/section-one";

export const metadata = {
	title: "Home | Inji So",
};

export default function Home() {
	return (
		<>
			<div className="relative">
				<LandingHeroArea />
				<SectionOne />
			</div>
			<ProjectSection />
			<NewsWritingsSection />
		</>
	);
}
