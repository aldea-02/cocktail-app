import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getCocktail(id, random) {
	let searchFilter = ``

	switch (random) {
		case 'true':
			searchFilter = `random.php`
			break
		case 'false':
			searchFilter = `lookup.php?i=${id}`
			break
		default:
			break
	}

	try {
		const res = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/${searchFilter}`,
			{
				next: { revalidate: 10 }
			}
		)
		const data = await res.json()
		return data.drinks[0]
	} catch (error) {
		notFound()
	}
}

export default async function CocktailDetail({ params, searchParams }) {
	const cocktail = await getCocktail(params.id, searchParams.random)

	const {
		strDrink,
		strCategory,
		strAlcoholic,
		strGlass,
		strInstructions,
		strDrinkThumb,
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
		strIngredient6,
		strIngredient7,
		strIngredient8,
		strIngredient9,
		strIngredient10,
		strIngredient11,
		strIngredient12,
		strIngredient13,
		strIngredient14,
		strIngredient15,
		strMeasure1,
		strMeasure2,
		strMeasure3,
		strMeasure4,
		strMeasure5,
		strMeasure6,
		strMeasure7,
		strMeasure8,
		strMeasure9,
		strMeasure10,
		strMeasure11,
		strMeasure12,
		strMeasure13,
		strMeasure14,
		strMeasure15
	} = cocktail

	const stats = {
		'Name:': strDrink,
		'Category:': strCategory,
		'Alcoholic:': strAlcoholic,
		'Glass Type:': strGlass
	}

	const ingredients = [
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
		strIngredient6,
		strIngredient7,
		strIngredient8,
		strIngredient9,
		strIngredient10,
		strIngredient11,
		strIngredient12,
		strIngredient13,
		strIngredient14,
		strIngredient15
	]

	const measurements = [
		strMeasure1,
		strMeasure2,
		strMeasure3,
		strMeasure4,
		strMeasure5,
		strMeasure6,
		strMeasure7,
		strMeasure8,
		strMeasure9,
		strMeasure10,
		strMeasure11,
		strMeasure12,
		strMeasure13,
		strMeasure14,
		strMeasure15
	]

	return (
		<div className='flex flex-col gap-7 p-5 sm:p-10'>
			<section className='flex items-start justify-between'>
				<ul className='flex flex-col gap-2'>
					{Object.entries(stats).map((stat, i) => {
						return (
							<li key={i}>
								<span className='mb-2 border-b-2 border-black sm:text-lg '>
									{stat[0]}
								</span>
								<div className='text-xl sm:text-2xl'>{stat[1]}</div>
							</li>
						)
					})}
				</ul>
				<Image
					src={strDrinkThumb}
					alt={`${strDrink} Cocktail Image`}
					width={150}
					height={150}
					quality={100}
					className='border-2 border-black sm:w-52 sm:border-4'
				/>
			</section>
			<article className='flex flex-col gap-2 sm:max-w-lg'>
				<span className='border-b-2 border-black text-xl sm:text-2xl'>
					Instructions:
				</span>
				<p className='sm:text-lg'>{strInstructions}</p>
			</article>
			<section className='flex flex-col border border-black sm:max-w-lg'>
				<span className='border border-black p-0.5 text-lg font-semibold sm:px-1 sm:text-xl'>
					Ingredients & Measurements:
				</span>
				<ul>
					{ingredients.map((ingredient, i) => {
						if (ingredient) {
							return (
								<li
									key={i}
									className='flex justify-between border border-black'
								>
									<div className='p-0.5 sm:px-1 sm:text-lg'>{ingredient}</div>
									<div className='p-0.5 sm:px-1 sm:text-lg'>
										{measurements[i]}
									</div>
								</li>
							)
						}
					})}
				</ul>
			</section>
		</div>
	)
}
