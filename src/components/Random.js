import React from 'react';

export const Random = ({ linkToRandom }) => {
	return (
		<div className='random'>
			<button onClick={linkToRandom}>
				<h1>
					<i className="fa fa-random"></i>
				</h1>
			</button>
		</div>
	);
};