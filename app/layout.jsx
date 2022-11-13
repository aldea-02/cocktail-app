import Header from '../components/Header'
import '../styles/globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head />
			<body className='min-w-min'>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
