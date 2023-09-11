import React, { Component } from 'react'
import Link from 'next/link'
import Tab1 from "./quotation-form/Tab1"; 
import Tab2 from "./quotation-form/Tab2"; 
import Tab3 from "./quotation-form/Tab3";
import Tab4 from "./quotation-form/Tab4";


export default class GetAFreeQuoteForm extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
    render() {
        return (
            <div className="get-quat-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Get A Quote</span>
                        <h2>Get A Free Quote</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div 
                                className="get-quat-img"
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="1200"
                                data-aos-once="true"
                            >
                                <img src="/images/Ninja-Compare.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="quat-form">
                                <div className="tab">
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'tab1')}
                                        >
                                            <div className="dot"></div> Individual Motor
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab2')}
                                        >
                                            <div className="dot"></div> Group Motor
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab3')}
                                        >
                                            <div className="dot"></div> Individual Medical
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab4')}
                                        >
                                            <div className="dot"></div> Group Medical
                                        </li>
                                    </ul>

                                    <div className="tab_content">
                                        <Tab1 />

                                        <Tab2 />

                                        <Tab3 />

                                        <Tab4 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}