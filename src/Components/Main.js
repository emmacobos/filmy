
import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./styles.css"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { render } from "@testing-library/react";

let url_api= "https://api.themoviedb.org/3";
let api_key= "&api_key=4ec5b01dec20d59d907f30ac0366bb10";

const Main = () =>{
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
    // let results = []
    // if(search==0)
    // {
    //     results = movies
    // }
    // else{
    //         results = movies.filter( (dato) =>
    //         dato.title.toLowerCase().includes(search.toLocaleLowerCase())
    //     )
    // }


    const results = !search ? movies : movies.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))

    const searching = (e) =>{
        e.preventDefault();
        showData()
    }

    useEffect(() => {
        showData()
    }, [])

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

export default Main;


































// import React, { useEffect, useState } from "react";
// import Card from "./Card/Card";
// import "./styles.css"
// import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// let url_api= "https://api.themoviedb.org/3";
// let api_key= "&api_key=4ec5b01dec20d59d907f30ac0366bb10";
// let img_api= "https://image.tmdb.org/t/p/w500";



// const Main = () =>{
//     const [movies, setMovies] = useState([])
//     const [search, setSearch] = useState("")
    
//     const URL = url_api + "/discover/movie?sort_by=popularity.desc" + api_key;
    
//     const showData = async () =>{
//         const response = await fetch(URL)
//         const data = await response.json()
//         setMovies(data)
//         console.log(data)
//     }
//     showData()

//     const searcher = (e) =>{
//         setSearch(e.target.value)
//     }

//     const results = !search ? movies : movies.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

//     useEffect(() => {
//         showData()
//     }, [])


//     return (
//         <>
//             <div className="header">
//                 <nav className="navbar">
//                     <div className="container-fluid">
//                         <a className="navbar-brand" href="#">Filmy</a>
//                     </div>
//                 </nav>
//                 <div className="movie-search">
//                     <div className="lightsaber">
//                         <h1>SEARCH FOR THE MOVIE YOU WANT</h1>
//                         <form className="d-flex" role="search">
//                             <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={searcher} value={search}/>
//                             <button className="button" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <div className="container card-container">
//                 { results.map( (movie) => (
//                     <div className="card">
//                     <img src={img_api+movies.info.poster_path} className="card-img-top" alt="..."/>
//                     <div className="card-body">
//                         <h5 className="card-title">{movies.info.title}</h5>
//                         <p className="card-text">{movies.info.overview}</p>
//                     </div>
//                     <div className="card-footer">
//                         <small className="text-muted">{movies.info.vote_average}</small>
//                     </div>
//                 </div>
//                 ))}
//             </div>
//         </>    
//     )
// }

// export default Main;





// import React, { useEffect, useState } from "react";
// import Card from "./Card/Card";
// import "./styles.css"
// import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// let url_api= "https://api.themoviedb.org/3";
// let api_key= "&api_key=4ec5b01dec20d59d907f30ac0366bb10";
// let url = url_api + "/discover/movie?sort_by=popularity.desc" + api_key;




// const Main = () =>{
//     const [movieData, setData] = useState([]);
//     const [url_set, setUrl] = useState(url);
//     const [search, setSearch] =useState();


//     useEffect(() =>{
//         fetch(url_set).then(res=>res.json()).then(data=>{
//             setData(data.results);
//         });
//     }, [url_set])

//     const searchMovie= (e) =>{
//         if(e.key=="Enter"){
//             e.preventDefault()
//             url= url_api + "/search/movie?api_key=4ec5b01dec20d59d907f30ac0366bb10&query=" + search;
//             setUrl(url);
//             setSearch(" ");
//         }
//     }

    
//     return (
//         <>
//             <div className="header">
//                 <nav className="navbar">
//                     <div className="container-fluid">
//                         <a className="navbar-brand" href="#">Filmy</a>
//                     </div>
//                 </nav>
//                 <div className="movie-search">
//                     <div className="lightsaber">
//                         <h1>SEARCH FOR THE MOVIE YOU WANT</h1>
//                         <form className="d-flex" role="search">
//                             <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e) =>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie}/>
//                             <button className="button" type="submit">    <FontAwesomeIcon icon={faMagnifyingGlass}/></button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <div className="container card-container">
//                 {
//                     (movieData.length==0)? <p className="notFound">Not Found</p> : movieData.map((res,pos) =>{
//                         return(
//                             <>
//                                 <Card info={res} key={pos}/>
//                             </>
                            
//                         )
//                     })
//                 }
//             </div>
//         </>    
//     )
// }

// export default Main;