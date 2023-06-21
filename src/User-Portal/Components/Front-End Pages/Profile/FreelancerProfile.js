import React from "react";
import coverimg from '../../Projectimages/7.jpg'
import profile from '../../Projectimages/Handyman.jpg'
import { Col, Container, Row, Card, Table, Dropdown, Button } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { Link } from "react-router-dom";
import Chat from "../Chat";

function FreelancerProfile() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-4">
                    <NavbarStandard />
                </Col>
            </Row>
            <Container>
                <div className="card mt-5 mb-3">
                    <div className="card-header position-relative min-vh-25 mb-7">
                        <div className="bg-holder rounded-3 rounded-bottom-0" style={{ backgroundImage: `url(${coverimg})` }}></div>

                        <div className="avatar avatar-5xl avatar-profile shadow-sm img-thumbnail  rounded-circle">
                            <div className="h-100 w-100 rounded-circle overflow-hidden position-relative"> <img src={profile} width="200" alt="" data-dz-thumbnail="data-dz-thumbnail" />

                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="mb-1"> Peter Leverkus</h4>
                                <h6 className="fs-0 text-primary fw-normal">petergms@gmail.com</h6>
                                <p className="text-900">+044 4381 421 1323</p>
                                <Button as={Link} to="/FreelancerEditProfile">Edit Your Profile</Button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Next Row-2 */}
                <div className="row g-0 mb-3">
                    <div className="col-lg-8 pe-lg-2">
                        <div className="card mb-3">
                            <div className="card-header bg-light">
                                <h5 className="mb-0">Intro</h5>
                            </div>
                            <div className="card-body text-justify">
                                <p className="mb-0 text-1000">Milton Finger (born February 8, 1914), better known as Peter Leverkus, was an UK comic strip, comic book, film, and television writer who co-created the DC Comics superhero character Batman (along with Bob Kane).</p>
                                <div className="collapse" id="profile-intro" style={{}}>
                                    <p className="mt-3 text-1000">A young, promising writer and part-time shoe dealer Finger, joined Kane's fledgling studio in 1938. Despite his significant (and often iconic) contributions as an imaginative writer, visionary mythos/world builder, and illustration creator, Finger was frequently reduced to ghostwriter status on a number of comics, including Batman and Green Lantern (Original Version). </p>
                                    <p className="text-1000">It’s great that we live in an age where we can share so much with technology but I’m but I’m ready for the next phase of my career, with a healthy balance between the virtual world and a workplace where I help others face-to-face.</p>
                                    <p className="text-1000 mb-0">There’s always something new to learn, especially in IT-related fields. People like working with me because I can explain technology to everyone, from staff to executives who need me to tie together the details and the big picture. I can also implement the technologies that successful projects need.</p>
                                </div>
                            </div>
                            <div className="card-footer bg-light p-0 border-top">
                                <button className="btn btn-link d-block w-100 btn-intro-collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#profile-intro" aria-expanded="false" aria-controls="profile-intro">Show <span className="less">less
                                    {/* <svg className="svg-inline--fa fa-chevron-up fa-w-14 ms-2 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg> */}
                                </span><span className="full">full
                                        {/* <svg className="svg-inline--fa fa-chevron-down fa-w-14 ms-2 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg> */}
                                    </span></button></div>
                        </div>
                        {/* Bussiness Information */}
                        <Card className="mb-3 font-sans-serif">
                            <Card.Header as="h5" className="bg-white text-capitalize">
                                Bussiness Information
                            </Card.Header>
                            <Card.Body className="d-flex gap-3 flex-column flex-sm-row align-items-center">
                                {/* <img
                                                width="100px"
                                                src={student}
                                                alt="student profile image"
                                            /> */}
                                <Table borderless className="fs--1 fw-medium mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                Bussiness Name:
                                            </td>
                                            <td className="p-1 text-600">Worktops </td>
                                        </tr>

                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                Bussiness Email:
                                            </td>
                                            <td className="p-1">
                                                <Link to="mailto:goodguy@nicemail.com" className="text-600">
                                                    testworktops@gmail.com
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                Phone No:
                                            </td>
                                            <td className="p-1">
                                                <Link to="tel:+01234567890" className="text-600">
                                                    +012-345-67890
                                                </Link>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                Bussiness Address:
                                            </td>
                                            <td className="p-1">
                                                <Link to="1 De La Warr Way, Cambridge, CB23 6DX" className="text-600">
                                                    1 De La Warr Way, Cambridge, CB23 6DX
                                                </Link>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                You Operate as:
                                            </td>
                                            <td className="p-1 text-600">
                                                <Link to="Limited Company" className="text-600">
                                                    Limited Company
                                                </Link>
                                                {/* <Form.Select className="w-25" style={{ height: '30px', fontSize: '12px' }}>
                                                                <option>Self-Employed/Sole Trader</option>
                                                                <option>Limited Company</option>
                                                                <option>Ordinary Partnership</option>
                                                                <option>Limited Partnership</option>
                                                            </Form.Select> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                No.Of Employee:
                                            </td>
                                            <td className="p-1 text-600">
                                                <Link to="Myself Only" className="text-600">
                                                    Myself Only
                                                </Link>

                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Card.Body>
                        </Card>
                        {/* Bussiness Information */}

                        <div className="card mb-3 ">
                            <div className="card-header bg-light">
                                <h5 className="mb-0">Photos</h5>
                            </div>
                            <div className="card-body overflow-hidden">
                                <div className="row g-0">
                                    <div className="col-6 p-1"><a className="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img className="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div className="col-6 p-1"><a className="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img className="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div className="col-4 p-1"><a className="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img className="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div className="col-4 p-1"><a className="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img className="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div className="col-4 p-1"><a className="glightbox" href={coverimg} data-gallery="gallery1" data-glightbox="data-glightbox"><img className="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ps-lg-2">
                        <div className="sticky-sidebar">
                            <div className="card mb-3">
                                <div className="card-header bg-light">
                                    <h5 className="mb-0">Experience</h5>
                                </div>
                                <div className="card-body fs--1">
                                    <div className="d-flex">
                                        <div className="flex-1 position-relative ps-3">
                                            <h6 className="fs-0 mb-0">Fabricator<span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified">
                                                {/* <svg className="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.625em" }}><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg> */}
                                            </span></h6>
                                            <p className="mb-1"> <a href="#!">Freelancer</a></p>
                                            <p className="text-1000 mb-0">4 Years</p>
                                            <p className="text-1000 mb-0">Cambridge, UK</p>
                                            <div className="border-bottom border-dashed my-3"></div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-1 position-relative ps-3">
                                            <h6 className="fs-0 mb-0">Kitchen Designer
                                                <span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified">
                                                    {/* <svg className="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.625em" }}><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg> */}
                                                    {/* <small className="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small>< */}
                                                </span></h6>
                                            <p className="mb-1"> <a href="#!">Worktops</a></p>
                                            <p className="text-1000 mb-0">4 Years</p>
                                            <p className="text-1000 mb-0">Cambridge, UK</p>
                                            <div className="border-bottom border-dashed my-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Next Row-2 */}

                {/* Followers */}
                <div className="card mb-3">
                    <div className="card-header bg-light">
                        <div className="row align-items-center">
                            <div className="col">
                                <h5 className="mb-0" id="followers">Followers <span className="d-none d-sm-inline-block">(233)</span></h5>
                            </div>
                            <div className="col">
                                <form>
                                    <div className="row g-0">
                                        <div className="col"><input className="form-control form-control-sm" type="text" placeholder="Search..." /></div>
                                        <div className="col d-md-block d-none"><select className="form-select form-select-sm ms-2" aria-label=".form-select-sm example">
                                            <option selected="selected">All followers</option>
                                            <option>Fabricator</option>
                                            <option>Plumber</option>
                                            <option>Roofer</option>
                                            <option>Bricklaying</option>
                                        </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card-body bg-light px-1 py-0">
                        <div className="row g-0 text-center fs--1">
                            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                <div className="bg-white dark__bg-1100 p-3 h-100">
                                    <Link to="/profile_publicview" className="d-flex justify-content-center">
                                        <div className="circle-container">
                                            <img src={profile} alt="Image" className="circle-image" />
                                        </div>
                                    </Link>
                                    <h6 className="mb-1">
                                        <Link to="/profile_publicview" className="d-flex justify-content-center">
                                            <a>Emilia Clarke</a>
                                        </Link>
                                    </h6>
                                    <p className="fs--2 mb-1"><a className="text-700" href="#!">Technext limited</a></p>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                <div className="bg-white dark__bg-1100 p-3 h-100">

                                    <Link to="/profile_publicview" className="d-flex justify-content-center">
                                        <div className="circle-container">
                                            <img src={profile} alt="Image" className="circle-image" />
                                        </div>
                                    </Link>
                                    <h6 className="mb-1">
                                        <Link to="/profile_publicview" className="d-flex justify-content-center">
                                            <a >Kit Harington</a>
                                        </Link>
                                    </h6>
                                    <p className="fs--2 mb-1">
                                        {/* <Link to="/profile_publicview" className="d-flex justify-content-center"> */}
                                        <a className="text-700" href="#!">Harvard Korea Society</a>
                                        {/* </Link> */}
                                    </p>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                <div className="bg-white dark__bg-1100 p-3 h-100">
                                    <Link to="/profile_publicview" className="d-flex justify-content-center">
                                        <div className="circle-container">
                                            <img src={profile} alt="Image" className="circle-image" />
                                        </div>
                                    </Link>
                                    <h6 className="mb-1">
                                        <Link to="/profile_publicview" className="d-flex justify-content-center">
                                            <a >Sophie Turner</a>
                                        </Link>
                                    </h6>
                                    <p className="fs--2 mb-1"><a className="text-700" href="#!">Graduate Student Council</a></p>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                <div className="bg-white dark__bg-1100 p-3 h-100">
                                    <Link to="/profile_publicview" className="d-flex justify-content-center">
                                        <div className="circle-container">
                                            <img src={profile} alt="Image" className="circle-image" />
                                        </div>
                                    </Link>
                                    <h6 className="mb-1">
                                        <Link to="/profile_publicview" className="d-flex justify-content-center">
                                            <a >Peter</a>
                                        </Link>
                                    </h6>
                                    <p className="fs--2 mb-1"><a className="text-700" href="#!">Art Club, MIT</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Followers */}
            </Container >
        </>
    )
}
export default FreelancerProfile