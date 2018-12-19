import React from 'react';

const Burger = (props) => (
	<div onClick={props.toggleNav} className={'burger' + (props.isNavOpen ? ' navOpen' : '' )} >
	    <div className='menu-icon'></div>
	    <div className='menu-icon'></div>
	    <div className='menu-icon'></div>
	</div>
);

export default Burger;
