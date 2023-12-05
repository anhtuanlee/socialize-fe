"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import Suggestion from "../Suggestion";
import useWindowResize from "@/hooks/useWindowResize";
import Container from "../Container";
import { wrapGrid } from "animate-css-grid";

function Wrapper({ children }: { children: ReactNode }) {
	const [isOpenSidebar, setSidebar] = useState<boolean>(false);
	const { isTablet } = useWindowResize();
	const gridRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (isTablet) {
			setSidebar(false);
		}
	}, [isTablet]);
	useEffect(() => {
		if (gridRef.current) {
			wrapGrid(gridRef.current);
		}
	}, [isOpenSidebar, gridRef]);

	return (
		<div className='mt-32 w-11/12   max-w-3xl  mx-auto'>
			<div className='grid grid-cols-20 gap-4' ref={gridRef}>
				<Sidebar classname={`${isOpenSidebar ? "sm:col-span-5  xl:col-span-4" : "sm:col-span-3  xl:col-span-2  "} `} />

				<div className={`${isOpenSidebar ? "sm:col-span-9  xl:col-span-11 " : "sm:col-span-11  xl:col-span-13  "}`}>
					<Container>{children}</Container>
				</div>
				<Suggestion classname='sm:col-span-6 md:col-span-6 xl:col-span-5 ' />
			</div>
			<button className='text-2xl' onClick={() => setSidebar(!isOpenSidebar)}>
				Test
			</button>
		</div>
	);
}

export default Wrapper;
