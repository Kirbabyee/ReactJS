import Style from './MP.module.css';
import LogoTransparent from '../Images/LP Logo Transparent.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [dashboardActive, isDashboardActive] = useState(true);
    const [analyticsActive, isAnalyticsActive] = useState(false);
    const [employeeActive, isEmployeeActive] = useState(false);
    const [leaveRequestActive, isLeaveRequestActive] = useState(false);
    const [leaveHistoryActive, isLeaveHistoryActive] = useState(false);
    const [settingsActive, isSettingsActive] = useState(false);

    function sidebar(stateName) {
        /* Remove the highlight if the other sidebar is clicked */
        isDashboardActive(false);
        isAnalyticsActive(false);
        isEmployeeActive(false);
        isLeaveRequestActive(false);
        isLeaveHistoryActive(false);
        isSettingsActive(false);

        /* Highlight the clicked sidebar link */
        stateName(true);
    }

    return(
        <nav>
            <div className={Style.image_container}>
                <img src={LogoTransparent} alt="" />
            </div>
            <div className={Style.nav_button_container}>
                <Link to={"/Home/Dashboard"} className={Style.link}>
                    <div className={dashboardActive ? Style.active : ''} onClick={() => sidebar(isDashboardActive)}>
                        <i class='bxr  bx-home-alt'  ></i> 
                        Dashboard
                    </div>
                </Link>
                
                <div className={analyticsActive ? Style.active : ''} onClick={() => sidebar(isAnalyticsActive)}>
                    <i class='bxr  bx-trending-up'  ></i> 
                    Analytics
                </div>
                <div className={employeeActive ? Style.active : ''} onClick={() => sidebar(isEmployeeActive)}>
                    <i class='bxr  bx-user'  ></i> 
                    Employee
                </div>
                <div className={leaveRequestActive ? Style.active : ''} onClick={() => sidebar(isLeaveRequestActive)}>
                    <i class='bxr  bx-user-minus'  ></i> 
                    Leave Request
                </div>
                <div className={leaveHistoryActive ? Style.active : ''} onClick={() => sidebar(isLeaveHistoryActive)}>
                    <i class='bxr  bx-history'  ></i>  
                    Leave History
                </div>
                <div className={settingsActive ? Style.active : ''} onClick={() => sidebar(isSettingsActive)}>
                    <i class='bxr  bx-cog'  ></i>  
                    Settings
                </div>
            </div>
            <div className={Style.staff_user}>
                <img src="" alt="" />
                <div>
                    <p className={Style.staff_name}>John Doe</p>
                    <p className={Style.staff_position}>Manager</p>
                </div>
                <button><i class='bxr  bx-arrow-out-right-square-half'  ></i> </button>
            </div>
        </nav>
    )
}

export default Sidebar