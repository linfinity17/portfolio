import React from 'react';

import Banner from './Banner';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import AboutMe from './AboutMe';

class Content extends React.Component {

	render() { return (
		<div className ='content-container'>
			<Banner heights = {this.props.heights} toggleNav = {this.props.toggleNav} />
			<Projects />
			<div className='space'></div>
			<Resume />
			<div className='space'></div>
			<AboutMe />
			<div className='space'></div>
			<Contact />
		</div>
		);
	}
}

export default Content;

