import React,{useState,useEffect} from 'react';
import {useParams, NavLink, useRouteMatch, Route} from 'react-router-dom';
import ApiId from '../../API/ApiId';
import ApiActors from '../../API/ApiActors';
import ApiReviews from '../../API/ApiReviews';
import Cast from '../Cast';
import Reviews from '../Reviews'


const MovieDetailsPage=()=> {
    const {moviesId}=useParams();
    const [idFilm,setIdFilm]=useState([null]);
    const [genres,setGenres]=useState(null);
    const {url}=useRouteMatch();
    const [actors,setActor]=useState([null]);
    const [reviews, setReviews]=useState(null)
    
    useEffect(()=>{
        getFetch(moviesId)

// eslint-disable-next-line
    },[])
    useEffect(()=>{
        if(!idFilm){
            return
        }
       getFetchActor(moviesId);
       getFetchReviews(moviesId);
       // eslint-disable-next-line
    },[idFilm])
    


    const getFetch=()=>{
        ApiId.fetchAPIid(moviesId)
         .then(data=>{
             setIdFilm(data);
             setGenres([...data.genres])
         })     
        .catch(error=>(error))          
      }


    const getFetchActor=()=>{
        ApiActors.fetchAPIid(moviesId)
         .then(data=>{
             const slice=data.cast.slice(0,3);
             setActor(slice) 
         }) } 

    const getFetchReviews=()=>{
            ApiReviews.fetchAPIReviews(moviesId)
             .then(data=>{
                setReviews(data.results) 
             }) } 
   
  return <> 
            <div>
      {idFilm&& <><img src={`https://image.tmdb.org/t/p/w300${idFilm.poster_path}`}
                   alt={idFilm.title}/>
                  <h2>{idFilm.title}</h2>
                  <p>User Score:{idFilm.vote_average}</p> 
                  <h3>Overview<p>{idFilm.overview}</p></h3>
       {genres&&   <h4>Genres<ul>{genres.map(item=><li key={item.id}>{item.name}</li>)}</ul></h4>}            
                 </>} 
            </div>
            <div>
            <NavLink
               to={`${url}/cast`}
               className="NavLink"
               activeClassName="NavLink--active">
               Cast
            </NavLink>

            <NavLink
               to={`${url}/reviews`}
               className="NavLink"
               activeClassName="NavLink--active">
               Reviews
            </NavLink>  
            </div>
            <Route path='/movies/:moviesId/cast'>
                <Cast actors={actors}/>
            </Route>
            <Route path='/movies/:moviesId/reviews'>
                <Reviews reviews={reviews}/>
            </Route>
        </>
}
export default MovieDetailsPage;