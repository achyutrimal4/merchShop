import { React, useRef} from "react";
import AboutMarquee1 from "../components/AboutMarquee1";
import AboutMarquee2 from "../components/AboutMarquee2";
import AboutMarquee3 from "../components/AboutMarquee3";
import img1 from "../media/images/about-img.jpg";
import img2 from "../media/images/about-img-2.jpg";
import img3 from "../media/images/about-img-3.jpg";
import logo from "../media/images/logo 1.png";
import { Link } from "react-router-dom";


function AboutScreen() {
  const who = useRef(null);
  const how = useRef(null);
  const socials = useRef(null);

  const handleWho = () => {
    who.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleHow = () => {
    how.current?.scrollIntoView({ behavior: "smooth" });
  }
  const handleSocials = () => {
    socials.current?.scrollIntoView({ behavior: "smooth" });
  }

  
  return (
    <>
    <div className="about-canvas">

      <Link onClick={handleWho} id="marquee-link">
        <AboutMarquee1 />
      </Link>

      <Link onClick={handleHow} id="marquee-link">
        <AboutMarquee2 />
      </Link>

      <Link onClick={handleSocials} id="marquee-link">
      <AboutMarquee3 />
      </Link>

      <div className="photos">
        <img src={img2} alt="Saman Maharjan" />
        <img src={img1} alt="Saman Maharjan" />
        <img src={img3} alt="Saman Maharjan" />
      </div>

      <div className="who" ref={who}>
        <p id="title">The man of magic, illusion and mentalism.</p>
        <div className="who-row">
          <div className="left-col">
            <img src={logo} alt="Saman Maharjan Logo" />
          </div>
          <div className="right-col">
            <div className="text-1">
              Age is just a number! True in the case of Mr. Saman Maharjan, a
              close up magician who has been learning and practicing magic
              tricks since nine. With his mom's reluctance about a magic career,
              the death of his father, and his strong passion to become a
              magician, the upheavals only made him more determined.
            </div>
            <div className="text-2">
              He says- I have a quote I live by "Magic for a smile. For me, it
              is to create that unforgettable moment between me and my
              spectators. Magic lets him interact with other people and bring
              out a different version of himself. An ordinary man gets an
              identity, and people uniquely connects with that man during the
              performance. They get thrilled and find an escape into smiling
              even Just for a few moments. For him that is precious.
            </div>
          </div>
        </div>
      </div>

      <div className="how" ref={how}>
        <div className="left-col">
          <p id="title">How did it all start?</p>
        </div>

        <div className="right-col">
          <p>
            Television. I remember me being around nine years old watching a
            legendary magician, David Blaine every Friday and I guess that
            intrigued me to get into the magic in a way. I would get curious
            about the tricks and would want to do that as well. At that time.
            there were no YouTube tutorials, so I would record the video with my
            camera and re-watch it until I learn the trick. My dad was there to
            support and inspire me to get dedicated and continue practicing
            those tricks. Actually, he always wanted and encouraged me to
            explore the creative side of myself.
          </p>
        </div>
      </div>

      <div className="about-socials" ref={socials}>
        <div className="left-col">
          <p id="title">Social Media</p>
        </div>

        <div className="right-col">
          <a
            href="https://www.youtube.com/@samanmaharjan4780"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i className="fa-brands fa-youtube"></i>{" "}
            youtube.com/@samanmaharjan4780 - 2
            <span></span>
          </a>
          <a
            href="https://www.instagram.com/saman_maharjan_/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i className="fa-brands fa-instagram"></i>{" "}
            instagram.com/saman_maharjan_/ - 19.9k
            <span></span>
          </a>
        </div>
      </div>
    </div>
    </>

  );
}
export default AboutScreen;
