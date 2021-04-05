import React, { useContext } from 'react';
import {SliderContext} from '../App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";
import Slider from "react-slick";

function MainSlider(){
    const value = useContext(SliderContext);
    const renderSlides = () =>
    value.map(num => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));
    return   <Slider dots={true}>{renderSlides()}</Slider>;
}
export default MainSlider;