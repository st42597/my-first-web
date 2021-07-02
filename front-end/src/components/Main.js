import './Main.css'
import Header from './Header'
import Sidebar from './Sidebar';
import Footer from './Footer'
import {useState} from 'react';

function Main() {
  const [sidebarStatus, setsidebarStatus] = useState('OFF')
  return (
    <div className="main-page">
        <Header
        sidebarStatus={sidebarStatus}
        setsidebarStatus={setsidebarStatus}
        />
        <Sidebar sidebarStatus={sidebarStatus}/>
        <Footer />
    </div>
  );
}

export default Main;
