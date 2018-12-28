import React from 'react';

const ProjectCard = (props) => (
	<div className="project-card">
		<img className="project-img" src={props.screen} alt='project-screen'/>
		<div className="project-info">
			<a target="_blank" rel="noopener noreferrer" href={props.link}><h2 className="project-title">{props.title}</h2></a>
			<p className="project-description">{props.description}</p>
		</div>
	</div>
);

export default ProjectCard;