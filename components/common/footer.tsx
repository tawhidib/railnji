import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="container pt-6 pb-12 border-t border-t-black relative">
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
							{ label: "LinkedIn", href: "https://www.linkedin.com/" },
							{ label: "Instagram", href: "https://www.instagram.com/" },
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

			<Image
				src="/assets/images/footer-bg.png"
				alt=""
				width={1346.98}
				height={1318.63}
				className="bottom-0 left-[-529px] rotate-[-78.91 deg] absolute -z-1"
			/>
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
						className="leading-[0.9] md:text-xl text-lg text-black/70"
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
