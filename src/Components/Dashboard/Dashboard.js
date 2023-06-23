import React, { useEffect, useState } from "react";
import { imgBaseUrl } from '../../Constants/Config';
import AiMenu from "../Menubar/AiMenu";
import AdminHeader from "../Menubar/AiMenu";

function Dashboard() {

    // const [dashboardUrl, setDashboardUrl] = useState('');
    // useEffect(() => {
    //     var _url = imgBaseUrl + 'dashboard.png';
    //     console.log(_url);
    //     setDashboardUrl(_url)
    // }, [])

    return (
        <div className="">
            <div className="row">
                <div className="col-12 mb-5">
                    <AdminHeader />
                </div>
                <div className="col-12 container mt-4">
                    <div class="card bg-transparent-50 overflow-hidden">
                        <div class="card-header position-relative">
                            {/* <div class="bg-holder d-none d-md-block bg-card z-index-1" style="background-image:url(../assets/img/illustrations/ecommerce-bg.png);background-size:230px;background-position:right bottom;z-index:-1;"></div> */}

                            <div class="position-relative z-index-2">
                                <div>
                                    <h3 class="text-primary mb-1">Good Afternoon, Jonathan!</h3>
                                    <p>Here’s what happening with your store today </p>
                                </div>
                                <div class="d-flex py-3">
                                    <div class="pe-3">
                                        <p class="text-600 fs--1 fw-medium">Today's visit </p>
                                        <h4 class="text-800 mb-0">14,209</h4>
                                    </div>
                                    <div class="ps-3">
                                        <p class="text-600 fs--1">Today’s total sales </p>
                                        <h4 class="text-800 mb-0">$21,349.29 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-body p-0">
                            <ul class="mb-0 list-unstyled">
                                <li class="alert mb-0 rounded-0 py-3 px-x1 alert-warning border-x-0 border-top-0">
                                    <div class="row flex-between-center">
                                        <div class="col">
                                            <div class="d-flex">
                                                {/*<svg class="svg-inline--fa fa-circle fa-w-16 mt-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> */}<div class="fas fa-circle mt-1 fs--2"></div>
                                                <p class="fs--1 ps-2 mb-0"><strong>5 products</strong> didn’t publish to your Facebook page</p>
                                            </div>
                                        </div>
                                        <div class="col-auto d-flex align-items-center"><a class="alert-link fs--1 fw-medium" href="#!">View products{/*<svg class="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg> */}<i class="fas fa-chevron-right ms-1 fs--2"></i></a></div>
                                    </div>
                                </li>
                                <li class="alert mb-0 rounded-0 py-3 px-x1 greetings-item border-top border-x-0 border-top-0">
                                    <div class="row flex-between-center">
                                        <div class="col">
                                            <div class="d-flex">
                                                {/*<svg class="svg-inline--fa fa-circle fa-w-16 mt-1 fs--2 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> */}<div class="fas fa-circle mt-1 fs--2 text-primary"></div>
                                                <p class="fs--1 ps-2 mb-0"><strong>7 orders</strong> have payments that need to be captured</p>
                                            </div>
                                        </div>
                                        <div class="col-auto d-flex align-items-center"><a class="alert-link fs--1 fw-medium" href="#!">View payments{/*<svg class="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg> */}<i class="fas fa-chevron-right ms-1 fs--2"></i></a></div>
                                    </div>
                                </li>
                                <li class="alert mb-0 rounded-0 py-3 px-x1 greetings-item border-top  border-0">
                                    <div class="row flex-between-center">
                                        <div class="col">
                                            <div class="d-flex">
                                                {/*<svg class="svg-inline--fa fa-circle fa-w-16 mt-1 fs--2 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> */}<div class="fas fa-circle mt-1 fs--2 text-primary"></div>
                                                <p class="fs--1 ps-2 mb-0"><strong>50+ orders</strong> need to be fulfilled</p>
                                            </div>
                                        </div>
                                        <div class="col-auto d-flex align-items-center"><a class="alert-link fs--1 fw-medium" href="#!">View orders{/*<svg class="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg> */}<i class="fas fa-chevron-right ms-1 fs--2"></i></a></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 container mt-3 mb-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div class="card h-md-100 h-100">
                                <div class="card-body">
                                    <div class="row h-100 justify-content-between g-0">
                                        <div class="col-5 col-sm-6 col-xxl pe-2">
                                            <h6 class="mt-1">Market Share</h6>
                                            <div class="fs--2 mt-3">
                                                <div class="d-flex flex-between-center mb-1">
                                                    <div class="d-flex align-items-center"><span class="dot bg-primary"></span><span class="fw-semi-bold">Falcon</span></div>
                                                    <div class="d-xxl-none">57%</div>
                                                </div>
                                                <div class="d-flex flex-between-center mb-1">
                                                    <div class="d-flex align-items-center"><span class="dot bg-info"></span><span class="fw-semi-bold">Sparrow</span></div>
                                                    <div class="d-xxl-none">20%</div>
                                                </div>
                                                <div class="d-flex flex-between-center mb-1">
                                                    <div class="d-flex align-items-center"><span class="dot bg-warning"></span><span class="fw-semi-bold">Phoenix</span></div>
                                                    <div class="d-xxl-none">22%</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-md-100 ecommerce-card-min-width">
                                <div class="card-header pb-0">
                                    <h6 class="mb-0 mt-2 d-flex align-items-center">Weekly Sales<span class="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Calculated according to last week's sales" data-bs-original-title="Calculated according to last week's sales">
                                        <span class="far fa-question-circle" data-fa-transform="shrink-1"></span></span></h6>
                                </div>
                                <div class="card-body d-flex flex-column justify-content-end">
                                    <div class="row">
                                        <div class="col">
                                            <p class="font-sans-serif lh-1 mb-1 fs-2">$47K</p><span class="badge badge-soft-success rounded-pill fs--2">+3.5%</span>
                                        </div>
                                        {/* <div class="col-auto ps-0">
                                    <div class="echart-bar-weekly-sales h-100 echart-bar-weekly-sales-smaller-width" style="user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;" _echarts_instance_="ec_1687549107396"><div><canvas data-zr-dom-id="zr_0" width="156" height="76" style="position: absolute; left: 0px; top: 0px; width: 104px; height: 51px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div class="" style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px; background-color: rgb(249, 250, 253); border-width: 1px; border-radius: 4px; color: rgb(11, 23, 39); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 7px 10px; top: 0px; left: 0px; transform: translate3d(3px, -43px, 0px); border-color: rgb(216, 226, 239); pointer-events: none; visibility: hidden; opacity: 0;">Tue : 150</div></div>
                                </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard