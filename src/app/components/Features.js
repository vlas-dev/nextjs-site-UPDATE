import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; 
import Image1 from "../assets/Image1.jpeg";
import Image2 from "../assets/Image2.jpeg";
import Image3 from "../assets/Image3.jpeg";

export default function Features() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility: true, // Improved accessibility
    responsive: [
      // Responsive settings
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      text: (
        <div className="flex flex-col items-center justify-center h-screen p-4">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-center h-1/6">
            Synergy AI handles your customer&apos;s questions
          </h2>
          <div>
            <Image src={Image1} alt="Image 1" width={500} />
          </div>
        </div>
      ),
    },
    {
      text: (
        <div className="flex flex-col items-center justify-center h-screen p-4">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-center h-1/6">
            Synergy integrates your favorites management tools
          </h2>
          <div>
            <Image src={Image2} alt="Image 2" width={500} />
          </div>
        </div>
      ),
    },
    {
      text: (
        <div className="flex flex-col items-center justify-center h-screen p-4">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-center h-1/6">
            Join Synergy in a few simple steps
          </h2>
          <div>
            <Image src={Image3} alt="Image 3" width={500} />
          </div>
        </div>
      ),
    },
  ];

  const customStyles = `
    .slick-dots li button {
      width: 20px;
      height: 20px;
    }
    .slick-dots li.slick-active button {
      background: #111827;
      border-radius: 20%;
    }
    .slick-prev:before,
    .slick-next:before {
      color: #111827;
      font-size: 32px;
    }
    .slick-prev {
      left: -40px;
    }
    .slick-next {
      right: -30px;
    }
  `;

  return (
    <div id="features" className="py-10 bg-gray-100 pb-8 min-h-screen">
      <style>{customStyles}</style>
      <div className="container mx-auto px-4 md:max-w-3xl lg:max-w-5xl scale-75">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="text-center">
              {slide.text}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
