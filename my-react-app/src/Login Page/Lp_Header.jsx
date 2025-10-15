import Style from './Lp.module.css'; // Using module so the css will be unique depending on a particular page
import LogoNoText from '../Images/LP Logo No Text.Png'
import LogoText from '../Images/LP Logo Text.png'
import Logo from '../Images/LP Logo Transparent.png';
import { Link } from 'react-router-dom';

function Header() {

    return(
        <header className={Style.header}>
            <Link to={"/"}>
                <div className={Style.header_left_section}>
                    <img className={Style.logo_transparent} src={Logo} alt="" />
                    <img className={Style.logo} id='logo' src={LogoNoText} alt="Lugaw Pilipinas Logo" />
                    <img className={Style.logo_text} src={LogoText} alt="Lugaw Pilipinas" />
                </div>
            </Link>
        </header>
    )
}

export default Header