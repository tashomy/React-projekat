import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Routes from './router';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
