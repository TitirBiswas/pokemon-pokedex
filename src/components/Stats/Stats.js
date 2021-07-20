import React, { useState, useEffect, Component } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StepsPrograssBar from 'react-line-progress-bar-steps';

function Stats() {
  let { id } = useParams();
  let s, i, n, p, percentage;
  const history = useHistory();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setPokemon({
          id: data.id,
          name: data.name,
          ability: data.abilities[0].ability.name,
          abilities: data.abilities,
          height: data.height,
          weight: data.weight,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defenses: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefenses: data.stats[4].base_stat,
        });
      });
  }, []);

  console.log(pokemon.abilities);

  return (
    (s = pokemon.id),
    (i = pokemon.id),
    (p = i - 1),
    (n = i + 1),
    (percentage = 30),
    (
      <div>
        {/* If you want ki name card ke andar ae to 46 copy kr 50 ke andar daalna bss */}
        <div className="show__x">
          <div className="row Stats__id">
            {/* <div className=" Stats__name"> {pokemon.name} </div>   */}   <div className="Stats__num">
              #{s < 10 ? (s = '0' + '0' + s) : ''}
              {s < 100 && s > 9 ? (s = '0' + s) : ''}
              {s >= 100 ? (s = s) : ''}{' '} </div>

              <div  className=" Stats__name"> {pokemon.name}  </div>
            </div>
            <div className="Stats__img">
              <img
                className="big_img"
                src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                alt=""
              />
            </div>
         
        </div>

        <div className="container">
          <div className="row">


          <div className="col-md-6">
              <div className="Stats__main-box">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                
                      <h5 className="row ">
                        <h3 >Stats</h3>
                      Hp: {pokemon.hp} 
                   
                        <StepsPrograssBar
                        
                          partialValue={pokemon.hp}
                          pWrapStayle={{
                            
                            height: '15px',
                            width: '50%',
                         
                          }}
                          chankStyle={{borderRadius: '4.5px'}}
                        />
                      </h5>
                   
                      <h5 className="row">
                        Attack: {pokemon.attack}
                        <StepsPrograssBar
                        
                           
                          partialValue={pokemon.attack}
                          pWrapStayle={{
                            
                            height: '15px',
                            width: '50%',
                            
                          }}
                          chankStyle={{borderRadius: '4.5px'}}
                        />
                      </h5>
                      <h5 className="row">
                        Defense: {pokemon.defenses}
                        <StepsPrograssBar
                        
                           
                          partialValue={pokemon.defenses}
                          pWrapStayle={{
                            
                            height: '15px',
                            width: '50%',
                            
                          }}
                          chankStyle={{borderRadius: '4.5px'}}
                        />
                      </h5>
                    </div>
  
                      <h5 className="row">
                        Speed: {pokemon.speed}
                        <StepsPrograssBar
                        
                           
                          partialValue={pokemon.speed}
                          pWrapStayle={{
                            
                            height: '15px',
                            width: '50%',
                            
                          }}
                          chankStyle={{borderRadius: '4.5px'}}
                        />
                      </h5>
                      <h5 className="row">
                        Special-Attack: {pokemon.specialAttack}
                        <StepsPrograssBar
                      partialValue={pokemon.specialAttack}
                          pWrapStayle={{
                            
                            height: '15px',
                            width: '50%',
                            
                          }}
                          chankStyle={{borderRadius: '4.5px'}}
                        />
                      </h5>
                      <h5 className="row">
                        Special-Defense: {pokemon.specialDefenses}
                        <StepsPrograssBar
                        
                           
                          partialValue={pokemon.specialDefenses}
                          pWrapStayle={{
                            
                            height: '15px',
                            width: '50%',  
                          }}
                          chankStyle={{borderRadius: '4.5px'}}
                        />
                      </h5>
                      </div>
                    
                  </div>

                  {/* </div> */}
                </div>
              </div>


            <div className="col-md-6">
              <div className="Stats__info-box">
            
                <div className="container">
                  <div className="row">
                  <div className="col-md-6">
                    <h5 className=" row title abil">Ability </h5>
                    <p className=" row value abil">{pokemon.ability}</p>
                    </div>
   

                    <div className="col-md-6">
                      <h5 className="row title">Height </h5>
                      <p className="row value">{pokemon.height} mm</p>
  
                      <h5 className="row title">Weight </h5>
                      <p className="row value">{pokemon.weight} g</p>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>

          
          
          
          
          </div>

        </div>
      </div>
    )
  );
}

export default Stats;
