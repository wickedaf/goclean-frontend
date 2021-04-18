import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Service = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("https://goclean-react.herokuapp.com/allservice")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <section className="">
      <div className="container my-5">
        <h1 className="text-center display-4 font-weight-bold">Our Service</h1>
        <div className="row text-center justify-content-center ">
          {
            serviceData?.map((service) => (
              <ServiceDetail key={service._id} service={service}></ServiceDetail>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
