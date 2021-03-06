import React from "react";
import "./CardClass.css"


const Card = (data) =>{
    let img_api= "https://image.tmdb.org/t/p/w500";
    return(
        <>
                <div className="card">
                    <img src={img_api+data.info.poster_path} className="card-img-top" alt={data.info.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{data.info.title}</h5>
                        <p className="card-text">{data.info.overview}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{data.info.vote_average}</small>
                    </div>
                </div>
        </>
    )
}
export default Card;