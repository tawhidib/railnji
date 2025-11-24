import { PageSubtitle, PageTitle } from "@/components/common/page-title";
import Image from "next/image";

const AboutPageIndex = () => {
	return (
		<>
			<header className="h-screen bg-[url('/assets/images/about-hero.jpg')] bg-cover bg-center relative">
				<div className="w-full h-full bg-text3/30">
					<div className="main-container col gap-2 pt-50">
						<PageTitle title="About Us" />
						<PageSubtitle text="From fangirl to producer — still creating with the heart of a fan." />
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

			<div className="container">
				<div className="mx-auto w-full max-w-[1117px] pt-45">
					<Title title="WORK EXPERIENCE" />
					<div className="bg-[#D9D9D9] rounded-[15px] h-102.5" />
					<div className="px-10.5 pt-10.5 col">
						{[
							{
								year: 2016,
								title: "Assistant Director at MBC",
								description:
									"High profile shows : Infinite Challenge, Unexpected Q, My Little Television V2",
							},
							{
								year: 2020,
								title: "Chief Assistant Director at MBC",
								description:
									"High profile shows: Show! Music Core, The Masked Singers, The Paik Father",
							},
							{
								year: 2023,
								title: "Director / Producer at MBC",
								description:
									"High profile shows: Hang Out with Yoo, Where is my home, Alumni Lovers",
							},
						].map((item) => (
							<div key={item.year} className="relative flex gap-8">
								{/* Year */}
								<div className="w-12 text-right font-medium text-lg">
									{item.year}
								</div>

								{/* Dot */}
								<div className="absolute left-[18px] top-1 h-3 w-3 rounded-full bg-black" />

								{/* Content */}
								<div className="flex-1">
									<h3 className="text-xl font-semibold">
										{item.title}
									</h3>

									<p className="mt-1 text-gray-700">
										<span className="font-medium">
											High profile shows:
										</span>{" "}
										{item.description}
									</p>

									<div className="mt-3 h-px w-full bg-black/25" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="container py-40">
				<Title title="INTERESTS" />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{
							src: "/assets/images/interest1.png",
							title: "AI Video generating",
						},
						{
							src: "/assets/images/interest2.png",
							title: "Overwatch 2",
						},
						{ src: "/assets/images/interest3.png", title: "Overwatch 2" },
						{ src: "/assets/images/interest4.png", title: "K-Pop" },
					].map((item) => (
						<div key={item.src} className="col-center gap-17.75">
							<div className="aspect-square flex-center">
								<Image
									width={304}
									height={304}
									src={item.src}
									alt=""
									className="object-cover w-full h-full"
								/>
							</div>
							<h5 className="text-[2rem] font-medium font-syne leading-[1.05] text-center">
								{item.title}
							</h5>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default AboutPageIndex;

const Title = ({ title }: { title: string }) => {
	return (
		<h2 className="uppercase text-6xl text-center mb-14 font-syne">
			{title}
		</h2>
	);
};
