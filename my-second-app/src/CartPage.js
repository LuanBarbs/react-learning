import React from 'react';
import PropTypes from 'prop-types';

import './CartPage.css';
import Item from './Item';

function CartPage({itens, onAddOne, onRemoveOne}) {
    return (
        <ul className='CartPage-itens'>
            {itens.map(item => 
                <li key={item.id} className='CartPage-item'>
                    <Item item={item}>
                        <div className='CartItem-controls'>
                            <button className='CartItem-removeOne' onClick={() => onRemoveOne(item)}>
                                -
                            </button>

                            <span className='CartItem-count'>{item.count}</span>

                            <button className='CartItem-addOne' onClick={() => onAddOne(item)}>
                                +
                            </button>
                        </div>
                    </Item>
                </li>
            )}
        </ul>
    );
};

CartPage.protoTypes = {
    itens: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;