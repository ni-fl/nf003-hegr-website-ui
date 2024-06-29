// IMPORTS
import 'components/01-atoms/big-arrow-link/big-arrow-link.scss';

// BIG ARROW LINK
const BigArrowLink = ({ className = '', children = null, href = '#' }) => {

	// RENDER
	return (
		<a className={ `${ className } big-arrow-link` } href={ href }>
			<span className="big-arrow-link__text">{ children }</span>
			<svg className="big-arrow-link__arrow arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 17">
				<polygon className="arrow__vector" points="13.95 8.46 12.54 7.05 12.5 7.09 5.46 0.05 4.05 1.46 10.09 7.5 0 7.5 0 9.5 10.09 9.5 4.05 15.54 5.46 16.95 12.5 9.91 12.54 9.95 13.95 8.54 13.91 8.5 13.95 8.46"/>
			</svg>
		</a>
	);

};

// EXPORTS
export {
	BigArrowLink
};
