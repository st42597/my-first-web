import './Content.css';
import {useState, useEffect} from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import Github from './contentList/Github';

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
    if(props.viewstate === 'Main'){
      return (
        <div
        className="content-container"
        style={styles}
        >
          {parse(returnData)}
        </div>
      );
    }
    else if(props.viewstate === 'Profile'){
      return (
        <div
        className="content-container"
        style={styles}
        >
          {parse(returnData)}
        </div>
      );
    }
    else if(props.viewstate === 'Github'){
      return(
        <div
        className="content-container"
        style={styles}
        >
          <Github></Github>
        </div>
      );
    }
  }
  
  export default Content;
  