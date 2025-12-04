"use client";
import GradientAnimation from "@/components/GradientAnimation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingHeroArea() {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const navLinks = [
		{
			name: "about me",
			href: "#about",
		},
		{
			name: "filmography",
			href: "#filmography",
		},
		{
			name: "art works",
			href: "#art-works",
		},
		{
			name: "skills",
			href: "#skills",
		},
	];

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 0);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<GradientAnimation
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					height: "100%",
					// maxHeight: "1068px",
				}}
				colors={[0xffe4be, 0xabd6ff, 0xffffff, 0xadebb3, 0xffd4f5]}
				amp={50}
				seed={5}
				// rotation={20}
			/>
			<Image
				src="/assets/images/landing-header-bg.png"
				alt=""
				width={2094}
				height={1577.580078125}
				className={cn(
					"absolute inset-0 z-[2] max-sm:min-h-full max-sm:object-cover duration-[7s] transition-all",
					{ "opacity-0": isLoaded }
				)}
			/>
			<Image
				src="/assets/images/texture.png"
				alt=""
				width={2094}
				height={1068}
				className="absolute top-0 left-0 w-full max-sm:min-h-full pointer-events-none opacity-15 max-h-[1068px]"
			/>
			<header className="bg-cover relative mb-24 md:mb-[178px] z-[3]">
				<div className="col container pt-45 md:pt-58 items-center">
					<h1 className="text-center font-bold font-syne leading-[0.9] text-black uppercase lg:text-[5rem] text-4xl">
						HELLO, I&apos;AM INJI
					</h1>
					<p className="mt-8 mb-15 text-center text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.4]">
						Producer & director who stays up to late to create
						<br /> stories worth staying up late for
					</p>

					<div className="flex flex-wrap items-center gap-4 md:gap-10 justify-center">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="uppercase font-medium text-text4 leading-loose font-poppins md:h-15 flex-center px-3 sm:px-5 md:px-9 rounded-3xl hero-link max-md:py-2 max-md:px-4 max-md:rounded-2xl! max-md:text-sm md:rounded-[24px]!"
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</header>
		</>
	);
}
