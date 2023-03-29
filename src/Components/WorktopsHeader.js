import React from "react";
import '../CSS/wtheader.css'
import worktops_logo from '../Images/worktops-logo.png'
function WorktopsHeader() {
    return (
        <div className="wt-header">
            <div className="wt-logo">
                <img src={worktops_logo} />
            </div>
            <div className="more-options">
                <button>Seller Dashboard</button>
                <button><i class="fa-solid fa-house"></i></button>
                <button><i class="fa-solid fa-bell"></i></button>
                <button>FAQ</button>
                <button>Need Help ?</button>
            </div>
        </div>
    )
}
export default WorktopsHeader