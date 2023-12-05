import Button from "@/components/Button";
import React from "react";

function SidebarItem({ data }: { data: TSidebarItem }) {
	return (
		<div>
			<Button classname='text-white' type='secondary' href={data.href} title={data.title} Icon={data.icon} />
		</div>
	);
}

export default SidebarItem;
