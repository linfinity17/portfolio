import React from 'react';
import ResumeSection from './ResumeSection';

import graduation from '../images/graduation_logo.png';
import government from '../images/government_logo.png';
import market from '../images/market_logo.png';
import banking from '../images/banking_logo.png';
import finance from '../images/finance_logo.png';

const Resume = (props) => (
<div className='resume'>
		<h1 className='resume-title'>
		Work History
		</h1>
		<div className="year-block"> 2013 </div>
		<ResumeSection 
			icon={graduation} 
			description="B.S. Management (Honors) from Ateneo de Manila" 
		/>
		<ResumeSection 
			icon={government} 
		/>
		<div className="year-block"> 2015 </div>
		<ResumeSection 
			icon={market} 
		/>
		<div className="year-block"> 2016 </div>
		<ResumeSection 
			icon={finance} 
		/>
		<ResumeSection 
			icon={banking} 
		/>
</div>
);

export default Resume;