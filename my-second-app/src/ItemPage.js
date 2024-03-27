import React from 'react';
import PropTypes from 'prop-types';

import './ItemPage.css';
import Item from './Item';

function ItemPage({itens, onAddToCart}) {
    return (
        <ul className='ItemPage-itens'>
            {itens.map(item => 
                <li key={item.id} className='ItemPage-item'>
                    <Item item={item}>
                        <button className='Item-addToCart' onClick={() => onAddToCart(item)}>Add to cart!</button>
                    </Item>
                </li>
            )}
        </ul>
    );
};

ItemPage.protoTypes = {
    itens: PropTypes.array.isRequired
};

export default ItemPage;