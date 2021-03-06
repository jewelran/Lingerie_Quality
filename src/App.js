
import './App.css';
import Home from './Component/Home/Home';
import {  Route, Routes } from "react-router-dom";
import ManagementTeam from './Component/ManagementTeam/ManagementTeam';
import Profile from './Component/Profile/Profile';
import Login from './Component/Login/Login';
import Notification from './Component/Notification/Notification';
import Contact from './Component/Contact/Contact';
import OrganizationalChart from './Component/Organizational/OrganizationalChart ';
import QualityManual from './Component/ManagementTeam/ManagementContainer/QualityManual/QualityManual';
import RoutineAndMethod from './Component/ManagementTeam/ManagementContainer/RoutineAndMethod/RoutineAndMethod';
import SopFollowChart from './Component/ManagementTeam/ManagementContainer/SopAndFollowChart/SopFollowChart';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Component/Login/PrivateRoute';
import NotFound from './Component/NotFound/NotFound';
import AllUser from './Component/Admin/MaintainUserInfo/AllUser';
import SubscriberInfo from './Component/Admin/MaintainUserInfo/SubscriberInfo';
import Message from './Component/Admin/MaintainUserInfo/Message';
import AddNotification from './Component/Admin/MaintainUserInfo/AddNotification';

export const userContext = createContext();
function App() {
  const [userLoggedIn , setUserLoggedIn] = useState({})
  return (
    <div className="App" id= "App">
    
      <userContext.Provider value={ [userLoggedIn, setUserLoggedIn]} className="text-white"> 
        <Routes>
         <Route path = "/" element = {<Home/>} />
         <Route path = "/home" element = {<Home/>} />

         <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route path = "/job_description" element = {<ManagementTeam/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/notification" element = {<Notification/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/organizational_chart" element = {<OrganizationalChart/>} />
        <Route path = "/qualityManual" element = {<QualityManual/>} />
        <Route path = "/routineAndMethod" element = {<RoutineAndMethod/>} />
        <Route path = "/sopFollowChart" element = {<SopFollowChart/>} />
        <Route path = "/allUser" element = {<AllUser/>} />
        <Route path = "/subscriber" element = {<SubscriberInfo/>} />
        <Route path = "/addNotification" element = {<AddNotification/>} />
        <Route path = "/message" element = {<Message/>} />
        <Route path = "*" element = {<NotFound/>} />
        

        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
