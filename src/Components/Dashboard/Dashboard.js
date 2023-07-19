import React, { useEffect, useState } from "react";
import AdminHeader from "../Menubar/AiMenu";
import ReactECharts from 'echarts-for-react';
import { Card } from "react-bootstrap";
import Payments from "../Payments/AdminPaymentDetails";
import { Link } from "react-router-dom";

function Dashboard() {
    // 
    const option1 = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
            },
        ],
    };
    // 
    const option = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['Projects', 'Products', 'Services'],
        },
        series: [
            {

                name: 'Access Source',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { value: 335, name: 'Products' },
                    { value: 310, name: 'Projects' },
                    { value: 234, name: 'Services' },
                ],
            },
        ],
    };

    // 
    const option2 = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
            },
        ],
    };
    return (
        <div className="">
            <div className="row">
                <div className="col-12 mb-5">
                    <AdminHeader />
                </div>
                <div className="col-12 container mb-3 mt-4">
                    <div class="card bg-white overflow-hidden">
                        <div class="card-header position-relative">
                            {/* <div class="bg-holder d-none d-md-block bg-card z-index-1" style="background-image:url(../assets/img/illustrations/ecommerce-bg.png);background-size:230px;background-position:right bottom;z-index:-1;"></div> */}

                            <div class="position-relative z-index-2">
                                <div>
                                    <h1 class="text-primary mb-1">Good Afternoon, Jonathan!</h1>
                                    <p>Here’s what happening with your store today </p>
                                </div>
                                <div class="d-flex py-3">
                                    <div class="pe-3">
                                        <h2 class="text-600  fw-medium">Today's visit </h2>
                                        <h4 class="text-800 mb-0">14,209</h4>
                                    </div>
                                    <div class="ps-3">
                                        <h2 class="text-600 ">Today’s total sales </h2>
                                        <h4 class="text-800 mb-0">£21,349.29 </h4>
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
                                                {/*<svg class="svg-inline--fa fa-circle fa-w-16 mt-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>*/}<div class="fas fa-circle mt-1 fs--2"></div>
                                                <p class="fs--1 ps-2 mb-0"><strong>5 products</strong> didn’t publish to your Facebook page</p>
                                            </div>
                                        </div>
                                        <Link to="/allproduct">
                                            <div class="col-auto d-flex align-items-center"><a class="alert-link fs--1 fw-medium" href="#!">View products{/*<svg class="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>*/}<i class="fas fa-chevron-right ms-1 fs--2"></i></a></div>
                                        </Link>
                                    </div>
                                </li>
                                <li class="alert mb-0 rounded-0 py-3 px-x1 greetings-item border-top border-x-0 border-top-0">
                                    <div class="row flex-between-center">
                                        <div class="col">
                                            <div class="d-flex">
                                                {/*<svg class="svg-inline--fa fa-circle fa-w-16 mt-1 fs--2 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>*/}<div class="fas fa-circle mt-1 fs--2 text-primary"></div>
                                                <p class="fs--1 ps-2 mb-0"><strong>7 orders</strong> have payments that need to be captured</p>
                                            </div>
                                        </div>
                                        <Link to="/payments">
                                            <div class="col-auto d-flex align-items-center"><a class="alert-link fs--1 fw-medium" href="#!">View payments{/*<svg class="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>*/}<i class="fas fa-chevron-right ms-1 fs--2"></i></a></div>
                                        </Link>
                                    </div>
                                </li>
                                <li class="alert mb-0 rounded-0 py-3 px-x1 greetings-item border-top  border-0">
                                    <div class="row flex-between-center">
                                        <div class="col">
                                            <div class="d-flex">
                                                {/*<svg class="svg-inline--fa fa-circle fa-w-16 mt-1 fs--2 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>*/}<div class="fas fa-circle mt-1 fs--2 text-primary"></div>
                                                <p class="fs--1 ps-2 mb-0"><strong>50+ orders</strong> need to be fulfilled</p>
                                            </div>
                                        </div>
                                        <Link to="/allorders">
                                            <div class="col-auto d-flex align-items-center"><a class="alert-link fs--1 fw-medium" href="#!">View orders{/*<svg class="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>*/}<i class="fas fa-chevron-right ms-1 fs--2"></i></a></div>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 container">
                    <div class="card py-3">
                        <div class="card-body py-3">
                            <div class="row g-0">
                                <div class="col-6 col-md-4 border-200 border-bottom border-end pb-4">
                                    <h2 class="pb-1 text-700">Orders </h2>
                                    <p class="font-sans-serif lh-1 mb-1 fs-2">15,450 </p>
                                    <div class="d-flex align-items-center">
                                        <h2 class="fs--1 text-500 mb-0">13,675 </h2>
                                        <h2 class="fs--2 ps-3 mb-0 text-primary">{/*<svg class="svg-inline--fa fa-caret-up fa-w-10 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>*/}<span class="me-1 fas fa-caret-up"></span>21.8%</h2>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 border-200 border-md-200 border-bottom border-md-end pb-4 ps-3">
                                    <h2 class="pb-1 text-700">Items sold </h2>
                                    <p class="font-sans-serif lh-1 mb-1 fs-2">1,054 </p>
                                    <div class="d-flex align-items-center">
                                        <h2 class="fs--1 text-500 mb-0">13,675 </h2>
                                        <h2 class="fs--2 ps-3 mb-0 text-warning">{/*<svg class="svg-inline--fa fa-caret-up fa-w-10 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>*/}<span class="me-1 fas fa-caret-up"></span>21.8%</h2>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 border-200 border-bottom border-end border-md-end-0 pb-4 pt-4 pt-md-0 ps-md-3">
                                    <h2 class="pb-1 text-700">Refunds </h2>
                                    <p class="font-sans-serif lh-1 mb-1 fs-2">£145.65 </p>
                                    <div class="d-flex align-items-center">
                                        <h2 class="fs--1 text-500 mb-0">13,675 </h2>
                                        <h2 class="fs--2 ps-3 mb-0 text-success">{/*<svg class="svg-inline--fa fa-caret-up fa-w-10 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>*/}<span class="me-1 fas fa-caret-up"></span>21.8%</h2>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 border-200 border-md-200 border-bottom border-md-bottom-0 border-md-end pt-4 pb-md-0 ps-3 ps-md-0">
                                    <h2 class="pb-1 text-700">Gross sale </h2>
                                    <p class="font-sans-serif lh-1 mb-1 fs-2">£100.26 </p>
                                    <div class="d-flex align-items-center">
                                        <h2 class="fs--1 text-500 mb-0">£109.65 </h2>
                                        <h2 class="fs--2 ps-3 mb-0 text-danger">{/*<svg class="svg-inline--fa fa-caret-up fa-w-10 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>*/}<span class="me-1 fas fa-caret-up"></span>21.8%</h2>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4 border-200 border-md-bottom-0 border-end pt-4 pb-md-0 ps-md-3">
                                    <h2 class="pb-1 text-700">Shipping </h2>
                                    <p class="font-sans-serif lh-1 mb-1 fs-2">£365.53 </p>
                                    <div class="d-flex align-items-center">
                                        <h2 class="fs--1 text-500 mb-0">13,675 </h2>
                                        <h2 class="fs--2 ps-3 mb-0 text-success">{/*<svg class="svg-inline--fa fa-caret-up fa-w-10 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>*/}<span class="me-1 fas fa-caret-up"></span>21.8%</h2>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 pb-0 pt-4 ps-3">
                                    <h2 class="pb-1 text-700">Processing </h2>
                                    <p class="font-sans-serif lh-1 mb-1 fs-2">861 </p>
                                    <div class="d-flex align-items-center">
                                        <h2 class="fs--1 text-500 mb-0">13,675 </h2>
                                        <h2 class="fs--2 ps-3 mb-0 text-info">{/*<svg class="svg-inline--fa fa-caret-up fa-w-10 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>*/}<span class="me-1 fas fa-caret-up"></span>21.8%</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 container mt-3 mb-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div class="card h-md-100 h-100">
                                <div class="card-header pb-0">
                                    <h2 class="mb-0 mt-2 d-flex align-items-center">Category<span class="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Calculated according to last week's sales" data-bs-original-title="Calculated according to last week's sales">
                                    </span></h2>
                                </div>
                                <div class="card-body">
                                    <ReactECharts option={option} style={{ minHeight: '300px' }} />

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-md-100 ecommerce-card-min-width">
                                <div class="card-header pb-0">
                                    <h2 class="mb-0 mt-2 d-flex align-items-center">Weekly Sales<span class="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Calculated according to last week's sales" data-bs-original-title="Calculated according to last week's sales">
                                    </span></h2>
                                </div>
                                <div class="card-body d-flex flex-column justify-content-end">
                                    <ReactECharts option={option1} style={{ minHeight: '320px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 container mb-3">
                    <Card>
                        <Card.Header>
                            <h2 class="mb-0 mt-2 d-flex align-items-center">Sales<span class="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Calculated according to last week's sales" data-bs-original-title="Calculated according to last week's sales">
                            </span></h2>
                        </Card.Header>
                        <Card.Body>
                            <ReactECharts option={option2} style={{ height: '400px' }} />
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-12 container mb-3">
                    <Payments />
                </div>
            </div>
        </div >
    )
}
export default Dashboard