import { DATA_ROUTE } from "@/constant/data-route";
import SidebarItem from "./SidebarItem";
import Button from "../Button";

export default function Sidebar({ classname }: { classname: string }) {
	const handleLogout = () => {
		alert("logout");
	};
	return (
		<aside className={`w-full h-[100vh]   relative  ${classname}`}>
			<div className='  w-auto  bg-primary  h-[100vh] top-28 bottom-0'>
				{DATA_ROUTE.map((item, index) => {
					return <SidebarItem key={index} data={item} />;
				})}
			</div>
			<Button
				onClick={handleLogout}
				title='LOGOUT'
				classname='text-white bg-secondary w-full absolute bottom-0 px-4 py-6'
			/>
		</aside>
	);
}
