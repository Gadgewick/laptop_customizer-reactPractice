import React from 'react';
import slugify from 'slugify';
import OptionItems from '../OptionItems/OptionItems';


  export default function Options({

    feature,
    onUpdateFeature,
    options,
    selected,

  }) { 
      const optionItems = options.map(item => {
        const itemHash = slugify(JSON.stringify(item))
        const checked = item.name === selected[feature].name

    return (
        <OptionItems
            key={itemHash}
            itemHash={itemHash}
            item={item}
            feature={feature}
            checked={checked}
            onUpdateFeature={onUpdateFeature}
        />
    )
})
 
    
    return (
        <fieldset className="feature">
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {optionItems}
        </fieldset>
      );
}

Options.defaultProps = {
    feature: '',
    featureHash: '',
    options: [],
    selected: []
}