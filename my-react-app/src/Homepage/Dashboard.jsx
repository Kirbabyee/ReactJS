import Sidebar from "./Sidebar.jsx";
import Style from "./index.module.css";
import { use, useState } from "react";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRange } from "react-date-range";
import { addDays, format } from "date-fns";

function Dashboard(){
    const [openCalendar, isOpenCalendar] = useState(false);
    const [dateSelect, isDateSelect] = useState(new Date()); /* Get the selected date */

    const [dateSelected, isDateSelected] = useState(false);

    const handleSelect = (date) => {
        isDateSelect(format(date, 'MMM-dd-yyyy'));
        isDateSelected(true); /* To display the selected date if the date is selected in select date*/
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
                    <div className={Style.request_date_picker}>
                        <button className={Style.request_date_picker_btn} onClick={() => isOpenCalendar(!openCalendar)} style={{backgroundColor: "#f9fafb"}}>
                            {dateSelected ? dateSelect : 'Select Date' /* Display the selected date if date is selected */} 
                            <i class='bxr  bx-calendar-detail' ></i> 
                        </button>
                        <div className={`${openCalendar ? Style.select_date : ''} ${Style.date_range}`} style={{position: "absolute",right: "50px"}}> 
                            <Calendar /* Date picker for charts */
                                date={dateSelect}
                                onChange={handleSelect}
                            />
                        </div>
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