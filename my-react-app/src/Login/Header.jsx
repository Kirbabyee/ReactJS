import Style from './index.module.css';
import LogoTransparent from '../Images/LP Logo Transparent.png';
import LogoNoText from '../Images/LP Logo No Text.png';
import LogoText from '../Images/LP Logo Text.png';

function Header() {

    return(
        <header>
            <div className={Style.right_section}>
                <img src={LogoTransparent} alt="" className={Style.logo_transparent}/>
                <img src={LogoNoText} alt="" className={Style.logo_no_text} />
                <img src={LogoText} alt="" className={Style.logo_text} />
            </div>
        </header>
    )
}

export default Header