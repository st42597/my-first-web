import './css/Header.css'
import menu_icon from 'icons/Menu.png'
import moment from 'moment';
import {useEffect, useState} from 'react';
import {useAsync, useInterval} from 'react-use';
import {useHistory} from 'react-router-dom';

function Header(props) {

  const clickMenu = () => {
    if(props.sidebarstate === 'OFF'){
      props.setSidebarstate('ON')
    }
    else if(props.sidebarstate === 'ON'){
      props.setSidebarstate('OFF')
    }
  }
  const viewName = {
    '/': 'Home',
    '/profile': 'Profile',
    '/github': 'Github',
    '/board': 'Board',
    '/corona': 'Corona',
    '/description': 'Description'
  };
  let history = useHistory();

  let [count, setCount] = useState(0);
  useInterval(() => {
      setCount(count + 1);
  }, 1000);
  const now = moment().format('MMM DD (ddd) HH:mm:ss');

    return (
      <div className="header-container">
          <img
          className="menu-icon" src={menu_icon} alt="menu_icon"
          onClick={clickMenu}
          ></img>
          <div className="viewStatus">{viewName[history.location.pathname]}</div>
          <div className="clock">{now}</div>
      </div>
    );
  }
  
  export default Header;
  