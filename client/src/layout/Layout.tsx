"use client ";

import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<Wrapper>{children}</Wrapper>
		</>
	);
}
