import React from 'react';

const ContentPFD = () => (
	<div>
	<p>Philippine Financial Data is my first website built using Django. It is a data-aggregator site that scrapes Philippine stock data from public sources and provides tools for analysis. The data updates automatically at the end of each day.</p>
	<a target="_blank" rel="noopener noreferrer" href="/equities"> Check it out at this link! </a>
	</div>
);

const ContentTimeAndMotion = () => (
	<div>
	<p>This tracker is a progressive-web-app built on Django. I built it so I can collect motion data from our staff. Our employees log the task they are doing and the app times how long it takes them to finish. With this data, I can do an analysis on their day-to-day tasks and identify pain-points, areas of wastage, and areas of improvement. This app is an offline-ready app because most of our employees do not have internet when going out on fieldwork.</p>
	<p>You can try out a dev-version on this website using the following credentials:</p>
	<ul>
	<li>Staff user: test_user</li>
	<li>Admin user: admin_user</li>
	</ul>
	<p> Admin users can view all the records of all users. Staff users can only see their own records.</p>
	<a target="_blank" rel="noopener noreferrer" href="https://timeandmotion.pythonanywhere.com"> Test it out at this link! </a>
	</div>
);

const ContentPortfolio = () => (
	<div>
	<p>This website was built on React and shows my skills on web design. It is utilizes react-router-dom to manage the urls and it also has some interesting visual effects using javascript (check out the banner for this!) </p>
	<a target="_blank" rel="noopener noreferrer" href="https://github.com/linfinity17/portfolio"> Check out the code on github! </a>
	</div>
);

const ContentDashboard = () => (
	<div>
	<p>This Dashboard was my first project built on python. It heavily uses the pandas library to do data analysis on our loans databases. It is an automatically updating dashboard as the data in our core systems update. The dashboard is outputted into an excel file which is used by serveral teams within the bank.</p>
	<p>Because the system is built on our company machines, I am not able to show a sample of the work on this website. </p>
	</div>
);

const ContentProcessMaker = () => (
	<div>
	<p>To build our loan origination system, we used the workflow tool ProcessMaker. It is a flexible workflow system wherein workflows are built using PHP and Javascript. I built three different processes to handle our small businsess lending process workflows. This was my first official "development" project and is used by over 100 people in the bank. </p>
	<p>Again, I cannot provide samples of this work due to the confidential nature of our processes but I've linked to the processMaker website where you can see the types of workflows that are built on this system.  </p>
	<a target="_blank" rel="noopener noreferrer" href="https://www.processmaker.com/"> Link to ProcessMaker website. </a>
	</div>
);

export {ContentPFD}; 
export {ContentTimeAndMotion}; 
export {ContentPortfolio}; 
export {ContentDashboard}; 
export {ContentProcessMaker}; 
