import React, { useState } from 'react';

import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import { itens } from './static-data';

const App = () => {

  const [activeTab, setActiveTab] = useState('itens');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeItem = (item) => {
    let index = cart.findIndex(i => i.id === item.id);
    if(index >= 0) {
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    };
  };

  return (
    <div className='App'>
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className='App-content'>
        <Content 
          tab={activeTab} 
          onAddToCart={addToCart} 
          cart={summarizeCart(cart)}
          onRemoveItem={removeItem}
          />
      </main>
    </div>
  );
}

const Content = ({tab, onAddToCart, cart, onRemoveItem}) => {
  switch(tab) {
    case 'itens':
      return <ItemPage itens={itens} onAddToCart={onAddToCart} />;
    case 'cart':
      return <CartPage itens={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem}/>;
    default:
      break;
  };
};

const summarizeCart = (cart) => {
  const groupItens = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0
    };
    summary[item.id].count++;
    return summary;
  }, {});
  return Object.values(groupItens);
};

export default App;