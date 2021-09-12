import React from 'react';
import Header from './Component/Header/Header';
import SideMenu from './Component/SideMenu/SideMenu';
import Dashboard from './Component/Dashbord/Dashboard';
import './App.css'

const App=()=> {
  
  return (
    <div>
      <Header/>
      <SideMenu/>
      <Dashboard/>
    </div>
  );
}

export default App;
