import React from 'react';
import './style.css';
import StepsPrograssBar from 'react-line-progress-bar-steps';

function Navbar() {
    return (
        <div className="Navbar">

        <div className="Navbar__primary">
        <img src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png" width="60" />
   <img src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" width="150" />
  <StepsPrograssBar  pWrapStayle={{ height: "10px" }} />
       </div>
       
       <div className="Navbar__secondary">  
         Pokedex  
</div>

    </div>
    );
}

export default Navbar;
