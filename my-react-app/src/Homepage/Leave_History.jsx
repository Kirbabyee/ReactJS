import Sidebar from "./Sidebar.jsx";
import Style from "./index.module.css";
import userPhoto from "../Images/user.jpg";
import { useState } from "react";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRange } from "react-date-range";
import { addDays, format } from "date-fns"

function Leave_History() {
    const [openCalendar, isOpenCalendar] = useState(false);
    const [dateSelect, isDateSelect] = useState(new Date()); /* Get the selected date */

    const [dateSelected, isDateSelected] = useState(false);

    const handleSelect = (date) => {
        isDateSelect(format(date, 'MMM-dd-yyyy'));
        isDateSelected(true); /* To display the selected date if the date is selected in select date*/
    }

    return(
        <>
            <Sidebar leaveHistory="true" />
            <div className={Style.leave_history}>
                <div className={Style.leave_history_header}>
                    <h3>Leave History</h3>
                    <p>Track and manage employee leave requests</p>
                </div>
                <div className={Style.leave_history_body}>
                    <div className={Style.leave_history_search_bar_container}>
                        <div className={Style.leave_history_search_bar}>
                            <input type="text" placeholder="Search employee name, role, ID or any related keywords"/>
                            <i class="bxr bx-search "   />
                        </div>
                        <div className={Style.request_date_picker}>
                            <button className={Style.request_date_picker_btn} onClick={() => isOpenCalendar(!openCalendar)}>
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
                    <div className={Style.approved_pending_denied}>
                        <div className={`${Style.approved} ${Style.circle}`}>
                            <i class='bxr  bx-circle'></i> 
                            Approved: 2
                        </div>
                        <div className={`${Style.denied} ${Style.circle}`}>
                            <i class='bxr  bx-circle'></i>
                            Denied: 1
                        </div>
                        <div className={`${Style.pending} ${Style.circle}`}>
                            <i class='bxr  bx-circle'></i>
                            Pending: 0
                        </div>
                    </div>
                    <div className={Style.history_container}>
                        <div className={Style.requests}>
                            <div className={Style.requestor}>
                                <img src={userPhoto} alt="" className={Style.user_photo}/>
                                <div>
                                    <p>John Doe</p>
                                    <span className={Style.request_type}>Vacation Leave</span>
                                </div>
                                <p className={`${Style.request_denied} ${Style.request_status}`}>
                                    Denied
                                </p> 
                            </div>
                            <p className={Style.request_message}>
                                Hello, asking for leave
                            </p>
                            <div className={Style.request_date}>
                                <i class='bxr  bx-calendar-detail'></i> 
                                Sept 01, 2025
                            </div>
                        </div>
                        <div className={Style.requests}>
                            <div className={Style.requestor}>
                                <img src={userPhoto} alt="" className={Style.user_photo}/>
                                <div>
                                    <p>John Doe</p>
                                    <span className={Style.request_type}>Vacation Leave</span>
                                </div>
                                <p className={`${Style.request_approved} ${Style.request_status}`}>
                                    Approved
                                </p> 
                            </div>
                            <p className={Style.request_message}>
                                Hello, asking for leave
                            </p>
                            <div className={Style.request_date}>
                                <i class='bxr  bx-calendar-detail'></i> 
                                Sept 01, 2025
                            </div>
                        </div>
                        <div className={Style.requests}>
                            <div className={Style.requestor}>
                                <img src={userPhoto} alt="" className={Style.user_photo}/>
                                <div>
                                    <p>John Doe</p>
                                    <span className={Style.request_type}>Vacation Leave</span>
                                </div>
                                <p className={`${Style.request_approved} ${Style.request_status}`}>
                                    Approved
                                </p> 
                            </div>
                            <p className={Style.request_message}>
                                Hello, asking for leave
                            </p>
                            <div className={Style.request_date}>
                                <i class='bxr  bx-calendar-detail'></i> 
                                Sept 01, 2025
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Leave_History