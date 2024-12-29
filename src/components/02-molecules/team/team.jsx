// IMPORTS
import 'components/02-molecules/team/team.scss';
import { P } from 'components/01-atoms/text/text';
import Link from 'next/link';
import Image from 'next/image';
import { H1, H2, H3 } from 'components/01-atoms/heading/heading.jsx';
import { Picture } from 'components/02-molecules/picture/picture.jsx';
import { Table, TD, TR } from 'components/01-atoms/table/table.jsx';
import { Timeline } from 'components/02-molecules/timeline/timeline.jsx';
import { Paragraph } from 'components/02-molecules/paragraph/paragraph.jsx';
import { Main} from 'components/03-organisms/main/main.jsx';
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
						<H1 className="team__team-member-article-heading">{ member.heading }</H1>
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
