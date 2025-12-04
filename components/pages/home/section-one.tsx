import SectionNumberTitle from "@/components/common/section-number-title";
import Image from "next/image";

export default function SectionOne() {
	return (
		<div
			id="about"
			className="w-full max-w-[86.688rem] mx-auto px-6.25 relative z-[3]"
		>
			<div className="bg-[#838383] py-14.75 p-5 md:px-17 rounded-[0.938rem] min-h-135 relative overflow-hidden flex">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 w-full">
					<SectionNumberTitle
						number="01/"
						title="about me"
						className="text-white"
					/>
					<div className="h-full flex flex-col justify-center before:content-[''] before:w-[70.66px] before:h-[1.27px] before:bg-white before:mb-6">
						<p className="text-white font-light text-[1.375rem] leading-[1.48] tracking-[0.025em] xl:text-[22px] font-dm-sans">
							TV producer & director <br /> with a decade of
							experience.
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
					className="max-md:hidden absolute -bottom-5 pointer-events-none"
				/>
			</div>
		</div>
	);
}
