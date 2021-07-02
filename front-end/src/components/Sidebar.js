import './Sidebar.css';

function Sidebar(props) {
    let styles;
    if(props.sidebarStatus === 'OFF'){
        styles = {transform: `translateX(-15vw)`};
    }
    if(props.sidebarStatus === 'ON'){
        styles = {transform: `translateX(0)`};
    }
    return (
      <div
      className="Side-bar"
      style={styles}
      >
          사이드바 뺴꼼뺴꼼
      </div>
    );
  }
  
  export default Sidebar;
  