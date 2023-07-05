import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function FAQ() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    {/* <div className="card mt-4 mb-3">
                        </div>
                    </div> */}
                    <div className="card mt-4 mb-3">
                        <div className="card-header bg-light position-relative">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h1>FAQ </h1>
                                    <h4>Frequently Asked Questions</h4>
                                </div>
                                <div className="col-lg-4">
                                    <h4 className="mt-lg-3 mt-sm-0 mt-md-0">Search Your Questions</h4>
                                    <input type="search" placeholder="Search" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="accordion border rounded overflow-hidden" id="accordionFaq">
                                <div className="card shadow-none rounded-bottom-0 border-bottom">
                                    <div className="accordion-item border-0">
                                        <div className="card-header p-0" id="faqAccordionHeading1"><button className="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 border-0 text-start rounded-0 shadow-none collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion1" aria-expanded="false" aria-controls="collapseFaqAccordion1">
                                            <span className="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span> <span className="fw-medium font-sans-serif text-900">Do I need to pay to use MAI services?</span></button></div>
                                        <div className="accordion-collapse collapse" id="collapseFaqAccordion1" aria-labelledby="faqAccordionHeading1" data-parent="#accordionFaq" >
                                            <div className="accordion-body p-0">
                                                <div className="card-body pt-2">
                                                    <p className="ps-3 mb-0">
                                                        Zero fees. You are not required to pay any kind of fee to MAi to buy the products and services. We do not have any hidden charges.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-none rounded-0 border-bottom">
                                    <div className="accordion-item border-0">
                                        <div className="card-header p-0" id="faqAccordionHeading2"><button className="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 collapsed border-0 text-start rounded-0 shadow-none" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion2" aria-expanded="false" aria-controls="collapseFaqAccordion2">
                                            <span className="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span> <span className="fw-medium font-sans-serif text-900">Can I find a service provider from my area?</span></button></div>
                                        <div className="accordion-collapse collapse" id="collapseFaqAccordion2" aria-labelledby="faqAccordionHeading2" data-parent="#accordionFaq">
                                            <div className="accordion-body p-0">
                                                <div className="card-body pt-2">
                                                    <p className="ps-3 mb-0">
                                                        Absolutely. We have various traders from all over the nation. All you need to do is enter your postcode when searching for services. Our AI will show up a list of traders who work in your area.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-none rounded-0 border-bottom">
                                    <div className="accordion-item border-0">
                                        <div className="card-header p-0" id="faqAccordionHeading3"><button className="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 collapsed border-0 text-start rounded-0 shadow-none" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion3" aria-expanded="false" aria-controls="collapseFaqAccordion3">
                                            <span className="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span> <span className="fw-medium font-sans-serif text-900">What kind of services can I search for in MAI?</span></button></div>
                                        <div className="accordion-collapse collapse" id="collapseFaqAccordion3" aria-labelledby="faqAccordionHeading3" data-parent="#accordionFaq">
                                            <div className="accordion-body p-0">
                                                <div className="card-body pt-2">
                                                    <p className="ps-3 mb-0">
                                                        At MAI, you can look for all kinds of property building and renovation related services. We have a range of services, right from painting, gardening, vanity and worktop installation, kitchen upgrading to commercial building services.
                                                        You can request quotes from multiple vendors that interest you.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-none rounded-0 border-bottom">
                                    <div className="accordion-item border-0">
                                        <div className="card-header p-0" id="faqAccordionHeading4"><button className="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 border-0 text-start rounded-0 shadow-none collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion4" aria-expanded="false" aria-controls="collapseFaqAccordion4">
                                            <span className="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span> <span className="fw-medium font-sans-serif text-900">Can I suggest traders that I know ?</span></button></div>
                                        <div className="accordion-collapse collapse" id="collapseFaqAccordion4" aria-labelledby="faqAccordionHeading4" data-parent="#accordionFaq">
                                            <div className="accordion-body p-0">
                                                <div className="card-body pt-2">
                                                    <p className="ps-3 mb-0">
                                                        We are always open to recommendations and suggestions. As we aim to make our services feasible for the entire nation, you are welcome to recommend those trades that you have used. We will then contact the trade or service provider and bring them onboard after following up our verification process.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-none rounded-0 border-bottom">
                                    <div className="accordion-item border-0">
                                        <div className="card-header p-0" id="faqAccordionHeading5"><button className="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 border-0 text-start rounded-0 shadow-none collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion5" aria-expanded="false" aria-controls="collapseFaqAccordion5">
                                            <span className="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span> <span className="fw-medium font-sans-serif text-900">How does the payment work at MAI?</span></button></div>
                                        <div className="accordion-collapse collapse" id="collapseFaqAccordion5" aria-labelledby="faqAccordionHeading5" data-parent="#accordionFaq">
                                            <div className="accordion-body p-0">
                                                <div className="card-body pt-2">
                                                    <p className="ps-3 mb-0">
                                                        Once the project is uploaded by the owner, they receive various proposals. Once they accept their desired proposal, the payment will be required to be made that will be held by MAI and related upon project completion.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-none rounded-0 border-bottom">
                                    <div className="accordion-item border-0">
                                        <div className="card-header p-0" id="faqAccordionHeading6"><button className="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 border-0 text-start rounded-0 shadow-none collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion6" aria-expanded="false" aria-controls="collapseFaqAccordion6">
                                            <span className="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span> <span className="fw-medium font-sans-serif text-900">What is a two-way review at MAI?</span></button></div>
                                        <div className="accordion-collapse collapse" id="collapseFaqAccordion6" aria-labelledby="faqAccordionHeading6" data-parent="#accordionFaq">
                                            <div className="accordion-body p-0">
                                                <div className="card-body pt-2">
                                                    <p className="ps-3 mb-3">
                                                        Here at MAI, we offer both the project owner as well as traders the option to leave review.
                                                        The project owners will be requested to provide a review for the trader they used the service from. They can take this opportunity to rate and leave on many aspects, like their work quality and customer service.
                                                        On the other hand, the traders will be given the opportunity to review the clients they worked with, where they can give feedback about whether the client made payments on time and their attitude throughout the project.
                                                    </p>
                                                    <p className="ps-3 mb-0">
                                                        The reviews check and balance all members using MAI. The fear of getting negative reviews  prevents users from exploiting our platform thus ensuring that quality service is provided and also prevents ungenuine project owners from exploiting the traders.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-none rounded-0 border-bottom">
                                    <div className="accordion-item border-0">
                                        <div className="card-header p-0" id="faqAccordionHeading7"><button className="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 border-0 text-start rounded-0 shadow-none collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion7" aria-expanded="false" aria-controls="collapseFaqAccordion7">
                                            <span className="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span> <span className="fw-medium font-sans-serif text-900">Can a registered trader use the same email to register as a project owner?</span></button></div>
                                        <div className="accordion-collapse collapse" id="collapseFaqAccordion7" aria-labelledby="faqAccordionHeading7" data-parent="#accordionFaq">
                                            <div className="accordion-body p-0">
                                                <div className="card-body pt-2">
                                                    <p className="ps-3 mb-3">
                                                        Yes they can. We realise that even traders need to look for projects that are not from their field, so we have made it easy. The same email id can be used to register as a trader as well as a project owner.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <h5 className="m-1">
                                        <Link to="/contact-us">Contact us for More Information</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Col lg={12}>
                    <Footer/>
                </Col>
            </Row>
        </>
    )
}
export default FAQ