// IMPORTS
import 'components/02-molecules/picture/picture.scss';
import Image from 'next/image';

// PICTURE
const Picture = ({ className = '', src = '/images/placeholder.png', alt = '', priority = false, format = null }) => {
	
	// RENDER
	return (
		<Image className={ ` ${ className } picture` } priority={ priority } src={ src } width={ 2500 } height={ 2500 } alt={ alt } data-format={ format }/>
	);
};

// EXPORTS
export {
	Picture
};
