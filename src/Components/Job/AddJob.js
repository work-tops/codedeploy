import React from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";


function AddJob() {
    return (
        <>
            <div className="add-seller-div row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div>
                        <AiHeader />
                        <div className="content-div">
                            <div>
                                <p className="ai-title">post a job / add job</p>
                                <p className="ai-add-title">Add Job</p>
                                <p className="ai-title-desc">Here you can add jobs listed in your store</p>
                                <br></br>
                                <form className="add-seller-form">
                                    <span className="category">Category</span> <span className="seller-email">Sub Category</span>
                                    <br></br>
                                    <select className="select-category">
                                        <option></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                    <select className="select-category">
                                        <option></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                    <br></br>
                                    <label>Project Title</label>
                                    <input id="aipro-barcode" type='text' />
                                    <label>Description</label>
                                    <textarea id="aipro-description"></textarea>
                                    <label>Upload Samples</label>
                                    <div className="add_job-attachments">
                                        <span className="drop-files-ph">Drop file here</span>
                                        <span className="drop-files-ph">or Browse to add attachments</span>
                                    </div>
                                    <span className="category">Budget Type</span> <span className="job-currency">Currency</span>
                                    <br></br>
                                    <select className="select-budget">
                                        <option>Fixed Price   :</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                    <select className="select-budget">
                                        <option>£ GBP :</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                    <br></br>
                                    <label className="label">Budget</label>
                                    <input id="postcode" placeholder="£ 0" type="text"/>
                                    <br></br>
                                    <label>Project Locations</label>
                                    <input id="prj-locations" placeholder="Geo Locations" type='text' />
                                    <br></br>
                                    <span className="category">Post Code</span> <span className="start-date-job">Starting Date <span className="optional">(optional)</span></span>
                                    <br></br>
                                    <input id="postcode" type='text' />
                                    <input id="date-to-job" type='text' />
                                    <br></br>
                                    <label>Project Visibility</label>
                                    <div className="prj-radio-div">
                                        <input id="radio-btn" name="public" type="radio" /><i class="fa-solid fa-users"></i> <span className="radio-opt">  Public <span className="optional">(All freelancers can view the project post and send proposals)</span></span>
                                    </div>
                                    <div className="prj-radio-div">
                                        <input id="radio-btn" name="public" type="radio" /><i class="fa-solid fa-users"></i> <span className="radio-opt"> Public <span className="optional">(Only freelancers that you specifically invite can view the <p className="opt-span">project post and send proposal)</p></span></span>
                                    </div>
                                    <span className="category">Project Duration Time</span> <span className="job-expiry-date">Expiry Date</span>
                                    <br></br>
                                    <input id="postcode" type='text' />
                                    <input id="date-to-job" type='text' />
                                    <br></br>
                                    <button className="create-acc-btn">Post a Job</button>
                                    <button className="cancel-btn">Cancel</button>
                                </form>
                            </div>
                            <div className="freelance-form-div">
                                <form className="customer_details-form">
                                    <h5 className="form-title">Customer Details</h5>
                                    <label className="label">Email ID :</label>
                                    <input id="cust-ip-box" type='email' />
                                    <label className="label">Name :</label>
                                    <input id="cust-ip-box" type='text' />
                                    <label className="label">Phone Number :</label>
                                    <input id="cust-ip-box" type='text' />
                                    <label className="label">Postcode :</label>
                                    <input id="cust-ip-box" type='text' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddJob