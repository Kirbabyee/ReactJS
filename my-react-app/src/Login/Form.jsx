import Style from './index.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
    const [showPassword, isShowPassword] = useState(false);

    return(
        <div className={Style.body}>
            <div className={Style.form_container}>
                <div className={Style.form_header}>
                    <i class='bxr  bx-lock'></i>
                    <div>
                        <h3>Admin Login</h3> 
                        <p>Access your dashboard</p>
                    </div>
                </div>
                <div className={Style.form}>
                    <div className={Style.input}>
                        <label htmlFor="">Admin Email</label><br />
                        <input type="text" placeholder='Enter your email'/>
                    </div>
                    <div className={Style.input}>
                        <label htmlFor="">Admin Password</label><br />
                        <input type={showPassword ? 'text' : 'password'} placeholder='Enter your password'/>
                        <i class={showPassword ? 'bxr  bx-eye-closed' : 'bxr  bx-eye'} onClick={() => isShowPassword(!showPassword)}></i> 
                    </div>
                </div>
                <div className={Style.others}>
                    <div className={Style.remember_me}>
                        <input type="checkbox" />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <div className={Style.forgot_password}>
                        <a href="">Forgot Password?</a>
                    </div>
                </div>
                <div className={Style.login_btn}>
                    <Link to={"/Dashboard"} className={Style.link}>
                        <button>
                            <i class='bxr  bx-lock'></i>
                            Sign In to Admin Panel
                        </button>
                    </Link>
                </div>
                <div className={Style.note}>
                    <i class='bxr  bx-alert-circle'></i> 
                    <p>
                        This is a restricted  area for authorized administrators  only.
                        All login attempts are monitored and logged for security.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Form