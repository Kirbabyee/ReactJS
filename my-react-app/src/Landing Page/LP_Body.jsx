import Style from './LP.module.css'
import Background from '../Images/LP No Text.jpg'

function Body() {
    return(
        <div className={Style.body}>
            <div className={Style.lp_background}>
                <img src={Background} alt=""/>
            </div>
            <div className={Style.lp_tagline}>
                <p>
                    “Lugaw Pilipinas — Ang lugaw ng Pilipino. Mainit sa tiyan, mainit sa puso. Sa bawat hapag, sa oras ng pangangailangan, at sa kahit anong panahon, nandito ang lugaw na tunay na maaasahan.”
                </p>
            </div>
        </div>
    )
}

export default Body