import React from 'react';
import LanguageCard from './LanguageCard';

import javascriptLogo from '../images/javascript_logo.png';
import pythonLogo from '../images/python_logo.png';
import djangoLogo from '../images/django_logo.png';
import reactLogo from '../images/react_logo.png';
import divider from '../images/divider.png';


const Projects = (props) => (
<div className='projects'>
	<div className='introduction'> 
		<div className='intro-background'> </div> 
		<h1 className='languages-list'>
			<LanguageCard name="python" languageImage={pythonLogo} />
			<img src={divider} height="20px" alt="divider image" />
			<LanguageCard name="django" languageImage={djangoLogo} />
			<img src={divider} height="20px" alt="divider image" />
			<LanguageCard name="javascript" languageImage={javascriptLogo} />
			<img src={divider} height="20px" alt="divider image" />
			<LanguageCard name="reactJS" languageImage={reactLogo} />
		</h1>
		<div className='text-paragraphs'>
			<p>I am a financial analyst, a web developer, and a project manager. I can think strategically, while at the same time, implement complicated technical requirements. My diverse skill set allows me to bridge the gap between business requirements and technological solutions.   </p>
			<p>Feel free to browse this site to know more about my projects, works, and passions. </p>
		</div>
	</div>
	<div className='works'> 
		<h1 className='works-title'>
		Projects
		</h1>
		<div className='text-paragraphs'>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, est sed bibendum sodales, ligula dui rutrum ligula, vel porta sem lacus et arcu. Proin placerat tortor quis porta vehicula. Sed tempor dolor turpis, a imperdiet tortor lacinia nec. Aliquam erat volutpat. Nullam lobortis, tortor sollicitudin rhoncus feugiat, ante orci accumsan purus, in condimentum lorem nibh sed leo. Nullam vitae facilisis magna, eu dapibus massa. Maecenas congue at neque non interdum. Nullam cursus, odio vitae tempus interdum, nunc tortor pretium lacus, eu elementum erat mi vitae libero. </p>
			<p>Vivamus ac urna eget nibh sollicitudin egestas in ac enim. Nunc accumsan luctus lacinia. Mauris pretium eleifend ipsum sodales dapibus. In congue tortor vel efficitur dictum. Etiam ornare, turpis a ultricies congue, leo nisi sagittis purus, sed tempus orci augue ut elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dignissim nisl. Aenean dui sem, tincidunt a metus at, interdum hendrerit velit.</p>
		</div>
	</div>
</div>
);

export default Projects;