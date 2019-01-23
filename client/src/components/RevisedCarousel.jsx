import React from "react";
import { faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";

const CarouselImages = (props) => {
    var classes = ['a','b','c','d','e','a','b','c','d','e','a','b','c','d','e']
    let i = -1;
    console.log('IMAGE CAROUSEL PROPS: ', props);
    return(
        <div className="carouselImages">
            {props.images.map((image) => {
            // console.log(i, classes[i])
            while(i < props.images.length){
                i++;
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