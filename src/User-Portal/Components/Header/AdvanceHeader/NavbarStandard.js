import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import AppContext from '../../../TemplateAssets/context/Context';
import trainer from '../../Projectimages/trainer.png'
import { Button, Dropdown, Badge } from 'react-bootstrap';
import profile from '../../Projectimages/Handyman.jpg'

function NavbarStandard() {

  const {
    config: { isDark }
  } = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(1);
  const [user, setUser] = useState({});
  const history = useHistory();

  const logOut = () => {
    sessionStorage.clear();
    if (user.role == "Owner") {
      history.push("/user/logout");
    } else {
      history.push("/freelance/logout");
    }
    // window.location.reload();
  }

  // 1 for enduser, 2 for owner, 3 for freelancer
  useEffect(() => {
    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);
    setUser(_json);
    if (_json?.role == "Owner") {
      setId(2);
    }
    if (_json?.role == "Freelancer") {
      setId(3);
    }
    console.log('navbar_prop', id);
  }, [])


  // 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <nav style={{ background: '#003f6b' }} className="navbar fixed-top navbar-top navbar-expand-lg">
            <button className="btn navbar-toggler-humburger-icon navbar-toggler  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle Navigation"><Icon icon="material-symbols:menu" color="white" width="20" height="20" /><span className="toggle-line"></span></button>
            <a className="navbar-brand me-1 me-sm-3">
              <div className="d-flex align-items-center">
                <Link to="/">
                  <img
                    className="logo-image ms-3"
                    style={{ width: '135px' }}
                    title="MYPROJECT.AI"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTKPFQ2xkQ7dLyfk2V8MUCOwyx2Gre0wGxHTyZaJA8svDFmGn2a-Wbvs628WHzM1B60HM3gzHf5kIDINBYUtF_PSvLzz0LM8VzqWzUsb-wDfnTkSD3j2-vvObqiX4n3sKcOiy4Si3172Y5ZGlhueKM-8UhCYFbI4Ak_pwKdPJaOWn8Ivbv8NlWcmUPfg/s600/MP-logo.png"
                    alt="MAI Logo"
                  />
                </Link>
              </div>
            </a>
            <div>
            </div>



            <div className="navbar-collapse  scrollbar collapse" id="navbarStandard" >
              <ul className="navbar-nav ms-lg-5" data-top-nav-dropdowns="data-top-nav-dropdowns">
                {/* Post A Project */}
                {id == 2 &&
                  <li>
                  {/*  <li className='mt-3 mb-3 mb-lg-0 mt-lg-0 ms-lg-5'> */}
                      {/* <div>
                      {isMobile ? (
                        <div>
                          <Button className='post-project-btn ms-lg-5' title='Click here to Post Your Project' as={Link} to="/postproject" >
                            <Icon icon="mingcute:add-fill" color="#003f6b" width="10" height="10" />
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Button className='post-project-btn-1 ms-lg-5' title='Click here to Post Your Project' as={Link} to="/postproject" >
                            <span style={{ fontSize: '14px' }} className="text-uppercase">Post A Project</span>
                          </Button>
                        </div>
                      )}
                    </div> */}
                      <Button variant='falcon-default' style={{ fontSize: '14px' }} className='mt-3 me-4 mb-3 mb-lg-0 mt-lg-0 text-uppercase'>Post a Project</Button>
                    </li>
                }
                    {/* Post A Project */}


                    {/* HIW */}
                    <li className=''>
                      <Link to="/HowItWorks" className="link-item">
                        <a
                          title='How It Works'
                          className="text-uppercase  text-white nav-link"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="dashboards"
                        >
                          How It Works
                        </a>
                      </Link>
                    </li>
                    {/* HIW */}
                    {/* Products */}
                    <li>
                      <Link to="/productlist" className="link-item">
                        <a
                          title='Products'
                          className="text-uppercase text-white nav-link"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="dashboards"
                        >
                          Products
                        </a>
                      </Link>
                    </li>
                    {/* Products */}
                    {/* Projects */}
                    <li>
                      <Link to="/projectlist" className="link-item">
                        <a
                          title='Projects'
                          className="text-uppercase text-white nav-link"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="dashboards"
                        >
                          Projects
                        </a>
                      </Link>
                    </li>
                    {/* Projects */}
                    {/* Services */}
                    <li>
                      <Link to="/servicelist" className="link-item">
                        <a
                          title='Services'
                          className="text-uppercase text-white nav-link"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="dashboards"
                        >
                          Services
                        </a>
                      </Link>
                    </li>
                    {/* Services */}
                    {id == 1 &&
                      <>
                        {/* Owner Portal */}
                        <li className="nav-item dropdown">
                          <a
                            title='Click here to Login or Signup as Projectowner in Myproject.Ai'
                            className="text-uppercase text-white nav-link "
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            id="dashboards"
                          >
                            Project Owner
                          </a>
                          <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                            <div className="bg-white dark__bg-1000 rounded-3 py-2">
                              <Link to="/projectowner">
                                <a title='Click here to Login as Projectowner in Myproject.Ai' className="text-uppercase dropdown-item text-900 fw-medium">Login</a>
                              </Link>
                              <Link to="/project-owner-register">
                                <a title='Click here to Signup as Projectowner in Myproject.Ai' className="text-uppercase dropdown-item text-900 fw-medium">Sign Up</a>
                              </Link>
                            </div>
                          </div>
                        </li>
                        {/* Owner Portal */}

                        {/* Trader Portal */}
                        <li className="nav-item dropdown">
                          <a title='Click here to Login or Signup as Trader in Myproject.Ai' className="text-uppercase text-white nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dashboards">Trader</a>
                          <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                            <div className="bg-white dark__bg-1000 rounded-3 py-2">
                              <Link to="/Freelancer/True">
                                <a title='Click here to Login as Trader in Myproject.Ai' className="text-uppercase dropdown-item text-900 fw-medium" >Login</a>
                              </Link>
                              <Link to="/Freelancer/False">
                                <a title='Click here to SignUp as Trader in Myproject.Ai' className="text-uppercase dropdown-item text-900 fw-medium" >Sign Up</a>
                              </Link>
                            </div>
                          </div>
                        </li>
                        {/* Trader Portal */}
                      </>
                    }
                  </ul>

            </div>
            <ul class="navbar-nav navbar-nav-icons ms-auto non-collapse-section flex-row align-items-center">
              {/* Cart */}
              <Link title='Cart' to="/Cart">
                <div className="cart-icon-container">
                  <Icon style={{ marginRight: '5px' }} className='me-2' icon="material-symbols:shopping-cart" color="white" width="24" height="24" />
                  <Badge pill bg="danger" className="cart-badge">
                    1
                  </Badge>
                </div>
              </Link>
              {/* Cart */}
              {/* Wishlists */}
              <div className=''>
                <Dropdown navbar={true} as="li">
                  <Dropdown.Toggle
                    bsPrefix="toggle"
                    as={Link}
                    title='Wishlists'
                    to="#!"
                    className=""
                  >
                    <Icon icon="wpf:like" style={{ marginRight: '5px', marginLeft: '5px' }} color="white" width="24" height="24" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-card dropdown-menu-end me-2 dropdown-menu-start">
                    <div className="bg-white rounded-2 py-2 dark__bg-1000">
                      <Dropdown.Item href="#!">
                        <Link to="/wishlist/product">
                          <a className="text-uppercase dropdown-item text-900 fw-medium" >
                            Products
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#!">
                        <Link to="/wishlist/project">
                          <a className="text-uppercase dropdown-item text-900 fw-medium" >
                            Projects
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#!">
                        <Link to="/wishlist/seller">
                          <a className="text-uppercase dropdown-item text-900 fw-medium" >
                            Followers
                          </a>
                        </Link>
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

              </div>
              {/* Wishlists */}

              {id != 1 &&
                <>
                  {/* Notifications */}
                  <Dropdown navbar={true} as="li">
                    <Dropdown.Toggle
                      bsPrefix="toggle"
                      as={Link}
                      title='Notifications'
                      to="#!"
                      className=""
                    >
                      <Icon icon="mdi:bell" color="white" width="24" height="24" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end  dropdown-menu-start dropdown-menu-card dropdown-menu-notification " aria-labelledby="navbarDropdownNotification" data-bs-popper="static">
                      <div className="card card-notification  shadow-none">
                        <div className="card-header">
                          <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                              <h6 className="card-header-title mb-0">Notifications</h6>
                            </div>
                            <div className="col-auto ps-0 ps-sm-3"><a className="card-link fw-normal" href="#">Mark all as read</a></div>
                          </div>
                        </div>
                        <div className="scrollbar-overlay" style={{ maxHeight: "19rem" }} data-simplebar="init">
                          <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                            <div className="simplebar-height-auto-observer-wrapper">
                              <div className="simplebar-height-auto-observer">
                              </div>
                            </div>
                            {/* New Messages */}
                            <div className="simplebar-mask">
                              <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                <div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: "auto", overflow: "hidden scroll" }}><div className="simplebar-content" style={{ padding: '0px' }}>
                                  <div className="list-group list-group-flush fw-normal fs--1">
                                    <div className="list-group-title border-bottom">NEW</div>
                                    <Link to="/chat">
                                      <div className="list-group-item">
                                        <a className="notification notification-flush notification-unread" href="#!">
                                          <div className="notification-avatar">
                                            <div className="avatar avatar-2xl me-3">
                                              <img className="rounded-circle" src={profile} alt="" />
                                            </div>
                                          </div>
                                          <div className="notification-body">
                                            <p className="mb-1"><strong style={{ fontSize: "14px" }}>Emma Watson</strong> replied to your comment : "Hello world"</p>
                                            <span className="notification-time">Just now</span>
                                          </div>
                                        </a>
                                      </div>
                                    </Link>
                                    <Link to="/chat">
                                      <div className="list-group-item">
                                        <a className="notification notification-flush notification-unread" href="#!">
                                          <div className="notification-avatar">
                                            <div className="avatar avatar-2xl me-3">
                                              <div className="avatar-name rounded-circle"><span>AB</span></div>
                                            </div>
                                          </div>
                                          <div className="notification-body">
                                            <p className="mb-1"><strong style={{ fontSize: "14px" }}>Emma Watson</strong> replied to your comment : "Hello world"</p>
                                            <span className="notification-time">9hr</span>
                                          </div>
                                        </a>
                                      </div>
                                    </Link>
                                    {/* Earlier Messages */}
                                    <div className="list-group-title border-bottom">EARLIER</div>
                                    <Link to="/chat">
                                      <div className="list-group-item">
                                        <a className="notification notification-flush" href="#!">
                                          <div className="notification-avatar">
                                            <div className="avatar avatar-2xl me-3">
                                              <img className="rounded-circle" src={profile} alt="" />
                                            </div>
                                          </div>
                                          <div className="notification-body">
                                            <p className="mb-1"><strong style={{ fontSize: "14px" }}>Emma Watson</strong> replied to your comment : "Hello world"</p>
                                            <span className="notification-time">1d</span>
                                          </div>
                                        </a>
                                      </div>
                                    </Link>
                                  </div>
                                </div></div></div></div><div className="simplebar-placeholder" style={{ width: "auto", height: "513px" }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden", }}><div className="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar" style={{ height: "180px", display: "block", transform: "translate3d(0px, 59px, 0px)" }}></div></div></div>
                        <div className="card-footer text-center border-top">
                          <Link title='Click here to see your Notifications' to="/Notifications">
                            <a className="card-link d-block">View all</a>
                          </Link>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* Notifications */}
                </>
              }
              {id != 1 &&
                <>
                  <li className="nav-item dropdown">
                    {/* Profile */}
                    <div>
                      <Dropdown navbar={true} as="li">
                        <Dropdown.Toggle
                          bsPrefix="toggle"
                          as={Link}
                          to="#!"
                          className="pe-0 nav-link"
                        >
                          <div title='Profile' className="avatar me-1 avatar-xl">
                            <img className="rounded-circle" src={trainer} alt="" />
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-card me-2 dropdown-menu-end">
                          <div className="bg-white rounded-2 py-2 dark__bg-1000">
                            <Dropdown.Item className="fw-bold text-success" href="#!">
                              <FontAwesomeIcon icon="crown" className="me-1" />
                              <span>{user?.role}</span>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            {id == 3 && <Dropdown.Item as={Link} to="/FreelancerProfile">Profile</Dropdown.Item>}
                            {id == 2 && <Dropdown.Item as={Link} to="/MyProfile">Profile</Dropdown.Item>}
                            {id == 2 && <Dropdown.Item as={Link} to="/OpenProjectCard">My Projects</Dropdown.Item>}
                            {/* {id == 2 && <Dropdown.Item as={Link} to="/workstreamcard">Workstreams</Dropdown.Item>} */}
                            {id == 3 && <Dropdown.Item as={Link} to="/addproductcard">My Products</Dropdown.Item>}
                            {id == 2 && <Dropdown.Item as={Link} to="/chat">Messages</Dropdown.Item>}
                            {id == 3 && <Dropdown.Item as={Link} to="/chat">Messages</Dropdown.Item>}
                            {id == 3 && <Dropdown.Item as={Link} to="/addservicecard">My Services</Dropdown.Item>}
                            {id == 3 && <Dropdown.Item as={Link} to="/proposalcard">My Proposals</Dropdown.Item>}
                            {id == 3 && <Dropdown.Item as={Link} to="/InvoiceFreelancerCard">Invoice</Dropdown.Item>}
                            {id == 2 && <Dropdown.Item as={Link} to="/InvoicedueCard">Invoice</Dropdown.Item>}
                            {id == 3 && <Dropdown.Item as={Link} to="/Estimates">Estimates</Dropdown.Item>}
                            {id == 2 && <Dropdown.Item as={Link} to="/project-owner-estimate">Estimates</Dropdown.Item>}
                            {/* <Dropdown.Item as={Link} to="/reviewscard">Reviews</Dropdown.Item> */}
                            {/* <Dropdown.Divider /> */}
                            <Dropdown.Item as={Link} to="/Enquirescard">Enquires</Dropdown.Item>
                            {id == 3 && <Dropdown.Item as={Link} to="/FreelancerEditProfile">Settings</Dropdown.Item>}
                            <Dropdown.Item onClick={() => { logOut() }}>
                              Logout
                            </Dropdown.Item>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    {/* Profile */}
                  </li>
                </>
              }
            </ul>
          </nav >
        </div>
      </div >
    </>
  )
}
export default NavbarStandard