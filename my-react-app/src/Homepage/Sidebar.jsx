import Style from "./index.module.css";
import LogoTransparent from "../Images/LP Logo Transparent.png";
import { useState } from "react";

function Sidebar() {
    const [dashboardActive, isDashboardActive] = useState(true);
    const [employeeActive, isEmployeeActive] = useState(false);
    const [leaveReqActive, isLeaveReqActive] = useState(false);
    const [leaveHistoryActive, isLeaveHistoryActive] = useState(false);
    const [settingsActive, isSettingsActive] = useState(false);

    function isActive(active){
        /* Remove the highlight if other nav is clicked */
        isDashboardActive(false);
        isEmployeeActive(false);
        isLeaveReqActive(false);
        isLeaveHistoryActive(false);
        isSettingsActive(false);

        /* Highlight the nav that clicked */
        active(true);
    }

    return(
        <>
            <nav>
                <div className={Style.logo}>
                    <img src={LogoTransparent} alt="" />
                </div>
                <div className={Style.sidenav}>
                    <div className={dashboardActive ? Style.active : ""} onClick={() => isActive(isDashboardActive)} >
                        <i class='bxr  bx-home-alt' ></i> 
                        Dashboard
                    </div>
                    <div className={employeeActive ? Style.active : ""} onClick={() => isActive(isEmployeeActive)} >
                        <i class='bxr  bx-user' ></i> 
                        Employee
                    </div>
                    <div className={leaveReqActive ? Style.active : ""} onClick={() => isActive(isLeaveReqActive)}>
                        <i class='bxr  bx-envelope-open'  ></i> 
                        Leave Request
                    </div>
                    <div className={leaveHistoryActive ? Style.active : ""} onClick={() => isActive(isLeaveHistoryActive)}>
                        <i class='bxr  bx-clock-4'  ></i> 
                        Leave History
                    </div>
                    <div className={settingsActive ? Style.active : ""} onClick={() => isActive(isSettingsActive)}>
                        <i class='bxr  bx-cog'  ></i> 
                        Settings
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar