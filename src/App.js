
import './App.css';
import Home from './Component/Home/Home';
import {  Route, Routes } from "react-router-dom";
import ManagementTeam from './Component/ManagementTeam/ManagementTeam';
import Navigation from './Component/Navigation/Navigation';
import Profile from './Component/Profile/Profile';
import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';

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
        <Footer/>
      </div>
    </div>
  );
}

export default App;
