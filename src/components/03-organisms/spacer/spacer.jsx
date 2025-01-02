// IMPORTS
import 'components/03-organisms/spacer/spacer.scss';

// SPACER
const Spacer = ({ className, data }) => {
	
	// RENDER
	return (
		<div className={ `${ className } spacer` } >
			{ data.amount === 'extra-extra-small' ? <div className="spacer__space--extra-extra-small"></div> : '' }
			{ data.amount === 'extra-small' ? <div className="spacer__space--extra-small"></div> : '' }
			{ data.amount === 'small' ? <div className="spacer__space--small"></div> : '' }
			{ data.amount === 'medium' ? <div className="spacer__space--medium"></div> : '' }
			{ data.amount === 'large' ? <div className="spacer__space--large"></div> : '' }
			{ data.amount === 'extra-large' ? <div className="spacer__space--extra-large"></div> : '' }
			{ data.amount === 'extra-extra-large' ? <div className="spacer__space--extra-extra-large"></div> : '' }
		</div>
	);
	
};

// EXPORTS
export {
	Spacer
};
