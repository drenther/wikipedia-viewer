import React from 'react';

export const Article = (props) => {
	return (
		<a href={`https://en.wikipedia.org/?curid=${props.pageid}`} target="_blank">
			<div className='article'>
				<h1 className="title">{props.title}</h1>
				<hr/>
				<div className="extract">
					{props.extract}
				</div>
			</div>
		</a>
	);
};