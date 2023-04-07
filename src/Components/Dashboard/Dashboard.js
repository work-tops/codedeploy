import React, { useEffect, useState } from "react";
import { imgBaseUrl } from '../../Constants/Config';
import AiMenu from "../Menubar/AiMenu";

function Dashboard() {

    const [dashboardUrl, setDashboardUrl] = useState('');
    useEffect(() => {
        var _url = imgBaseUrl + 'dashboard.png';
        console.log(_url);
        setDashboardUrl(_url)
    }, [])

    return (
        <div className="">
            <div className="row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <img src={dashboardUrl} alt="dashboard" className="" />
                </div>
            </div>
        </div>
    )
}
export default Dashboard