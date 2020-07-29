import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat';

export default function OptionCostLabel({item, itemHash}) {

    return (
              <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
            )
        }


OptionCostLabel.defaultProps = {
    itemHash: '',
    item: {},
}