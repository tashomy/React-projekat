import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Routes from "./router";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import NavBarPage from "./pages/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBarPage />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
