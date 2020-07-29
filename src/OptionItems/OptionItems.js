import React from 'react';
import slugify from 'slugify';
import OptionCostLabel from '../OptionCostLabel/OptionCostLabel';


export default function OptionItems({
    item,
    feature,
    itemHash,
    checked, 
    onUpdateFeature
}) {
    return (
        <div className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={checked}
                onChange={e => onUpdateFeature(feature, item)}
              />
              <OptionCostLabel 
                itemHash={itemHash}
                item={item}
              />
        </div>
        )  
 
}
OptionItems.defaultProps = {
	itemHash: '',
	item: {},
	feature: '',
	checked: false
}