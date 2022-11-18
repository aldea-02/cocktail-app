'use client'

import { useRouter } from 'next/navigation'

export default function CocktailsPage() {
	const router = useRouter()
	router.push(`cocktail/0?random=true`)
	return <></>
}
