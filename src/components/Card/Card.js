import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';
import { useHistory } from "react-router-dom";


 function Card({ pokemon,key}) {
     let s;

     const history = useHistory();

    return (
   
    <div  className="Card"  style={{ backgroundColor: typeColors[pokemon.types[0].type.name] }} onClick={e => history.push(`/stats/${pokemon.id}`)}>
      <div className="Card__num">
      #{pokemon.id<10 ? s='0'+'0'+pokemon.id : "" }
      {pokemon.id <100 && pokemon.id>9 ? s='0'+pokemon.id  : "" }
      {pokemon.id >=100  ? s=pokemon.id  : "" }       
               
            </div>
            <div className="Card__img">

                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${s}.png`} alt="" />
                 
            </div>
           
  
            <div className="Card__name">
               
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" >
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            </div>         
     
          
    ); 
} 

export default Card; 
