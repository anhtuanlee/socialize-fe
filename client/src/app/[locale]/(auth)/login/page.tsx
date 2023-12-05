import Button from "@/components/Button";
import { LogoIcon } from "@/components/IconSvg";
import Link from "next/link";

export default function Login() {
	return (
		<div className='flex flex-col items-center'>
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
			<section className='max-w-md flex flex-col justify-between '>
				<div className='flex flex-col items-center'>
					<h5 className='font-semibold'>Create Your Account</h5>
					<p>Sign up into your account</p>
				</div>
				<div className='mt-12 flex flex-row gap-8 justify-center'>
					<button className=' px-6 py-4 border-2 border-solid border-primary rounded-lg'>Google</button>
					<button className=' px-6 py-4 border-2 border-solid border-primary rounded-lg'>Facebook</button>
				</div>
				<span className="mx-auto mt-12 text-center  after:contents-[''] after:absolute relative after:w-11/12 after:-left-full   after:top-1/2 after:-translate-y-1/2 after:h-1 after:bg-[#dadada] before:contents-['']  after:contents-[''] before:absolute   before:w-11/12 before:-right-full   before:top-1/2 before:-translate-y-1/2 before:h-1 before:bg-[#dadada]  	">
					Or continue with
				</span>
				<form className='flex flex-col gap-8 mt-20'>
					<input
						className='border-[1px] border-[#dadada] border-solid focus:border-[#000] p-4 rounded-xl'
						placeholder='Name'
						name='name'
					/>
					<input
						className='border-[1px] border-[#dadada] border-solid focus:border-[#000] p-4 rounded-xl'
						placeholder='Email'
						name='email'
					/>
					<input
						className='border-[1px] border-[#dadada] border-solid focus:border-[#000] p-4 rounded-xl'
						placeholder='Password'
						name='password'
					/>
					<p className='text-xs'>
						By signing up you agree to our <span className=' text-xs text-primary'>Terms of Service</span> and
						<span className=' text-xs text-primary'>Privacy policy</span> and confirm that you are at least 18 years old
					</p>
					<Button classname='text-2xl' type='primary'>
						Sign Up
					</Button>
				</form>
			</section>
		</div>
	);
}
