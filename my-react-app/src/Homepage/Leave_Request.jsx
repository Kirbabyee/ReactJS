import Sidebar from "./Sidebar.jsx";
import Style from "./index.module.css";
import userPhoto from "../Images/user.jpg";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";

import { useState } from "react";

function Leave_Request() {
    const [rangeDate, isRangeDate] = useState(false);
    const [dateRanged, isDateRanged] = useState(false);

    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const handleRange = (ranges) => {
        setDate(ranges.selection);
        isDateRanged(true); /* To display the selected date if the date is ranged in range date*/
    }

    return(
        <>
            <Sidebar leaveReq="true"/>
            <div className={Style.leave_request}>
                <div className={Style.leave_request_header}>
                    <h3>Leave Request</h3>
                    <p>Handle employee time-off requests and approvals here</p>
                </div>
                <div className={Style.leave_request_body}>
                    <div className={Style.request_container}>
                        <div className={Style.search_date}>
                            <div className={Style.search_bar_container}>
                                <input type="text" className={Style.request_search_bar} placeholder="Search employee name, role, ID or any related keywords"/>
                                <i class="bxr bx-search "   />
                            </div>
                            <div className={Style.request_date_picker}>
                                <button className={Style.request_date_picker_btn} onClick={() => isRangeDate(!rangeDate)}>
                                    {dateRanged ? `${format(date.startDate, 'MM-dd-yyyy')} to ${format(date.endDate, 'MM-dd-yyyy')}` : 'Select Date' /* Display the selected date if date is selected */} 
                                    <i class='bxr  bx-calendar-detail' ></i> 
                                </button>
                                <div className={`${rangeDate ? Style.select_date : ''} ${Style.date_range}`} style={{position: "absolute" ,right: "50px"}}> 
                                    <DateRange /* Date picker for charts */
                                        ranges={[date]}
                                        onChange={handleRange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={Style.requests_boxes}>
                            <div className={Style.requests}>
                                <div className={Style.requestor}>
                                    <img src={userPhoto} alt="" className={Style.user_photo}/>
                                    <div>
                                        <p>John Doe</p>
                                        <span className={Style.request_type}>Vacation Leave</span>
                                    </div>
                                    <i class='bxr  bx-dots-vertical-rounded'    ></i> 
                                </div>
                                <p className={Style.request_message}>
                                    Hello, asking for leave
                                </p>
                                <div className={Style.request_date}>
                                    <i class='bxr  bx-calendar-detail'    ></i> 
                                    Sept 01, 2025
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leave_Request