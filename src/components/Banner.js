import React from 'react';
import arrow from '../images/arrow.svg';
import FadeIn from 'react-fade-in';


const delay = (ms) => {
	return (x) => {
		return new Promise(resolve => setTimeout(() => resolve(x), ms));
	};
};

const strToArr = (arg) => {
	let res = [];
	for (let i = 0; i < arg.length; i++) {
		res.push(arg[i]);
	}
	return res;
};

function forwardLoop(a,disp='') {
	return Promise.resolve(a)
	.then(delay(30))
	.then( (arg) => {
		if (arg.length > 0) {
			disp += arg.shift();
			document.querySelector(".banner-id-text").innerHTML = disp;
			return new Promise(resolve => resolve(forwardLoop(arg,disp)));
		}
		return new Promise(resolve => resolve(disp));
	})
}

function backwardLoop(disp) {
	return Promise.resolve(disp)
	.then(delay(30))
	.then( (arg) => {
		if (disp.length > 0) {
			disp = disp.substring(0, disp.length - 1);
			document.querySelector(".banner-id-text").innerHTML = disp;
			return new Promise(resolve => resolve(backwardLoop(disp)));
		}
		return new Promise(resolve => resolve(disp));
	})
}


function entireLoop(displayWord) {
	return Promise.resolve(strToArr(displayWord))
	.then(forwardLoop)
	.then(delay(2000))
	.then(backwardLoop)
	.then(delay(2000))
}

function loopThroughArray(arrayOfWords, i=0) {
 	return Promise.resolve(arrayOfWords[i])
 	.then(entireLoop)
 	.then(() => {
 		i += 1;
 		if (i < arrayOfWords.length) {
 			return new Promise(resolve => resolve(loopThroughArray(arrayOfWords,i)));
 		}
 		return new Promise(resolve => resolve(loopThroughArray(arrayOfWords,0)));	
 	})
}

const arr = ['financial analyst', 'full-stack web developer', 'project manager', 'strategic thinker', 'problem solver', 'thought leader','life-long learner', 'obsessive cat-lover'];

class Banner extends React.Component {

	componentDidMount() {
		setTimeout(loopThroughArray,1500,arr);
		document.querySelector(".down-arrow").addEventListener('click', () => {
			document.querySelector('#projects').click();
			this.props.toggleNav();
		});
	}


  render() {return (
  	<div className="banner">
	  	<div className="name-plate">
	  	<FadeIn delay={500} transitionDuration={1000} >
  		  <div className="banner-id-name"> <span>LEANDRO</span> <span>INUMERABLE, CFA</span></div>
  		  </FadeIn>
	  		<p className="banner-id-text"></p>
	  	</div>
	  	<img className="down-arrow" alt="" src={arrow} />
  	</div>
		);
	}
}

export default Banner;