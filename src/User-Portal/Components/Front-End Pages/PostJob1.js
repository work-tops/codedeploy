import React from "react";
import Header from "../Header/Header";
import Menubar from "../Menubar/Menubar";
import PostAJob from "../Post/PostAJobPost";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function PostJob1() {
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
export default PostJob1