import { React } from "react";
import Marquee from "react-fast-marquee";
import logo from "../media/images/logo.png";
import { Link } from "react-router-dom";

function AboutMarquee3() {
  return (
    <Marquee
      className="fast-marquee marquee-border purple-bg"
      style={{ paddingTop: "0px", marginTop: "2em" }}
    >
      <Link className="marquee-content about-marquee">
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo anton" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
        <p className="text-shadow anton">Social media</p>
        <img src={logo} alt="logo" />
      </Link>
    </Marquee>
  );
}
export default AboutMarquee3;
