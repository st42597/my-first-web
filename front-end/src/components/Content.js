import ReactMarkdown from 'react-markdown';
import './Content.css';

function Content(props) {
    let styles;
    if(props.sidebarstate === 'OFF'){
        styles={width: `100vw`};
    }
    if(props.sidebarstate === 'ON'){
        styles={width: `calc(100vw - 240px)`};
    }

    return (
      <div
      className="content-container"
      style={styles}
      >
          <div className="title">타이틀</div>
          <div className="content">
              <ReactMarkdown></ReactMarkdown>
          </div>
          
      </div>
    );
  }
  
  export default Content;
  