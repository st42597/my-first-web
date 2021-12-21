import './Main.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Pages from './pages/Pages';
import Footer from './components/Footer'
import {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';

function Main() {
  const [sidebarstate, setSidebarstate] = useState('OFF')
  const [viewstate, setViewstate] = useState('')

  return (
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
      <Pages
      sidebarstate={sidebarstate}
      viewstate={viewstate}
      />
      <Footer />
    </BrowserRouter>
  );
}
export default Main;
