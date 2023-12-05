import Button from "@/components/Button";
import { LogoIcon } from "@/components/IconSvg";
import Link from "next/link";

export default function Signin() {
	return (
		<div>
			<header className='w-11/12   max-w-3xl  mx-auto mt-10 flex justify-between items-center'>
				<div className='flex flex-row items-center gap-4'>
					<LogoIcon />
					<span className='font-bold  text-4xl'>Socialize</span>
				</div>
				<div className='flex flex-row items-center gap-4'>
					<p>have an account?</p>
					<Link className='text-primary font-semibold' href={"/signin"}>
						Sign in!
					</Link>
				</div>
			</header>
			<section>
				<div className='flex flex-col items-center'>
					<h4 className='font-semibold'>Create Your Account</h4>
					<p>Sign up into your account</p>
				</div>
				<div>
					<button className='border-2 border-solid border-primary rounded-lg'>Google</button>
					<button className='border-2 border-solid border-primary rounded-lg'>Facebook</button>
				</div>
			</section>
		</div>
	);
}
