import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Search from "../Search/Search";
import "../StarRating/StarRatingClass.css"

const StarRating= () =>{
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return(
        <div className="starRating-container">
            {[...Array(5)].map((star, i) =>{

            const ratingValue = i+2;

            return (
                <label>
                    <input type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                    />
                    <FaStar className="star" 
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                        size={100}
                        onMouseEnter={() =>setHover(ratingValue)}
                        onMouseLeave={() =>setHover(null)}
                        />
                </label>
                );
            })}
            
        </div>
    )
    
}

export default StarRating;