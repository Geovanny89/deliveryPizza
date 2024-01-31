import React from 'react';
import './card.css';

export default function Card({ name, image, price }) {

  return (
    <div className="card-product" >

     <div className="card-img-top ">
     <img
        src={image}
        alt="Product"
        

      />
     </div>

      {/* Información del producto en el cuerpo de la carta */}
      <hr />
      <div className="card-body text-center">
        <a className="card-title">nombre:{name}</a>
        <a className="card-text"> ${price}</a>
      </div>
    </div>
  );
}
