export default function Home() {
	return (
		<div className='flex flex-col items-center justify-between gap-10 p-10 sm:gap-14 sm:p-14 '>
			<span className='font-serif text-7xl sm:text-9xl '>Cocktail</span>
			<div>
				<div className='inline text-2xl sm:text-5xl'>&quot; </div>
				<blockquote
					className='inline font-serif text-lg italic text-neutral-900 sm:text-xl'
					cite='https://en.wikipedia.org/wiki/Cocktail'
				>
					an alcoholic drink consisting of a spirit or spirits mixed with other
					ingredients, such as fruit juice or cream
				</blockquote>
				<div className='inline text-2xl sm:text-5xl'> &quot;</div>
			</div>
			<form action=''>
				<input
					type='text'
					className='border border-black p-2 tracking-wider outline-none outline-offset-0 focus:outline-violet-700'
				/>
			</form>
		</div>
	)
}
