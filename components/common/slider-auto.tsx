"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import AngleIcon from "../icons/angle-icon";

type SliderAutoProps<T> = SwiperProps & {
	data: T[];
	renderItem: (item: T, index: number) => React.ReactNode;
	containerClassName?: string;
	swiperClassName?: string;
	spaceBetween?: number;
};

export default function SliderAuto<T>({
	data,
	renderItem,
	containerClassName,
	swiperClassName,
	spaceBetween = 20,
	...swiperProps
}: SliderAutoProps<T>) {
	const [swiper, setSwiper] = useState<SwiperType | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	const handleNext = () => {
		swiper?.slideNext();
	};

	const handlePrev = () => {
		swiper?.slidePrev();
	};

	// 🔧 Update state whenever swiper changes slides or position
	const updateNavigationState = (swiperInstance: SwiperType) => {
		setIsBeginning(swiperInstance.isBeginning);
		setIsEnd(swiperInstance.isEnd);
	};

	return (
		<div className={cn("relative", containerClassName)}>
			{/* Left Arrow */}
			{isBeginning ? null : (
				<div className="from-body via-body/70 to-body/0 absolute top-0 left-0 z-10 hidden h-[calc(100%)] w-[60px] cursor-pointer items-center justify-center bg-linear-to-r md:flex">
					<button
						className={cn(
							"flex-center bg-card text-dark absolute top-1/2 left-1/2 z-10 size-10 -translate-x-1/2 -translate-y-1/2 rotate-180 rounded-full shadow-md transition-all"
						)}
						onClick={handlePrev}
						disabled={isBeginning}
					>
						<AngleIcon />
					</button>
				</div>
			)}

			{/* Right Arrow */}
			{isEnd ? null : (
				<div className="from-body via-body/70 to-body/0 absolute top-0 right-0 z-10 hidden h-[calc(100%)] w-[60px] cursor-pointer items-center justify-center bg-linear-to-l md:flex">
					<button
						className={cn(
							"flex-center bg-card text-dark absolute top-1/2 left-1/2 z-10 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md transition-all"
						)}
						onClick={handleNext}
						disabled={isEnd}
					>
						<AngleIcon />
					</button>
				</div>
			)}
			<Swiper
				slidesPerView="auto"
				spaceBetween={spaceBetween}
				modules={[Navigation]}
				breakpoints={{
					0: {
						slidesPerView: 1.2,
					},
					640: {
						slidesPerView: 2.2,
					},
					768: {
						slidesPerView: 3.2,
					},
					1024: {
						slidesPerView: 4.2,
					},
				}}
				{...swiperProps}
				className={cn("mySwiper py-5!", swiperProps.className)}
				onSwiper={(swiperInstance) => {
					setSwiper(swiperInstance);
					updateNavigationState(swiperInstance);
				}}
				onSlideChange={(swiperInstance) =>
					updateNavigationState(swiperInstance)
				}
				onReachBeginning={(swiperInstance) => {
					updateNavigationState(swiperInstance);
				}}
				onReachEnd={(swiperInstance) => {
					updateNavigationState(swiperInstance);
				}}
			>
				{data.map((item, itemIndex) => (
					<SwiperSlide key={itemIndex} className={cn(swiperClassName)}>
						{renderItem(item, itemIndex)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
