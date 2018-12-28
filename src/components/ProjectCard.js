import React from 'react';

const ProjectCard = (props) => (
	<div className="project-card">
		<img className="project-img" src={props.screen} alt='project-screen'/>
		<div className="project-info">
			<h2 className="project-title">{props.title}</h2>
			<p className="project-description">{props.description}</p>
			<p>You can test it out here.</p>
		</div>
	</div>
);

export default ProjectCard;