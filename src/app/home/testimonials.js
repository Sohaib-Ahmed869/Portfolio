import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const data = [
  {
    name: "donaldmccullum",
    testimonialHeading: "Review on Data Analytics Tutoring",
    testimonial:
      "Sohaibs tutoring has been instrumental in deepining my understanding of sql. His ability to explain complex concepts in a clear and patient manner creates a supportive learning environment. I will continue to work with him and highly recommend his services. He is a knowledgeable and effective tutor.",
    type: "Fiverr Review",
  },
  {
    name: "kyleemersonr",
    testimonialHeading:
      "Review on Consultation Services for Data Analytics and Visualization",
    testimonial:
      "Sohaib was professional and very detailed! I had a great time discussing the project on a final call. He was very helpful and understandable throughout the project.",
    type: "Fiverr Review",
  },
  {
    name: "sfrayetilaye",
    testimonialHeading:
      "Review on Consultation Services for Data Analytics and Visualization",
    testimonial:
      "I learned a lot from Sohaib. He delved deep into Power BI and SQL, sharing many useful tools and techniques. I'm very thankful for his expertise. Thank you!",
    type: "Fiverr Review",
  },
];

const Testimonials = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      loop={true}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      effect="fade"
      autoplay={{
        delay: 5500,
        disableOnInteraction: true,
      }}
      className="w-full"
    >
      {data.map((item) => (
        <SwiperSlide key={item.testimonialHeading} className="p-2 mb-20 mt-20">
          <div className="items-center justify-center h-84 p-10 bg-transparent shadow-sm border border-gray-200">
            <img src="commadecor.png" alt="comma" className="" />
            <h1 className="text-2xl font-bold text-white">
              {item.testimonialHeading}
            </h1>

            <p className="text-lg text-gray-300 mt-5">{item.testimonial}</p>
            <div className="flex flex-row items-center mt-5">
              <div className="ml-0">
                <div className=" flex flex-row items-center">
                  <h1 className="text-xl font-semibold text-slate-200">
                    {item.name}
                  </h1>
                  <div className="stars text-sm ml-2">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
                <p className="text-gray-400">{item.type}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
