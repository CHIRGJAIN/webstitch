// // // src/components/HeroSection.js
// // import React from "react";
// // import "../styles/HeroSection.css";

// // const HeroSection = () => {
// //   return (
// //     <section className="hero">
// //       <div className="hero-left">
// //         <h1>
// //           Transforming Challenges into Solutions:
// //           <br />
// //           Your <span className="highlight">Trusted Partner</span>
// //         </h1>
// //         <p className="subtitle">Customized Solutions for Every Business Challenge</p>
// //         <p className="cta-msg">
// //           <span className="arrow">➜</span> Transform your business with a powerful online presence.
// //           <br />
// //           Book now for exclusive incentives!
// //         </p>
// //         <form className="consult-form">
// //           <input type="text" placeholder="Phone Number" />
// //           <select>
// //             <option>Select service</option>
// //             <option>Website Development</option>
// //             <option>Mobile App</option>
// //             <option>UI/UX Design</option>
// //             <option>SEO</option>
// //           </select>
// //           <button type="submit" className="hero-btn">Get Free Consultation</button>
// //         </form>
// //       </div>
// //       <div className="hero-right">
// //         <div className="masonry-grid">
// //           {Array.from({ length: 9 }).map((_, index) => (
// //             <img
// //               key={index}
// //               src={`/images/person${index + 1}.jpg`}
// //               alt={`WebStitch Team Member ${index + 1}`}
// //               className="masonry-item"
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;


// import React, { useEffect } from "react";
// import $ from "jquery";
// import { TweenMax, Cubic } from "gsap";
// import "../styles/HeroSection.css";

// const HeroSection = () => {
//   useEffect(() => {
//     const cards = $("#card-slider .slider-item").toArray();
//     startAnim(cards);

//     function startAnim(array) {
//       if (array.length >= 4) {
//         TweenMax.fromTo(
//           array[0],
//           0.5,
//           { x: 0, y: 0, opacity: 0.75 },
//           { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: () => sortArray(array) }
//         );

//         TweenMax.fromTo(
//           array[1],
//           0.5,
//           { x: 79, y: 125, opacity: 1, zIndex: 1 },
//           { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)", ease: Cubic.easeInOut }
//         );

//         TweenMax.to(array[2], 0.5, {
//           bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }],
//           boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
//           zIndex: 1,
//           opacity: 1,
//           ease: Cubic.easeInOut,
//         });

//         TweenMax.fromTo(
//           array[3],
//           0.5,
//           { x: 0, y: 400, opacity: 0, zIndex: 0 },
//           { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut }
//         );
//       } else {
//         $("#card-slider").append("<p>Sorry, carousel should contain more than 3 slides</p>");
//       }
//     }

//     function sortArray(array) {
//       setTimeout(() => {
//         const firstElem = array.shift();
//         array.push(firstElem);
//         startAnim(array);
//       }, 3000);
//     }
//   }, []);

//   return (
//     <section className="hero">
//       <div className="hero-left">
//         <h1>
//           Transforming Challenges into Solutions:
//           <br />
//           Your <span className="highlight">Trusted Partner</span>
//         </h1>
//         <p className="subtitle">Customized Solutions for Every Business Challenge</p>
//         <p className="cta-msg">
//           <span className="arrow">➜</span> Transform your business with a powerful online presence.
//           <br />
//           Book now for exclusive incentives!
//         </p>
//         <form className="consult-form">
//           <input type="text" placeholder="Phone Number" />
//           <select>
//             <option>Select service</option>
//             <option>Website Development</option>
//             <option>Mobile App</option>
//             <option>UI/UX Design</option>
//             <option>SEO</option>
//           </select>
//           <button type="submit" className="hero-btn">Get Free Consultation</button>
//         </form>
//       </div>

// <div className="hero-right">
//   <div id="card-slider">
//     {Array.from({ length: 5 }).map((_, index) => (
//       <div key={index} className="slider-item">
//         <div className="notification-card">
//           <h4>📢 Notification {index + 1}</h4>
//           <p>This is a stylish notification message #{index + 1} to grab attention.</p>
//         </div>
//       </div>
//     ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Transforming Challenges into Solutions:
          <br />
          Your <span className="highlight">Trusted Partner</span>
        </h1>
        <p className="subtitle">Customized Solutions for Every Business Challenge</p>
        <p className="cta-msg">
          <span className="arrow">➜</span> Transform your business with a powerful online presence.
          <br />
          Book now for exclusive incentives!
        </p>
        <form className="consult-form">
          <input type="text" placeholder="Phone Number" />
          <select>
            <option>Select service</option>
            <option>Website Development</option>
            <option>Mobile App</option>
            <option>UI/UX Design</option>
            <option>SEO</option>
          </select>
          <button type="submit" className="hero-btn">Get Free Consultation</button>
        </form>
      </div>

      <div className="hero-right">
        <img
          src="/assets/75ez.gif"
          alt="Business Animation"
          className="hero-gif"
        />
      </div>
    </section>
  );
};

export default HeroSection;

