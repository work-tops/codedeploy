import React from "react";
import profile from '../../Images/employee.png'
function AiHeader() {
    return (
        <>
            <div className="ai_product_info">
                <div className="profile-desk">
                    <i className="ri-notification-4-line notification_icon"></i>
                    <img src={profile} alt="profile" className="aiprofile" />
                    <p className="profile-username">Hello Mike</p>
                </div>
            </div>
        </>
    )
}
export default AiHeader