import React from "react";
import { faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";

const CarouselImages = (props) => {
    let id = -1;
    let classes = ['a','b','c','d','e']
    return(
        <div className="wrapper">
            {props.images.map((image) => {
                while(id < 5){
                    id++;
                    // console.log(id, classes[id])
                    return (<img 
                        onClick={() => props.handleClick()} 
                        className={classes[id]} 
                        id={id} 
                        src={image.image_url}/>)
                }
            })}
        </div>
    )
};

export default CarouselImages;