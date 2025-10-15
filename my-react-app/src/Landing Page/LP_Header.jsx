import Style from './LP.module.css'; // Using module so the css will be unique depending on a particular page
import LogoNoText from '../Images/LP Logo No Text.Png'
import LogoText from '../Images/LP Logo Text.png'
import Logo from '../Images/LP Logo Transparent.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [openMenu, setOpenMenu] = useState(false); // Set the default value so the menus won't show

    return(
        <header className={Style.header}>
            <Link to={"/"}>
                <div className={Style.header_left_section}>
                    <img className={Style.logo_transparent} src={Logo} alt="" />
                    <img className={Style.logo} id='logo' src={LogoNoText} alt="Lugaw Pilipinas Logo" />
                    <img className={Style.logo_text} src={LogoText} alt="Lugaw Pilipinas" />
                </div>
            </Link>
            <div className={Style.header_right_section}>
                <ul className={`${Style.menu} ${openMenu ? Style.active : ''}` /* Set a className when the openMenu is true */}>
                    <li>
                        <Link to={"/Sign_In"}>
                            <a>Sign In</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <i className='bxr  bx-menu' onClick={() => setOpenMenu(!openMenu) /* Set the opposite value of the openMenu when clicked */ }></i> 
        </header>
    )
}

export default Header