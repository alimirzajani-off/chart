import React, { useState, useEffect, useRef } from 'react';
import BoxDown from './box-right/box-down';
import BoxUp from './box-right/box-up';
import BoxLeft from './chart-box/box-left';
import BoxCenter from './chart-box/boxCenter';
import './Dashboard-sec1.css'



const DashboardSec1 = (props) => {

    return (
        <div className="container">
        <div className="d-sec1 d-flex row">
            <div className="box1 col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0">
                <BoxUp/>
                <BoxDown/>
            </div>
            <div className="box col-xl-4 col-lg-4 box2 col-md-12 col-sm-12">
                <BoxCenter/>
            </div>
            <div className="box col-xl-4 col-lg-4 box3 col-md-12 col-sm-12">
                <BoxLeft/>
            </div>
        </div>
        </div>
    )

}

export default DashboardSec1