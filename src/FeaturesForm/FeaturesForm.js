import React from 'react';
import Options from '../Options/Options';

function FeaturesForm({features, onUpdateFeature, selected}) {
    const featureChoice = Object.keys(features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = features[feature]
         
          return (
            <Options 
                key= {featureHash}
                feature={feature}
                options={options}
                onUpdateFeature={onUpdateFeature}
                selected={selected}

            />
          );
  
        
      });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {featureChoice}
            </form>
        )
    }

    export default FeaturesForm