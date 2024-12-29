// IMPORTS
import { BlankSite } from 'components/04-layouts/blank-site/blank-site';

// LAYOUT
const Layout = ({ children }) => {
	
	// RENDER
	return (
		<BlankSite>
			{ children }
		</BlankSite>
	);
	
};

export default Layout;
