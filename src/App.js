import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Carousel from './Component/Carousel/Carousel';
import ManagementTeam from './Component/ManagementTeam/ManagementTeam';
import Navigation from './Component/Navigation/Navigation';
import Profile from './Component/Profile/Profile';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="App">
      <div className="text-white">
      <Navigation/>
        <Routes>
         <Route path = "/" element = {<Home/>} />
         <Route path = "/home" element = {<Home/>} />
         <Route path = "/profile"  element = {<Profile/>} />
        <Route path = "/job_description" element = {<ManagementTeam/>} />
        <Route path = "/login" element = {<Login/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
