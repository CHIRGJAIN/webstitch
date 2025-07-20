import React from "react";
import "../styles/ExcellenceSection.css";

const ExcellenceSection = () => {
  return (
    <div>
      {/* Blue CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Enhance Your Online Identity Now!</h2>
            <p>
              Create a strong online presence with our professional solutions.
              <br />
              Take your business to the next level with our superior web and
              marketing services.
            </p>
          </div>
          <div className="cta-right">
            <p className="call-label">CALL FOR ADVICE NOW!</p>
            <h3 className="phone-number">+91 9654308456</h3>
            <button className="cta-button">Contact us</button>
          </div>
        </div>
      </section>

      {/* Excellence Cards Section */}
      <section className="excellence-section">
        {/* <section
  className="cta-section"
  style={{ backgroundImage: "url('/images/world-map-dots.png')" }}
></section> */}
        <h2 className="section-title">How we claim to excel?</h2>
        <div className="cards-container">
          {[
            {
              title: "Cutting-Edge Technology",
              desc: "We use the latest tools and technologies to create innovative web solutions.",
              bg: "#f9f5f0",
              index: "01",
            },
            {
              title: "Customized Strategies",
              desc: "Our marketing strategies are tailored to each client's unique goals and audience.",
              bg: "#f0f4ff",
              index: "02",
            },
            {
              title: "Expert Team",
              desc: "Dedicated experts in web development and digital marketing, committed to exceptional outcomes.",
              bg: "#f0f6f0",
              index: "03",
            },
            {
              title: "Client-Centric Approach",
              desc: "We prioritize our clients' needs, ensuring their vision and objectives are met.",
              bg: "#fff0f0",
              index: "04",
            },
            {
              title: "Proven Track Record",
              desc: "Our track record speaks for itself—we deliver successful projects and satisfied clients.",
              bg: "#fef8ec",
              index: "05",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="card"
              style={{ backgroundColor: item.bg }}
            >
              <span className="card-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExcellenceSection;
