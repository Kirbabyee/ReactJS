import Style from './FP.module.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Body(){
    const [showPassword, isShowPassword] = useState(false);

    return(
        <div className={Style.NewPassword_Body}>
            <div className={Style.NewPassword_Form}>
                <i class='bxr  bx-envelope'  ></i> 
                <p>Forgot Password</p>
                <input type={showPassword ? 'text' : 'password'} placeholder='New Password'/>
                <input type={showPassword ? 'text' : 'password'} placeholder='Confirm New Password'/>
                <div className={Style.NewPassword_ShowPassword}>
                    <input type="checkbox" onChange={() => isShowPassword(!showPassword)}/>
                    <label htmlFor="">Show Password</label>
                </div>
                <button>Save</button>
                <Link to={"/Sign_In"}>
                    <a>Sign In</a>
                </Link>
            </div>
        </div>
    )
}

export default Body