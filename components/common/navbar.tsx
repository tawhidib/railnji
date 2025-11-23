"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const navMenus = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: "Filmography",
			href: "/filmography",
		},
		{
			name: "About",
			href: "/about",
		},
		{
			name: "Skills",
			href: "/skills",
		},
	];
	const pathname = usePathname();
	return (
		<nav className="pb-5 pt-10 main-container flex items-center justify-between">
			<Link className="text-[1.375rem]" href="/">
				INJI SO
			</Link>
			<div className="flex items-center gap-10">
				{navMenus.map((menu) => (
					<Link
						key={menu.name}
						href={menu.href}
						className={cn("text-xl", {
							"font-semibold": pathname === menu.href,
						})}
					>
						{menu.name}
					</Link>
				))}
			</div>
		</nav>
	);
}
