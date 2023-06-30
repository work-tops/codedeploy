import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import Footer from "./Footer";
function TermsOfUse() {
    return (
        <>
            <Row className="mb-5">
                <NavbarStandard />
            </Row>
            <div className="card mt-7 ms-2 me-2 mb-3">
                <div className="bg-holder d-none d-lg-block bg-card" ></div>
                <div className="card-header bg-light">
                    <h3>Terms & Conditions</h3>
                </div>
                <div className="card-body position-relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="mb-3">AGREEMENT TO OUR LEGAL TERMS</h5>
                            <p className="text-justify text-capitalize mb-0 text-justify">
                                We are Myproject.AI, doing business as MAI [‘Company’, ‘we’, ‘us’, or ‘our’], a company registered in the United Kingdom at 1 De la Warr Way, Cambourne, Cambridgeshire, CB23 6DX, United Kingdom.
                                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity [‘you’], and MYProject.AI, concerning your access to and use of the services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.

                                Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right , in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the “Last updated” date of these Legal terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.

                                The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ms-2 me-2 g-0">
                <div className="col-lg-8 pe-lg-2">
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="ourservices">Our Services</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-justify text-capitalize mb-0 ">
                                The information provided when using the Services is not intended for distribution to or use
                                by any person or entity in any jurisdiction or country where such distribution or use would
                                be contrary to law or regulation or which would subject us to any registration requirement within
                                such jurisdiction or country. Accordingly, those persons
                                who choose to access the Services from other locations do so on their own initiative and are
                                solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h5 className="mb-0" id="ipr">INTELLECTUAL PROPERTY RIGHTS</h5>
                        </div>
                        <div className="card-body">
                            <h6 className="text-primary">Your use of our Services</h6>
                            <p className="text-justify text-capitalize mb-3 ">
                                Subject to your compliance with these Legal Terms, including the
                                ‘PROHIBITED ACTIVITIES’ action below, we grant you a non-exclusive,
                                non-transferable, revocable licence to:
                            </p>
                            <ul type="">
                                <li className="text-capitalize">access the Services; and
                                </li>
                                <li className="text-capitalize">download or print a copy of any portion of the content to which you have properly gained access</li>
                            </ul>
                            <p className="text-justify text-capitalize mt-3 ">
                                solely for your personal, non-commercial use or internal business purpose.
                                Except as set out in this section or elsewhere in our Legal Terms, so part of
                                the services and no Content or Marks may be copied, reproduced, aggregated,
                                republished, uploaded, posted, publicly displayed, encoded, translated,
                                transmitted, distributed,sold, licensed, or otherwise exploited for any commercial
                                purpose, whatsoever, without our express prior written permission.
                            </p>
                            <p className="text-justify text-capitalize mt-3 ">
                                If you wish to make use of the Services, Content, or Marks other than as set out in this
                                section or elsewhere in our Legal terms, please address your request to: info@myproject.ai.
                                If we ever grant you the permission to post, reproduce or publicly display any part of our
                                Services or Content, you must identify us as the owners or licensors of the Services, Content,
                                or Marks and ensure that any copyright or proprietary notice appears or is visible on posting,
                                reproducing, or displaying our discontent.
                            </p>
                            <p className="text-justify text-capitalize mt-3 ">
                                We reserve all rights not expressly granulated to you
                                in and to the Services,
                                Content, and Marks.

                            </p>
                            <p className="text-justify text-capitalize mt-3 ">
                                Any breach of these intellectual property Rights will constitute a material breach
                                of our Legal Terms and your right to use our Services will terminate immediately.
                            </p>
                            <hr className="my-4"></hr>
                            <h6 className="text-primary">Your submissions and contributions</h6>
                            <p className="text-justify text-capitalize mt-3 ">
                                Please review this section and the ‘PROHIBITED ACTIVITIES’ section
                                carefully prior to using our Services to understand the [a] rights
                                you give us and [b] obligations you have when you post or upload any
                                content through the Services.
                            </p>
                            <p className="text-justify text-capitalize mt-3 ">
                                <span className="fw-bold me-2">Submissions:</span>
                                By directly sending us any question, comment, suggestion, idea, feedback,
                                or other information about the Services [‘Submissions’], you agree to assign
                                us to all intellectual property rights in such Submission. You agree that we
                                shall own this Submission and be entitled to its unrestricted use
                                and dissemination for any lawful purpose, commercial or otherwise, without
                                acknowledgement or compensation to you.
                            </p>
                            <p className="text-justify text-capitalize mt-3 ">
                                <span className="fw-bold me-2">Contributions:</span>
                                The Services may invite you to chat, contribute to, or participate in blogs,
                                message boards, online forums and other functionality during which you may create,
                                submit, post, display, transmit, publish, distribute, or broadcast content and materials
                                to us or through the Services, including but not limited to text, writings, video, audio,
                                photographs, music, graphics, comments, reviews, rating suggestions, personal informations,
                                or other material [‘Contributions’]. Any Submission that is publicly posted shall also be treated
                                as a Contribution. You understand that Contributions may be viewable by other users of the Services
                                and possibly through third-party websites.

                            </p>
                            <p className="text-justify text-capitalize mt-3 ">
                                <span className="fw-bold me-2">When you post Contributions, you grant us the licence [including use of your name, trademarks, and logos]:</span>
                                By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable,
                                perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and
                                licence to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly reform, publicly display, reformat, translate, excerpt [in whole or in part], exploit your Contributions [including, without limitation, your image, name, and voice] for any purpose, commercial, advertising, or otherwise, tp prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense the licences granted in this section.\
                                Our use and distribution may occur in any media formats and through any media channels.
                            </p>
                            <p className="text-justify text-capitalize mt-3 ">
                                The licence includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.
                            </p>
                            <p className="text-justify text-capitalize mt-3 ">
                                <span className="fw-bold me-2">You are responsible for what you post or upload:</span>
                                By sending us Submissions an/or posting Contributions through any part of the Services or making Contributions accessible through the Services by linking your account through he Services to any of your Social networking accounts, you:
                            </p>
                            <ul type="">
                                <li>
                                    confirm that you have read and agree with our ‘PROHIBITED ACTIVITIES’ and will not post, send, publish, upload, or transmit through the Services any Submission nor post any Contribution that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;
                                </li>
                                <li>
                                    to the extent permissible by applicable law, waive any and all moral rights to any such Submission and/or Contribution;
                                </li>
                                <li>
                                    warrant  that any such Submission and/or Contributions are original to you or that you have the necessary rights and licences to submit such Submissions and/or Contributions and that you have fill authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions; and
                                </li>
                                <li>
                                    warrant  and represent that your Submissions and/or Contributions do not constitute any confidential information.
                                </li>
                            </ul>
                            <p className="text-justify text-capitalize mt-3 ">
                                You are solely responsible for your Submissions and/or Contributions
                                and you expressly agree to reimburse us for any and all losses that we
                                may suffer because of your breach of [a] this section,
                                [b] any third party’s intellectual property rights, or [c] applicable law.
                            </p>
                            <p className="text-justify text-capitalize mt-3 ">
                                <span className="fw-bold me-2">We may remove or edit your Content:</span>
                                Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal terms. If we remove or edit any such Contributions, we may also suspend or disable your account and report you to the authorities.
                            </p>
                            <hr className="my-4"></hr>
                            <h6 className="text-primary">Copyright infringement </h6>
                            <p className="text-justify text-capitalize mb-0 ">
                                We respect the intellectual property rights of otters. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately refer to the ‘COPYRIGHT INFRINGEMENTS’ section below.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h5 className="mb-0" id="USER_REPRESENTATIONS">USER REPRESENTATIONS</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-justify text-capitalize mb-0 ">
                                By using the Services, you represent and warrant that: [1] all registration information you submit will be true, accurate, current, and complete; [2] you will maintain the accuracy of such information and promptly update such registration information as necessary; [3] you have the legal capacity and you agree to comply with these Legal terms; [4] you are not a minor in the jurisdiction in which you reside; [5] you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; [6] you will not use the Services for any illegal or unauthorised purpose; and [7] your use of the Services will not violate any applicable law or regulation.

                                If you provide any information that is untrue, in accurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services [or any portion thereof].
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h5 className="mb-0" id="USER_REGISTRATION">USER REGISTRATION</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-justify text-capitalize fs-0 mb-0 ">
                                You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We receive the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene or otherwise objectionable.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h5 className="mb-0" id="PRODUCTS">PRODUCTS</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-justify text-capitalize mb-0 ">
                                We make every effort to display as accurately as possible the colours, features,
                                specifications, and details of the product will be accurate, complete, reliable,
                                current, or free of other errors, and your electronic display may not accurately
                                reflect the actual colours and details of the products. All products are subject to
                                availability, and we cannot guarantee that items will be in stock. We reserve the right
                                to discontinue any products at any time for any reasons. Prices for all products are subject to change.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h5 className="mb-0" id="PURCHASES_AND_PAYMENT">PURCHASES AND PAYMENT</h5>
                        </div>
                        <div className="card-body">
                            <h6 className="text-primary">We accept the following forms of payment: </h6>
                            <li className="fw-bold text-900">CARD & BACS</li>
                            <p className="text-justify text-capitalize mb-0 ">
                                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Pound sterling.

                                You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. If your order is subject to recurring charges, then you consett to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.

                                We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserved the right to limit or prohibit orders that, in our sole judgement, appear to be placed by dealers, resellers, or distributors.

                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="RETURN_AND_REFUND_POLICY">Return & Refund Policy</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">To follow the selected trader’s policies.</p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="PROHIBITED_ACTIVITIES">PROHIBITED ACTIVITIES</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                You may not access or use the Services for any purpose other
                                than that for which we make the Services available.The Services
                                may not be used in connection with any commercial endeavours
                                except those that are specifically endorsed or approved by us.
                            </p>
                            <p className="mb-3">
                                As a user of the Services, you agree not to:
                            </p>
                            <ul>
                                <li>
                                    Systemically retrieve data or other content from the Services to create or compile,
                                    directly,directly or indirectly, a collection, compilation, database, or directory without written permission from us.
                                </li>
                                <li>
                                    Trick, defraud, or mislead us and other users,
                                    especially in any attempt to learn sensitive account
                                    information such as user passwords.
                                </li>
                                <li>
                                    Circumvent, disable, or otherwise interfere with security-related features of the Services,
                                    including features that prevent or restrict the use or copying of any Content
                                    or enforce limitations on the use of the Services and/or the Content contained therein.
                                </li>
                                <li>
                                    Disparage, tarnish, otherwise harm, in our opinion, us and/or the Services.
                                </li>
                                <li>
                                    Use any information obtained from the Services in order to harass, abuse, or harm another person.
                                </li>
                                <li>
                                    Make improper use of our support services or submit false reports of abuse or misconduct.
                                </li>
                                <li>
                                    Use the Services in a manner inconsistent with any applicable laws or regulations.
                                </li>
                                <li>
                                    Engage in unauthorised framing of or linking to the Services.
                                </li>
                                <li>
                                    Upload or transmit [or attempt to upload or transmit] viruses, trojan horses, or other material,
                                    including excessive use of capital letters and spamming [continuous posting of repetitive text], that
                                    interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts,
                                    alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
                                </li>
                                <li>
                                    Engage in any automated use of the system, such as using scouts to
                                    send comments or messages,or using any data mining, robots, or similar data gathering and extraction tools.
                                </li>
                                <li>
                                    Delete the copyright or other proprietary rights notice from any Content.
                                </li>
                                <li>
                                    Attempt to impersonate another user or person or use the username of another user.
                                </li>
                                <li>
                                    Upload or transmit  [or attempt to upload or transmit] any material that acts as a
                                    passive or active information collection or transmission mechanism, including without
                                    limitation, clear graphics interchange formats [‘gifs’], 1x1 pixels, web bugs, cookies,
                                    or other similar devices [sometimes referred to as ‘spyware’ or’ passive collection
                                    mechanism’ or ‘pcms’].
                                </li>
                                <li>
                                    Interfere with, disrupt, or create an
                                    undue burden on the
                                    Services or the networks or services
                                    connected to the Services.
                                </li>
                                <li>
                                    Harass, annoy, intimidate or threaten any of our employees
                                    or agents engaged in providing any portion of the Services
                                    to you.
                                </li>
                                <li>
                                    Attempt to bypass any measures of the Services designed to
                                    prevent or restrict access to the Services, or any portion
                                    of the Services.
                                </li>
                                <li>
                                    Copy or adapt the Services’ software,including but not limited
                                    to Flash, PHP, HTML, JavaScript, or other code.
                                </li>
                                <li>
                                    Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.
                                </li>
                                <li>
                                    Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorised script or other software.
                                </li>
                                <li>
                                    Use a buying agent or purchasing agent to make purchases on the Services.
                                </li>
                                <li>
                                    Make any unauthorised use of the services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences.
                                </li>
                                <li>
                                    Use the services as part of any effort to compete with us or otherwise use the Services and/or Content for any revenue-generating endeavour or commercial enterprise.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="USER_GENERATED_CONTRIBUTIONS">USER GENERATED CONTRIBUTIONS</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide
                                you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the
                                Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material
                                [collectively ‘Contributions’]. Contributions may be viewable by other users of the services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions , you thereby represent and warrant that:
                            </p>
                            <li>
                                The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
                            </li>
                            <li>
                                You are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise, the Services and these Legal terms.
                            </li>
                            <li>
                                You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.
                            </li>
                            <li>
                                Your Contributions are not false, inaccurate, or misleading.
                            </li>
                            <li>
                                Your Contributions are not unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, other forms of solicitation.
                            </li>
                            <li>
                                Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, or otherwise objectionable [as determined by us].
                            </li>
                            <li>
                                Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
                            </li>
                            <li>
                                Your Contributions are not used to harass or threaten [in the legal sense of those terms] any other person and to promote violence against a specific person or class of people.
                            </li>
                            <li>
                                Your Contributions do not violate any applicable law, regulation, or rule.
                            </li>
                            <li>
                                Your Contributions do not violate the privacy or publicity rights of any third party.
                            </li>
                            <li>
                                Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.
                            </li>
                            <li>
                                Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
                            </li>
                            <li>
                                Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.
                            </li>
                            <p>
                                Any use of the Services in violation of the foregoing violates
                                these Legal Terms and may result in, among other things,
                                termination or suspension of your rights to use the Services.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="CONTRIBUTION_LICENCE">CONTRIBUTION LICENCE</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                By posting your Your Contributions to any part of the Services or making Contributions accessible to the services by linking your account from the Services to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and licence to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt [in whole or in part], and distribute such Contributions [including, without limitation, your image and voice] for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorise sub licences of the foregoing. The use and distribution may occur in any media formats and through any media channels.
                            </p>
                            <p className="mb-3">
                                The licence will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.
                            </p>
                            <p className="mb-3">
                                We do not assert any ownership over your Contributions. You retain full ownership of all your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                            </p>
                            <p className="mb-3">
                                We have the right, in our sole and absolute discretion, [1] to edit, redact, or otherwise change any Contributions; [2] to recategoriseany Contributions to place them in more appropriate locations on the Services; and [3] to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.
                            </p>

                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="GUIDELINES_FOR_REVIEWS">GUIDELINES FOR REVIEWS</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: [1] you should have firsthand experience with the person/entity being reviewed; [2] your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; [3] your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; [4] your reviews should not make any conclusions as to the legality of conduct; [7] you may not post any false or misleading statements; and [8] you may not organise a campaign encouraging others to post reviews, whether positive or negative.
                            </p>
                            <p className="mb-3">
                                We may accept, reject, or remove reviews at our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and licence to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.
                            </p>

                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="SOCIAL_MEDIA">SOCIAL MEDIA</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                As part of the functionality of the Services, you may link your account
                                with online accounts you have with third-party service providers [each such account, a
                                'Third-Party Account'] by either: [1] providing your Third-Party Account login
                                information through the Services; or [2] allowing us to access your Third-Party
                                Account, as is permitted under the applicable terms and conditions that govern
                                your use of each Third-Party Account. You represent and warrant that you are
                                entitled to disclose your Third-Party Account login information to us and/or
                                grant us access to your Third-Party Account, without breach by you of any of
                                the terms and conditions that govern your use of the applicable Third-Party Account,
                                and without obligating us to pay any fees or making us subject to any usage limitations
                                imposed by the third-party service provider of the Third-Party Account. By granting us access
                                to any Third-Party Accounts, you understand that [1] we may access, make available, and store
                                [if applicable] any content that you have provided to and stored in your Third-Party Account
                                [the 'Social Network Content'] so that it is available on and through the Services via your
                                account, including without limitation any friend lists and [2] we may submit to and receive from
                                your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account
                                on the Services. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third- party service provider, the Social Network Content may no longer be available on and through the Services. You will have the ability to disable the connection between your account on the Services and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT[S] WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Services. You can deactivate the connection between the Services and your Third-Party Account by contacting us using the contact information below or through your account settings [if applicable]. We will attempt to delete any information stored on our servers that was obtained through such a Third-Party Account, except the username and profile picture that become associated with your account.
                            </p>
                        </div>

                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="THIRD_PARTY_WEBSITES_AND_CONTENT">THIRD-PARTY WEBSITES AND CONTENT</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                The Services may contain [or you may be sent via the Site] links to other websites [Third-Party Websites'] as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties [Third-Party Content']. Such Third-Party Websites and Third- Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="ADVERTISERS">ADVERTISERS</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="SERVICES_MANAGEMENT">SERVICES MANAGEMENT</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                We reserve the right, but not the obligation, to: [1] monitor the Services for violations of these Legal Terms; [2] take appropriate legal action against anyone who,
                                in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law
                                enforcement authorities; [3] in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable [to the extent
                                technologically feasible] any of your Contributions or any portion thereof; [4] in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and [5] otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="PRIVACY_POLICY">PRIVACY POLICY</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United Kingdom. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United Kingdom, then through your continued use of the Services, you are transferring your data to the United Kingdom, and you expressly consent to have your data transferred to and processed in the United Kingdom.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="COPYRIGHT_INFRINGEMENTS">COPYRIGHT INFRINGEMENTS</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below [a 'Notification']. A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Services infringes your copyright, you should consider first contacting an attorney
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="TERMS_AND_TERMINATION">TERMS AND TERMINATION</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                These Legal Terms shall remain in full force and effect while you use the Services. Without limiting any other provision of these legal terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the services [including blocking certain ip addresses], to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these legal terms or of any applicable law or regulation. We may terminate your use or participation in the services or delete your account and any content or information that you posted at any time, without warning, at our sole discretion.
                                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="GOVERNING_LAW">GOVERNING LAW</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                These Legal Terms are governed by and interpreted following the laws of the United Kingdom, and the use of the United Nations Convention of Contracts for the International Sales of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law in your country to residence. MyProject Al and yourself both agree to submit to the non-exclusive jurisdiction of the courts of which means that you may make a claim to defend your consumer protection rights in regards to these Legal Terms in the United Kingdom, or in the EU country in which you reside
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="DISPUTE_RESOLUTION">DISPUTE RESOLUTION</h5>
                        </div>
                        <div className="card-body">
                            <h6 className="text-primary">
                                Binding Arbitration
                            </h6>
                            <p className="mb-3">
                                Any dispute arising from the relationships between the Parties to these Legal Terms shall be determined by one arbitrator who will be chosen in accordance with the Arbitration and Internal Rules of the European Court of Arbitration being part of the European Centre of Arbitration having its seat in Strasbourg, and which are in force at the time the application for arbitration is filed, and of which adoption of this clause constitutes acceptance. The seat of arbitration shall be the United Kingdom. The language of the proceedings shall be English Applicable rules of substantive law shall be the law of the United Kingdom.
                            </p>
                            <h6 className="text-primary">
                                Restrictions
                            </h6>
                            <p className="mb-3">
                                The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, [a] no arbitration shall be joined with any other proceeding; [b] there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilise class action procedures; and [c] there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                            </p>
                            <h6 className="text-primary">
                                Exceptions to Arbitration
                            </h6>
                            <p className="mb-3">
                                The Parties agree that the following Disputes are not subject to the above provisions concerning binding arbitration: [a] any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party, [b] any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorised use; and [c] any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="CORRECTIONS">CORRECTIONS</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="DISCLAIMER">DISCLAIMER</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                The services are provided on an AS-IS and AS-AVAILABLE basis. You agree that your use of the services will be at your sole risk to the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the services and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranties or representations about the accuracy or completeness of the services content or the content of any websites or mobile applications linked to the services and we will assume no liability or responsibility for any [1] errors, mistakes, or inaccuracies of content and materials, [2] personal injury or property damage of any nature whatsoever, resulting from your access to and use of the services, [3] any unauthorised access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, [4] any interruption or cessation of transmission to or from the services, [5] any bugs, viruses, trojan horses, or the like which may be transmitted to or through the services by any third party, and/or [6] any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the services. We do not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the services, any hyperlinked website, or any website or mobile application featured in any banner or other advertising, and we will not be a party to or in any way be responsible for monitoring any transaction between you and any third-party providers of products or services. As with the purchase of a product or service through any medium or in any environment, you should use your best judgement and exercise caution where appropriate.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="LIMITATIONS_OF_LIABILITY">LIMITATIONS OF LIABILITY</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the services, even if we have been advised of the possibility of such damages. Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the six [6] month period prior to any cause of action arising. Certain US state laws and international laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above disclaimers or limitations may not apply to you, and you may have additional rights.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="INDEMNIFICATION">INDEMNIFICATION</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: [1] your Contributions; [2] use of the Services; [3] breach of these Legal Terms; [4] any breach of your representations and warranties set forth in these Legal Terms; [5] your violation of the rights of a third party, including but not limited to intellectual property rights, or [6] any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defence of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="USER_DATA">USER DATA</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="ELECTRONIC_COMMUNINCATIONS_TRANSACTIONS_AND_SIGNATURES">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="MISCELLANEOUS">MISCELLANEOUS</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defences you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 ">
                        <div className="card-header bg-light">
                            <h5 className="mb-0 text-uppercase" id="CONTACT_US">CONTACT US</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-3">
                                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                            </p>
                            <p><i className="fas fa-home me-2"></i>1 De La Warr Way, Cambridge, CB23 6DX</p>
                            <p className="text-lowercase"><i className="fas fa-envelope  me-2"></i>info@myproject.ai</p>
                            <p><i className="fas fa-phone me-2"></i> +44 0330 000 5000</p>
                        </div>
                    </div>
                </div>

                {/* MODIFICATIONS_AND_INTERRUPTIONS */}
                <div className="col-lg-4 mb-3 ps-lg-2">
                    <div  className="sticky-sidebar">
                        <div className="card sticky-top sticky-sidebar_1">
                            <div className="card-header border-bottom">
                                <h6 className="mb-0 fs-0">TABLE OF CONTENTS</h6>
                            </div>
                            <div  className="card-body">
                                <div className="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#ourservices">OUR SERVICES</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#ipr">INTELLECTUAL PROPERTY RIGHTS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#USER_REPRESENTATIONS">USER REPRESENTATIONS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#USER_REGISTRATION">USER REGISTRATION</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#PRODUCTS">PRODUCTS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#PURCHASES_AND_PAYMENT">PURCHASES AND PAYMENT</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#RETURN_AND_REFUND_POLICY">RETURN AND REFUND POLICY</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#PROHIBITED_ACTIVITIES">PROHIBITED ACTIVITIES</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#USER_GENERATED_CONTRIBUTIONS">USER GENERATED CONTRIBUTIONS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#CONTRIBUTION_LICENCE">CONTRIBUTION LICENCE</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#GUIDELINES_FOR_REVIEWS">GUIDELINES FOR REVIEWS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#SOCIAL_MEDIA">SOCIAL MEDIA</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#THIRD_PARTY_WEBSITES_AND_CONTENT">THIRD-PARTY WEBSITES AND CONTENT</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#ADVERTISERS">ADVERTISERS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#SERVICES_MANAGEMENT">SERVICES MANAGEMENT</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#PRIVACY_POLICY">PRIVACY POLICY</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#COPYRIGHT_INFRINGEMENTS">COPYRIGHT INFRINGEMENTS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#TERMS_AND_TERMINATION">TERMS AND TERMINATION</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#MODIFICATIONS_AND_INTERRUPTIONS">MODIFICATIONS AND INTERRUPTIONS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#GOVERNING_LAW">GOVERNING LAW</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#DISPUTE_RESOLUTION">DISPUTE RESOLUTION</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#CORRECTIONS">CORRECTIONS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#DISCLAIMER">DISCLAIMER</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#LIMITATIONS_OF_LIABILITY">LIMITATIONS OF LIABILITY</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#INDEMNIFICATION">INDEMNIFICATION</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#USER_DATE">USER DATE</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#ELECTRONIC_COMMUNINCATIONS_TRANSACTIONS_AND_SIGNATURES">ELECTRONIC COMMUNINCATIONS,TRANSACTIONS AND SIGNATURES</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#MISCELLANEOUS">MISCELLANEOUS</a></div>
                                    <div className="nav-item"><a className="nav-link px-0 py-1" href="#CONTACT US">CONTACT US</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default TermsOfUse