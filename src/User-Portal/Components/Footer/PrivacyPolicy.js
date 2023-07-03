import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import Footer from "./Footer";
function PrivacyPolicy() {
    return (
        <>
            <Row className="mb-5">
                <NavbarStandard />
            </Row>
            <div className="card mt-7 ms-2 me-2 mb-3">
                <div className="card-header bg-light position-relative">
                    <h1>Privacy policy</h1>
                </div>
                <div className="card-body position-relative">
                    <p className="mb-0">
                        This privacy notice for MyProject.AI ("Company" "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services").

                        Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at
                        <a href="#" className="text-lowercase ms-1">info@myproject.ai</a>
                    </p>
                </div>
            </div>
            <div className="row ms-2 me-2 g-0">
                <div className="col-lg-8 pe-lg-2">
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="WHAT_INFORMATION_DO_WE_COLLECT">WHAT INFORMATION DO WE COLLECT?</h4>
                        </div>
                        <div className="card-body">
                            <h4 className="">Personal information you disclose to us</h4>

                            <p className="mb-3">
                                In Short: We collect personal information that you provide to us.
                            </p>
                            <p className="mb-3">
                                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services when you participate in activities on the Services, or otherwise when you contact us.
                            </p>
                            <p className="mb-3">
                                Sensitive Information. We do not process sensitive information
                            </p>
                            <p className="mb-3">
                                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                            </p>

                            <hr className="my-4"></hr>
                            <h4 className="">Information automatically collected</h4>
                            <p className="mb-3">
                                In Short: Some information - such as your Internet Protocol (IP) address and/or browser and device characteristics - is collected automatically when you visit our Services.
                            </p>
                            <p className="mb-3">
                                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                            </p>
                            <p className="mb-3">
                                Like many businesses, we also collect information through cookies and similar technologies.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="HOW_DO_WE_PROCESS_YOUR_INFORMATION">HOW DO WE PROCESS YOUR INFORMATION?</h4>
                        </div>
                        <div className="card-body">
                            <p className="mb-0 ">
                                In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h4>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                In Short: We may share information in specific situations described in this section and/or with the following third parties.
                            </p>
                            <p className="mb-3">
                                We may need to share your personal information in the following situations:
                            </p>
                            <ul>
                                <li className="mb-3">
                                    Business Transfers. We may share or transfer your information in connection with, or during negotiations of any merger, sale of company assets, financing or acquisition of all or a portion of our business to another company.
                                </li>
                                <li className="mb-3">
                                    Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honour this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                                </li>
                                <li className="mb-3">
                                    Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="DO_WE_USE_COOKIES_AND_OTHER_TRACKING_TECHNOLOGIES">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h4>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
                            <p className="mb-3">We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="HOW_DO_WE_HANDLE_YOUR_SOCIAL_LOGINS">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h4>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
                            </p>
                            <p className="mb-3">
                                Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins) Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
                            </p>
                            <p className="mb-3">
                                We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
                            </p>

                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="IS_YOUR_INFORMATION_TRANSFERRED_INTERNATIONALLY">IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h4>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                In Short: We may transfer, store, and process your information in countries other than your own.
                            </p>
                            <p className="mb-3">
                                Our servers are located in. If you are accessing our Services from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information in and other countries.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION">HOW LONG DO WE KEEP YOUR INFORMATION?</h4>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.
                            </p>
                            <p className="mb-3">
                                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                            </p>
                            <p className="mb-3">
                                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="DO_WE_COLLECT_INFORMATION_FROM_MINORS">DO WE COLLECT INFORMATION FROM MINORS?</h4>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                In Short: We do not knowingly collect data from or market to children under 18 years of age.

                            </p>
                            <p className="mb-3">
                                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="#" className="text-lowercase">info@myproject.ai</a>
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="WHAT_ARE_YOUR_PRIVACY_RIGHTS">WHAT ARE YOUR PRIVACY RIGHTS?</h4>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                In Short: You may review, change, or terminate your account at any time.
                            </p>
                            <p className="mb-3">
                                If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.
                                Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided at bottom.
                            </p>
                            <p className="mb-3">
                                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent
                            </p>
                            <h4 className=" mb-3">Account Information</h4>
                            <p className="mb-3">
                                If you would at any time like to review or change the information in your account or terminate your account, you can
                            </p>
                            <p className="mb-3">
                                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h4 className="mb-0" id="DO_WE_MAKE_UPDATES_TO_THIS_NOTICE">DO WE MAKE UPDATES TO THIS NOTICE?</h4>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws
                            </p>
                            <p className="mb-3">
                                We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. It is your responsibility to review this privacy notice frequently to be informed of how we are protecting your information.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 ps-lg-2">
                    <div className="sticky-sidebar">
                        <div className="card sticky-top">
                            <div className="card-header bg-light">
                                <h4 className="mb-0">TABLE OF CONTENTS</h4>
                            </div>
                            <div className="card-body mb-3">
                                <div className="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#WHAT_INFORMATION_DO_WE_COLLECT">WHAT INFORMATION DO WE COLLECT?</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#HOW_DO_WE_PROCESS_YOUR_INFORMATION">HOW DO WE PROCESS YOUR INFORMATION?</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#DO_WE_USE_COOKIES_AND_OTHER_TRACKING_TECHNOLOGIES">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#HOW_DO_WE_HANDLE_YOUR_SOCIAL_LOGINS">HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                                    </a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#IS_YOUR_INFORMATION_TRANSFERRED_INTERNATIONALLY">IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION">HOW LONG DO WE KEEP YOUR INFORMATION?
                                    </a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#DO_WE_COLLECT_INFORMATION_FROM_MINORS">DO WE COLLECT INFORMATION FROM MINORS?
                                    </a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#WHAT_ARE_YOUR_PRIVACY_RIGHTS">WHAT ARE YOUR PRIVACY RIGHTS?</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1 text-900" href="#DO_WE_MAKE_UPDATES_TO_THIS_NOTICE">DO WE MAKE UPDATES TO THIS NOTICE?
                                    </a></div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default PrivacyPolicy