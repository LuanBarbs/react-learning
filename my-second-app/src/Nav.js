import React from 'react';

const Nav = ({activeTab, onTabChange}) => {

    const itemClass = (tabName) => `
        App-nav-item ${
            (activeTab === tabName) ? 'selected' : ''
        }
    `

    return(
        <nav className='App-nav'>
            <ul>
                <li className={itemClass('itens')}>
                    <button onClick={() => onTabChange('itens')}>Itens</button>
                </li>
                <li className={itemClass('cart')}>
                    <button onClick={() => onTabChange('cart')}>Cart</button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;