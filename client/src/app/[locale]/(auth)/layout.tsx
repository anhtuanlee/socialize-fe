"use client";

import "@/styles/index.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang='en'>
			<body className={`${poppins.className} bg-be`}>
				<div>{children}</div>{" "}
			</body>{" "}
		</html>
	);
}
