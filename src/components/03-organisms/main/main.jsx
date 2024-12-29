// IMPORTS
import 'components/03-organisms/main/main.scss';
import { Section } from 'components/04-layouts/section/section';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link';
import { HeroImage } from 'components/02-molecules/hero-image/hero-image.jsx';
import { SmallLink } from 'components/02-molecules/small-link/small-link.jsx';
import { Projects } from 'components/02-molecules/projects/projects.jsx';
import { Article } from 'components/02-molecules/article/article.jsx';
import { Intro} from 'components/02-molecules/intro/intro.jsx';
import { Spacer } from 'components/02-molecules/spacer/spacer.jsx';
import { Cards } from 'components/02-molecules/cards/cards.jsx';
import { Team } from 'components/02-molecules/team/team.jsx';
import { Address } from 'components/02-molecules/address/address.jsx';
import { Timeline } from 'components/02-molecules/timeline/timeline.jsx';
import { Paragraph} from 'components/02-molecules/paragraph/paragraph.jsx';

// TEASER
const Main = ({ className, content }) => {
	
	// RENDER
	return (
		<div className={`${ className } main `}>
			{ content?.map((component, index) => (
				<div className="main__component" key={index}>
					{component.__component === 'section.hero-image' ? <HeroImage className="main__hero-image" data={ component.image } /> : '' }
					{component.__component === 'section.projects' ? <Projects className="main__projects" data={ component } /> : '' }
					{component.__component === 'section.article' ? <Article className="main__article" data={ component } /> : '' }
					{component.__component === 'section.intro' ? <Intro className="main__intro" data={ component } /> : '' }
					{component.__component === 'section.spacer' ? <Spacer className="main__spacer" data={ component } /> : '' }
					{component.__component === 'section.cards' ? <Cards className="main__cards" data={ component } /> : '' }
					{component.__component === 'section.team' ? <Team className="main__team" data={ component } /> : '' }
					{component.__component === 'section.address' ? <Address className="main__address" data={ component } /> : '' }
					{component.__component === 'section.timeline' ? <Timeline className="main__timeline" data={ component } /> : ''}
					{component.__component === 'section.paragraph' ? <Paragraph className="main__paragraph" data={ component } /> : ''}
					{component.__component === 'section.small-link' ? <SmallLink className="main__heading-h1" data={ component } /> : '' }
				</div>
			))}
		</div>
	);
	
};

// EXPORTS
export {
	Main
};
