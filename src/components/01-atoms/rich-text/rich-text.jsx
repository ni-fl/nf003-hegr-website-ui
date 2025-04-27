// IMPORTS
import 'components/01-atoms/rich-text/rich-text.scss';
import { P } from 'components/01-atoms/text/text.jsx';
import Link from 'next/link';

// TEXT
const RT = ({ className, children }) => {
	
	// RENDER
  return (
    <div className={`${className} rich-text`}>
      {children?.map((content, contentIndex) => (
        <div className="rich-text__block" key={contentIndex}>
          {content.type === 'paragraph' && (
            content.children.map((node, nodeIndex) => node.type === 'link' ? (
                <Link className="rich-text__link" href={node.url} target="_blank" rel="noopener noreferrer" key={nodeIndex} >
                  <P className="rich-text__text">
                    {node.children?.[0]?.text}
                  </P>
                </Link>
              ) : (
                <P className="rich-text__text" key={nodeIndex}>
                  {node.text}
                </P>
              )
            )
          )}
          {content.type === 'list' && (
            <ul className={`rich-text__list rich-text__list--${content.format}`}>
              {content.children.map((item, itemIndex) => (
                <li className="rich-text__item" key={itemIndex}>
                  {item.children.map((node, nodeIndex) =>
                    node.type === 'link' ? (
                      <Link className="rich-text__link" href={node.url} target="_blank" rel="noopener noreferrer" key={nodeIndex} >
                        <P className="rich-text__text">
                          {node.children?.[0]?.text}
                        </P>
                      </Link>
                    ) : (
                      <P className="rich-text__text" key={nodeIndex}>
                        {node.text}
                      </P>
                    )
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
	
};

// EXPORTS
export {
  RT
};
