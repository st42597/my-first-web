import './Sidebar.css';

function Sidebar(props) {
    let styles;
    if(props.sidebarstate === 'OFF'){
        styles = {transform: `translateX(-240px)`};
    }
    if(props.sidebarstate === 'ON'){
        styles = {transform: `translateX(0)`};
    }
    const clickList = (post) => {
        props.setViewstate(post);
    }
    return (
        <div
        className="Side-bar"
        style={styles}
         >
        <ul>
            <li><button className="list" onClick={() => clickList('Profile')}>Profile</button></li>
            <li><button className="list" onClick={() => clickList('Description')}>Description</button></li>
        </ul>
          
      </div>
    );
  }
  
  export default Sidebar;
  