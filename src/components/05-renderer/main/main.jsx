// IMPORTS
import 'components/05-renderer/main/main.scss';
import { Section } from 'components/04-layouts/section/section.jsx';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';
import { HeroImage } from 'components/03-organisms/hero-image/hero-image.jsx';
import { Projects } from 'components/03-organisms/projects/projects.jsx';
import { Article } from 'components/03-organisms/article/article.jsx';
import { Intro} from 'components/03-organisms/intro/intro.jsx';
import { Spacer } from 'components/03-organisms/spacer/spacer.jsx';
import { Cards } from 'components/03-organisms/cards/cards.jsx';
import { Team } from 'components/03-organisms/team/team.jsx';
import { Address } from 'components/03-organisms/address/address.jsx';
import { History } from 'components/02-molecules/history/history.jsx';
import { Paragraph} from 'components/02-molecules/paragraph/paragraph.jsx';

// TEASER
const Main = ({ className, content }) => {
	
	// RENDER
	return (
		<div className={`${ className } main `}>
			{ content?.map((component, index) => (
				<div className="main__component" key={index}>
					{component.__component === 'section.hero-image' ? <HeroImage className="main__hero-image" data={ component } /> : '' }
					{component.__component === 'section.projects' ? <Projects className="main__projects" data={ component } /> : '' }
					{component.__component === 'section.article' ? <Article className="main__article" data={ component } /> : '' }
					{component.__component === 'section.intro' ? <Intro className="main__intro" data={ component } /> : '' }
					{component.__component === 'section.spacer' ? <Spacer className="main__spacer" data={ component } /> : '' }
					{component.__component === 'section.cards' ? <Cards className="main__cards" data={ component } /> : '' }
					{component.__component === 'section.team' ? <Team className="main__team" data={ component } /> : '' }
					{component.__component === 'section.address' ? <Address className="main__address" data={ component } /> : '' }
					{component.__component === 'partial.history' ? <History className="main__history" data={ component } /> : ''}
					{component.__component === 'partial.paragraph' ? <Paragraph className="main__paragraph" data={ component } /> : ''}
				</div>
			))}
		</div>
	);
	
};

// EXPORTS
export {
	Main
};
