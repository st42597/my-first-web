import './Main.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Pages from './pages/Pages';
import Footer from './components/Footer'
import {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';

function Main() {
  const [sidebarstate, setSidebarstate] = useState('OFF')

  return (
    <BrowserRouter>
      <Header sidebarstate={sidebarstate} setSidebarstate={setSidebarstate} />
      <Sidebar sidebarstate={sidebarstate} />
      <Pages sidebarstate={sidebarstate} />
      <Footer />
    </BrowserRouter>
  );
}
export default Main;
