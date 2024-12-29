// IMPORTS
import 'components/03-organisms/about/about.scss';
import { Section } from 'components/04-layouts/section/section';
import { H1, H3 } from 'components/01-atoms/heading/heading';
import { P } from 'components/01-atoms/text/text.jsx';
import Image from 'next/image';
import { RT } from 'components/01-atoms/rich-text/rich-text.jsx';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';

// ABOUT
const About = ({ data }) => {
	
	// RENDER
	return (
		<Section className="about">
			<div className="about__persons">
				<div className="about__persons-list">
					{ data?.persons?.map((person) => (
						<div className="about__person" key={ person.id }>
							<Image className="about__image" src={ person?.image?.url } width={ person?.image?.width } height={ person?.image?.height } alt={ person.heading }/>
							<div className="about__article">
								<H1 className="about__heading">{ person?.heading }</H1>
								<div className="about__infos">
									<RT className="about__infos-text">{ person?.text }</RT>
									<div className="about__infos-events">
										{ person?.history?.events?.map((event) => (
											<div className="about__events-item" key={ event.id }>
												<H3 className="about__events-subheading" level="h3">{ event?.date }</H3>
												<P className="about__events-text">{ event?.text }</P>
											</div>
										)) }
									</div>
								</div>
							</div>
						</div>
					)) }
				</div>
			</div>
			<Image className="about__image" src="https://nf003-hegr-website-space-dev.fra1.digitaloceanspaces.com/04_general_4e016b3f05.webp" width={ 2500 } height={ 1300 } alt="Heller Grafik"/>
			<SmallArrowLink className="about__link" href="/projects">Alle Projekte ansehen</SmallArrowLink>
		</Section>
	);
	
};

// EXPORTS
export {
	About
};
