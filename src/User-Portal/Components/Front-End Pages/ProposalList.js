import React from 'react'
import Header from '../Header/Header'
import Menubar from '../Menubar/Menubar'
import Footer from '../Footer/Footer'
import ProposalPost from '../Post/ProposalListPost'
import profile_img from "../Images/employee.png"

import { Icon } from '@iconify/react';

function ProposalList() {
    return (
        <div className='row'>
            <div className='col-12 prj-det-header'>
                <Header />
            </div>
            <div className='col-12'>
                <Menubar />
            </div>
            <div className='col-12'>
                <ProposalPost />
            </div>
            <div className='col-12'>
                <div className="proposal-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="bud-viw-prj d-flex justify-content-between">
                                <div className='bud-amt'>Budget : £ 3000 </div>
                                <div className='viw-pr'>View Project</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mb-3"><button className="loc-drp">Location <Icon icon="gridicons:dropdown" />
                        </button><button className="rating-drp">Rating <Icon icon="gridicons:dropdown" /></button></div>
                        <div className="col-6 mb-3"><p className="page-prop-list">1-10 Of 25 <Icon icon="material-symbols:chevron-left-rounded" /> <Icon icon="material-symbols:chevron-right-rounded" /></p></div>
                    </div>
                    <br></br>
                    <div>
                        <table className="frl-pro-list">
                            <tr className="list-body-div">
                                <td>
                                    <img src={profile_img} className="user-frl-profile-pic" />
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="frl-c-name">IRIE ARTS INC</p>
                                                    <p className="frl-role">Fabricator , Kitchen Designer</p>
                                                    <p className="frl-ratings"><Icon icon="ic:round-star-rate" color="#dfc92c" width="24" height="24" /> 4.5/5 (116)</p>
                                                </div>
                                                <div className="col-9">
                                                    <p className="frl-prf-dec">
                                                        Greetings,i can rank your website high on google top result pages.i can
                                                        help your site dominate your top competitors with thousands of niche
                                                        related backlinks and country trageted visitors from google organic searches
                                                        1. Increase website domain authority to 60+ and higher
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="exp-tit" >Experience</p>
                                                    <p className="exp">4 Years</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Duration</p>
                                                    <p className="exp">3 Months</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Budget</p>
                                                    <p className="exp">£ 2300</p>
                                                </div>
                                                <div className="col-3">
                                                    <p className="exp-tit" >Date</p>
                                                    <p className="exp">01/04/2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <button type="button" className="btn user-prj-view-1">View</button>
                                        <button type="button" className="btn user-prj-dd-1 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <br></br>
                            <tr className="list-body-div">
                                <td>
                                    <img src={profile_img} className="user-frl-profile-pic" />
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="frl-c-name">IRIE ARTS INC</p>
                                                    <p className="frl-role">Fabricator , Kitchen Designer</p>
                                                    <p className="frl-ratings"><Icon icon="ic:round-star-rate" color="#dfc92c" width="24" height="24" /> 4.5/5 (116)</p>
                                                </div>
                                                <div className="col-9">
                                                    <p className="frl-prf-dec">
                                                        Greetings,i can rank your website high on google top result pages.i can
                                                        help your site dominate your top competitors with thousands of niche
                                                        related backlinks and country trageted visitors from google organic searches
                                                        1. Increase website domain authority to 60+ and higher
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="exp-tit" >Experience</p>
                                                    <p className="exp">4 Years</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Duration</p>
                                                    <p className="exp">3 Months</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Budget</p>
                                                    <p className="exp">£ 2300</p>
                                                </div>
                                                <div className="col-3">
                                                    <p className="exp-tit" >Date</p>
                                                    <p className="exp">01/04/2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <button type="button" className="btn user-prj-view-1">View</button>
                                        <button type="button" className="btn user-prj-dd-1 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <br></br>
                            <tr className="list-body-div">
                                <td>
                                    <img src={profile_img} className="user-frl-profile-pic" />
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="frl-c-name">IRIE ARTS INC</p>
                                                    <p className="frl-role">Fabricator , Kitchen Designer</p>
                                                    <p className="frl-ratings"><Icon icon="ic:round-star-rate" color="#dfc92c" width="24" height="24" /> 4.5/5 (116)</p>
                                                </div>
                                                <div className="col-9">
                                                    <p className="frl-prf-dec">
                                                        Greetings,i can rank your website high on google top result pages.i can
                                                        help your site dominate your top competitors with thousands of niche
                                                        related backlinks and country trageted visitors from google organic searches
                                                        1. Increase website domain authority to 60+ and higher
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="exp-tit" >Experience</p>
                                                    <p className="exp">4 Years</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Duration</p>
                                                    <p className="exp">3 Months</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Budget</p>
                                                    <p className="exp">£ 2300</p>
                                                </div>
                                                <div className="col-3">
                                                    <p className="exp-tit" >Date</p>
                                                    <p className="exp">01/04/2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <button type="button" className="btn user-prj-view-1">View</button>
                                        <button type="button" className="btn user-prj-dd-1 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <br></br>
                            <tr className="list-body-div">
                                <td>
                                    <img src={profile_img} className="user-frl-profile-pic" />
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="frl-c-name">IRIE ARTS INC</p>
                                                    <p className="frl-role">Fabricator , Kitchen Designer</p>
                                                    <p className="frl-ratings"><Icon icon="ic:round-star-rate" color="#dfc92c" width="24" height="24" /> 4.5/5 (116)</p>
                                                </div>
                                                <div className="col-9">
                                                    <p className="frl-prf-dec">
                                                        Greetings,i can rank your website high on google top result pages.i can
                                                        help your site dominate your top competitors with thousands of niche
                                                        related backlinks and country trageted visitors from google organic searches
                                                        1. Increase website domain authority to 60+ and higher
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="exp-tit" >Experience</p>
                                                    <p className="exp">4 Years</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Duration</p>
                                                    <p className="exp">3 Months</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Budget</p>
                                                    <p className="exp">£ 2300</p>
                                                </div>
                                                <div className="col-3">
                                                    <p className="exp-tit" >Date</p>
                                                    <p className="exp">01/04/2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <button type="button" className="btn user-prj-view-1">View</button>
                                        <button type="button" className="btn user-prj-dd-1 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <br></br>
                            <tr className="list-body-div">
                                <td>
                                    <img src={profile_img} className="user-frl-profile-pic" />
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="frl-c-name">IRIE ARTS INC</p>
                                                    <p className="frl-role">Fabricator , Kitchen Designer</p>
                                                    <p className="frl-ratings"><Icon icon="ic:round-star-rate" color="#dfc92c" width="24" height="24" /> 4.5/5 (116)</p>
                                                </div>
                                                <div className="col-9">
                                                    <p className="frl-prf-dec">
                                                        Greetings,i can rank your website high on google top result pages.i can
                                                        help your site dominate your top competitors with thousands of niche
                                                        related backlinks and country trageted visitors from google organic searches
                                                        1. Increase website domain authority to 60+ and higher
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="exp-tit" >Experience</p>
                                                    <p className="exp">4 Years</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Duration</p>
                                                    <p className="exp">3 Months</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Budget</p>
                                                    <p className="exp">£ 2300</p>
                                                </div>
                                                <div className="col-3">
                                                    <p className="exp-tit" >Date</p>
                                                    <p className="exp">01/04/2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <button type="button" className="btn user-prj-view-1">View</button>
                                        <button type="button" className="btn user-prj-dd-1 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <br></br>
                            <tr className="list-body-div">
                                <td>
                                    <img src={profile_img} className="user-frl-profile-pic" />
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="frl-c-name">IRIE ARTS INC</p>
                                                    <p className="frl-role">Fabricator , Kitchen Designer</p>
                                                    <p className="frl-ratings"><Icon icon="ic:round-star-rate" color="#dfc92c" width="24" height="24" /> 4.5/5 (116)</p>
                                                </div>
                                                <div className="col-9">
                                                    <p className="frl-prf-dec">
                                                        Greetings,i can rank your website high on google top result pages.i can
                                                        help your site dominate your top competitors with thousands of niche
                                                        related backlinks and country trageted visitors from google organic searches
                                                        1. Increase website domain authority to 60+ and higher
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="exp-tit" >Experience</p>
                                                    <p className="exp">4 Years</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Duration</p>
                                                    <p className="exp">3 Months</p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="exp-tit" >Budget</p>
                                                    <p className="exp">£ 2300</p>
                                                </div>
                                                <div className="col-3">
                                                    <p className="exp-tit" >Date</p>
                                                    <p className="exp">01/04/2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <button type="button" className="btn user-prj-view-1">View</button>
                                        <button type="button" className="btn user-prj-dd-1 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <br></br>
                        </table>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <Footer />
            </div>

        </div>
    )
}
export default ProposalList