import React, { useState } from "react";
import MainSlider from './Components/MainSlider';
import "./styles.css";
const SliderContext = React.createContext();


function App() {
 const [slidervalue]= useState([1,2,3,4,5,6,7,8])
  return (
    <SliderContext.Provider value={slidervalue}>
      <div className="App">
        <MainSlider />
      </div>
    </SliderContext.Provider>
  );
}
export default App;
export {SliderContext}
