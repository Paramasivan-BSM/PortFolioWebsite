import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { SiJquery, SiSelenium } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import TextMobileStepper from "./Certificates";

export const Resume = () => {
  return (
    <>
      <h5 className="fw-bold text-warning mt-5">
        {" "}
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </h5>
      <section className="py-5" id="timeline">
        <ul className="timeline-with-icons">
          <li className="timeline-item mb-5">
            <span className="timeline-icon">
              <i className="fas fa-rocket text-primary fa-sm fa-fw"></i>
            </span>

            <p className="text-white mb-2 fw-bold">
              Sri Ram Nallamani Yadava College Of Arts & Science-Tenkasi
            </p>
            <p className=" mb-2 fw-bold text-info">2020-2023</p>
            <p className="text-white">
              Bachelor Of Computer Application,8.26 CGPA
            </p>
          </li>

          <li className="timeline-item mb-5">
            <span className="timeline-icon">
              <i className="fas fa-hand-holding-usd text-primary fa-sm fa-fw"></i>
            </span>
            <p className="text-white mb-2 fw-bold">M.M.HR.SEC SCHOOL</p>
            <p className="text-info mb-2 fw-bold">2019-2020</p>
            <p className="text-white">HSC,84%</p>
          </li>

          <li className="timeline-item mb-5">
            <span className="timeline-icon">
              <i className="fas fa-users text-primary fa-sm fa-fw"></i>
            </span>

            <p className="text-white mb-2 fw-bold">M.M.HR.SEC School</p>
            <p className="text-info mb-2 fw-bold">2017-2018</p>
            <p className="text-white">SSLC,76%</p>
          </li>

          {/* <li className="timeline-item mb-5">

      <span className="timeline-icon">
        <i className="fas fa-money-bill-wave text-primary fa-sm fa-fw"></i>
      </span>
      <h5 className="fw-bold">Earned the first million $!</h5>
      <p className="text-muted mb-2 fw-bold">15 October 2020</p>
      <p className="text-muted">
        Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
        et urna sit amet massa dapibus tristique non finibus ligula. Nam
        pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
        vulputate mattis.
      </p> 
  </li>*/}
        </ul>
        <h5 className="fw-bold text-warning mt-5">
          {" "}
          <FontAwesomeIcon icon={faBriefcase} /> Experience{" "}
        </h5>
      </section>
      <section className="py-5" id="timeline">
        <ul className="timeline-with-icons">
          <li className="timeline-item mb-5">
            <span className="timeline-icon">
              <i className="fas fa-rocket text-primary fa-sm fa-fw"></i>
            </span>

            <p className="text-white mb-2 fw-bold">Livewire India</p>
            <p className="text-white">Trainee Software Engineer</p>
            <p className=" mb-2 fw-bold text-info">Oct 2023-Present</p>
          </li>
        </ul>
      </section>

      <h3>My Skills</h3>
      <div className="row">
        <div className="col-2 box">
          <FaHtml5 size="7x" />
        </div>
        <div className="col-2 box">
          <FaCss3Alt size="7x" />
        </div>
        <div className="col-2 box">
          <FaJs size="7x" />
        </div>
        <div className="col-2 box">
          <FaReact size="7x" />
        </div>
        <div className="col-2 box">
          <FaBootstrap size="7x" />
        </div>
        <div className="col-2 box">
          <FaJava size="7x" />
        </div>
      </div>
      <div className="row">
        <div className="col-2 box">
          <FaDatabase size="7x" />
        </div>
        <div className="col-2 box">
          <SiJquery size="7x" />
        </div>
        <div className="col-2 box">
          <SiSelenium size="7x" />
        </div>
        <div className="col-2 box">
          <FaGithub size="7x" />
        </div>
        <div className="col-2 box">
          <FaGitAlt size="7x" />
        </div>
        <div className="col-2 box">
          <TbSeo size="7x" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 mt-3">
          <TextMobileStepper />
        </div>
      </div>
    </>
  );
};
