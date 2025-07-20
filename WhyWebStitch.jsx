import React from "react";
import "../styles/WhyWebStitch.css";

const skills = [
  { name: "UI/UX", value: 81 },
  { name: "Branding", value: 72 },
  { name: "Marketing", value: 89 },
  { name: "Web Development", value: 90 },
];

const WhyWebstitch = () => {
  return (
    <div>
      <div className="why-section">
        <h2>
          Ensuring your growth,<br />we deliver
        </h2>
        <h1>
          exceptional{" "}
          <span className="highlight">web development solutions.</span>
        </h1>
        <p className="why-subtext">
          The web development services offered by Groweb can be categorized
          based on the expertise required to execute the project (design,
          develop, maintain). Broadly, these services fall into three main
          categories: front-end development, back-end development, and
          full-stack development.
        </p>

        <div className="why-content">
          <div className="left-box">
            <h1>7+</h1>
            <p className="exp-text">Years' Experience in IT</p>
            <h2>
              Discover Our<br />
              <span className="highlight">Success Stories</span>
            </h2>
          </div>
          <div className="right-box">
            {skills.map((skill, index) => (
              <div className="progress-item" key={index}>
                <div className="label-row">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Business Growth Steps Section */}
      <section className="growth-section">
        <div className="growth-container">
          <h5 className="section-subtitle">HOW WE WORKS</h5>
          <h2 className="section-title">
            How it drives <span className="highlight">your business growth</span>
          </h2>

          <div className="step-line">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="step-circle">
                {num}
              </div>
            ))}
          </div>

          <div className="step-cards">
            <div className="step-card">
              <h4>01. Consultation</h4>
              <p>
                We engage with clients to understand their requirements and
                objectives, laying the foundation for a tailored development plan.
              </p>
            </div>
            <div className="step-card">
              <h4>02. Concepts & Strategies</h4>
              <p>
                Our team brainstorms and devises innovative strategies to provide the
                optimal web development solutions tailored to your needs.
              </p>
            </div>
            <div className="step-card">
              <h4>03. Development & Testing</h4>
              <p>
                Following the agreed-upon strategies, we develop and rigorously test
                the solutions, providing feedback and making necessary adjustments.
              </p>
            </div>
            <div className="step-card">
              <h4>04. Deployment & Launch</h4>
              <p>
                Upon final approval, we execute the plan and launch the web solutions
                as per the agreed contract, ensuring everything is seamlessly
                integrated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWebstitch;
