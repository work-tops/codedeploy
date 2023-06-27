// import React from "react";
// import AiMenu from "../Menubar/AiMenu";
// import AiHeader from "../Header/AiHeader";
// function AddStaff() {
//     return (
//         <>
//             <div className="row">
//                 <div className="col-2">
//                     <AiMenu />
//                 </div>
//                 <div className="col-10">
//                     <div className="row">
//                         <div className="col-12">
//                             <AiHeader />
//                         </div>
//                         <div className="col-12 page-bg">
//                             <div className="ms-3">
//                                 <p className="ai-sub-title">Dashboard / My Staff</p>
//                                 <h4>My Staff</h4>
//                                 <p className="ai-tit-desc">Here are the staff Members on your shop</p>
//                             </div>
//                             <br></br>
//                             <div className="global-com-setting-div">
//                                 <p className="ms-3 pt-2">Staff Details</p>
//                                 <p className="add-staff-des">Add details of staff here</p>
//                                 <form>
//                                     <label className="label">First Name</label>
//                                     <input type="text" id="staff-ip-box" required />
//                                     <br></br>
//                                     <label className="label">Last Name</label>
//                                     <input type="text" id="staff-ip-box" required />
//                                     <br></br>
//                                     <label className="label">Email Id</label>
//                                     <input type="email" id="staff-ip-box" required />
//                                     <br></br>
//                                     <label className="label">Password</label>
//                                     <input type="password" id="staff-ip-box" required />
//                                     <br></br>
//                                     <label className="label">Confirm Password</label>
//                                     <input type="text" id="staff-ip-box" required />
//                                 </form>
//                                 <p className="note-defi"><span className="not-titile-staff">Note :</span> This Staff will be notified by email containing login details.</p>
//                             </div>
//                             <br></br>
//                             <div className="global-com-setting-div">
//                                 <p className="ms-3 pt-2">Permission</p>
//                                 <p className="add-staff-des">Add here permission for staff</p>
//                                 <input type="checkbox" className="ms-3" /><span>Select All</span>
//                                 <br></br>
//                                 <br></br>
//                                 <div className="row">
//                                     <div className="col-4">
//                                         <table className="ms-5">
//                                             <tr>
//                                                 <th><input type="checkbox" />Dashboard</th>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                     <div className="col-8">
//                                         <table className="ms-5">
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                 </div>
//                                 <br></br>
//                                 <button className="create-acc-btn">Save Changes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default AddStaff