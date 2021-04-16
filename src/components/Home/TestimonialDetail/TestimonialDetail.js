import React from "react";
import client1 from "./client-(3).png";

const TestimonialDetail = ({testimonial}) => {
  return (
    <div className="item">
      <div className="testi-content bg-white text-center m-3">
        <img
          src={client1}
          alt="client"
          className="img-fluid w-25 mx-auto d-block rounded-circle user-img"
        />
        <h5 className="text-dark mt-4 f-18 mb-0">{testimonial.name}</h5>
        <p className="text-muted f-14">{testimonial.technology}</p>
        <i className="remixicon-double-quotes-r h4 testi-icon" />
        <p className="text-muted f-15 mt-3 mb-0">
          {testimonial.description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialDetail;
