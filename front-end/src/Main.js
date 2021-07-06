import './Main.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer'
import {useState} from 'react';

function Main() {
  const [sidebarstate, setSidebarstate] = useState('OFF')
  const [viewstate, setViewstate] = useState('Profile')


  return (
    <div>
        <Header
        sidebarstate={sidebarstate}
        setSidebarstate={setSidebarstate}
        viewstate={viewstate}
        />
        <Sidebar
        sidebarstate={sidebarstate}
        setViewstate={setViewstate}
        />
        <Content sidebarstate={sidebarstate}/>
        <Footer />
    </div>
  );
}

export default Main;
