import './css/Sidebar.css';
import {useState} from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom';

function Guest(props) {
  let [modalIsOpen, setIsOpen] = useState(false);
  function submitPW() {
    let PW = document.getElementById("password").value;
    if(PW === '1234'){
      console.log("정답!@");
      props.setAccount('Admin');
    }
  }
  return(
    <div className="sidebar-user">
      <div style={{"margin":"0px 40px 0px 0px"}}>Guest</div>
      <div onClick={() => setIsOpen(true)}>Login</div>
      <ReactModal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
      >
        <h1>Admin Password를 입력해주세요.</h1>
        <input type="text" id="password"></input>
        <button type="submit" onClick={() => submitPW()}>제출</button>
      </ReactModal>
    </div>
  )
}

function Admin() {
  return(
    <div className="sidebar-user">
      Admin
    </div>
  )
}

function Sidebar(props) {
  let [account, setAccount] = useState('Guest');
  let accountBlock;
  if(account === 'Guest'){
    accountBlock = <Guest setAccount={setAccount} />;
  }else{
    accountBlock = <Admin />;
  }
  let styles;
  if(props.sidebarstate === 'OFF'){
    styles = {transform: `translateX(-240px)`};
  }
  if(props.sidebarstate === 'ON'){
    styles = {transform: `translateX(0)`};
  }
  
  return (
    <div className="sidebar" style={styles}>
      {accountBlock}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/github">Github</Link>
        </li>
        <li>
          <Link to="/board">Board</Link>
        </li>
        <li>
          <Link to="/corona">Corona</Link>
        </li>
      </ul>  
    </div>
    );
  }
  
  export default Sidebar;
  