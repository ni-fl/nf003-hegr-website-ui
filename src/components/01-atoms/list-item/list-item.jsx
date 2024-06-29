// IMPORTS
import 'components/01-atoms/list-item/list-item.scss'
import { P } from 'components/01-atoms/text/text';
import Link from 'next/link';

// LIST
const LI = ({ className, href, children }) => {

	// RENDER
	return (
		<div className="list-item">
			{ href ? (
				<Link className="list-item__link" href={ href }>
					<P className="list-item__text">{ children }</P>
				</Link>
			) : (
				<P className="list-item__text">{ children }</P>
			) }
		</div>
	);

};

// EXPORTS
export {
	LI,
}
