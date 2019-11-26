import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Randomizer from './Randomizer';

function App() {
  return (
    <div className="App">
      <div className="container center-align">
        <div className="title">
          <h4 className="center-align">Generate a Random Character</h4>
        </div>
        <div className="base-image">
          <Randomizer />
        </div>
        <div className="button">
          <a className="waves-effect waves-light btn"><i className="material-icons right">shuffle</i>Randomize</a>
        </div>
        <div className="button">
          <a className="waves-effect waves-light btn"><i className="material-icons right">get_app</i>PNG</a>
        </div>
      </div>
    </div>
  );
}

export default App;
