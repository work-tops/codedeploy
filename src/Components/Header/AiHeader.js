import React from "react";
import profile from '../../Images/employee.png'
import { Icon } from '@iconify/react';
function AiHeader() {
    return (
        <>
            <div className="ai_product_info">
                <div className="profile-desk">
                    <Icon icon="iconoir:bell-notification" className="notification_icon"/>
                    <img src={profile} alt="profile" className="aiprofile" />
                    <p className="profile-username">Hello Mike</p>
                </div>
            </div>
        </>
    )
}
export default AiHeader