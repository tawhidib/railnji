"use client";

import { PageSubtitle, PageTitle } from "@/components/common/page-title";
import SliderAuto from "@/components/common/slider-auto";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const FilmographyPageIndex = () => {
	const title = "text-sm md:text-2xl leading-[0.9] text-black font-medium";
	const img = "object-cover h-full rounded-xl w-full aspect-580/416";
	const breakpoints = {
		0: {
			slidesPerView: 1.2,
		},
		640: {
			slidesPerView: 1.3,
		},
		768: {
			slidesPerView: 1.8,
		},
		1024: {
			slidesPerView: 2.2,
		},
	};
	return (
		<>
			<header className="w-full h-full bg-text3/30 bg-[url('/assets/images/filmography-bg.png')] bg-cover bg-center bg-no-repeat relative min-h-[80vh]">
				<div className="main-container col gap-2 pt-50">
					<PageTitle title="Filmography" />
					<PageSubtitle
						className="max-w-163"
						text="Producer & director who stays up to late to create stories worth staying up late for"
					/>
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
				<div className="col gap-10 xl:gap-35 pt-30 pb-54 main-container">
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
								breakpoints={breakpoints}
								renderItem={(item) => (
									<Item key={item.src}>
										<Image
											width={580}
											height={416}
											src={item.src}
											alt=""
											className={cn(img)}
										/>
										<p className={cn(title)}>{item.title}</p>
									</Item>
								)}
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
								breakpoints={breakpoints}
								renderItem={(item) => (
									<Item key={item.src}>
										<Image
											width={580}
											height={416}
											src={item.src}
											alt=""
											className={cn(img)}
										/>
										<p className={cn(title)}>{item.title}</p>
									</Item>
								)}
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
								breakpoints={breakpoints}
								renderItem={(item) => (
									<Item key={item.src}>
										<Image
											width={580}
											height={416}
											src={item.src}
											alt=""
											className={cn(img)}
										/>
										<p className={cn(title)}>{item.title}</p>
									</Item>
								)}
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
								renderItem={(item) => (
									<Item key={item.title}>
										<div className="bg-[#C4C4C4] rounded-xl w-full aspect-580/416" />
										<p className={cn(title)}>{item.title}</p>
									</Item>
								)}
								breakpoints={breakpoints}
							/>
						</div>
					</div>
				</div>
				<Image
					width={1089.8679049648513}
					height={1066.9257666078272}
					src="/assets/images/filmography-shape.png"
					alt=""
					className="absolute right-0 top-0"
				/>
			</div>
		</>
	);
};

export default FilmographyPageIndex;

const Title = ({ text }: { text: string }) => {
	return (
		<h3 className="text-xl md:text-5xl leading-[0.9] uppercase text-black font-noken">
			{text}
		</h3>
	);
};

const Item = ({ children }: { children: React.ReactNode }) => {
	const [hover, setHover] = useState(false);

	if (hover) {
		return (
			<div
				onMouseLeave={() => {
					setHover(false);
				}}
			>
				<div className="flex items-stretch w-full aspect-580/416 rounded-xl overflow-hidden">
					<div className="w-2/5">
						<Image
							width={243}
							height={363}
							src={"/assets/images/hover.jpg"}
							alt=""
							className={"h-full w-full"}
						/>
					</div>
					<div className="w-3/5 bg-[#838383] py-5 md:py-11.25 px-5">
						<h4 className="font-medium text-base md:text-xl leading-normal text-white mb-3">
							Where is My Home | 구해줘! 홈즈
						</h4>
						<div className="flex-between mb-6">
							<p className="text-white text-sm md:text-lg font-medium">
								Producer/Director
							</p>
							<p className="text-white text-sm md:text-lg font-medium">
								2025
							</p>
						</div>
						<div className="col">
							<p className="text-sm md:text-base text-white">
								Stars hit the streets to find the perfect <br /> home
								for their clients. <br /> Selling Sunset of Korea.{" "}
								<br /> On-location and studio shooting, Variety show{" "}
								<br /> Highest viewership ratings: 7.5%
							</p>
						</div>
						<div className="flex justify-end mt-auto">
							<p className="text-xs underline text-white mt-10">
								Learn More
							</p>
						</div>
					</div>
				</div>
				<p className="text-sm md:text-2xl leading-[0.9] text-black font-medium mt-3">
					Learn More
				</p>
			</div>
		);
	}
	return (
		<div onMouseEnter={() => setHover(true)} className="col gap-3.5 w-full">
			{children}
		</div>
	);
};
