// IMPORT
import './not-found.scss';
import { H1 } from 'components/01-atoms/heading/heading.jsx';
import { Section } from 'components/04-layouts/section/section.jsx';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';

// NOT FOUND
const NotFound = () => {
	
	// RENDER
	return (
		<Section className="not-found">
			<div className="not-found__content">
				<H1 className="not-found__heading" type="h1" looklike="h1">Fehler 404</H1>
				<H1 className="not-found__heading" type="h2" looklike="h1">Sorry! Etwas ist schiefgelaufen.</H1>
				<H1 className="not-found__heading" type="h2" looklike="h1">Leider existiert diese Seite nicht.</H1>
				<SmallArrowLink className="not-found__link" href="/">Zurück zur Startseite</SmallArrowLink>
			</div>
		</Section>
	);
	
};

// EXPORTS
export default NotFound;
