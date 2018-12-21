import React from 'react';

const ResumeSection = (props) => (
	<div className="resume-section">
		<div className="work-icon">
				<img height="45px" src={props.icon} />
		</div>
		<div className="resume-line"></div>
		<div className="resume-description"> {props.description} </div>
		<div className="resume-content"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, est sed bibendum sodales, ligula dui rutrum ligula, vel porta sem lacus et arcu. Proin placerat tortor quis porta vehicula. Sed tempor dolor turpis, a imperdiet tortor lacinia nec. Aliquam erat volutpat. Nullam lobortis, tortor sollicitudin rhoncus feugiat, ante orci accumsan purus, in condimentum lorem nibh sed leo. Nullam vitae facilisis magna, eu dapibus massa. Maecenas congue at neque non interdum. Nullam cursus, odio vitae tempus interdum, nunc tortor pretium lacus, eu elementum erat mi vitae libero. </p> </div>
		<div className="resume-skills"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing  rhoncus feugiat, ante orci accumsan purus, in condimentum lorem nibh sed libero. </p> </div>
	</div>
);

export default ResumeSection;