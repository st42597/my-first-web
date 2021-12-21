import './Pages.css';
import {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import Home from './contentList/Home';
import Profile from './contentList/Profile';
import Github from './contentList/Github';
import Corona from './contentList/Corona';
import Board from './contentList/Board';
import Description from './contentList/Description';

function Pages(props) {
    let styles;
    if(props.sidebarstate === 'OFF'){
        styles={padding: `100px 25vw`};
    }
    if(props.sidebarstate === 'ON'){
        styles={padding: `100px calc(25vw - 120px)`};
    }
    let URL;
    if(process.env.NODE_ENV === 'production'){
      URL = 'https://willkiss.ml:5000/';
    }else{
      URL = 'http://localhost:5000/';
    }

    return (
      <div
      className="content-container"
      style={styles}
      >
        {/*{contentList[contentNumber]}*/}
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
