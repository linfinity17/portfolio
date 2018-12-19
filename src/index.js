import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/normalize.css';
import './css/index.css';

import { Router } from 'react-router-dom';
import history from './components/History';


ReactDOM.render(
	<Router history={history}>
		<App history={history} />
	</Router>,
	document.getElementById('root')
);
