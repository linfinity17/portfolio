import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch, 
} from 'react-router-dom';
import FadeIn from 'react-fade-in';

// App components
import Header from './Header';
import Content from './Content';
import Scripts from './Scripts';
import NotFound from './NotFound';
import Burger from './Burger';


class App extends React.Component {

  state = {
    isAtTop: true,
    heights: {
      head: 0,
      banner: 0,
      projects: 0,
      resume: 0,
      aboutMe: 0,
      contact: 0
    },
    isNavOpen: false
  };

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  checkURLName = () => {
    let positions = this.state.heights;
      let posY = window.scrollY;
      let sectionArray = ['head','banner','projects','resume','aboutMe','contact'];
      let isAtTop = this.state.isAtTop;

      if (posY == 0) {
        this.setState({
          isAtTop:true
        });
      }

      if (posY != 0 && isAtTop) {
        console.log('hello');
        this.setState({
          isAtTop:false
        });
      }

      sectionArray.forEach((item) => {
        if (positions[item] > posY && posY > (positions[item] - 200) && item != 'head') {
            document.querySelector('#'+item).parentElement.className = 'isActive';
            sectionArray.forEach((removeClassItem) => {
              if (!['head','banner',item].includes(removeClassItem)) {
                document.querySelector('#'+removeClassItem).parentElement.className = '';
              }
            });
          if (item =="banner" || item =="head") {
            document.querySelector('#'+item).parentElement.className = '';
            item = "";
          }
          if (this.props.history.location.pathname != ('/' + item)) {
            this.props.history.push('/' + item);
          }
        }
      });
  };

  checkHeights = (e) => {

    let sectionArray = ['head','banner','projects','resume','aboutMe','contact'];
    let sectionPositions = {heights:{}};
    let cumulativeHeight = 0;
    let space = document.querySelector('.space').getBoundingClientRect().height;

    sectionArray.forEach((item) => { 
      console.log(cumulativeHeight);
      sectionPositions.heights[item] = cumulativeHeight;
      let sectionHeight = document.querySelector('.' + item).getBoundingClientRect().height;
      cumulativeHeight += sectionHeight;
      if (!(['head','banner'].includes(item))) {
        cumulativeHeight += space;
      }
    });

    this.setState(sectionPositions);
    return sectionPositions;
  };

  changeRoute = (e) => {
    let initialY = this.state.heights[e.target.id] - this.state.heights.banner;
    window.scrollTo({
      top: (this.state.heights[e.target.id] - this.state.heights.banner),
      left: 0, 
      behavior:'smooth'
    });
    setTimeout(() => {
      let checkY = initialY - window.scrollY;
      if (checkY === initialY) {
        window.scroll(0,this.state.heights[e.target.id] - this.state.heights.banner);
      }
    }, 200);
    this.toggleNav();
  };
  
  componentDidMount() {
    window.addEventListener('scroll', this.checkURLName);
    window.addEventListener('resize', this.checkHeights);

    let buttonHeaderArray = ['banner','projects','resume','aboutMe','contact'];

    buttonHeaderArray.forEach((item) => {
      document.querySelector("#" + item).addEventListener('click',this.changeRoute);
    });

    this.checkHeights();
  };



  render() {return (
    <BrowserRouter>
      <div className ='main-container'>
          <div className="background"></div>
          <div className="background-overlay"></div>
        <FadeIn delay={500} transitionDuration={1000} >
        <Header isAtTop = {this.state.isAtTop} isNavOpen={this.state.isNavOpen} />
        </FadeIn>
        <Content heights={this.state.heights} toggleNav={this.toggleNav} />
        <Switch>
          <Route exact path="/" 
          render = { () => 
            <Scripts url="banner" 
                checkHeights = {this.checkHeights} /> 
              } 
          />
          <Route path="/projects" 
          render = { () => 
            <Scripts url="projects" 
                checkHeights = {this.checkHeights} /> 
              } 
          />
          <Route path="/resume" 
          render = { () => 
            <Scripts url="resume" 
                checkHeights = {this.checkHeights} /> 
              } 
          />
          <Route path="/aboutMe" 
          render = { () => 
            <Scripts url="aboutMe" 
                checkHeights = {this.checkHeights} /> 
              } 
          />
          <Route path="/contact" 
          render = { () => 
            <Scripts url="contact" 
                checkHeights = {this.checkHeights} /> 
              } 
          />
        </Switch>
      <Burger isNavOpen={this.state.isNavOpen} toggleNav={this.toggleNav} />
      </div>

    </BrowserRouter>
    );
  }
}

export default App;




