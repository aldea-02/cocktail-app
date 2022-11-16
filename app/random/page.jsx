'use client'

import { useRouter } from 'next/navigation'

export default function CocktailsPage() {
	const router = useRouter()
	router.push(`/`)
	return <></>
}
