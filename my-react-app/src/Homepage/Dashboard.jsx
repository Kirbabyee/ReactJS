import Sidebar from "./Sidebar.jsx";
import Style from "./index.module.css";
import { use, useState } from "react";

function Dashboard(){
    const [date, setSelectedDate] = useState();

    function getDate(e){
        setSelectedDate(e.target.value);
    }

    return(
        <>
            <Sidebar dashboard="true"/>
            <div className={Style.dashboard}>
                {/* Header */}
                <div className={Style.dashboard_header}>
                    <div className={Style.date}>
                        <h3>Dashboard</h3>
                    </div>
                    <div className={Style.date_selector}>
                        <input type='date' onChange={getDate}/>
                    </div>
                </div>
                <div className={Style.dashboard_body}>
                    {/* Status Boxes */}
                    <div className={Style.status}>
                        <div className={` ${Style.status_box} ${Style.overall}` /* Multiple class */}>
                            <i class='bxr  bx-community'  ></i> 
                            <p>14</p>
                            <div>
                                Overall
                                <span>Employees</span>
                            </div>
                        </div>
                        <div className={` ${Style.status_box} ${Style.in_duty}` /* Multiple class */}>
                            <i class='bxr  bx-user-check'  ></i>  
                            <p>7</p>
                            <div>
                                In Duty
                                <span>Employees</span>
                            </div>
                        </div>
                        <div className={` ${Style.status_box} ${Style.off_duty}` /* Multiple class */}>
                            <i class='bxr  bx-user-minus'  ></i>  
                            <p>7</p>
                            <div>
                                Off Duty
                                <span>Employee</span>
                            </div>
                        </div>
                    </div>
                    {/* Attendance Summary */}
                    <div className={Style.attendance_summary}>
                        <h4>Today's Attendace Summary</h4>
                        <div className={Style.attendance_summary_container}>
                            <div className={`${Style.summary_box} ${Style.on_time}`}>
                                <i class='bxr  bx-check-circle'  ></i> 
                                <p>12</p>
                                <span>On Time</span>
                            </div>
                            <div className={`${Style.summary_box} ${Style.late}`}>
                                <i class='bxr  bx-alert-circle'  ></i> 
                                <p>2</p>
                                <span>Late</span>
                            </div>
                            <div className={`${Style.summary_box} ${Style.absent}`}>
                                <i class='bxr  bx-x-circle'  ></i>  
                                <p>0</p>
                                <span>Absent</span>
                            </div>
                            <div className={`${Style.summary_box} ${Style.total_hours}`}>
                                <i class='bxr  bx-clock-4'  ></i> 
                                <p>98</p>
                                <span>Total Hours</span>
                            </div>
                        </div>
                    </div>
                    {/* Recent Activities */}
                    <div className={Style.recent_activity}>
                        <h4>Recent Activity</h4>
                        <div className={Style.recent_activity_container}>
                            <div className={Style.activity}>
                                <i class='bxr  bx-clock-4'  ></i> 
                                <div>
                                    <p>Kirby Prado clocked in</p>
                                    <span className={Style.timestamp}> 5 mins ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard