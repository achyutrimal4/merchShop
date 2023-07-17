import React from "react";
import Marquee from "react-fast-marquee";
import logo from "../media/images/logo 1.png"
import { Link } from "react-router-dom";

function FastMarquee() {
  return (
      <Marquee className="fast-marquee marquee-border" style={{paddingTop:'0px', marginTop:"2em"}}>
        <Link to='' className="marquee-content" >
        <p className="text-shadow">Gift Cards</p>
        <img src={logo} alt="logo"/>
        </Link>

        <Link to='' className="marquee-content" >
        <p className="text-shadow">Gift Cards</p>
        <img src={logo} alt="logo"/>
        </Link>

        <Link to='' className="marquee-content" >
        <p className="text-shadow">Gift Cards</p>
        <img src={logo} alt="logo"/>
        </Link>

        <Link to='' className="marquee-content" >
        <p className="text-shadow">Gift Cards</p>
        <img src={logo} alt="logo"/>
        </Link>

        <Link to='' className="marquee-content" >
        <p className="text-shadow">Gift Cards</p>
        <img src={logo} alt="logo"/>
        </Link>

        <Link to='' className="marquee-content" >
        <p className="text-shadow">Gift Cards</p>
        <img src={logo} alt="logo"/>
        </Link>

        <Link to='' className="marquee-content" >
        <p className="text-shadow">Gift Cards</p>
        <img src={logo} alt="logo"/>
        </Link>

        <Link to='' className="marquee-content" >
        <p className="text-shadow">Gift Cards</p>
        <img src={logo} alt="logo"/>
        </Link>
      </Marquee>
  );
}
export default FastMarquee;
