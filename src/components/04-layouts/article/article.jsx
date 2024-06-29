// IMPORTS
import 'components/04-layouts/article/article.scss';

// ARTICLE
const Article = ({ className = '', children = null }) => {

	// RENDER
	return (
		<div className={ ` ${ className } article` }>
			{ children }
		</div>
	);

};

// EXPORTS
export {
	Article,
};
