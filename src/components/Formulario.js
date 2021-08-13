import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css'

export default function Formulario() {
    return (
        <div class='container'>
            <div class="mb-6">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
   <div class="mb-6">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
   </div>
   <br/>
   <button class="btn btn-secondary" type="submit">Enviar</button>

        </div>
        
      
    )
}
