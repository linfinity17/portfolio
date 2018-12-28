import React from 'react';

const ContentPFD = () => (
	<p>Philippine Financial Data is my first website built using Django. It is a data-aggregator site that scrapes Philippine stock data from public sources and provides tools for analysis. The data updates automatically at the end of each day.</p>
);

const ContentTimeAndMotion = () => (
	<div>
	<p>This tracker is a progressive-web-app built on Django. I built it so I can collect motion data from our staff. Our employees log the task they are doing and the app times how long it takes them to finish. With this data, I can do an analysis on their day-to-day tasks and identify pain-points, areas of wastage, and areas of improvement. This app is an offline-ready app because most of our employees do not have internet when going out on fieldwork.</p>
	<a target="_blank" rel="noopener noreferrer" href="https://timeandmotion.pythonanywhere.com"> Test it out! </a>
	</div>
);

const ContentPortfolio = () => (
	<div>
	<p>This website was built on React and shows my skills on web design. It is utilizes react-router-dom to manage the urls and it also has some interesting visual effects using javascript (check out the banner for this!) </p>
	<a target="_blank" rel="noopener noreferrer" href="https://github.com/linfinity17/portfolio"> Check out the code on github! </a>
	</div>
);

export {ContentPFD}; 
export {ContentTimeAndMotion}; 
export {ContentPortfolio}; 
