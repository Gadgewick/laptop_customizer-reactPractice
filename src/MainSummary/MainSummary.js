import React from 'react';
import Summary from '../Summary/Summary';
import Total from '../Total/Total';


export default function MainSummary({selected, features}){
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
              selected={selected}
              features={features}
              
            />
            <Total 
              selected={selected}
            />
            
        </section>
     )     
};

MainSummary.defaultProps = {
    selected: {},
}

