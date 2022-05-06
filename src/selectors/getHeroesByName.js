import { heroes } from "../data/heroes"




export const getHeroByName = (name = '') => {

    console.log('se dispara otra vez la funcion')

    if (name === '') {
        return [];
    }

    name = name.toLowerCase();

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

    
}