import React from "react";
import AiMenu from "../Menubar/AiMenu";
import AiHeader from "../Header/AiHeader";
function ServiceCommission() {
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
                            <div className="ms-3">
                                <p className="ai-sub-title">Commission / Service Commission</p>
                                <h4>Service Commission</h4>
                                <p className="ai-tit-desc">Here are setting for Service Commission</p>
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
                                    <p className="global-com-setting-heading">Service Commission</p>
                                    <p className="global-desc">Here are the setting for global commission</p>
                                    <p className="gct">Service Commission Type</p>
                                    <select className="cgct">
                                        <option>Choose service commission type</option>
                                        <option>%</option>
                                        <option>Fixed</option>
                                        <option>% + Fixed</option>
                                        <option>Fixed + %</option>
                                    </select>
                                    <hr></hr>
                                    <label className="label">Service Commission</label>
                                    <input id="fgc"/><button className="per-btn-dis"  disabled>%</button>
                                    <hr></hr>
                                    <label className="label">Service Commission</label>
                                    <input id="fgc"/><button className="fix-btn-dis" disabled>FIXED</button>
                                    <hr></hr>
                                    <label className="label">Service Commission</label>
                                    <input id="fgc"/><button className="per-btn-dis"  disabled>%</button>
                                    <label className="label">Second Service Commission</label>
                                    <input id="fgc"/><button className="fix-btn-dis" disabled>FIXED</button>
                                    <hr></hr>
                                    <label className="label">Service Commission</label>
                                    <input id="fgc"/><button className="fix-btn-dis" disabled>FIXED</button>
                                    <label className="label">Second Service Commission</label>
                                    <input id="fgc"/><button className="per-btn-dis"  disabled>%</button>
                                    <hr></hr>
                                    <p className="upd-titl">UPDATE EARLIER PRODUCT PRICE</p>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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
export default ServiceCommission