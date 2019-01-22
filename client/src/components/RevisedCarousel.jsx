import React from "react";
import { faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";

const CarouselImages = (props) => {
    let classes = ['a','b','c','d','e']
    return(
        <div className="carousel">
            {props.images.map((image) => {
                for(let i = 0; i < 5; i++){
                    // console.log(i, classes[i])
                    return (<img 
                        onClick={() => props.handleClick()} 
                        className={classes[i]} 
                        id={i} 
                        src={image.image_url}/>)
                }
            })}
        </div>
    )
};

export default CarouselImages;