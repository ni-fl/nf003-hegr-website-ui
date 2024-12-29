// IMPORTS
import 'components/01-atoms/table/table.scss';

// TABLE
const Table = ({ className, children }) => {
	
	//RENDER
	return (
		<table className={ `${ className } table` }>
			<tbody>
			{ children }
			</tbody>
		</table>
	);
	
};

// TABLE ROW
const TR = ({ className = '', children = null }) => {
	
	// RENDER
	return (
		<tr className={ ` ${ className } table__row` }>
			{ children }
		</tr>
	);
	
};

// TABLE CELL
const TD = ({ className = '', children = null }) => {
	
	// RENDER
	return (
		<td className={ `${ className } table__cell` }>
			{ children }
		</td>
	);
	
};

// EXPORTS
export {
	Table, TD, TR
};
