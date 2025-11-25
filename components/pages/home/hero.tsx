import Image from "next/image";
import Link from "next/link";

export default function LandingHeroArea() {
	const navLinks = [
		{
			name: "about me",
			href: "#about-me",
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
	return (
		<header className="bg-cover h-267 relative">
			<Image
				src="/assets/images/landing-header-bg.png"
				alt=""
				width={2094}
				height={1577.580078125}
				className="absolute inset-0 -z-10"
			/>

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
							className="uppercase font-medium text-text4 leading-loose font-poppins h-15 flex-center px-3 sm:px-5 md:px-9 rounded-3xl hero-link"
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
