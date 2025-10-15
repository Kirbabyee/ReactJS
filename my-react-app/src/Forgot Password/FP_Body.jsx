import Style from './FP.module.css';
import {Link} from 'react-router-dom';

function Body() {
    return(
        <div className={Style.body}>
            <div className={Style.form}>
                <i class='bxr  bx-envelope'  ></i> 
                <p>Forgot Password</p>
                <input type="text" className={Style.email_input} placeholder='Email'/>
                <Link to={"/New_Password"}>
                    <button>Send Verification</button>
                </Link>
                <Link to={"/Sign_In"}>
                    <a>Sign In</a>
                </Link>
            </div>
        </div>
        
    )
}

export default Body