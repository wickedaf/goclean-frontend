import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Office Cleaning",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    price: "$500",
    image: "https://xpressrow.com/html/kilino/assets/img/icon/fs-02.png",
  },
  {
    name: "Indoor Cleaning",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: "$200",
    image: "https://xpressrow.com/html/kilino/assets/img/icon/fs-04.png",
  },
  {
    name: "Floor Cleaning",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: "$100",
    image: "https://xpressrow.com/html/kilino/assets/img/icon/fs-03.png",
  },
];

const Service = () => {
  return (
    <section className="">
      <div className="container my-5">
        <h1 className="text-center display-4 font-weight-bold">Our Service</h1>
        <div className="row text-center justify-content-center ">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
