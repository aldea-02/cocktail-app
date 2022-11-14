import Link from 'next/link'

const LETTERS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
]

export default function AtoZPage() {
	return (
		<div className='grid grid-cols-4 place-items-center gap-6 py-10 px-10 sm:grid-cols-6 sm:px-20 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12'>
			{LETTERS.map((letter) => (
				<Link
					key={letter}
					href={`/cocktails/${letter}?searchBy=letter`}
					className={
						'p-1 text-4xl hover:bg-black hover:text-white active:bg-black active:text-white sm:p-2 sm:text-5xl'
					}
				>
					{letter.toUpperCase()}
				</Link>
			))}
		</div>
	)
}
