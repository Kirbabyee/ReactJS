import Style from "./index.module.css";
import LogoTransparent from "../Images/LP Logo Transparent.png";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Sidebar(props) {
    const [dashboardActive, isDashboardActive] = useState(props.dashboard);
    const [analyticsActive, isAnalyticsActive] = useState(props.analytics)
    const [employeeActive, isEmployeeActive] = useState(props.employee);
    const [leaveReqActive, isLeaveReqActive] = useState(props.leaveReq);
    const [leaveHistoryActive, isLeaveHistoryActive] = useState(props.leaveHistory);
    const [settingsActive, isSettingsActive] = useState(props.settings);
    const [burgerMenu, isBurgerMenuActive] = useState(false);

    function isActive(active){
        /* Remove the highlight if other nav is clicked */
        isDashboardActive(false);
        isAnalyticsActive(false);
        isEmployeeActive(false);
        isLeaveReqActive(false);
        isLeaveHistoryActive(false);
        isSettingsActive(false);

        /* Highlight the nav that clicked */
        active(true);
    }

    return(
        <>
            <nav style={burgerMenu ? {width: '12em', backgroundColor: 'white'} : {backgroundColor: 'transparent', zIndex: '2'}}>
                <div className={Style.burger_menu}>
                        <i class='bxr  bx-menu' onClick={() => isBurgerMenuActive(!burgerMenu)}></i> 
                </div>
                <div className={`${burgerMenu ? Style.active_menu : ''} ${Style.logo}`}>
                    <img src={LogoTransparent} alt="" />
                </div>
                <div className={`${burgerMenu ? Style.active_menu : ''} ${Style.sidenav}`}>
                    <Link to={"/Dashboard"} className={Style.link}>
                        <div className={dashboardActive ? Style.active : ""} onClick={() => isActive(isDashboardActive)} >
                            <i class='bxr  bx-home-alt' ></i> 
                            Dashboard
                        </div>
                    </Link>
                    <Link to={"/Analytics"} className={Style.link}>
                        <div className={analyticsActive ? Style.active : ""} onClick={() => isActive(isAnalyticsActive)} >
                            <i class="bxr bx-chart-spline "   /> 
                            Analytics
                        </div>
                    </Link>
                    <Link to={"/Employees"} className={Style.link}>
                        <div className={employeeActive ? Style.active : ""} onClick={() => isActive(isEmployeeActive)} >
                            <i class='bxr  bx-user' ></i> 
                            Employee
                        </div>
                    </Link>
                    <Link to={"/Leave Request"} className={Style.link}>
                        <div className={leaveReqActive ? Style.active : ""} onClick={() => isActive(isLeaveReqActive)}>
                            <i class='bxr  bx-envelope-open'  ></i> 
                            Leave Request
                        </div>
                    </Link>
                    <Link to={"/Leave History"} className={Style.link}>
                        <div className={leaveHistoryActive ? Style.active : ""} onClick={() => isActive(isLeaveHistoryActive)}>
                            <i class='bxr  bx-clock-4'  ></i> 
                            Leave History
                        </div>
                    </Link>
                    <div className={settingsActive ? Style.active : ""} onClick={() => isActive(isSettingsActive)}>
                        <i class='bxr  bx-cog'  ></i> 
                        Settings
                    </div>
                </div>
                <div className={`${burgerMenu ? Style.active_menu : ''} ${Style.admin_container}`}>
                    <div className={Style.admin}>
                        <i class='bxr  bx-user-circle'></i> 
                        <div>
                            <p>Admin John</p>
                            <span>Admin</span>
                        </div>
                        <i class='bxr  bx-arrow-in-left-square-half' style={{color: 'red', fontSize: '2em'}}></i> 
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar