import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-regular-svg-icons";

let url_api= "https://api.themoviedb.org/3";
let api_key= "&api_key=4ec5b01dec20d59d907f30ac0366bb10";
let url = url_api + "/discover/movie?sort_by=popularity.desc" + api_key;




const Main = () =>{
    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(url);
    const [search, setSearch] =useState();


    useEffect(() =>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    }, [url_set])

    const searchMovie= (e) =>{
        if(e.key=="Enter"){
            e.preventDefault()
            url= url_api + "/search/movie?api_key=4ec5b01dec20d59d907f30ac0366bb10&query=" + search;
            setUrl(url);
            setSearch(" ");
        }
    }
    
    return (
        <>
            <div className="header">
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Filmy</a>
                    </div>
                </nav>
                <div className="movie-search">
                    <div className="lightsaber">
                        <h1>SEARCH FOR THE MOVIE YOU WANT</h1>
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" 
                            onChange={(e) =>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie}/>
                            <button className="btn" type="submit"><FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container card-container">
                {
                    (movieData.length==0)? <p className="notFound">Not Found</p> : movieData.map((res,pos) =>{
                        return(
                            <>
                                <Card info={res} key={pos}/>
                            </>
                            
                        )
                    })
                }
            </div>
        </>    
    )
}
export default Main;