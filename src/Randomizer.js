import React, { Component } from 'react';
import layers from './layers';

export default class Randomizer extends Component {
    renderRandomLayers(){
        console.log(layers)
    }

    render() {
        return (
            <div>
                {this.renderRandomLayers()}
            </div>
        );
    }
}
