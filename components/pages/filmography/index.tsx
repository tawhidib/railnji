"use client";

import { PageSubtitle, PageTitle } from "@/components/common/page-title";
import SliderAuto from "@/components/common/slider-auto";
import Image from "next/image";

const FilmographyPageIndex = () => {
	return (
		<>
			<header className="w-full h-full bg-text3/30 bg-[url('/assets/images/filmography-bg.png')] bg-cover bg-center bg-no-repeat relative min-h-[80vh]">
				<div className="main-container col gap-2 pt-50">
					<PageTitle title="Filmography" />
					<PageSubtitle text="Producer & director who stays up to late to create stories" />
					<PageSubtitle text="worth staying up late for" />
				</div>
				<Image
					width={1701}
					height={318}
					src="/assets/images/rectangle.png"
					alt=""
					className="pointer-events-none absolute h-45 top-full w-full left-0 -translate-y-1/3"
				/>
			</header>
			<div className="relative">
				<div className="col gap-35 pt-30 pb-54 main-container">
					{/* reality show  */}
					<div className="col gap-3">
						<Title text="variety/reality show" />
						<div className="py-3">
							<SliderAuto
								spaceBetween={30}
								slidesPerView={"auto"}
								data={[
									{
										src: "/assets/images/reality-show-1.jpg",
										title: "Where is My Home",
									},
									{
										src: "/assets/images/reality-show-2.jpg",
										title: "Hangout with Yoo ",
									},
									{
										src: "/assets/images/reality-show-3.png",
										title: "Alumni Lovers",
									},
								]}
								breakpoints={{}}
								renderItem={(item) => (
									<div key={item.src} className="col gap-3.5 w-145">
										<Image
											width={580}
											height={416}
											src={item.src}
											alt=""
											className="object-cover h-full rounded-xl w-145 aspect-580/416"
										/>
										<p className="text-2xl leading-[0.9] text-black font-medium">
											{item.title}
										</p>
									</div>
								)}
								swiperClassName="w-145!"
								containerClassName=""
							/>
						</div>
					</div>
					{/* music show  */}
					<div className="col gap-3">
						<Title text="music show" />
						<div className="py-3">
							<SliderAuto
								spaceBetween={30}
								slidesPerView={"auto"}
								data={[
									{
										src: "/assets/images/music-1.png",
										title: "King of Mask Singer",
									},
									{
										src: "/assets/images/music-2.png",
										title: "Show! Music Core",
									},
									{
										src: "/assets/images/music-3.jpg",
										title: "Under Nineteen",
									},
								]}
								breakpoints={{}}
								renderItem={(item) => (
									<div key={item.src} className="col gap-3.5 w-145">
										<Image
											width={580}
											height={416}
											src={item.src}
											alt=""
											className="object-cover h-full rounded-xl w-145 aspect-580/416"
										/>
										<p className="text-2xl leading-[0.9] text-black font-medium">
											{item.title}
										</p>
									</div>
								)}
								swiperClassName="w-145!"
								containerClassName=""
							/>
						</div>
					</div>
					{/* Live show  */}
					<div className="col gap-3">
						<Title text="live show" />
						<div className="py-3">
							<SliderAuto
								spaceBetween={30}
								slidesPerView={"auto"}
								data={[
									{
										src: "/assets/images/live-show-1.png",
										title: "MBC Drama Awards",
									},
									{
										src: "/assets/images/live-show-2.jpg",
										title: "The Paikfather",
									},
									{
										src: "/assets/images/live-show-3.jpg",
										title: "My Little Television",
									},
								]}
								breakpoints={{}}
								renderItem={(item) => (
									<div key={item.src} className="col gap-3.5 w-145">
										<Image
											width={580}
											height={416}
											src={item.src}
											alt=""
											className="object-cover h-full rounded-xl w-145 aspect-580/416"
										/>
										<p className="text-2xl leading-[0.9] text-black font-medium">
											{item.title}
										</p>
									</div>
								)}
								swiperClassName="w-145!"
								containerClassName=""
							/>
						</div>
					</div>
					{/* 3d show  */}
					<div className="col gap-3">
						<Title text="3D Art Works" />
						<div className="py-3">
							<SliderAuto
								spaceBetween={30}
								slidesPerView={"auto"}
								data={[
									{
										title: "Program Name",
									},
									{
										title: "Program Name",
									},
									{
										title: "Program Name",
									},
								]}
								breakpoints={{}}
								renderItem={(item) => (
									<div key={item.title} className="col gap-3.5 w-145">
										<div className="bg-[#C4C4C4] h-full rounded-xl w-145 aspect-580/416" />
										<p className="text-2xl leading-[0.9] text-black font-medium">
											{item.title}
										</p>
									</div>
								)}
								swiperClassName="w-145!"
								containerClassName=""
							/>
						</div>
					</div>
				</div>
				<Image
					width={1089.8679049648513}
					height={1066.9257666078272}
					src="/assets/images/filmography-shape.png"
					alt=""
					className="absolute top-10 right-0"
				/>
			</div>
		</>
	);
};

export default FilmographyPageIndex;

const Title = ({ text }: { text: string }) => {
	return (
		<h3 className="text-5xl leading-[0.9] uppercase text-black">{text}</h3>
	);
};
