// IMPORTS
import 'styles/main.scss';

// VIEWPORT
const viewport = {
	width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

// METADATA
const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_UI_URI),
	title: 'heller grafik - Grafik für helle Köpfe',
	description: 'Hinter heller grafik steckt eine visuelle Gestalterin aus Luzern mit Passion zu durchdachtem Branding.',
	openGraph: {
		title: 'Samira Haas',
		description: 'Hinter heller grafik steckt eine visuelle Gestalterin aus Luzern mit Passion zu durchdachtem Branding.',
		url: 'https://hellergrafik.ch',
		siteName: 'heller grafik - Grafik für helle Köpfe',
		images: [{ url: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fnf003-hegr-website-space-dev.fra1.digitaloceanspaces.com%2F03_general_2b048ced4c.webp&w=3840&q=75', width: 800, height: 600 }],
		locale: 'de-ch',
		type: 'website'
	}
};

// LAYOUT
const Layout = ({ children }) => {
	
	
	// RENDER
	
	return (
		<html lang="de">
		<body>{ children }</body>
		</html>
	);
	
};

// EXPORTS
export { viewport, metadata };
export default Layout;
