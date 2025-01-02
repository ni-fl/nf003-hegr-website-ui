// IMPORTS
import 'components/03-organisms/team/team.scss';
import Image from 'next/image';
import { H1, H2, H3 } from 'components/01-atoms/heading/heading.jsx';
import { Main} from 'components/05-renderer/main/main.jsx';
import { Section } from 'components/04-layouts/section/section.jsx';

// CARDS
const Team = ({ className, data }) => {
	
	// RENDER
	return (
		<Section className={ `${ className } team` }>
			{ data?.team?.map((member, index) => (
				<div className="team__team-member" key={index}>
					<Image className="team__team-member-image" src={ member?.image?.url } width={ member?.image?.width } height={ member?.image?.height } alt={ member?.heading }/>
					<div className="team__team-member-article">
						<H1 className="team__team-member-article-heading" level="h1" looklike="h1">{ member.heading }</H1>
						<Main className="team__team-member-article-infos" content={ member.infos } />
					</div>
				</div>
			)) }
		</Section>
	);
	
};

// EXPORTS
export {
	Team
};
