import Image from "next/image";

const SkillsPageIndex = () => {
	return (
		<>
			<header className="bg-[url('/assets/images/skills-header-bg.png')] bg-center bg-cover min-h-screen relative flex-center">
				<div className="container col-center gap-6">
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
