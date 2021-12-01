
import './App.css';
import Home from './Component/Home/Home';
import {  Route, Routes } from "react-router-dom";
import ManagementTeam from './Component/ManagementTeam/ManagementTeam';
import Navigation from './Component/Navigation/Navigation';
import Profile from './Component/Profile/Profile';
import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';
import Notification from './Component/Notification/Notification';
import Contact from './Component/Contact/Contact';
import OrganizationalChart from './Component/Organizational/OrganizationalChart ';

function App() {
  
  return (
    <div className="App" id= "App">
      <div className="text-white">
      <Navigation/>
        <Routes>
         <Route path = "/" element = {<Home/>} />
         <Route path = "/home" element = {<Home/>} />
         <Route path = "/profile"  element = {<Profile/>} />
        <Route path = "/job_description" element = {<ManagementTeam/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/notification" element = {<Notification/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/organizational_chart" element = {<OrganizationalChart/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
