import React from "react";
import AiMenu from "../Menubar/AiMenu";
import AiHeader from "../Header/AiHeader";

function CategoryCommission() {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-12">
                            <AiHeader />
                        </div>
                        <div className="col-12 page-bg">
                            <div>
                                <p className="ms-3 ai-sub-title">Commission / Category Commission</p>
                                <h4  className="ms-3">Category Commission</h4>
                                <p className="ms-3 ai-tit-desc">Here are setting for Category Commission</p>
                                <div className="imp-note">
                                    <p className="not-tit">Note:</p>
                                    <ul type="none">
                                        <li id="note-list">% - In this type of commission,the
                                            percentage amount will be deducted from the base price of the product.</li>
                                        <li id="note-list">
                                            Fixed -In this type of commission ,
                                            the fixed amount will be deducted from the base price.
                                        </li>
                                        <li id="note-list">% + Fixed - In this type of commission ,
                                            first the percentage amount will be deducted from the base price of the product
                                            and then a fixed amount will be deducted from the remaining amount.
                                        </li>
                                        <li id="note-list">
                                            Fixed + % - In this type of commission , first a fixed amount will be deducted from the base price
                                            and then the percentage amount will be deducted from the remaining price.
                                        </li>
                                    </ul>
                                </div>
                                <div className="global-com-setting-div">
                                    <p className="global-com-setting-heading">Category Commission</p>
                                    <p className="global-desc">Here are the setting for category commission</p>
                                    <span className="category">Select Category Type</span> 
                                    <span className="category-service">Select Product Category</span> 
                                    <span className="category-service-1">Select Service Category</span>
                                    <br></br>
                                    <select id="aipro-service-comm">
                                        <option>Choose the Option</option>
                                        <option>Products</option>
                                        <option>Services</option>
                                    </select>
                                    <select id="aipro-service-comm">
                                        <option>Choose the Option</option>
                                        <option>Granite</option>
                                        <option>Marble</option>
                                        <option>Quartz</option>
                                        <option>Tiles</option>
                                        <option>Quartzite</option>
                                    </select>
                                    <select id="aipro-service-comm">
                                        <option>Choose the Option</option>
                                        <option>Cleaning</option>
                                        <option>Cabinets </option>
                                        <option>fixing</option>
                                        <option> Worktops  Installation</option>
                                        <option>Loft Installation</option>
                                        <option>Solar Panels Installation</option>
                                        <option>Electrical Help</option>
                                    </select>
                                    <br></br>
                                    <br></br>
                                    <p className="gct">Category Commission Type</p>
                                    <select className="cgct">
                                        <option>Choose category commission type</option>
                                        <option>%</option>
                                        <option>Fixed</option>
                                        <option>% + Fixed</option>
                                        <option>Fixed + %</option>
                                    </select>
                                    <hr></hr>
                                    <label className="label">Category Commission</label>
                                    <input id="fgc" /><button className="per-btn-dis" disabled>%</button>
                                    <hr></hr>
                                    <label className="label">Category Commission</label>
                                    <input id="fgc" /><button className="fix-btn-dis" disabled>FIXED</button>
                                    <hr></hr>
                                    <label className="label">Category Commission</label>
                                    <input id="fgc" /><button className="per-btn-dis" disabled>%</button>
                                    <label className="label">Second Category Commission</label>
                                    <input id="fgc" /><button className="fix-btn-dis" disabled>FIXED</button>
                                    <hr></hr>
                                    <label className="label">Category Commission</label>
                                    <input id="fgc" /><button className="fix-btn-dis" disabled>FIXED</button>
                                    <label className="label">Second Category Commission</label>
                                    <input id="fgc" /><button className="per-btn-dis" disabled>%</button>
                                    <hr></hr>
                                    <p className="upd-titl">UPDATE EARLIER PRODUCT PRICE</p>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <br></br>
                                        <p className="switch-des">If you enable this option , all the prices of exisiting products will change according to the given commission value</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoryCommission