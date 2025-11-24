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
	return (
		<>
			<header className="bg-[url('/assets/images/skills-header-bg.png')] bg-center bg-cover relative flex-center">
				<div className="container">
					<div className="col-center gap-6 mt-77.5">
						<Image
							className="aspect-55/45 object-cover"
							width={55}
							height={45}
							src="/assets/images/appos.png"
							alt=""
						/>
						<p className="text-center text-[2rem] leading-[1.4] font-normal text-black">
							Great concepts are born from a deep understanding of
							technology. <br />I explore production methods that bridge
							innovation with the <br />
							audience’s experience.
						</p>
						<Image
							className="aspect-55/45 object-cover rotate-180"
							width={55}
							height={45}
							src="/assets/images/appos.png"
							alt=""
						/>
					</div>
					<div className="flex-center">
						<div className="mt-43 flex items-center gap-7.5">
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
										<h4 className="text-lg font-medium text-center leading-[1.33] tracking-[2%]">
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
		</>
	);
};

export default SkillsPageIndex;
