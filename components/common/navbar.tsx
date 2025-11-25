"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer";

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
	const [scrolled, setScrolled] = useState(false);

	const pathname = usePathname();

	useEffect(() => {
		function onScroll() {
			setScrolled(window.scrollY > 10);
		}

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return (
		<div
			className={cn(
				"w-full fixed top-0 left-0 right-0 z-50 transition duration-150",
				{
					"bg-white ": scrolled,
				}
			)}
		>
			<nav
				className={cn(
					"pb-5 pt-5 md:pt-10 main-container border-b border-black",
					pathname === "/filmography" && "text-white border-white",
					pathname === "/about" && "text-white border-white",
					{
						" text-black border-black": scrolled,
					}
				)}
			>
				<div className="flex items-center justify-between">
					<Link className="text-[1.375rem]" href="/">
						INJI SO
					</Link>
					<div className="flex items-center gap-10 max-md:hidden">
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
					{/* mobile menu  */}
					<Drawer direction="right">
						<DrawerTrigger className="md:hidden">
							<Menu />
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle className="text-2xl font-normal py-4 border-b">
									INJI SO
								</DrawerTitle>

								<div className="col gap-6 py-6">
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
							</DrawerHeader>
						</DrawerContent>
					</Drawer>
				</div>
			</nav>
		</div>
	);
}
