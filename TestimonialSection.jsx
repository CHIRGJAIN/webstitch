// src/components/TestimonialSection.js
import React, { useState } from "react";
import "../styles/Testimonial.css";

const testimonials = [
  {
    image: "/images/person1.jpg",
    quote:
      "When your perseverance leads to incredible results, you know you've succeeded. @webstitch development connects clients and businesses on a fair playing field.",
    name: "RUTVIK KSHIRSAGAR",
    company: "Webstitch",
  },
  {
    image: "/images/person2.jpg",
    quote:
      "Webstitch delivered our project on time and exceeded our expectations. Their team is highly professional and creative!",
    name: "PRIYA SHARMA",
    company: "KalaClap",
  },
  {
    image: "/images/person3.jpg",
    quote:
      "The best web development experience I've had. Communication was clear and the results were fantastic.",
    name: "ARJUN PATEL",
    company: "Videshi Jodi",
  },
  {
    image: "/images/person4.jpg",
    quote:
      "Our business grew rapidly after partnering with Webstitch. Highly recommended for any digital needs!",
    name: "SNEHA DESAI",
    company: "SVK Landmark",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonial-container">
      <button className="testimonial-nav left" onClick={prevTestimonial} aria-label="Previous testimonial">&#8592;</button>
      <div className="testimonial-card">
        <div className="testimonial-left">
          <img src={testimonials[current].image} alt={testimonials[current].name} />
        </div>
        <div className="testimonial-right">
          <p className="testimonial-text">"{testimonials[current].quote}"</p>
          <p className="author">{testimonials[current].name}</p>
          <p className="company">{testimonials[current].company}</p>
        </div>
      </div>
      <button className="testimonial-nav right" onClick={nextTestimonial} aria-label="Next testimonial">&#8594;</button>
    </section>
  );
};

export default TestimonialSection;
