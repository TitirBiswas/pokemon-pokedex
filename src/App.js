import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Card from './components/Card';
import Stats from './components/Stats';
import { getPokemon, getAllPokemon } from './services/pokemon';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadPokemon = async data => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <Router>
        <Switch>
          <Route path="/stats/:id">
            <Stats />
          </Route>

          <Route path="/">
            <div>
    
              {loading ? (
                <h1 style={{ textAlign: 'center' }}>Loading...</h1>
              ) : (
                <>
                 
                  <div className="body">


                    <div className="header">
                    <button className="prev" onClick={prev}>
<img src="https://img.icons8.com/doodle/48/ffffff/lightning-arrow.png"/>
PREV</button>
<img className="pika_logo" src="https://img.icons8.com/color/48/ffffff/pokemon.png"/>
<button className="next" onClick={next}>
<img src="https://img.icons8.com/doodle/48/ffffff/lightning-arrow.png"/> 
NEXT</button>
                    </div>


                    <div className="grid-container">




                      {pokemonData.map((pokemon, i) => {
                        console.log(pokemon);
                        console.log(i);
                        return <Card key={i} pokemon={pokemon} />;
                      })}
                    </div>
                   
                    <div className="header">
                    <button className="prev" onClick={prev}>
<img src="https://img.icons8.com/doodle/48/ffffff/lightning-arrow.png"/>
PREV</button>
<img className="pika_logo" src="https://img.icons8.com/color/48/ffffff/pokemon.png"/>
<button className="next" onClick={next}>
<img src="https://img.icons8.com/doodle/48/ffffff/lightning-arrow.png"/> 
NEXT</button>
                    </div>

                  </div>
                </>
              )}
            </div>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
