import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getCocktails(string, type) {
	let searchFilter = ``

	switch (type) {
		case 'letter':
			searchFilter = `f=${string}`
			break
		case 'name':
			searchFilter = `s=${string}`
			break
		default:
			break
	}

	try {
		const res = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchFilter}`,
			{
				next: { revalidate: 10 }
			}
		)
		const data = await res.json()
		return data.drinks
	} catch (error) {
		notFound()
	}
}

export default async function CocktailsList({ params, searchParams }) {
	const cocktails =
		(await getCocktails(params.string, searchParams.searchBy)) ?? []
	return (
		<div className='flex justify-center p-5'>
			{!cocktails.length == 0 ? (
				<ul className='flex flex-col items-center gap-5'>
					<div className='border-b-2 border-black p-1 text-2xl sm:text-3xl lg:text-4xl '>
						Results for
						<span className='text-violet-700'> {params.string}</span>
					</div>
					{cocktails.map((cocktail) => {
						return <CocktailItem key={cocktail.idDrink} cocktail={cocktail} />
					})}
				</ul>
			) : (
				notFound()
			)}
		</div>
	)
}

function CocktailItem({ cocktail }) {
	return (
		<li className=' hover:scale-110'>
			<Link
				className='text-xl hover:bg-black hover:text-white active:bg-black active:text-white sm:text-2xl lg:text-3xl'
				href={`cocktail/${cocktail.idDrink}?random=false`}
			>
				{cocktail.strDrink}
			</Link>
		</li>
	)
}
