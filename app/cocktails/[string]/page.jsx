import Link from 'next/link'
import { notFound } from 'next/navigation'
import NotFound from './not-found'

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
			{ cache: 'no-store' }
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
		<div>
			{!cocktails.length == 0 ? (
				<ul>
					{cocktails.map((cocktail) => {
						return <CocktailItem key={cocktail.idDrink} cocktail={cocktail} />
					})}
				</ul>
			) : (
				NotFound()
			)}
		</div>
	)
}

function CocktailItem({ cocktail }) {
	return (
		<li>
			<span>{cocktail.strDrink}</span>
		</li>
	)
}
