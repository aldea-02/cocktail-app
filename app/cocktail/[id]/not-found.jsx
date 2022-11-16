import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex h-[70vh] flex-col items-center justify-center gap-2'>
			<div className='mb-5 font-serif text-6xl italic sm:mb-10 sm:text-7xl lg:text-8xl'>
				Not Found
			</div>
			<div className='text-xl sm:text-2xl lg:text-4xl'>
				Couldn&#39;t find requested cocktail
			</div>
			<Link
				href={'/'}
				className={
					'inline p-1 text-xl hover:bg-black hover:text-white active:bg-black active:text-white sm:text-2xl lg:text-4xl'
				}
			>
				Back to main page
			</Link>
		</div>
	)
}
