"use client";
import SectionNumberTitle from "@/components/common/section-number-title";
import SliderAuto from "@/components/common/slider-auto";

export default function NewsWritingsSection() {
	return (
		<div className="md:pt-30 md:pb-54.5 container">
			<SectionNumberTitle number="03/" title="news & writings" />
			<div className="py-6 max-md:mb-6 md:py-15.5 max-w-[1200px] mx-auto">
				<SliderAuto
					slidesPerView={"auto"}
					data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
					renderItem={(item) => (
						<div key={item} className="bg-[#D9D9D9] h-128" />
					)}
					swiperClassName="w-97.5 aspect-390/416"
					containerClassName=""
				/>
			</div>
		</div>
	);
}
