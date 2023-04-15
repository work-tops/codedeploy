import React from "react";
import HeaderPage from "../Header/HeaderPage"
import Footer from "../Footer/Footer"
import Menubar from "../Menubar/Menubar"
import interior_design from "../Images/interior-design-cost-in-mumbai.jpg"
function HomePage() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <HeaderPage />
                </div>
                <div className="col-12">
                    <Menubar />
                </div>
                <div className="col-12">
                    <div className="d-inline-block">
                        <p className="mordern-interior-tit">Mordern Interior</p>
                        <h1 className="morder-interior-h1">Create Your Interior Design</h1>
                        <ul className="mor-int-desc" type="none">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                            </li>
                            <li>
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim
                            </li>
                            <li>
                                veniam, quis nostrud exercitation.
                            </li>
                        </ul>
                        <button className="int-des-cont-btn">Contact</button>
                    </div>
                    <div className="d-inline-block">
                        <img src={interior_design} className="interior-static-image" />
                        <div className="d-inline-block int-des-border">
                            1
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default HomePage