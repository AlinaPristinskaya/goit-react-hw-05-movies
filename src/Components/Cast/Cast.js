
import React from 'react';


const Cast=({actors})=> {
    return <> <ul>{actors.map(actor=><li key={actor.id}>
       <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name}></img>
        {actor.name}</li>)}</ul></>
}
export default Cast;