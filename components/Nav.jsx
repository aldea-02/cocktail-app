import Link from 'next/link'

export default function Nav({ columns, mobileNav }) {
	return (
		<nav
			className={`${
				columns ? 'flex flex-col gap-2 sm:hidden' : 'hidden gap-7 sm:flex'
			} ${!mobileNav ? 'hidden' : ''} flex text-xl `}
		>
			<Link
				className="relative w-max transition-all after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:-scale-x-0 after:bg-white after:duration-300 after:content-[''] hover:after:scale-100 active:bg-white active:text-black"
				href='/'
			>
				Home
			</Link>
			<Link
				className="relative w-max transition-all after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:-scale-x-0 after:bg-white after:duration-300 after:content-[''] hover:after:scale-100 active:bg-white active:text-black"
				href='a-z'
			>
				A-Z
			</Link>
			<Link
				className="relative w-max transition-all after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:-scale-x-0 after:bg-white after:duration-300 after:content-[''] hover:after:scale-100 active:bg-white active:text-black"
				href='/random'
			>
				Random
			</Link>
		</nav>
	)
}
