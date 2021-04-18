import React from "react";

const TestimonialDetail = (props) => {
  const {img, name, company, description} = props.testimonial;
  return (
    <div className="item py-3 ">
      <div className="testi-content bg-white text-center m-3">
        <img
          src={img}
          alt="client"
          style={{width:'80px'}}
          className="mx-auto d-block rounded-circle user-img"
        />
        <h5 className="text-dark mt-4 f-18 mb-0">{name}</h5>
        <p className="text-muted f-14">{company}</p>
        <i className="remixicon-double-quotes-r h4 testi-icon" />
        <p className="text-muted f-15 mt-3 mb-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialDetail;
