
import React from 'react';
import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const {searchText} = formValues;

  const heroesFiltered = useMemo( () => getHeroByName(q), [q] );


  const handleSearch = (e) => {
    e.preventDefault();


    navigate(`?q=${searchText}`)


  }

 

    return (
      <>
         <h1>Busquedas</h1>
         <hr />

         <div className="row">
          <div className="col-5">
            <h4>Buscar</h4>
            <hr />

            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Buscar un heroe..."
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange = { handleInputChange }

              />

              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-danger mt-3 "
                  type="submit"
                >
                  Buscar.. 
                </button>

              </div>

            </form>



          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr />


            {
              (q === '') 
                ? <div className="alert alert-info"> Buscar un Heroe</div>
                : ( heroesFiltered.length === 0) && <div className="alert alert-danger">No hay resultados</div>
            }

            {
              heroesFiltered.map(hero => (
                <HeroCard
                    key={hero.id}
                    {...hero}
                />
              ))
            }

          </div>


         </div>
      </>
    )
  }