
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
import H_And_M_Education from './Component/ManagementTeam/ManagementContainer/H&M_Education/H_And_M_Education';
import QualityManual from './Component/ManagementTeam/ManagementContainer/QualityManual/QualityManual';
import QualityReport from './Component/ManagementTeam/ManagementContainer/QualityReport/QualityReport';
import RoutineAndMethod from './Component/ManagementTeam/ManagementContainer/RoutineAndMethod/RoutineAndMethod';
import SopFollowChart from './Component/ManagementTeam/ManagementContainer/SopAndFollowChart/SopFollowChart';

function App() {
  
  return (
    <div className="App" id= "App">
      <div className="text-white">
     
        <Routes>
         <Route path = "/" element = {<Home/>} />
         <Route path = "/home" element = {<Home/>} />
         <Route path = "/profile"  element = {<Profile/>} />
        <Route path = "/job_description" element = {<ManagementTeam/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/notification" element = {<Notification/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/organizational_chart" element = {<OrganizationalChart/>} />
        <Route path = "/hAndMEducation" element = {<H_And_M_Education/>} />
        <Route path = "/qualityManual" element = {<QualityManual/>} />
        <Route path = "/qualityReport" element = {<QualityReport/>} />
        <Route path = "/routineAndMethod" element = {<RoutineAndMethod/>} />
        <Route path = "/sopFollowChart" element = {<SopFollowChart/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
