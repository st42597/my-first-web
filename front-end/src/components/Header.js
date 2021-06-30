import './Header.css'
import moment from 'moment';
import {useInterval} from 'react-use';
import {useState} from 'react';

function Header() {
    let [count, setCount] = useState(0);
    useInterval(() => {
        setCount(count + 1);
    }, 1000);
    const now = moment().format('MM월 DD일 HH:mm:ss');

    return (
      <div className="header-container">
          <img className="menu" src="./Menu.png" alt="menu"></img>
          <div className="clock">{now}</div>
      </div>
    );
  }
  
  export default Header;