import React from 'react';


const Rank = ({rankName, rankEntries}) => {
	return (
		<div>
			<div className='dark-blue f3'>
				{`${rankName}, your current entry count is `}			
			</div>
			<div className='dark-blue f1'>
				{`${rankEntries}`}			
			</div>		
		</div>
	);
}

export default Rank;