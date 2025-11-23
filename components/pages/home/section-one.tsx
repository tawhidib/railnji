import SectionNumberTitle from "@/components/common/section-number-title";
import Image from "next/image";

export default function SectionOne() {
	return (
		<div id="about-me" className="w-full max-w-[86.688rem] mx-auto px-6.25">
			<div className="bg-[#838383] py-14.75 px-17 rounded-[0.938rem] h-135 relative -mt-[358px] overflow-hidden">
				<div className="grid grid-cols-2 h-full">
					<SectionNumberTitle
						number="01/"
						title="about me"
						className="text-white"
					/>
					<div className="h-full flex flex-col justify-center before:content-[''] before:w-[70.66px] before:h-[1.27px] before:bg-white before:mb-6">
						<p className="text-white font-light text-[1.375rem] leading-[1.48] tracking-[4%]">
							TV producer & director <br /> with a decade of experience.
							<br />
							Participated in 12 shows. <br />
							Launched 7 show form the scratch. <br />
							Variety and music show expert. <br />
							K-pop insider. <br />
							Amateur 3D artist. <br />
						</p>
					</div>
				</div>
				<Image
					src="/assets/images/profile.png"
					alt="profile"
					width={1004}
					height={508}
					className="absolute -bottom-5 left-29 pointer-events-none"
				/>
			</div>
		</div>
	);
}
