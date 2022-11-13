import Header from '../components/Header'
import '../styles/globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head />
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
