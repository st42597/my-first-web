import './Content.css';
import {useState, useEffect} from 'react';
import {BrowserRouter, Router, Route, useHistory} from 'react-router-dom';
import Home from './contentList/Home';
import Profile from './contentList/Profile';
import Github from './contentList/Github';
import Corona from './contentList/Corona';
import Board from './contentList/Board';
import Description from './contentList/Description';

function Content(props) {
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
    let history = useHistory();
    useEffect(() => {
      history.push(props.viewstate);
    }, [props.viewstate]);

    return (
      <div
      className="content-container"
      style={styles}
      >
        {/*{contentList[contentNumber]}*/}
        <Route path="/Home" component={Home}></Route>
        <Route path="/Profile" component={Profile}></Route>
        <Route path="/Board" component={Board}></Route>
        <Route path="/Github" component={Github}></Route>
        <Route path="/Corona" component={Corona}></Route>
        <Route path="/Description" component={Description}></Route>
      </div>
    );
  }

  
  
  
  export default Content;
  