// IMPORTS
import 'components/01-atoms/markdown/markdown.scss';
import ReactMarkdown from 'react-markdown';

// MARKDOWN
const MD = ({ className = '', children }) => {
	
	// RENDER
	return (
		<ReactMarkdown className={ ` ${ className } markdown text ` }>{ children }</ReactMarkdown>
	);
	
};

// EXPORTS
export {
	MD
};
