import React from 'react'
import DashboardSec1 from './sec1/Dashboard-sec1'
import DashboardSec2 from './sec2/Dashboard-sec2'
import DashboardSec3 from './sec3/Dashboard-sec3'
import DashboardSec4 from './sec4/Dashboard-sec4'
import './Dashboard.css'

const Dashboard = () => {

    return (
        <div className="dashboard container-fluid">
            <DashboardSec1 />
            <DashboardSec2 />
            <DashboardSec3 />
            <DashboardSec4 />
        </div>
    )

}

export default Dashboard