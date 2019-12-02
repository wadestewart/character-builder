import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import layers from './layers';
import Randomizer from './Randomizer';

class App extends Component {
  constructor() {
    super();

    this.renderRandomHairLayer = this.renderRandomHairLayer.bind(this);
  }

  renderRandomHairLayer() {
    const randomHair = layers.hair[Math.floor(Math.random() * Math.floor(layers.hair.length))];
    return <img id="layer" className="col s12" src={randomHair.src} alt={randomHair.alt} />
  }

  renderRandomClothesLayer() {
    const randomClothes = layers.clothes[Math.floor(Math.random() * Math.floor(layers.clothes.length))];
    return <img id="layer" className="col s12" src={randomClothes.src} alt={randomClothes.alt} />
  }

  renderRandomFaceLayer() {
    const randomFace = layers.face[Math.floor(Math.random() * Math.floor(layers.face.length))];
    return <img id="layer" className="col s12" src={randomFace.src} alt={randomFace.alt} />
  }

  render() {
    return (
      <div className="App">
        <div className="container center-align">
          <div className="title">
            <h4 className="center-align">Generate a Random Character</h4>
          </div>
          <div className="base-image">
            <Randomizer
              handleHairLayer={this.renderRandomHairLayer}
              handleClothesLayer={this.renderRandomClothesLayer}
              handleFaceLayer={this.renderRandomFaceLayer}
            />
          </div>
          <div className="button">
            <button onClick={() => this.forceUpdate()} className="waves-effect waves-light btn"><i className="material-icons right">shuffle</i>Randomize</button>
          </div>
          <div className="button">
            <button className="waves-effect waves-light btn"><i className="material-icons right">get_app</i>PNG</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
