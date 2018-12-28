import React from 'react';
import profilePicture from '../images/profile_picture.jpg';

const AboutMe = (props) => (
<div className='aboutMe'>
		<h1 className='aboutMe-title'>
		About Me
		</h1>
		<div className='section-aboutMe'>
			<div className='profile-picture'> 
				<img className='head-shot' src={profilePicture} alt="profile"/>
			</div>

			<div className='text-paragraphs'>
				<p> I like to think of myself as a life-long learner. I can't survive if I'm not constantly learning or experiencing something new. I'm not afraid of starting something from scratch even if I have zero knowledge about it. If it interests me, I give my entire being into it.  </p>
				<p> Before my job as a project manager at Security Bank, the only programming experience I had was a high school class and a summer high school program. But the job required me to learn this skill and I gave my everything into it and I'd say my skills in it have grown significantly. I've taken it further than the job required me to do and I've created so much more than just what they needed from me. </p>
				<p> I feel that there is so much more to pursue along this programming and web-development path for me and I am excited to see where it leads.  </p>
			</div>
		</div>
</div>
);

export default AboutMe;