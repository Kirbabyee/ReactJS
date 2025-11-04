import Sidebar from "./Sidebar.jsx";
import Style from "./index.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function Analytics() {

    const data = [
        { name: "Jan", users: 30 },
        { name: "Feb", users: 45 },
        { name: "Mar", users: 80 },
        { name: "Apr", users: 60 },
        { name: "May", users: 120 },
    ];

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
                        <div className={Style.attendance_chart}>
                            <Bar 
                                data={{
                                    labels: ["A", "B", "C"],
                                    datasets: [
                                        {
                                            label: "Revenue",
                                            data: [200, 300, 400],
                                        },
                                    ]
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics