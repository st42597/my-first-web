import './Content.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Home from './contentList/Home';
import Profile from './contentList/Profile';
import Github from './contentList/Github';
import Corona from './contentList/Corona';

function Content(props) {
    let styles;
    if(props.sidebarstate === 'OFF'){
        styles={width: `70vw`};
    }
    if(props.sidebarstate === 'ON'){
        styles={width: `calc(70vw - 240px)`};
    }
    let [returnData, setReturnData] = useState("");
    let URL;
    if(process.env.NODE_ENV === 'production'){
      URL = 'https://willkiss.ml:5000/';
    }else{
      URL = 'http://localhost:5000/';
    }
    const staticPageList = ['Main', 'Profile'];
    useEffect(() => {
      async function readContent() {
        const ret = await axios.get(URL + props.viewstate);
          setReturnData(ret.data);
      }
      for(let i = 0; i < staticPageList.length; i++){
        if(props.viewstate === staticPageList[i]){
          readContent();
          break;
        }
      }
    }, [props.viewstate])
    const contentList = [<Home></Home>, <Profile></Profile>, <Github></Github>, <Corona></Corona>];
    let contentNumber = 0;
    if(props.viewstate === 'Home')
      contentNumber = 0;
    else if(props.viewstate === 'Profile')
      contentNumber = 1;
    else if(props.viewstate === 'Github')
      contentNumber = 2;
    else if(props.viewstate === 'Corona')
      contentNumber = 3;
    return (
      <div
      className="content-container"
      style={styles}
      >
        {contentList[contentNumber]}
      </div>
    );
  }
  
  export default Content;
  