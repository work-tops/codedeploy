import React from "react";
import '../CSS/footer.css'
function FooterPage() {
    return (
        <div className="footer">
        <div className="footer_body">
            <div className="Decbase">
                <h5 classname="footer-title">DECBASE</h5>
                <p className="desc">But i must explain you all
                    this mistaken
                    idea of denouncing pressure.</p>
            </div>
            <div className="Quick-Links">
                <ul type='none'>
                    <li classname="links"><h5 classname="footer-title">Quick Links</h5></li>
                    <li classname="links">About Our Company</li>
                    <li classname="links">Service WE Provide</li>
                    <li classname="links">Carrer & Opportunity</li>
                    <li classname="links">Privacy & Policy</li>
                    <li classname="links">Contact Us</li>
                </ul>
            </div>
            <div className="Company">
                <ul type='none'>
                    <li classname="links"><h5 classname="footer-title">Company</h5></li>
                    <li classname="links">About Company</li>
                    <li classname="links">Our Testimonials</li>
                    <li classname="links">Latest News</li>
                    <li classname="links">Our Mission</li>
                    <li classname="links">Get a free Quot</li>
                </ul>
            </div>
            <div className="Contact-us">
                <h5 classname="footer-title">Contact us</h5>
                <p classname="address">Sagrada Famila,Herba</p>
                <p classname="address">Street Front USA</p>
                <p classname="address">brandoxide@gmail.com</p>
                <p classname="address">002-568423591</p>
            </div>
            <div className="Follow-Us">
                <h5 classname="footer-title">Follow Us</h5>
                <i class="ri-facebook-circle-fill"></i>
                <i class="ri-twitter-fill"></i>
                <i class="ri-instagram-line"></i>
                <i class="ri-linkedin-box-fill"></i>
            </div>
        </div>
        <p className="copyrights">CopyRight @ 2020 brandoxide.all right reserved</p>
    </div>
    )
}
export default FooterPage