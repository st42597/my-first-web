import './Header.css'
import moment from 'moment';
import {useInterval} from 'react-use';
import {useState} from 'react';
import menu_icon from './Menu.png'

function Header(props) {
    const clickMenu = () => {
      console.log('a')
      if(props.sidebarStatus === 'OFF'){
        props.setsidebarStatus('ON')
      }
      else if(props.sidebarStatus === 'ON'){
        props.setsidebarStatus('OFF')
      }
    }

    let [count, setCount] = useState(0);
    useInterval(() => {
        setCount(count + 1);
    }, 1000);
    const now = moment().format('MM월 DD일 HH:mm:ss');

    return (
      <div className="header-container">
          <img
          className="menu-icon" src={menu_icon} alt="menu_icon"
          onClick={clickMenu}
          ></img>
          <div className="clock">{now}</div>
      </div>
    );
  }
  
  export default Header;
  