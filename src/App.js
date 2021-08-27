import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Routes from './router';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar/>
        <Showcase/>
      </div>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
