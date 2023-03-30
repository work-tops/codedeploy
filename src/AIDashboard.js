import React from "react";
import AiProductDetails from "./Components/AiProductDetails";
import AiMenu from "./Components/AiMenu";
import './CSS/Aidashboard.css'
function AiDashboard(){
return(
    <div className="aidashboard">
    <div className="ai_menu">
    <AiMenu/>
    </div>
    <div className="ai_product_info">
    <AiProductDetails/>
    </div>
    </div>
)
}
export default AiDashboard