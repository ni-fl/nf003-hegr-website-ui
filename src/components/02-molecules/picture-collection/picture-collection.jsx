// IMPORTS
import 'components/02-molecules/picture/picture.scss';
import Image from "next/image";

// PICTURE
const PictureCollection = ({ className = '', images = [], alt = '', priority = false }) => {

	// RENDER
	return (
		<div className={ `${ className } picture-collection` }>
			{ images.map( (image, index) => (
				<Image className="picture-collection__item" priority={ priority } key={ index } src={ image.src } width={ 2500 } height={ 2500 } alt={ image.alt }/>
			) ) }
		</div>
	)
};

// EXPORTS
export {
	PictureCollection,
};
