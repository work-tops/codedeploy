import React from "react";
function Footer() {
    return (
        <div>
            <div className="footer-box">
                <div className="Decbase">
                    <h5 classname="footer-title">DECBASE</h5>
                    <p className="desc">But i must explain you all
                        this mistaken
                        idea of denouncing pressure.</p>
                </div>
                <div className="Quick-Links">
                    <ul type='none'>
                        <li id="links"><h5 classname="footer-title">Quick Links</h5></li>
                        <li id="links">About Our Company</li>
                        <li id="links">Service WE Provide</li>
                        <li id="links">Carrer & Opportunity</li>
                        <li id="links">Privacy & Policy</li>
                        <li id="links">Contact Us</li>
                    </ul>
                </div>
                <div className="Company">
                    <ul type='none'>
                        <li id="links"><h5 classname="footer-title">Company</h5></li>
                        <li id="links">About Company</li>
                        <li id="links">Our Testimonials</li>
                        <li id="links">Latest News</li>
                        <li id="links">Our Mission</li>
                        <li id="links">Get a free Quot</li>
                    </ul>
                </div>
                <div className="Contact-us">
                    <h5 classname="footer-title">Contact us</h5>
                    <p id="address">Sagrada Famila,Herba</p>
                    <p id="address">Street Front USA</p>
                    <p id="address">brandoxide@gmail.com</p>
                    <p id="address">002-568423591</p>
                </div>
                <div className="Follow-Us">
                    <h5 classname="footer-title">Follow Us</h5>
                    <i className="ri-facebook-circle-fill"></i>
                    <i className="ri-twitter-fill"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-linkedin-box-fill"></i>
                </div>
            </div>
            <p className="copyrights">CopyRight @ 2020 brandoxide.all right reserved</p>
        </div>
    )
}
export default Footer