import React, { useState } from 'react';
import './imageSlider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ImageSlider({slides}) {
    const [current,setCurrent] = useState(0);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    const nextSlide = ()=>{
        setCurrent(current === 2 ? 0 : current + 1);

    }

    const prevSlide = ()=>{
        setCurrent(current === 0 ? 2 : current - 1);

    }

    setTimeout(() => {
        nextSlide()
        
    }, 2000);

  


    return (
        <div className="slider">
            <ArrowBackIosIcon className="left-arrow" onClick={prevSlide} style={{width:"15px"}}/>
            <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} style={{width:"15px"}}/>
            {slides.map((slide,index)=>{
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === current && <div className="slide-div">{slide.text}</div>} 
                    </div>
                )

            })}
            
        </div>
    )
}

export default ImageSlider
