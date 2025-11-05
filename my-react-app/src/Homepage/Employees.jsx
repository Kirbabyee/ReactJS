import Sidebar from "./Sidebar.jsx";
import Style from "./index.module.css";
import userPhoto from "../Images/user.jpg";
import { useState } from "react";

function Employees() {
    const [actions, isActionsActive] = useState(null);

    const employeesData = [ /* Put the data into an object */
        {
            image: ``,
            name: 'John Doe',
            role: 'Chef',
            contact: '09123456789',
            email: 'johndoe@gmail.com',
            hireDate: '2015'
        },{
            image: ``,
            name: 'Jane Doe',
            role: 'Waiter',
            contact: '09123456789',
            email: 'janedoe@gmail.com',
            hireDate: '2019'
        }
    ]

    const employeeList = []
    employeesData.forEach((employee, index) => { /* Loop the object to display the data dynamically */
        employeeList.push(
            
        )
    })

    return(
        <>
            <Sidebar employee="true"/>
            <div className={Style.employees}>
                <div className={Style.employees_header}>
                    <h3>Employees</h3>
                    <p>Manage employee details and update records</p>
                </div>
                <div className={Style.employees_body}>
                    <div className={Style.employees_container}>
                        <h2>All Employees</h2>
                        <hr />
                        <div className={Style.employees_searchbar}>
                            <div>   
                                <input type="text" placeholder="Search Employee by name,role,ID or any related keywords"/>
                                <i class='bxr  bx-search'></i> 
                            </div>
                            <select name="" id="">
                                <option value="" disabled selected hidden>Status</option>
                                <option value="">Inactive</option>
                                <option value="">On Leave</option>
                            </select>
                        </div>
                        <div className={Style.employees_table}>
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Contact</th>
                                    <th>Hire Date</th>
                                    <th>Request</th>
                                </tr>
                                <tr>
                                    <td className={Style.name}>
                                        <img src={userPhoto} alt="" />
                                        John Doe
                                    </td>
                                    <td>Chef</td>
                                    <td>
                                        09123456789
                                        <br />
                                        johndoe@gmail.com
                                    </td>
                                    <td>2015</td>
                                    <td><i class='bxr  bx-envelope'></i> </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Employees