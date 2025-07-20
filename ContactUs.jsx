// import React from "react";
// import "../styles/ContactUs.css";

// const ContactUs = () => {
//   return (
//     <div className="contact-us-page">
//       <div className="contact-header">
//         <div className="contact-left">
//           <h2>
//             To make requests for further information, <br />
//             <span className="highlight">contact us.</span>
//           </h2>
//           <p>
//             Team up with the best collaboration from the right expertises.
//             <br />
//             We provide a wide range of web development services to ensure your success.
//           </p>
//         </div>
//         <div className="contact-right">
//           <form>
//             <label>Full Name</label>
//             <input type="text" placeholder="First Name" />

//             <label>Email <span className="required">*</span></label>
//             <input type="email" placeholder="Email Address" required />

//             <label>Phone Number <span className="required">*</span></label>
//             <input type="tel" placeholder="Phone Number" required />

//             <button type="submit">Submit Form</button>
//           </form>
//         </div>
//       </div>

//       <div className="contact-info-container">
//         <div className="contact-box">
//           <h3>Contact Info 1</h3>
//           <p>Delta-1, Greater Noida, Delhi NCR - 201308</p>
//           <a href="mailto:webstitchh@gmail.com">webstitchh@gmail.com</a>
//           <p>+91 9654308456</p>
//         </div>
//         <div className="contact-box">
//           <h3>Contact Info 2</h3>
//           <p> Delta-1, Greater Noida, Delhi NCR - 201308</p>
//           <a href="mailto:webstitchh@gmail.com.in">webstitchh@gmail.com</a>
//           <p>+91 9899721172</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-header">
        <div className="contact-left">
          <h2>
            To make requests for further information, <br />
            <span className="highlight">contact us.</span>
          </h2>
          <p>
            Team up with the best collaboration from the right expertises.
            <br />
            We provide a wide range of web development services to ensure your success.
          </p>
        </div>
        <div className="contact-right">
          <form action="https://formsubmit.co/webstitchh@gmail.com" method="POST">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="First Name" required />

            <label>Email <span className="required">*</span></label>
            <input type="email" name="email" placeholder="Email Address" required />

            <label>Phone Number <span className="required">*</span></label>
            <input type="tel" name="phone" placeholder="Phone Number" required />

            <label>Message</label>
            <input type="message" name="Your message here..." rows="4" required></input>

            {/* Hidden fields for spam protection and redirect */}
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_next" value="https://webstitch.in/thank-you" />

            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>

      <div className="contact-info-container">
        <div className="contact-box">
          <h3>Contact Info 1</h3>
          <p>Delta-1, Greater Noida, Delhi NCR - 201308</p>
          <a href="mailto:webstitchh@gmail.com">webstitchh@gmail.com</a>
          <p>+91 9654308456</p>
        </div>
        <div className="contact-box">
          <h3>Contact Info 2</h3>
          <p>Delta-1, Greater Noida, Delhi NCR - 201308</p>
          <a href="mailto:webstitchh@gmail.com">webstitchh@gmail.com</a>
          <p>+91 9899721172</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
