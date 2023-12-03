 
import React from 'react'
import { GoChevronDown } from "react-icons/go";
// import BarChart from "/public/Barchart.PNG"
import './Dashboardtab.css';

function EnergyAnalysis() {
    return (
        <div className='card3'>
            <div className='card3-header'>
                <h3>Energy Analysis</h3>
                <p>2022 <GoChevronDown className='down-arrow-icon' /></p>
            </div>
            <div>
                <img src="./BarChart.PNG" alt='Barchart' className='barchart' />
            </div>
            <div>

            </div>
        </div>
    )
}

export default EnergyAnalysis
