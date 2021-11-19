import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Carousel from './Component/Carousel/Carousel';
import ManagementTeam from './Component/ManagementTeam/ManagementTeam';
import Navigation from './Component/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <div className="text-danger">
      <Navigation/>
        <Routes>
         <Route path = "/" element = {<Home/>} />
         <Route path = "/home" element = {<Home/>} />
        <Route path = "/job_description" element = {<ManagementTeam/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
