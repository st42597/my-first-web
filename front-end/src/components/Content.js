import './Content.css';
import {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
/*import Profile from './Profile.md';*/
import axios from 'axios';

function Content(props) {
    let styles;
    if(props.sidebarstate === 'OFF'){
        styles={width: `70vw`};
    }
    if(props.sidebarstate === 'ON'){
        styles={width: `calc(70vw - 240px)`};
    }
    let [markdown, setMarkdown] = useState("");
  
    useEffect(() => {
      async function a() {
        const Profile = await axios.get('http://localhost:5000/' + props.viewstate);
        console.log(Profile.data.content);
        setMarkdown(Profile.data.content);
      }
      a();
    }, [])

    return (
      <div
      className="content-container"
      style={styles}
      >
        <div dangerouslySetInnerHTML={{__html: markdown} } />
          
      </div>
    );
  }
  
  export default Content;
  