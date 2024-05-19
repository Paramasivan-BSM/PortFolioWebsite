import "./userinfo.css";
//Components
import { Resume } from "./Resume";
import { Projectcard } from "./Projectcard";
import ContactForm from "./ContactForm";

export const Infocard = () => {
  return (
    <>
      <div className="card text-white " id="card">
        <div className="card-body">
          <ul className="nav nav-tabs bg-dark" role="tablist" id="Navtab">
            <li className="nav-item">
              <a className="nav-link active " data-bs-toggle="tab" href="#home">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#menu1">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#menu2">
                My Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#menu3">
                Contact
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="home" className="container tab-pane active blockquote">
              <br />
              <h3 className="mt-5 text-warning">About Me</h3>
              <p className="lead">
                Greetings! I'm Paramasivan, a passionate frontend engineer
                dedicated to creating engaging and seamless user experiences.
                With a blend of creativity and technical expertise, I transform
                ideas into visually appealing and functional web applications.
              </p>
              <h3 className="text-warning">My Journey</h3>
              <p className="lead">
                My journey in the world of frontend development began When i
                Studying My UG. Since then, I've been on a mission to merge
                design and technology to build interfaces that not only
                captivate users but also elevate their overall online
                experience.
              </p>
              <h3 className="text-warning">What I Do</h3>
              <p className="lead">
                In my daily work, I leverage a diverse skill set that includes
                proficiency in HTML, CSS, and JavaScript. I enjoy diving into
                the intricacies of frontend frameworks such as React, sculpting
                intuitive user interfaces that marry form and function
                seamlessly.
              </p>
              <h3 className="text-warning">Continuous Learner</h3>
              <p>
                Technology evolves at a rapid pace, and I am committed to
                staying at the forefront of industry trends. Whether it's
                attending conferences, participating in online courses, or
                experimenting with new tools, I am always eager to expand my
                knowledge and refine my craft.
              </p>
            </div>
            <div id="menu1" className="container tab-pane fade">
              <br />
              {/* <h3 classNameName='mt-5'>Resume</h3> */}
              <Resume />
            </div>
            <div id="menu2" className="container tab-pane fade">
              <br />
              <h3 className="text-warning text-left">My Works</h3>
              <Projectcard />
            </div>
            <div id="menu3" className="container tab-pane fade">
              <br />
              <h3 className="text-warning">Contact</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
