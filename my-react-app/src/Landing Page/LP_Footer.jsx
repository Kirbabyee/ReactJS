import Style from './LP.module.css';

function Footer() {
    return(
        <footer className={Style.footer_middle_section}>
            <div className={Style.footer_contact}>
                <i className='bxr  bx-phone'  ></i> 
                +63 9123456789
                +63 9000202141
            </div>
            <div className={Style.footer_location}>
                <i className='bxr  bx-location'  ></i> 
                Harmony Hills 1, Muzon San Jose Del Monte
            </div>
        </footer>
    )
}

export default Footer