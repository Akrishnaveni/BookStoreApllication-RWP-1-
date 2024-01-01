import { FaTwitter } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaRegCopyright } from "react-icons/fa";

import "./index.css";

const Footer = () => (
  <div className="footer">
    <div className="links">
      <ul className="c-1">
        <li className="li">about us</li>
        <li className="li">tour </li>
        <li className="li">help</li>
        <li className="li">blog</li>
        <li className="li">chat</li>
        <li className="li">data</li>
        <li className="li">legal</li>
        <li className="li">privacy policy</li>
        <li className="li">work here</li>
        <li className="li">advertising info</li>
        <li className="li">mobile</li>
        <li className="li">contact us</li>
        <li className="li">feedback</li>
      </ul>
      <ul className="c-1">
        <li className="icon">
          <FaTwitter />
        </li>
        <li className="icon">
          <FaFacebookF />
        </li>
        <li className="icon">
          <TfiWorld />
        </li>
      </ul>
    </div>
    <hr className="hr" />
    <div className="c-2">
      <div className="options">
        <h1 className="h">TECHNOLOGY</h1>
        <p className="l">Stack Overflow</p>
        <p className="l">Server Fault </p>
        <p className="l">Super User</p>
        <p className="l">Web Applications</p>
        <p className="l">Ask Ubuntu </p>
        <p className="l">Webmasters </p>
        <p className="l">Game Development</p>
        <p className="l"> Tex-La Tex</p>
      </div>
      <div className="options-1">
        <h1 className="h"> </h1>
        <p className="l">Programmers</p>
        <p className="l">Unix & Linux </p>
        <p className="l">Ask Different(Apple)</p>
        <p className="l">WordPressDevelopment</p>
        <p className="l">Geographic information systems</p>
        <p className="l">Electrical Engineering</p>
        <p className="l">Android Enthusiasts</p>
        <p className="lm">+ 50 more</p>
      </div>
      <div className="options">
        <h1 className="h">LIFE/ARTS</h1>
        <p className="l">Photography</p>
        <p className="l">Science Fiction & Fantasy </p>
        <p className="l">Graphic Design</p>
        <p className="l">Movies & TV</p>
        <p className="l">Seasoned Advice</p>
        <p className="l">Home Improvement</p>
        <p className="l">Personal Finance Monkey</p>
        <p className="lm">+ 19 more</p>
      </div>
      <div className="options">
        <h1 className="h">CULTURE/RECREATION</h1>
        <p className="l">English Language & usage</p>
        <p className="l">Skeptics </p>
        <p className="l">My Yodea</p>
        <p className="l">Travel</p>
        <p className="l">Christianity</p>
        <p className="l">Arquade</p>
        <p className="l">Bicycles</p>
        <p className="lm">+ 21 more</p>
      </div>
      <div className="options">
        <h1 className="h">SCIENCE</h1>
        <p className="l">Mathematics</p>
        <p className="l">Cross Validated (stats) </p>
        <p className="l">Theoritical Computer Science</p>
        <p className="l">Physics</p>
        <p className="l">Maths Overflow</p>
        <p className="l">Chemistry</p>
        <p className="l">Biology</p>
        <p className="lm">+ 5 more</p>
      </div>
      <div className="options">
        <h1 className="h">OTHER</h1>
        <p className="l">Stack Apps</p>
        <p className="l">Meta Stack Exchange</p>
        <p className="l">Are 51</p>
        <p className="l">Stack Overflow Careers</p>
      </div>
    </div>
    <hr className="hr" />
    <p className="copy-right">
      site design / logo {"  "}
      <span>
        <FaRegCopyright />
      </span>{" "}
      2016 stack exchange Inc; user contributions licensed under cc by-sa 3.0
      attribution required
    </p>
  </div>
);

export default Footer;
