
import React,{useEffect,useState,} from 'react';
import API from '../../API';
import {Link} from 'react-router-dom'


const HomePage=()=> {
    const [dataSet,setDataSet]=useState([]);


    useEffect(() => {
         getFetch();    
        // eslint-disable-next-line 
      },[]);

    const getFetch=()=>{
                 
        API.fetchAPI()
         .then(data=>{
             setDataSet(prev=>([...data.results]))
         })     
        .catch(error=>(error))    
        
      }
            
   return (<>{dataSet && dataSet.map(film=><li key={film.id}><Link to={`/movies/${film.id}`}>{film.title}</Link></li>)}</>)
}
export default HomePage;