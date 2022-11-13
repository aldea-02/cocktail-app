export default function Home() {
	return (
		<div className='flex flex-col items-center justify-between gap-10 p-10 sm:gap-14 sm:p-14 '>
			<span className='font-serif text-7xl sm:text-9xl '>Cocktail</span>
			<span>
				<span className='text-2xl sm:text-5xl'>&quot; </span>
				<blockquote
					className='inline font-serif text-lg italic text-neutral-900 sm:text-xl'
					cite='https://en.wikipedia.org/wiki/Cocktail'
				>
					an alcoholic drink consisting of a spirit or spirits mixed with other
					ingredients, such as fruit juice or cream
				</blockquote>
				<span className='text-2xl sm:text-5xl'> &quot;</span>
			</span>
			<form action='' className='flex flex-col items-center gap-6'>
				<input
					type='text'
					className='border border-black p-2 tracking-wider outline-none outline-offset-0 focus:outline-violet-700 font-bold'
				/>
				<button
					type='submit'
					className='group relative flex items-center justify-center space-x-3 overflow-hidden rounded-md border border-black p-3 font-bold text-black hover:text-white active:bg-black active:text-white'
				>
					<div className='absolute top-0 left-0 h-full w-full translate-y-full bg-black duration-300 group-hover:translate-y-0'></div>
					<span className='relative'>Submit</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='relative w-7 group-hover:stroke-white'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#000000'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<line x1='5' y1='12' x2='19' y2='12'></line>
						<line x1='13' y1='18' x2='19' y2='12'></line>
						<line x1='13' y1='6' x2='19' y2='12'></line>
					</svg>
				</button>
			</form>
		</div>
	)
}
