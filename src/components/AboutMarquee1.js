import {React, useEffect} from "react";
import Marquee from "react-fast-marquee";
import logo from "../media/images/logo.png"
import { Link } from "react-router-dom";

function AboutMarquee1() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        });
        const hiddenEl = document.querySelectorAll(".hidden");
        hiddenEl.forEach((el) => observer.observe(el));
      });
  return (
      <Marquee className="fast-marquee marquee-border hidden" style={{paddingTop:'0px', marginTop:"2em"}}>
        <Link className="marquee-content about-marquee" >
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo anton"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        <p className="text-shadow anton">Who is Saman Maharjan?</p>
        <img src={logo} alt="logo"/>
        </Link>
      </Marquee>
  );
}
export default AboutMarquee1;
