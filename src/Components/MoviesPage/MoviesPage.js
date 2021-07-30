import React,{useState} from 'react';
import {toast } from 'react-toastify';
import ApiQuery from '../../API/ApiQuery';
import {Link} from 'react-router-dom'

const MoviesPage=()=> {
    const[query, setQuery]=useState('');
    const[data, setData]=useState([])
    

    const handelChange=event=>{
        setQuery(event.currentTarget.value)
      }
    
    const handelSubmit=event=>{
      event.preventDefault();
      if(query.trim() === ''){
          toast('Введите что хотите найти');
          return
      } getFetchQuery(query);
        setQuery('');
        setData(null); }

    const  getFetchQuery=()=>{
        ApiQuery.fetchAPIQuery(query)
        .then(data=>{
            if(data.total_results===0){
                toast.error('Ничего не найденно по вашему запросу.Введите коректный запрос')

            }            
            setData(data.results);            
              })

    } 
    
  return (
    <>
      
       <form  onSubmit={handelSubmit}>
       <button type="submit">
       <span>Search</span>
       </button>

       <input
        onChange={handelChange}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        />
       </form>
       {data &&<ul>{data.map(item=><li key={item.id}><Link to={`/movies/${item.id}`}>{item.title}</Link></li>)}</ul>}
      
    </>
  );
  }
export default MoviesPage;