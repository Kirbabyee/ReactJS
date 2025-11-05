import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Style from "./index.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, Calendar } from 'react-date-range';
import { addDays, format } from "date-fns";

function Analytics() {
    const [datePick, isDatePick] = useState(false);

    const [rangeDate, isRangeDate] = useState(false);
    const [dateRanged, isDateRanged] = useState(false);

    const [dateSelect, isDateSelect] = useState(new Date());
    const [dateSelected, isDateSelected] = useState(false);

    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
    
    const getDateRangeLabels = (start, end) => { /* To return all the selected date in range picker */
        const labels = [];
        let curr = start;

        while (curr <= end) {
            labels.push(format(curr, "MMM-dd-yyyy"));
            curr = addDays(curr, 1);
        }

        return labels;
    };

    const handleSelect = (date) => {
        isDateSelect(format(date, 'MMM-dd-yyyy'));
        isDateSelected(true); /* To display the selected date if the date is selected in select date*/
    }

    const handleRange = (ranges) => {
        setDate(ranges.selection);
        isDateRanged(true); /* To display the selected date if the date is ranged in range date*/
    }

    return(
        <>
            <Sidebar analytics="true"/>
            <div className={Style.analytics}>
                <div className={Style.analytics_header}>
                    <h3>Payroll Analytics</h3>
                    <p>Monitor and analyze employee payroll data</p>
                </div>
                <div className={Style.analytics_body}>
                    <div className={Style.stats}>
                        <div className={`${Style.stats_box} ${Style.total_payroll}`}>
                            <h5>Total Payroll</h5>
                            <p>₱456,789</p>
                            <span style={{color: "green"}}>+12.5% from last month</span>
                        </div>
                        <div className={`${Style.stats_box} ${Style.total_employeees}`}>
                            <h5>Total Employees</h5>
                            <p>14</p>
                            <span>Active employees</span>
                        </div>
                        <div className={`${Style.stats_box} ${Style.average_salary}`}>
                            <h5>Average Salary</h5>
                            <p>₱32,101</p>
                            <span>Per employee</span>
                        </div>
                    </div>
                    <div className={Style.charts}>
                        {/* ATTENDANCE CHARTS */}
                        <div className={Style.attendance_chart}>
                            <h3>Attendance Charts</h3>
                            <div className={Style.charts_container}>
                                <div className={Style.bar_graph}>
                                     <Bar 
                                        data={{
                                            labels: [dateSelected ? dateSelect : ''] /* Display only the date if it is selected */,
                                            datasets: [
                                                {
                                                    label: "Present",
                                                    data: [400, 300, 800],
                                                },
                                                {
                                                    label: "Absent",
                                                    data: [100, 300, 100],
                                                },
                                                {
                                                    label: "Late",
                                                    data: [10, 500, 400],
                                                },
                                                {
                                                    label: "Undertime",
                                                    data: [50, 300, 100],
                                                },
                                                {
                                                    label: "Leave",
                                                    data: [100, 700, 10],
                                                }
                                            ],
                                        }}
                                    />
                                    <div className={Style.date_picker}>
                                        <button className={Style.date_picker_btn} onClick={() => isDatePick(!datePick)}>
                                            {dateSelected ? dateSelect : 'Select Date'} 
                                            <i class='bxr  bx-calendar-detail' ></i> 
                                        </button>
                                        <div className={`${datePick ? Style.select_date : ''} ${Style.date_range}`} style={{right: "-150px"}}> 
                                            <Calendar /* Date picker for charts */
                                                date={dateSelect}
                                                onChange={handleSelect}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={Style.doughnut_graph}>
                                    <Doughnut 
                                        data={{
                                            labels: ["Emergency Leave", "Sick Leave", "Vacation Leave"],    
                                            datasets: [
                                                {
                                                    data: [500, 300, 50]
                                                }
                                            ]
                                        }}
                                        options={{
                                            plugins: {
                                                title: {
                                                    display: true,
                                                    text: `${dateSelected ? dateSelect : ''}`, /* Display only the date if it is selected  */
                                                    position: "bottom"
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* PROJECTED CHARTS */}
                        <div className={Style.projected_charts}>
                            <h3>Projected Charts</h3>
                            <div className={Style.charts_container}>
                                <div className={Style.projected_salary}>
                                    <Bar 
                                        data={{
                                            labels: getDateRangeLabels(date.startDate, date.endDate),
                                            datasets: [
                                                {
                                                    data: [100000, 200000, 300000]
                                                }
                                            ]
                                        }}
                                        options={{
                                            plugins: {
                                                title: {
                                                    display: true,
                                                    text: `Projected Salary Payout, ${format(date.startDate, 'MMM dd, yyyy')} - ${format(date.endDate, 'MMM dd, yyyy')}`,
                                                    position: "top",
                                                    font: {
                                                        size: 18,
                                                        weight: 300
                                                    }
                                                },
                                                legend: {
                                                    display: false,
                                                }
                                            }
                                        }}
                                    />
                                    <div className={Style.range_date}>
                                        <button className={Style.bar_graph_date_btn} onClick={() => isRangeDate(!rangeDate)}>
                                            {dateRanged ? `${format(date.startDate, 'MM-dd-yyyy')} to ${format(date.endDate, 'MM-dd-yyyy')}` : 'Select Date' /* Display the selected date if date is selected */} 
                                            <i class='bxr  bx-calendar-detail' ></i> 
                                        </button>
                                        <div className={`${rangeDate ? Style.select_date : ''} ${Style.date_range}`} > 
                                            <DateRange /* Date picker for charts */
                                                ranges={[date]}
                                                onChange={handleRange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={Style.projected_attendance}>
                                    <Bar 
                                        data={{
                                            labels: getDateRangeLabels(date.startDate, date.endDate),
                                            datasets: [
                                                {
                                                    label: "Projected Attendance (days)",
                                                    data: [100, 200, 300],
                                                },
                                                {
                                                    
                                                    label: "Projected Absences (days)",
                                                    data: [500, 110, 230]
                                                }
                                            ]
                                        }}
                                        options={{
                                            plugins: {
                                                title: {
                                                    display: true,
                                                    text: `Projected Attendance (days) and Projected Absences (days)`,
                                                    position: "top",
                                                    font: {
                                                        size: 18,
                                                        weight: 300
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics