import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center' ,
        background: "none", 
        border: '3px solid #009EFF', 
        width: "70px",
        height: '70px',
        right: '-50px',
        color: '#000'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center' ,
        background: "none", 
        border: '3px solid #009EFF', 
        width: "70px",
        height: '70px',
        zIndex: '100',
        left: '-70px',
        color: '#000'
      }}
      onClick={onClick}
    />
  );
}

export default class AutoPlay extends React.Component {

  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        cssEase: "linear",
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="comments__block">
              <div className="comments__item">
                  <img src="./img/comments.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="comments__block">
              <div className="comments__item">
                  <img src="./img/comments.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="comments__block">
              <div className="comments__item">
                  <img src="./img/comments.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="comments__block">
              <div className="comments__item">
                  <img src="./img/comments.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="comments__block">
              <div className="comments__item">
                  <img src="./img/comments.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="comments__block">
              <div className="comments__item">
                  <img src="./img/comments.png" alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}