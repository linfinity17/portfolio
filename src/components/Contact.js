import React from 'react';

import linkedInLogo from '../images/linkedin_logo.png';
import gitHubLogo from '../images/github_logo.png';
import instagramLogo from '../images/instagram_logo.png';
import treehouseLogo from '../images/treehouse_logo.png';

const Contact = (props) => (
<div className='contact'>
		<h1 className='contact-title'>
		Contact
		</h1>
		<hr />
		<h3> I'd love to hear from you! </h3>
		<div className='text-paragraphs'>
			<p> If you have any ideas for collaboration, please feel free to send me a message. </p>
			<p> You may send me an e-mail at <a href="mailto:leandro@inumerable.com">leandro@inumerable.com</a></p>
			<p></p>
			<p>Feel free to visit my social media accounts and look through my github code!</p>

		</div>
		<div className='social-media'>
			<a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/leandro.inumerable/'> 
				<img className='social-media-logo' src= {instagramLogo} alt="instagram link"/> 
			</a>
			<a target="_blank" rel="noopener noreferrer" href='https://github.com/linfinity17/'> 
				<img className='social-media-logo' src= {gitHubLogo} alt="github link"/> 
			</a>
			<a target="_blank" rel="noopener noreferrer" href='https://teamtreehouse.com/linumerable'> 
				<img className='social-media-logo' src= {treehouseLogo} alt="treehouse link"/> 
			</a>
			<a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/leandro-inumerable/'> 
				<img className='social-media-logo' src= {linkedInLogo} alt="linkedin link"/> 
			</a>
		</div>
</div>
);

export default Contact;