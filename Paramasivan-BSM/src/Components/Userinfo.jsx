import "./userinfo.css";

import workingatnight from "../assets/workingatnight.jpg";
import Profile1 from "../assets/Profile1.png"; // Update the path based on the actual location of the image
// import profile2 from "./profile2.jpg";
// import EmailIcon from '@mui/icons-material/Email';
// import { FaLinkedin } from 'react-icons/fa';

import { Infocard } from "./infocard";
export const Userinfo = () => {
  return (
    <div className="row">
      <div className="col-md-4 mt-5">
        <div className="card ">
          <div className="display-picture">
            <img src={Profile1} className="img-fluid" alt="" />
          </div>
          <div className="banner">
            <img src={workingatnight} alt="" />
          </div>
          <div className="content">
            <h5 className="text-white">Paramasivan B</h5>
            <div>
              <span className="text-white">Frontend-Engineer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <Infocard />
      </div>
    </div>
  );
};
