import './Sidebar.css';
import {useState} from 'react';
import ReactModal from 'react-modal';
import {useHistory} from 'react-router-dom';

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
  let history = useHistory();
  const handlePage = (post) => {
    history.push(post);
    props.setViewstate(post);
  }
  return (
    <div
    className="sidebar"
    style={styles}
    >
      {accountBlock}
      <ul>
        <li onClick={() => handlePage('')}>Home</li>
        <li onClick={() => handlePage('profile')}>Profile</li>
        <li onClick={() => handlePage('github')}>Github</li>
        <li onClick={() => handlePage('board')}>Board</li>
        <li onClick={() => handlePage('corona')}>Corona</li>
        <li onClick={() => handlePage('description')}>Description</li>
      </ul>  
    </div>
    );
  }
  
  export default Sidebar;
  