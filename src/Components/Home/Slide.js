import React,{Component} from  'react';
import Slider from "react-slick";
import {img1, img2, img3} from '../../SharedComponents/Images'
import './slide.css'

export default class Slide extends Component{
    render(){
        const settings = {
            customPaging: function(i) {
              return (
                <a>
                  <img src={img1} />
                </a>
              );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div>
                    <Slider {...settings}>
                    <div>
                        <img src={img2}  className={'img-slide'}/>
                    </div>
                    <div>
                        <img src={img3} className={'img-slide'}/>
                    </div>
                    <div>
                        <img src={img1}  className={'img-slide'}/>
                    </div>
                    <div>
                        <img src={img2} className={'img-slide'}/>
                    </div>
                    </Slider>
            </div>
        );
    }
}