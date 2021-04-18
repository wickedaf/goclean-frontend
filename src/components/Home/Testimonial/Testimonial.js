import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import { Spinner } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {
    const [ testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    // (async () => {
    //   const res = await fetch(
    //     "https://goclean-react.herokuapp.com/allTestimonial" //example and simple data
    //   );
    //   const data = await res.json();
    //   setTestimonialData(data)
    // })();

    fetch('https://goclean-react.herokuapp.com/allTestimonial')
      .then(res => res.json())
      .then(data => setTestimonialData(data));
  }, [])
     const responsive = {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      }
    return (
        <div className="container my-5 py-5">
            <h1 className="display-4 font-weight-bold text-center">What our clients say</h1>
            <Carousel autoplay infiniteLoop showStatus={false} showThumbs={false}>
                  {
                     testimonialData.map(testimonial => <TestimonialDetail key={testimonial._id} testimonial={testimonial}></TestimonialDetail>)
                  }
              </Carousel>
        </div>
    );
};

export default Testimonial;