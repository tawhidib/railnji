"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();
	const getBg = () => {
		switch (pathname) {
			case "/":
				return (
					<Image
						src="/assets/images/footer-bg.png"
						alt=""
						width={1346.98}
						height={1318.63}
						className="bottom-0 left-0 absolute -z-1"
					/>
				);
			case "/about":
				return (
					<Image
						src="/assets/images/footer-bg-about.png"
						alt=""
						width={1422.5404108892799}
						height={1392.595464482002}
						className="bottom-0 right-0 absolute -z-1"
					/>
				);
			case "/skills":
				return (
					<Image
						src="/assets/images/footer-bg-skills.png"
						alt=""
						width={1100.05}
						height={1076.9}
						className="bottom-0 left-0 absolute -z-1"
					/>
				);
			default:
				return null;
		}
	};
	return (
		<footer className="relative">
			<div className="mx-auto px-4 xl:px-0 max-w-336 border-t border-t-black pt-6 pb-12">
				<div className="flex-between flex-col items-start md:items-center md:flex-row gap-y-10">
					<div className="col gap-10">
						<Link
							href="/"
							className="leading-[0.9] font-semibold text-black text-[2.5rem] "
						>
							INJI SO
						</Link>
						<p className="mt-px text-black/70 leading-[1.32] text-lg md:text-[1.375rem]">
							Producer & director who stays up late{" "}
							<br className="hidden lg:block" /> to create stories worth
							staying up late for
						</p>
					</div>
					<div className="flex gap-10 flex-col sm:flex-row items-start">
						<Links
							title="more information"
							links={[
								{ label: "About", href: "/about" },
								{
									label: "LinkedIn",
									href: "https://www.linkedin.com/",
								},
								{
									label: "Instagram",
									href: "https://www.instagram.com/",
								},
							]}
						/>
						<Links
							title="contact"
							links={[
								{
									label: "soinji@icloud.com",
									href: "mailto:soinji@icloud.com",
								},
								{
									label: "WhatsApp",
									href: "https://wa.me/",
								},
								{
									label: "KakaoTalk",
									href: "https://open.kakao.com/",
								},
							]}
						/>
					</div>
				</div>
			</div>

			{getBg()}
		</footer>
	);
}

const Links = ({
	title,
	links,
}: {
	title: string;
	links: { label: string; href: string }[];
}) => {
	return (
		<div className="col gap-6">
			<h5 className="font-semibold md:text-xl text-lg leading-[0.9] text-black capitalize">
				{title}
			</h5>
			<div className="col gap-5">
				{links.map(({ label, href }) => (
					<Link
						className="leading-[0.9] md:text-xl text-lg text-black/70 w-fit"
						key={label}
						href={href}
					>
						{label}
					</Link>
				))}
			</div>
		</div>
	);
};
