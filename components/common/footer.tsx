import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="container pt-6 pb-12 border-t border-t-black relative">
			<div className="flex-between">
				<div className="col gap-10">
					<Link
						href="/"
						className="leading-[0.9] font-semibold text-black text-[2.5rem] "
					>
						INJI SO
					</Link>
					<p className="mt-px text-black/70 leading-[1.32] text-[1.375rem]">
						Producer & director who stays up late <br /> to create stories
						worth staying up late for
					</p>
				</div>
				<div className="flex gap-10">
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
				width={1346.9847227253188}
				height={1318.6302309269474}
				className="bottom-0 left-[-529px] rotate-[-78.91 deg] absolute -z-1"
			/>
		</div>
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
			<h5 className="font-semibold text-xl leading-[0.9] text-black capitalize">
				{title}
			</h5>
			<div className="col gap-5">
				{links.map(({ label, href }) => (
					<Link
						className="leading-[0.9] text-xl text-black/70"
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
