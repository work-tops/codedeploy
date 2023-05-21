import React from "react";
import coverimg from '../../Projectimages/7.jpg'
import { Button, Container, Dropdown, Form } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import profile from '../../Projectimages/Handyman.jpg'
import { Link } from "react-router-dom";
import CardDropdown from "../../../TemplateAssets/common/CardDropdown";
import { Icon } from "@iconify/react";

function FreelancerEditProfile() {
    return (
        <>

            <div className="mb-4">
                <NavbarStandard />
            </div>
            <Container>
                <div className="row ">
                    <div className="col-12 mt-5">
                        <div className="card mb-3 btn-reveal-trigger">
                            <div className="card-header position-relative min-vh-25 mb-8">
                                <div className="cover-image">
                                    <div className="bg-holder rounded-3 rounded-bottom-0" style={{ backgroundImage: `url(${coverimg})` }}></div>
                                    <input className="d-none" id="upload-cover-image" type="file" /><label className="cover-image-file-input" for="upload-cover-image"><span className="fas fa-camera me-2"></span><span>Change cover photo</span></label>
                                </div>
                                <div>
                                    <div className="avatar avatar-5xl avatar-profile shadow-sm img-thumbnail rounded-circle">
                                        <div className="h-100 w-100 rounded-circle overflow-hidden position-relative"> <img src={profile} width="200" alt="" data-dz-thumbnail="data-dz-thumbnail" /><input className="d-none" id="profile-image" type="file" /><label className="mb-0 overlay-icon d-flex flex-center" for="profile-image"><span className="bg-holder overlay overlay-0"></span><span className="z-index-1 text-white dark__text-white text-center fs--1">
                                            <span className="fas fa-camera"></span><span className="d-block">Update</span></span></label></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/*  */}
                <div className="row g-0">
                    <div className="col-lg-8 mb-3 pe-lg-2">
                        <div className="card mb-3">
                            <div className="card-header">
                                <h5 className="mb-0">Profile Settings</h5>
                            </div>
                            <div className="card-body bg-light">
                                <form className="row g-3">
                                    <div className="col-lg-6"> <label className="form-label" for="first-name">First Name</label><input className="form-control" type="text" value="Peter" /></div>
                                    <div className="col-lg-6"> <label className="form-label" for="last-name">Last Name</label><input className="form-control" type="text" value="Leverkus" /></div>
                                    <div className="col-lg-6"> <label className="form-label" for="email1">Email</label><input className="form-control" type="text" value="petergms@gmail.com" /></div>
                                    <div className="col-lg-6"> <label className="form-label" for="email2">Phone</label><input className="form-control" type="text" value="+44 211 799" /></div>
                                    <div className="col-lg-12"> <label className="form-label" for="intro">Intro</label><textarea className="form-control" name="intro" cols="30" rows="13">
                                        Milton Finger (born February 8, 1914), better known as Peter Leverkus, was an UK comic strip, comic book, film, and television writer who co-created the DC Comics superhero character Batman (along with Bob Kane).

                                        A young, promising writer and part-time shoe dealer Finger, joined Kane's fledgling studio in 1938. Despite his significant (and often iconic) contributions as an imaginative writer, visionary mythos/world builder, and illustration creator, Finger was frequently reduced to ghostwriter status on a number of comics, including Batman and Green Lantern (Original Version).

                                        It’s great that we live in an age where we can share so much with technology but I’m but I’m ready for the next phase of my career, with a healthy balance between the virtual world and a workplace where I help others face-to-face.

                                        There’s always something new to learn, especially in IT-related fields. People like working with me because I can explain technology to everyone, from staff to executives who need me to tie together the details and the big picture. I can also implement the technologies that successful projects need.
                                    </textarea></div>
                                    <div className="col-12 d-flex justify-content-end"><button className="btn btn-primary" type="submit">Update </button></div>
                                </form>
                            </div>
                        </div>
                        {/*  */}
                        <div className="card mb-3 mb-lg-3">
                            <div className="card-header">
                                <h5 className="mb-0">Bussiness Information</h5>
                            </div>
                            <div className="card-body bg-light"><a className="mb-4 d-block d-flex align-items-center" href="#education-form" data-bs-toggle="collapse" aria-expanded="false" aria-controls="education-form"><span className="circle-dashed">
                                {/* <svg className="svg-inline--fa fa-plus fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg> */}
                                <span className="fas fa-plus"></span></span><span className="ms-3">Edit Your Bussiness Information</span></a>
                                <div className="collapse" id="education-form">
                                    <form className="row">
                                        <div className="col-3 mb-3 text-lg-end"><label className="form-label me-2" for="school" >Bussiness Name:</label></div>
                                        <div className="col-9 col-sm-7 mb-3"> <input className="form-control form-control-sm" value="Worktops" type="text" /></div>
                                        <div className="col-3 mb-3 text-lg-end"><label className="form-label me-2" for="degree" >Bussiness Email:</label></div>
                                        <div className="col-9 col-sm-7 mb-3"> <input className="form-control form-control-sm" value="testworktops@gmail.com" type="email" /></div>
                                        <div className="col-3 mb-3 text-lg-end"><label className="form-label me-2" for="field" >Phone No:</label></div>
                                        <div className="col-9 col-sm-7 mb-3"> <input className="form-control form-control-sm" value="+012-345-67890" type="text" /></div>
                                        <div className="col-3 text-lg-end"><label className="form-label me-2" for="edu-form3" >Bussiness Address:	 </label></div>
                                        <div className="col-9 col-sm-7 mb-3">
                                            <textarea className="form-control" id="intro" name="intro" cols="30" rows="5" >
                                                1 De La Warr Way, Cambridge, CB23 6DX
                                            </textarea></div>
                                        <div className="col-3 text-lg-end"><label className="form-label me-2" for="edu-to" >You Operate as: </label></div>
                                        <div className="col-9 col-sm-7 mb-3">
                                            <select className="form-control form-control-sm">
                                                <option >Self-employed / Sole Trader</option>
                                                <option >Limited Company</option>
                                                <option >Ordinary Partnership</option>
                                                <option >Limited Partnership</option>
                                            </select>
                                        </div>
                                        <div className="col-3 text-lg-end"><label className="form-label me-2" for="edu-to" >No.of Employee :</label></div>
                                        <div className="col-9 col-sm-7 mb-3">
                                            <select className="form-control form-control-sm">
                                                <option>Myself Only</option>
                                                <option>2-5</option>
                                                <option>6-10 </option>
                                                <option>10+</option>
                                            </select>
                                        </div>
                                        <div className="col-9 col-sm-7 offset-3"><button className="btn btn-primary" type="button">Save</button></div>
                                    </form>
                                    <div className="border-dashed-bottom my-3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-header d-flex justify-content-between">
                                <h5 className="mb-0">Experiences</h5>
                                <><Icon icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" color="#df2020" /></>
                            </div>
                            <div className="card-body bg-light"><a className="mb-4 d-block d-flex align-items-center collapsed" href="#experience-form1" data-bs-toggle="collapse" aria-expanded="false" aria-controls="experience-form1"><span className="circle-dashed">
                                <span className="fas fa-plus"></span></span><span className="ms-3">Add new experience</span></a>
                                <div className="collapse" id="experience-form1" style={{}}>
                                    <form className="row">
                                        <div className="col-3 mb-3 text-lg-end"><label className="form-label me-2 text-justify" for="company">Company</label></div>
                                        <div className="col-9 col-sm-7 mb-3"> <input className="form-control form-control-sm" id="company" type="text" /></div>
                                        <div className="col-3 mb-3 text-lg-end"><label className="form-label me-2 text-justify" for="position">Position</label></div>
                                        <div className="col-9 col-sm-7 mb-3"> <input className="form-control form-control-sm" id="position" type="text" /></div>
                                        <div className="col-3 mb-3 text-lg-end"><label className="form-label me-2 text-justify" for="city">City </label></div>
                                        <div className="col-9 col-sm-7 mb-3"> <input className="form-control form-control-sm" id="city" type="text" /></div>
                                        <div className="col-3 mb-3 text-lg-end"><label className="form-label me-2 text-justify" >Experience(In Years)</label></div>
                                        <div className="col-9 col-sm-7 mb-3"><input className="form-control form-control-sm" type="number" /></div>

                                        <div className="col-9 col-sm-7 offset-3"><button className="btn btn-primary" type="button">Save</button></div>
                                    </form>
                                    <div className="border-dashed-bottom my-4"></div>
                                </div>
                                <div class="d-flex">
                                    {/* <a > 
                                <img class="img-fluid" src="../../assets/img/logos/g.png" alt="" width="56" /></a> */}
                                    <div class="flex-1 position-relative ps-3">
                                        <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                name="remember"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">
                                                <h6 class="fs-0 mb-0">Fabricator<span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified"></span></h6>
                                                <p class="mb-1"> <a >Freelancer</a></p>
                                                <p class="text-1000 mb-0">4 Years</p>
                                                <p class="text-1000 mb-0">Cambridge, UK</p>
                                                <div class="border-bottom border-dashed my-3"></div>
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                </div>
                                <div class="d-flex"><a > <img class="img-fluid" src="../../assets/img/logos/apple.png" alt="" width="56" /></a>
                                    <div class="flex-1 position-relative ps-3">
                                        <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                name="remember"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">
                                                <h6 className="fs-0 mb-0">Kitchen Designer
                                                    <span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified">
                                                    </span></h6>
                                                <p className="mb-1"> <a >Worktops</a></p>
                                                <p className="text-1000 mb-0">4 Years</p>
                                                <p className="text-1000 mb-0">Cambridge, UK</p>
                                                <div className="border-bottom border-dashed my-3"></div>
                                            </Form.Check.Label>
                                        </Form.Check>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/* Followers */}
                        <div class="card mb-3 mt-3">
                            <div class="card-header bg-light">
                                <div class="row align-items-center">
                                    <div class="col d-flex justify-content-between">
                                        <h5 class="mb-0" id="followers">Followers <span class="d-none d-sm-inline-block">(4)</span></h5>
                                        <button className="btn btn-falcon-danger d-block">Remove Followers</button>
                                    </div>
                                    {/* Search */}
                                </div>
                            </div>
                            <div class="card-body bg-light px-1 py-0">
                                <div class="row g-0 text-center fs--1">
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <div>
                                                <img width="75px" height="70px" className="rounded-circle mb-3" src={profile} alt="" />
                                            </div>
                                            <Form.Check.Label className="mb-0 text-700">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Emilia Clarke
                                            </Form.Check.Label>

                                            <p class="fs--2 mb-1"><a class="text-700" >Kitchen Designer</a></p>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <div>
                                                <img width="75px" height="70px" className="rounded-circle mb-3" src={profile} alt="" />
                                            </div>
                                            <Form.Check.Label className="mb-0 text-700">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Kit Harington
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Plumber</a></p>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <div>
                                                <img width="75px" height="70px" className="rounded-circle mb-3" src={profile} alt="" />
                                            </div>
                                            <Form.Check.Label className="mb-0 text-700">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <div>
                                                <img width="75px" height="70px" className="rounded-circle mb-3" src={profile} alt="" />
                                            </div>
                                            <Form.Check.Label className="mb-0 text-700">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Peter Dinklage
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Worktop Installer</a></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* Followers */}
                        {/*  */}
                        <div class="card mb-lg-3">
                            <div class="card-header d-flex justify-content-between bg-light">
                                <h5 class="mb-0">Photos</h5>
                                <CardDropdown>
                                    <Dropdown.Item className="text-success d-block">
                                        Add
                                    </Dropdown.Item>
                                    <Dropdown.Item className="text-danger d-block">
                                        Remove
                                    </Dropdown.Item>
                                </CardDropdown>

                            </div>
                            <div class="card-body overflow-hidden">
                                <div class="row g-0">
                                    <div class="col-6 p-1"><input className="form-check-input" type="checkbox" /><a class="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div class="col-6 p-1"><input className="form-check-input" type="checkbox" /><a class="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div class="col-4 p-1"><input className="form-check-input" type="checkbox" /><a class="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div class="col-4 p-1"><input className="form-check-input" type="checkbox" /><a class="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div class="col-4 p-1"><input className="form-check-input" type="checkbox" /><a class="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 mb-3 ps-lg-2">
                        <div className="sticky-sidebar">

                            <div className="card mb-3">
                                <div className="card-header">
                                    <h5 className="mb-0">Change Password</h5>
                                </div>
                                <div className="card-body bg-light">
                                    <form>
                                        <div className="mb-3"><label className="form-label" for="old-password">Old Password<span className="text-danger ms-1">*</span></label><input className="form-control" id="old-password" type="password" /></div>
                                        <div className="mb-3"><label className="form-label" for="new-password">New Password<span className="text-danger ms-1">*</span></label><input className="form-control" id="new-password" type="password" /></div>
                                        <div className="mb-3"><label className="form-label" for="confirm-password">Confirm Password<span className="text-danger ms-1">*</span></label><input className="form-control" id="confirm-password" type="password" /></div><button className="btn btn-primary d-block w-100" type="submit">Update Password </button>
                                    </form>
                                </div>
                            </div>
                            <Button as={Link} to="/FreelancerProfile" className="btn w-100  btn-falcon-primary d-block">Back</Button>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}
export default FreelancerEditProfile