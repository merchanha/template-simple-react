import React from 'react'
import img3 from '../img/homer.jpg'
import img4 from '../img/maggie.jpg'
import img5 from '../img/bart.jpg'



export default function Cards (props){
    return(
        <div>

        <div class="container-fluid" style={{background: 'rgb(206, 203, 49)'}}>
        <div class="row pt-5 py-5">
          <div class="col-lg-4 col-sm-12 d-flex justify-content-center">
            <div class="card" style={{width: '15rem'}}>
                <img src={img4} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Maggie</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a>Leer más...</a>
                </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-12 d-flex justify-content-center">
            <div class="card" style={{width: '15rem'}}>
                <img src={img3} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Homero</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a>Leer más...</a>
                </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-12 d-flex justify-content-center">
            <div class="card" style={{width: '15rem'}}>
                <img src={img5} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Bart</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a>Leer más...</a>
                </div>
              </div>
          </div>
        </div>
      </div>
</div>

    );
}