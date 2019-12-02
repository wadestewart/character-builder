import React from 'react';
// import layers from './layers';

const Randomizer = props => {
        const { handleHairLayer, handleClothesLayer, handleFaceLayer } = props;
        return (
            <div id="layers" className="row">
                {handleHairLayer()}
                {handleClothesLayer()}
                {handleFaceLayer()}
            </div>
        );
}

export default Randomizer;
