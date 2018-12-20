import React from 'react';

const LanguageCard = (props) => (
	<div className='language-image-card'>
		<img className='language-image' src={props.languageImage} alt="language image" />
	</div>
);


export default LanguageCard;
