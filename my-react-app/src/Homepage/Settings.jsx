import Sidebar from "./Sidebar.jsx";
import Style from "./index.module.css";
import userPhoto from "../Images/user.jpg";
import { useState } from "react";

function Settings() {
    const [showPassword, isShowPassword] = useState(false);

    return(
        <>
            <Sidebar settings="true"/>
            <div className={Style.settings}>
                <div className={Style.settings_header}>
                    <h3>Settings</h3>
                    <p>Manage your account settings and preferences</p>
                </div>
                <div className={Style.settings_body}>
                    <div className={Style.profile_information}>
                        <h3>Profile Information</h3>
                        <div className={Style.profile_picture}>
                            <img src={userPhoto} alt="" />
                            <div className={Style.profile_picture_details}>
                                <h3>John Doe</h3>
                                <p className={Style.position}>Manager</p>
                                <button>
                                    <i class='bxr  bx-camera'></i> 
                                    Change Photo
                                </button>
                            </div>
                        </div>
                        <hr />
                        <div className={Style.profile_details}>
                            <div>
                                <label htmlFor="">First Name</label>
                                <input type="text" value={"John"}/>
                            </div>
                            <div>
                                <label htmlFor="">Last Name</label>
                                <input type="text" value={"Doe"}/>
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" value={"johndoe@gmail.com"}/>
                            </div>
                            <div>
                                <label htmlFor="">Phone Number</label>
                                <input type="text" value={"09123456798"}/>
                            </div>
                            <div>
                                <label htmlFor="">Position</label>
                                <input type="text" value={"Manager"}/>
                            </div>
                            <div>
                                <label htmlFor="">Department</label>
                                <input type="text" value={"Human Resource"}/>
                            </div>
                        </div>
                        <button className={Style.save_changes_btn}>
                            <i class='bxr  bx-save'></i>
                            Save Changes 
                        </button>
                    </div>
                    <hr />
                    <div className={Style.change_password}>
                        <h3>Change Password</h3>
                        <div className={Style.input_container}>
                            <div className={`${Style.input} ${Style.current_password}`}>
                                <label htmlFor="">Current Password</label>
                                <input type={showPassword ? "text" : "password"} placeholder="Enter current password"/>
                            </div>
                            <div className={`${Style.input} ${Style.new_password}`}>
                                <label htmlFor="">New Password</label>
                                <input type={showPassword ? "text" : "password"} placeholder="Enter new password"/>
                            </div>
                            <div className={`${Style.input} ${Style.confirm_password}`}>
                                <label htmlFor="">Confirm New Password</label>
                                <input type={showPassword ? "text" : "password"} placeholder="Enter confirm password"/>
                            </div>
                            <div className={Style.show_password}>
                                <input type="checkbox" onClick={() => isShowPassword(!showPassword)}/>
                                <label htmlFor="">Show Password</label>
                            </div>
                        </div>
                        <div className={Style.password_tooltip}>
                            <p><i class='bxr  bx-shield'></i> Password Requirements: </p>
                            <ul>
                                <li>At least 8 characters long</li>
                                <li>Contains uppercase and lowercase letters</li>
                                <li>Contains at least one number</li>
                            </ul>
                        </div>
                        <button className={Style.update_password_btn}>
                            <i class='bxr  bx-save'></i>
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings