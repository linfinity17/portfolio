import React from 'react';

const LanguageCard = (props) => (
	<a href={props.url} target="_blank" rel="noopener noreferrer">
		<div className='language-image-card'>
			<img className='language-image' src={props.languageImage} alt="languages" />
			<span>{props.name}</span>
		</div>
	</a>

);


export default LanguageCard;
