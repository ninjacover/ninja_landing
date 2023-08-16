import React, { Component } from "react";
import Link from "next/link";
import ContactForm from "../Contact/ContactForm";
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
  };
  render() {
    return (

      <div className="get-quat-area ptb-100">
        
        <div  style={{display:'flex'}}>
<ContactForm/>
      <img src="/images/NinjaContactUs.png" alt="logo" style={{width:'20%',marginRight:'50px'}}/>

      
        </div>
      </div>
    );
  }
}
