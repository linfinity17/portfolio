import React from 'react';
import LanguageCard from './LanguageCard';
import ProjectCard from './ProjectCard';

import javascriptLogo from '../images/javascript_logo.png';
import pythonLogo from '../images/python_logo.png';
import djangoLogo from '../images/django_logo.png';
import reactLogo from '../images/react_logo.png';

import pfdScreen from '../images/pfd_screen.PNG';

const Projects = (props) => (
<div className='projects'>
	<div className='introduction'> 
		<div className='intro-background'> </div> 
		<h1 className='works-title'>
		Introduction
		</h1>
		<h2 className='languages-list'>
			<LanguageCard name="python" languageImage={pythonLogo} url='https://www.python.org/' />
			<div className="divider"></div>
			<LanguageCard name="django" languageImage={djangoLogo} url='https://www.djangoproject.com/' />
			<div className="divider"></div>
			<LanguageCard name="javascript" languageImage={javascriptLogo} url='https://www.javascript.com/' />
			<div className="divider"></div>
			<LanguageCard name="reactJS" languageImage={reactLogo} url='https://reactjs.org/' />
		</h2>
		<div className='text-paragraphs'>
			<p>My name is Leandro Inumerable - a financial analyst, web developer, and project manager. I take pride in being a "jack-of-all-trades." 
				I can design big-picture strategies while at the same time, address the lowest level technical specifications. This skill set allows me to easily bridge the gap between business requirements and technological solutions.   </p>
			<p>I am looking to expand my skills as a developer. I am adept at python and javascript, and use django and react as my main frameworks when building web applications. I have also done workflow projects with PHP and data analysis with R. I am a very flexible developer who can quicly learn new languages and skills. </p>
			<p>Feel free to browse this site to know more about my projects, works, and passions. </p>
		</div>
	</div>
	<div className='works'> 
		<h1 className='works-title'>
		Projects
		</h1>
		<div className="project-list">
			<ProjectCard 
			screen={pfdScreen} 
			title="Philippine Financial Data" 
			description="Philippine Financial Data is my first website built using Django. It is a data-aggregator site that scrapes Philippine stock data from public sources and provides tools for analysis. The data updates automatically at the end of each day." />
			<ProjectCard 
			screen={pfdScreen} 
			title="Time and Motion Tracker" 
			description="This tracker is a progressive-web-app built on Django. I built it so I can collect motion data from our staff. Our employees log the task they are doing and the app times how long it takes them to finish. With this data, I can do an analysis on their day-to-day tasks and identify pain-points, areas of wastage, and areas of improvement. This app is an offline-ready app because most of our employees do not have internet when going out on fieldwork." />
			<ProjectCard 
			screen={pfdScreen} 
			title="Philippine Financial Data" 
			description="Philippine Financial Data is my first website built using Django. It is a data-aggregator site that scrapes Philippine stock data from public sources and provides tools for analysis. The data updates automatically at the end of each day." />
			<ProjectCard 
			screen={pfdScreen} 
			title="Philippine Financial Data" 
			description="Philippine Financial Data is my first website built using Django. It is a data-aggregator site that scrapes Philippine stock data from public sources and provides tools for analysis. The data updates automatically at the end of each day." />
		</div>
	</div>
</div>
);

export default Projects;