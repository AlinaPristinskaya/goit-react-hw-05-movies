
import React,{useEffect,useState} from 'react';
import API from '../../API';


const HomePage=()=> {
    const [dataSet,setDataSet]=useState([]);

    useEffect(() => {
         getFetch();    
        // eslint-disable-next-line 
      },[]);

    const getFetch=()=>{
                 
        API.fetchAPI()
         .then(data=>{
             console.log(data);
             setDataSet(prev=>([...data.results]))
         })     
        .catch(error=>(error))    
        
      }
    console.log(dataSet)  

   
        
   return (<>{dataSet && dataSet.map(film=><li key={film.id}>{film.title}</li>)}</>)
}
export default HomePage;