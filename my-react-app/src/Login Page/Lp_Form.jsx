import { Link } from 'react-router-dom';
import Style from './Lp.module.css'
import { useState } from 'react';

function Form() {
    const [showPassword, isShowPassword] = useState(false);
    
    return(
        <div className={Style.body}>
            <div className={Style.form}>
                <i class='bxr  bx-user'  ></i> 
                <h5>Employeee Login</h5>
                <input type="text" placeholder='Email'/>
                <div className={Style.password}>
                    <input type={!showPassword ? 'password' : 'text' /* Manipulate the input type using the value of showPassword */} id='password-input' placeholder='Password'/>
                    <i class={!showPassword ? 'bxr  bx-eye-closed' : 'bxr bx-eye' /* Manipulate what icon will be shown using the value of showPassword */} onClick={() => isShowPassword(!showPassword) /* Set the opposite value of showPassword when clicked */}></i> 
                </div>
                <Link to={"/Home/Dashboard"}>
                    <button>Sign In</button>
                </Link>
                <Link to={"/Forgot_Password"}>
                    <a>Forgot Password?</a>
                </Link>
            </div>
        </div>
    )
}

export default Form