import "./index.css";
import { FaStackOverflow } from "react-icons/fa";
import { RiQuestionMark } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuTag } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaStackExchange } from "react-icons/fa";
import { RiInbox2Fill } from "react-icons/ri";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

const SlideBar = () => (
  <div className="s-container">
    <div className="heading-container">
      <p className="heading">
        <FaStackOverflow />
        stack
        <span className="text">
          <b>overflow</b>
        </span>
      </p>
    </div>
    <div className="expand">
      <TbLayoutSidebarRightExpand width="100" />
    </div>
    <ul className="link-list">
      <li className="link-item active">
        <RiQuestionMark color="orangered" /> <p className="list">QUESTIONS</p>
      </li>
      <li className="link-item">
        <IoBagOutline />
        <p className="list">JOBS</p>
      </li>
      <li className="link-item">
        <IoDocumentTextOutline />
        <p className="list">
          DOCUMENTATION<sup className="sup">NEW</sup>
        </p>
      </li>
      <li className="link-item">
        <LuTag />
        <p className="list">TAGS</p>
      </li>
      <li className="link-item">
        <HiOutlineUser />
        <p className="list">USERS</p>
      </li>
      <li className="link-item">
        <CiBookmark />
        <p className="list">BADGES</p>
      </li>
      <li className="link-item">
        <HiOutlineSpeakerphone />
        <p className="list">ASK QUESTION</p>
      </li>
      <li className="link-item">
        <FaStackExchange />

        <p className="list">STACK EXCHANGE</p>
      </li>
      <li className="link-item">
        <RiInbox2Fill />
        <p className="list">
          INBOX <span className="inbox">24</span>
        </p>
      </li>
    </ul>
  </div>
);

export default SlideBar;
