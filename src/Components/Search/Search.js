import React, { useEffect, useState } from "react";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "../Card/Card";
import "./SearchClass.css"

let url_api= "https://api.themoviedb.org/3";
let api_key= "&api_key=4ec5b01dec20d59d907f30ac0366bb10";

function Search () {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] =useState("");

    const URL = url_api + "/discover/movie?sort_by=popularity.desc" + api_key;

    const showData = async () =>{
        const response = await fetch(URL)
        const data = await response.json()
        setMovies(data.results)
    }
    const searcher = (e) =>{
        setSearch(e.target.value)
    }

    const results = !search ? movies : movies.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))

    const searching = (e) =>{
        e.preventDefault();
        showData()
    }

    useEffect(() => {
        showData()
    }, [])

    return(
        <>
            <div className="container-movies">
                <div className="movie-search">
                    <div className="lightsaber">
                        <h1>SEARCH FOR THE MOVIE YOU WANT</h1>
                        <form className="d-flex" role="search">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={search} onChange={searcher}/>
                            <button className="button" type="submit" onClick={searching}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container card-container">
                {
                    results.map((res,pos) =>{
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

export default Search;