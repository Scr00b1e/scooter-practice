import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends React.Component {
    render() {
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          pauseOnHover: false,
          cssEase: "linear",
          arrows: false
        };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="./img/scooter.png" alt="" />
          </div>
          <div>
            <img src="./img/scooter.png" alt="" />
          </div>
          <div>
            <img src="./img/scooter.png" alt="" />
          </div>
          <div>
            <img src="./img/scooter.png" alt="" />
          </div>
          <div>
            <img src="./img/scooter.png" alt="" />
          </div>
          <div>
            <img src="./img/scooter.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}