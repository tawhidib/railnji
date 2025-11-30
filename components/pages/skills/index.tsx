import Calender from "@/components/icons/calender";
import NotePencil from "@/components/icons/note-pencil";
import PlayCircle from "@/components/icons/play-circle";
import Image from "next/image";

const SkillsPageIndex = () => {
	const skills = [
		{ icon: <NotePencil />, title: "Content Development" },
		{ icon: <Calender />, title: "Production Management" },
		{ icon: <PlayCircle />, title: "Video Editing" },
	];

	const tools = [
		{
			title: "Advance",
			skills: [
				{
					src: "/assets/images/avid.png",
					title: "Avid",
				},
				{
					src: "/assets/images/adobe-pp.png",
					title: "Adobe Premiere Pro",
				},
				{
					src: "/assets/images/movie-magic.png",
					title: "Movie Magic Scheduling",
				},
			],
		},
		{
			title: "Proficient",
			skills: [
				{
					src: "/assets/images/adobe-ps.png",
					title: "Adobe Photoshop",
				},
				{
					src: "/assets/images/canva.png",
					title: "Canva",
				},
			],
		},
		{
			title: "Familiar",
			skills: [
				{
					src: "/assets/images/maya.png",
					title: "Maya",
				},
				{
					src: "/assets/images/zbrush.png",
					title: "Zbrush",
				},
				{
					src: "/assets/images/v-ray.png",
					title: "V-Ray",
				},
			],
		},
	];
	const languages = [
		{
			title: "Native",
			skills: [
				{
					src: "/assets/images/korean.png",
					title: "Korean",
				},
			],
		},
		{
			title: "Proficient",
			skills: [
				{
					src: "/assets/images/english.png",
					title: "English",
				},
			],
		},
		{
			title: "Familiar",
			skills: [
				{
					src: "/assets/images/chinese.png",
					title: "Chinese",
				},
			],
		},
	];
	return (
		<>
			<header className="bg-[url('/assets/images/skills-header-bg.png')] bg-center bg-cover relative flex-center">
				<div className="container">
					<div className="col-center gap-4 md:gap-6 pt-40 lg:pt-77.5">
						<Image
							className="aspect-55/45 object-cover max-md:scale-60"
							width={55}
							height={45}
							src="/assets/images/appos.png"
							alt=""
						/>
						<p className="text-center text-2xl md:text-[2rem] leading-[1.4] font-normal text-black">
							Great concepts are born from a deep understanding of
							technology. <br />I explore production methods that
							bridge innovation with the{" "}
							<br className="max-md:hidden" />
							audience’s experience.
						</p>
						<Image
							className="aspect-55/45 object-cover rotate-180 max-md:scale-60"
							width={55}
							height={45}
							src="/assets/images/appos.png"
							alt=""
						/>
					</div>
					<div className="flex-center">
						<div className="mt-20 md:mt-16 lg:mt-43 flex flex-col lg:flex-row items-center gap-7.5">
							{skills.map((skill, index) => (
								<div
									key={index}
									className="flex flex-col items-center gap-9 w-64.5 h-66.25 p-6  bg-[#838383] rounded-2xl shadow-[5px_4px_100px_5px_#0000000D] text-white z-1"
								>
									<p className="uppercase text-xl font-semibold  leading-[1.2] tracking-[2%]">
										expertise
									</p>
									<div className="col-center gap-3">
										<span className="size-15 flex-center">
											{skill.icon}
										</span>
										<h4 className="text-lg font-medium text-center leading-[1.33] tracking-[2%] max-w-30">
											{skill.title}
										</h4>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<Image
					width={1701}
					height={318}
					src="/assets/images/rectangle.png"
					alt=""
					className="pointer-events-none absolute h-[318px] top-full w-full left-0 -translate-y-1/2"
				/>
			</header>
			<div className="py-15 md:py-30 mt-15">
				<div className="container col gap-10 md:gap-30 xl:max-w-[1440px]!">
					<div className="flex flex-col gap-14">
						<Title title="TOOLS" />
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{tools?.map((item) => (
								<div
									key={item.title}
									className="col items-start gap-4 md:gap-14 whitish-gradient-border"
								>
									<ItemTitle title={item.title} />
									<div className="col items-start gap-3 md:gap-6">
										{item.skills?.map((skill) => (
											<div
												key={skill.title}
												className="flex items-center gap-2.5 md:gap-5"
											>
												<span className="size-10 md:size-15 lg:size-20  flex-center">
													<Image
														width={80}
														height={80}
														src={skill.src}
														alt=""
														className="object-cover"
													/>
												</span>
												<ItemName title={skill.title} />
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-14">
						<Title title="Language" />
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
							{languages?.map((item) => (
								<div
									key={item.title}
									className="col items-start gap-14"
								>
									<ItemTitle title={item.title} />
									<div className="col items-start gap-6">
										{item.skills?.map((skill) => (
											<div
												key={skill.title}
												className="flex items-center gap-5"
											>
												<span className="w-8 md:w-15 h-5 md:h-10 flex-center">
													<Image
														width={60}
														height={40.15}
														src={skill.src}
														alt=""
														className="object-cover"
													/>
												</span>
												<ItemName title={skill.title} />
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SkillsPageIndex;

const Title = ({ title }: { title: string }) => {
	return (
		<h3 className="font-medium font-syne text-4xl md:text-[2.5rem] leading-[1.4] text-center text-black">
			{title}
		</h3>
	);
};

const ItemTitle = ({ title }: { title: string }) => {
	return (
		<h4 className="w-full text-start font-medium text-2xl md:text-center text-black leading-[0.9]">
			{title}
		</h4>
	);
};
const ItemName = ({ title }: { title: string }) => {
	return (
		<h5 className="font-medium text-base md:text-[1.375rem] text-center text-black leading-[0.9]">
			{title}
		</h5>
	);
};
