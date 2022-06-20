import './Pages.css';
import {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import Home from './pageList/Home';
import Profile from './pageList/Profile';
import Github from './pageList/Github';
import Corona from './pageList/Corona';
import Board from './pageList/Board';
import Description from './pageList/Description';

function Pages(props) {
  let styles;
  if(props.sidebarstate === 'OFF'){
      styles={padding: `100px 25vw`};
  }
  if(props.sidebarstate === 'ON'){
      styles={padding: `100px calc(25vw - 120px)`};
  }

  return (
    <div
    className="content-container"
    style={styles}
    >
      <Route exact path="/" component={Home}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/board" component={Board}></Route>
      <Route path="/github" component={Github}></Route>
      <Route path="/corona" component={Corona}></Route>
      <Route path="/description" component={Description}></Route>
    </div>
  );
}
  
export default Pages;
