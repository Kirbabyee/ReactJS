import Sidebar from "./Sidebar.jsx";
import Style from "./index.module.css";

function Leave_History() {
    return(
        <>
            <Sidebar leaveHistory="true" />
            <div className={Style.leave_history}>
                <div className={Style.leave_history_header}>
                    
                </div>
                <div className={Style.leave_history_body}>

                </div>
            </div>
        </>
    )
}
export default Leave_History