import React from 'react'
import img2 from '../img/carrousel-3.jpg'

export default function Carrousel (props){
    return(

    
        <div class="jumbotron">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img2} class="d-block w-100 img-fluid" alt="..."/>
          </div>
      </div>
    </div>

    );
}