import './Content.css';
import {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

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

    useEffect(() => {
      async function readContent() {
        const ret = await axios.get(URL + props.viewstate);
        console.log(ret.data);
        setReturnData(ret.data);
      }
      readContent();
    }, [returnData, props.viewstate])

    return (
      <div
      className="content-container"
      style={styles}
      >
        <div dangerouslySetInnerHTML={{__html: returnData } }/>
      </div>
    );
  }
  
  export default Content;
  