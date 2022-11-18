'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Nav from './Nav'

export default function Header() {
	const [mobileNav, setMobileNav] = useState(false)
	return (
		<header
			className={`${
				mobileNav ? 'py-7' : 'py-10'
			} flex max-w-full items-center justify-between bg-black px-5 font-bold text-white sm:px-10 sm:py-10`}
		>
			<Nav columns={true} mobileNav={mobileNav} />
			<Link href='/'>
				<Image
					src='/logo.png'
					alt='Logo'
					width={76}
					height={76}
					className={`${mobileNav ? 'hidden' : ''} sm:block`}
				/>
			</Link>
			<Nav columns={false} />
			<div className='sm:hidden'>
				<button
					onClick={() => {
						!mobileNav ? setMobileNav(true) : setMobileNav(false)
					}}
					type='button'
					className={`${
						mobileNav ? 'open' : ''
					} relative z-10 block h-6 w-6 cursor-pointer transition-all duration-300 focus:outline-none sm:hidden`}
				>
					<span className='hamburger-top'></span>
					<span className='hamburger-middle'></span>
					<span className='hamburger-bottom'></span>
				</button>
			</div>
		</header>
	)
}
