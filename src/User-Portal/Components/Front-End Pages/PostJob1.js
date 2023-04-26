import React from "react";
import Menubar from "../Menubar/Menubar";
import PostAJob from "../Post/PostAJobPost";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import ProjectOwnerHeader from "../Header/ProjectOwnerHeader";
function PostJob1() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <ProjectOwnerHeader />
                </div>
                <div className="col-12">
                    <Menubar />
                </div>
                <div className="col-12">
                    <PostAJob />
                </div>
                <div className="mt-5 mb-5 col-11 gap-1 d-flex justify-content-center">
                    <div className="d-inline-block">
                        <p className="pj-pg-desc">Select a relevant category so that freelancers can find your project</p>
                        <select className="cat-drp">
                            <option>Category</option>
                        </select>
                        <select className="cat-drp">
                            <option>Sub Category</option>
                        </select>
                        <br></br>
                        <Link to="/postjob2" role="button"><button className="pj-ctn-btn">
                            Continue
                        </button>
                        </Link>
                    </div>
                    <div className="d-inline-block n-list">
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
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default PostJob1