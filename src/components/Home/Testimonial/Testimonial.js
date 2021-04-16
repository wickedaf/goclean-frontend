import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const Testimonial = () => {
    const testimonialData = [
        {
          id: 1,
          img: "",
          name: "Irene Devoe",
          technology: "Web Development, USA",
          description:
            "Aeque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur numquam tempora.",
        },
        {
          id: 2,
          img: "",
          name: "Adrian Kidd",
          technology: "Web Designer, USA",
          description:
            "Et harum quidem a rerum that facilis est et expedita libero tempore soluta nobis cumque as impedit.",
        },
        {
          id: 3,
          img: "",
          name: "Shari Turner",
          technology: "Graphic Designer, USA",
          description:
            "Sed ut perspiciatis a unde omnis iste natus error sit as voluptatem accusantium laudantium.",
        },
        {
          id: 4,
          img: "",
          name: "Robert Story",
          technology: "Web Designer, USA",
          description:
            "Aeque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur numquam tempora.",
        },
        {
          id: 5,
          img: "",
          name: "Lisa Traxler",
          technology: "Graphic Designer, USA",
          description:
            "Et harum quidem a rerum that facilis est et expedita libero tempore soluta nobis cumque as impedit.",
        },
        {
          id: 6,
          img: "",
          name: "Michael Bang",
          technology: "Web Developer, USA",
          description:
            "Sed ut perspiciatis a unde omnis iste natus error sit as voluptatem accusantium laudantium.",
        },
        {
          id: 7,
          img: "",
          name: "Joyce Yates",
          technology: "Web Designer, USA",
          description:
            "Aeque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur numquam tempora.",
        },
      ];
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
            <OwlCarousel
                className="owl-theme client-images text-center"
                items={2}
                loop={true}
                margin={10}
                nav={false}
                dots={true}
                autoplay={true}
                responsive={responsive}
                autoplayHoverPause={true}
                autoplayTimeout={2500}
              >
                  {
                      testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                  }
              </OwlCarousel>
        </div>
    );
};

export default Testimonial;