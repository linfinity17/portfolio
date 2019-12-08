import React from 'react';
import ResumeSection from './ResumeSection';

import { ContentAteneo,
		ContentDOF,
		ContentSEC,
		ContentCFA,
		ContentSBC,
		SkillsAteneo,
		SkillsDOF,
		SkillsCFA,
		SkillsSEC,
		SkillsSBC } from './resumeData.js';

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
			skills={<SkillsAteneo />}
			content={<ContentAteneo />}
		/>

		<ResumeSection 
			icon={government} 
			description="Department of Finance, Republic of the Philippines" 
			skills={<SkillsDOF />}
			content={<ContentDOF />}	
		/>
		<div className="year-block"> 2015 </div>
		<ResumeSection 
			icon={market} 
			description="Securities and Exchange Commission, Republic of the Philippines" 
			skills={<SkillsSEC />}
			content={<ContentSEC />}	
		/>
		<div className="year-block"> 2016 </div>
		<ResumeSection 
			icon={finance} 
			description="Finished all three levels of the CFA Exams" 
			skills={<SkillsCFA />}
			content={<ContentCFA />}	
		/>
		<ResumeSection 
			icon={banking} 
			description="Security Bank Corporation" 
			skills={<SkillsSBC />}
			content={<ContentSBC />}	
		/>
</div>
);

export default Resume;