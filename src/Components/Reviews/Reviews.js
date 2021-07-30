import React from 'react';

const Reviews=({reviews})=> {
    if(reviews.length===0){
      return  <p>Нет обзоров</p>

    } return <ul>{reviews.map(review=>
        (<li key={review.id}>
            <><h4>{review.author}</h4>
               <p>{review.content}</p>
            </>
        </li>))}</ul>



    
}
export default Reviews;