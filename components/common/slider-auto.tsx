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
				<button
					className={cn("prev-btn")}
					onClick={handlePrev}
					disabled={isBeginning}
				>
					<AngleIcon />
				</button>
			)}

			{/* Right Arrow */}
			{isEnd ? null : (
				<button
					className={cn("next-btn")}
					onClick={handleNext}
					disabled={isEnd}
				>
					<AngleIcon />
				</button>
			)}
			<Swiper
				slidesPerView="auto"
				spaceBetween={spaceBetween}
				modules={[Navigation]}
				{...swiperProps}
				className={cn("mySwiper", swiperProps.className)}
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
					<SwiperSlide
						key={itemIndex}
						className={cn(swiperClassName)}
					>
						{renderItem(item, itemIndex)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
