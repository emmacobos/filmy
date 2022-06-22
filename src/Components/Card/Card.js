import React from "react";
import "./CardClass.css"

const Card = (movie) =>{
    console.log(movie.info);
    let img_api= "https://image.tmdb.org/t/p/w500";
    return(
        <>
                <div className="card">
                    <img src={img_api+movie.info.poster_path} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.info.title}</h5>
                        <p className="card-text">{movie.info.overview}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movie.info.vote_average}</small>
                    </div>
                </div>
        </>
    )
}
export default Card;