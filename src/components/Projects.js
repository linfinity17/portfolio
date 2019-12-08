import React from 'react';
import LanguageCard from './LanguageCard';
import ProjectCard from './ProjectCard';

import javascriptLogo from '../images/javascript_logo.png';
import pythonLogo from '../images/python_logo.png';
import djangoLogo from '../images/django_logo.png';
import reactLogo from '../images/react_logo.png';

import pfdLogo from '../images/pfd_logo.JPG';
import timeLogo from '../images/time_logo.png';
import profileLogo from '../images/profile_logo.png';
import dashboardLogo from '../images/dashboard_logo.png';
import workflowLogo from '../images/workflow_logo.png';

import { ContentPFD,
		ContentPortfolio,
		ContentDashboard,
		ContentProcessMaker,
		ContentTimeAndMotion } from './projectData.js';

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
			<a target="_blank" rel="noopener noreferrer" href="/equities"> 
				<ProjectCard 
				screen={pfdLogo} 
				title="Philippine Financial Data"
				description= {<ContentPFD />}
				/>
			</a>
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/linfinity17/portfolio"> 
				<ProjectCard 
				screen={profileLogo} 
				title="Portfolio Website" 
				description= {<ContentPortfolio />}
				/>
			</a>
			<ProjectCard 
			screen={dashboardLogo} 
			title="Python Data Dashboard" 
			description= {<ContentDashboard />}
			/>
			<ProjectCard 
			screen={workflowLogo} 
			title="Loan Origination Workflows (ProcessMaker)" 
			description= {<ContentProcessMaker />}
			/>
		</div>
	</div>
</div>
);

export default Projects;