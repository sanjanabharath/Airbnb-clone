import React from "react";
import star from "../images/star.png"

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.img} className="card--img" alt="card--img"/>
            <div className="class--stats">
            <img src={star} alt="star" id="star--img"/>
            <span id="experience--content">{props.rating} <span className="grey">({props.reviewCount}) . {props.location}</span> </span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;