import './Main.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer'
import {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';

function Main() {
  const [sidebarstate, setSidebarstate] = useState('OFF')
  const [viewstate, setViewstate] = useState('Home')

  return (
    <div>
      <BrowserRouter>
        <Header
        sidebarstate={sidebarstate}
        setSidebarstate={setSidebarstate}
        viewstate={viewstate}
        />
        <Sidebar
        sidebarstate={sidebarstate}
        setViewstate={setViewstate}
        />
        <Content
        sidebarstate={sidebarstate}
        viewstate={viewstate}
        />
        <Footer />
      </BrowserRouter>
    </div>

  );
}
export default Main;
