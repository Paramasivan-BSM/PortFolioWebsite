// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";
// import axios from "axios";

// const ContactForm = () => {
//   let [Name, setName] = useState();
//   let [Email, setEmail] = useState();
//   let [Message, setMessage] = useState();
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:8000/data", { Name, Email, Message })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     setShowModal(true);
//   };

//   const handleClose = () => setShowModal(false);

//   return (
//     <div className="container mt-5">
//       <h2>Contact ME</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={Name}
//             onChange={(e) => setName(e.target.value)}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={Email}
//             className="form-control"
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="message" className="form-label">
//             Message:
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={Message}
//             className="form-control"
//             rows="5"
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Thank you!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           We have received your message and will contact you soon.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/data", { Name, Email, Message })
      .then((result) => {
        console.log(result);
        setShowModal(true);
      })
      .catch((err) => {
        console.error(err);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We have received your message and will contact you soon.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactForm;
