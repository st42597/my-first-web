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
                <li onClick={() => clickList('Profile')}>Profile</li>
                <li onClick={() => clickList('Description')}>Description</li>
            </ul>  
        </div>
    );
  }
  
  export default Sidebar;
  