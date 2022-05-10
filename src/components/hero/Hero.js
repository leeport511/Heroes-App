import React from 'react';
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const Hero = () => {

  const navigate = useNavigate();

  const handleReturn = () => {

    navigate( -1 );
    
  };

  const {id} = useParams();

  const hero = useMemo( () => getHeroById(id), [ id ] );

  if(!hero) {
    return <Navigate to="/" />
  };

  const imagePath =  `${process.env.PUBLIC_URL}/assets/img-heroes/${id}.jpg`;

  

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ imagePath } 
          alt= { hero.superhero }
          className = 'img-thumbnail animate__animated animate__fadeIn'
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight animate__slow">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush mb-2">
            <li className="list-group-item"> <b>Alter Ego:</b> {hero.alter_ego} </li> 
            <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li> 
            <li className="list-group-item"> <b>First Appearance:</b> {hero.first_appearance} </li> 
          </ul> 

          <h5 className="mt-3">Characters</h5>
          <p> {hero.characters} </p>

          <button 
            className="btn btn-outline-info mt-4"
            onClick = {handleReturn}
          >
              Regresar
          </button>
      </div>
        
        
    </div>
  )
}
