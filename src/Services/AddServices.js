import React from "react";
import AiHeader from "../Components/Header/AiHeader";
import AiMenu from "../Components/Menubar/AiMenu";
import { Icon } from '@iconify/react';
import product_image from '../Images/employee.png'

function AddServices() {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div>
                        <AiHeader />
                    </div>
                    <div className="page-bg">
                        <div className="product-div">
                            <div className="Add-Product">
                                <p className="ai-title">Services / Add Services</p>
                                <p className="ai-add-title">Add Services</p>
                                <p className="ai-title-desc">Here You Can add Services to your profile</p>
                                <form>
                                    <label>Service Title</label>
                                    <input id="aipro-name" type='text' />
                                    <br></br>
                                    <span className="category">Service Category</span> <span className="service-email">Service Email</span>
                                    <br></br>
                                    <select id="aipro-category">
                                        <option>Select Option</option>
                                        <option>Marble</option>
                                        <option>Ceramic</option>
                                        <option>Dekton</option>
                                        <option>Tiles</option>
                                    </select>
                                    <select id="aipro-category">
                                        <option>Select Freelancer</option>
                                        <option>worktops@gmail.com</option>
                                        <option>worktops@yahoo.com</option>
                                        <option>worktops@yahoo.com</option>
                                        <option>worktops@gmail.com</option>
                                    </select>
                                    <label className="label">Description</label>
                                    <textarea id="aipro-description" className="ai-product-description"></textarea>
                                    <label>Service Tag</label>
                                    <input className="ai-product-tag" type='text'></input>
                                    <br></br>
                                    <br></br>
                                    <input id="aipro-checkbox1" type='checkbox' /><span className="chc-span">Shipping Requires</span>
                                    <input id="aipro-checkbox2" type='checkbox' /><span className="chc-span">Charge Taxes on this product</span>
                                    <br></br>
                                    <br></br>
                                    <span className="category">Price Type</span> <span className="service-price">Price</span>
                                    <br></br>
                                    <select id="aipro-category">
                                        <option>Select Option</option>
                                        <option>Per Hour Cost</option>
                                        <option>Fixed Price</option>
                                    </select>
                                    <input id="aipro-email" type='email' />
                                    <br></br>
                                    <br></br>
                                    <span className="category">Office Price</span> <span className="displayprice">Display Price</span>
                                    <br></br>
                                    <input id="aipro-category" type='text' />
                                    <input id="aipro-email" type='email' />
                                    <label className="label">Terms & Conditions</label>
                                    <textarea id="aipro-description" className="ai-product-description"></textarea>
                                    <br></br>
                                    <input type='button' className="create-acc-btn" value='Add Services' />
                                </form>
                            </div>

                            <div className="Add-Product-Images">
                                <span className="status-tit">Status :</span>
                                <select className="dft-act">
                                    <option>Draft</option>
                                    <option>Active</option>
                                </select>
                                <p className="ai-pro-title">Service Images</p>
                                <div className="ai-image-drag">
                                    <i class="ai-img-icon ri-image-fill"></i>
                                    <small className="chose-file">No File Chosen</small>
                                </div>
                                <img src={product_image} alt="product-img" className="attached-img_1" />
                                <br></br>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="img-upload-btn-1">Upload Images</button>
                                {' '}
                                <button className="img-upload-btn-1">Remove</button>
                                <br></br>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="img-upload-btn">Upload Images</button>
                                {/* Modal-1 */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div>
                                                <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                <p className="proadd-img-desc">to add the service images</p>
                                            </div>
                                            <div class="modal-body">
                                                <div className="upd-attachments">
                                                    <Icon className="upload-file-icon" data-bs-toggle="modal" data-bs-target="#exampleModal2" icon="fluent:folder-arrow-up-20-filled" width="90" height="90" />
                                                    <p className="ig-upldesc">Drag & Drop files here or choose file 50 MB max file size</p>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal -2 */}
                                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div>
                                                <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                <p className="proadd-img-desc">to add the service images</p>
                                            </div>
                                            <div class="modal-body">
                                                <div className="upd-attachments">
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <img src={product_image} alt="product-img" className="attached-img1" />
                                                                <i class="ri-close-line upload-img-close1"></i>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="pro-sub-title">Services Handle and Metafields</p>
                                <label>Service handle</label>
                                <input id="ai-pro-handle" type='text' />
                                <p className="pro-sub-title">Service Meta Fields</p>
                                <p className="ai-title-desc">Title tag meta field</p>
                                <input id="ai-pro-handle" type='text' />
                                <p className="ai-title-desc">Descrption tag meta field</p>
                                <input id="ai-pro-handle" type='text' />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default AddServices