'use client'

import { useRouter } from 'next/navigation'

export default function CocktailPage() {
	const router = useRouter()
	router.push(`/`)
	return <></>
}
