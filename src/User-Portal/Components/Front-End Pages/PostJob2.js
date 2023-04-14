import React from "react";
import Header from "../Header/Header";
import Menubar from "../Menubar/Menubar";
import PostAJob from "../Post/PostAJobPost";
import Footer from "../Footer/Footer";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
function PostJob2() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-12">
                    <Menubar />
                </div>
                <div className="col-12">
                    <PostAJob />
                </div>
                <div className="col-12">
                    <div className="row m-4">
                        <div className="col-7">
                            <p className="pj-pg-desc">Select a relevant category so that freelancers can find your project</p>
                            <select className="cat-drp">
                                <option>Kitchen</option>
                            </select>
                            <select className="cat-drp">
                                <option>Worktops</option>
                            </select>
                            <br></br>
                            <label className="label1">
                                PROJECT TITLE:
                            </label>
                            <input id="usr-prj-tit" placeholder="e.g I Want to Make a New Kitchen" />
                            <label className="label1">
                                Project Description:
                            </label>
                            <textarea placeholder="Need a Fabricator who's Specialize in this field" className="usr-prj-dec-box"></textarea>
                            <p className="usr-des-nte">Be Descriptive,Projects with good descriptions are more popular with our freelancers</p>
                            <label className="label1">
                                Upload sample and other helpful (Optional)
                            </label>
                            <div className="add_job-attachments-1">
                                <span className="drop-files-ph text-center">Drop file here</span>
                                <span className="drop-files-ph">or <span className="br-cl">Browse</span> to add attachments</span>
                            </div>
                            <span className="category-1">Budget Type</span> <span className="job-currency-1">Currency</span>
                            <br></br>
                            <select className="select-category-1">
                                <option value="">Select</option>
                                <option value="Fixed Price">Fixed Price   :</option>
                                <option value="No Idea">No Idea</option>
                                <option value="No Range">No Range</option>
                            </select>
                            <select className="select-category-1">
                                <option value="">Select</option>
                                <option value="£ GBP">£ GBP :</option>
                                <option value="£ EUR">£ EUR</option>
                            </select>
                            <label className="label1">Budget</label>
                            <input id="postcode-1" placeholder="£ 0" type="number" />
                            <br></br>
                            <label className="label1">Project Location</label>
                            <input id="aipro-barcode-1" placeholder="Geo Locations" type='text' />
                            <br></br>
                            <span className="category-1">Post Code</span> <span className="start-date-job-1">Starting Date <span className="optional">(optional)</span></span>
                            <br></br>
                            <input id="postcode-1" type='text' />
                            <input id="postcode-1" type='date' />
                            <br></br>
                            <label className="label1">Project Visibility</label>
                            <br></br>
                            <div className="prj-radio-div">
                                <input id="radio-btn" name="visibility" type="radio" /><Icon width="24" height="24" icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All freelancers can view the project post and send proposals)</span></span>
                            </div>
                            <div className="prj-radio-div">
                                <input id="radio-btn" name="visibility" type="radio" /><Icon icon="ph:lock-simple-fill" width="24" height="24" /> <span className="radio-opt"> Public <span className="optional">(Only freelancers that you specifically invite can view the <p className="opt-span">project post and send proposal)</p></span></span>
                            </div>
                            <span className="category-1">Project Duration Time</span> <span className="job-expiry-date-1">Expiry Date</span>
                            <br></br>
                            <input id="postcode-1" type='text' />
                            <input id="postcode-1" type='date' />
                            <br></br>
                            <Link to="/listjobs" role="button">
                                <button type="submit" className="usr-create-acc-btn">Post a Project</button>
                            </Link>
                        </div>
                        <div className="col-5">
                            <div className="n-ip-bg">
                                <div className="n-list">
                                    <p className="n-tit">NOTE</p>
                                    <ul>
                                        <li className="nte-list">
                                            Describe your project in as much detail as you can
                                            comfortably reveal - it will increase the quality of
                                            proposals you receive and shorten the selection
                                            process.
                                        </li>
                                        <li className="nte-list">
                                            Upload as much relevant information (pictures,
                                            documents, specifications, links, etc) as possible to get
                                            a realistic quote.
                                        </li>
                                        <li className="nte-list">
                                            Match the experience level to your requirements -
                                            remember, you're looking for the best you can afford,
                                            not the cheapest you can get.
                                        </li>
                                        <li className="nte-list">
                                            For more helpful tips, see our guide Post a project
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default PostJob2