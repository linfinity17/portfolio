import React from 'react';

class Scripts extends React.Component {

	componentDidMount() {
		let heights = this.props.checkHeights();
        let initialY = heights.heights[this.props.url] - heights.heights.banner;
	    window.scrollTo({
	    	top: (heights.heights[this.props.url] - heights.heights.banner),
	    	left: 0, 
	    	behavior:'smooth'
	    }); 
	    setTimeout(() => {
		    let checkY = initialY - window.scrollY;
		    if (checkY === initialY) {
		      window.scroll(0,heights.heights[this.props.url] - heights.heights.banner);
		    }
		}, 100);
	};


	render() { return (
		<div>
		</div>
		);
	}
}

export default Scripts;

