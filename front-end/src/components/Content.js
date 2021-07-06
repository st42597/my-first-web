import './Content.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Profile from './Profile.md';

function Content(props) {
    let styles;
    if(props.sidebarstate === 'OFF'){
        styles={width: `70vw`};
    }
    if(props.sidebarstate === 'ON'){
        styles={width: `calc(70vw - 240px)`};
    }
    let [markdown, setMarkdown] = useState("");
    fetch(Profile).then(res => res.text()).then((markdown) => setMarkdown(markdown));
    console.log(markdown)

    return (
      <div
      className="content-container"
      style={styles}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
          
      </div>
    );
  }
  
  export default Content;
  