import React from 'react';

const ResumeSection = (props) => (
	<div className="resume-section">
		<div className="work-icon">
				<img height="45px" src={props.icon} alt='icon'/>
		</div>
		<div className="resume-line"></div>
		<div className="resume-description"> {props.description} </div>
		<div className="resume-content"> {props.content} </div>
		<div className="resume-skills"> {props.skills} </div>
	</div>
);

export default ResumeSection;