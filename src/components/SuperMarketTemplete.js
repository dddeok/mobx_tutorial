import React from 'react';
import './SuperMarketTemplete.css';

const SuperMarketTemplete = ({ items, basket }) => {
    return (
        <div className="SuperMarketTemplete">
            <div className="items-wrapper">
                <h2>상품</h2>
                {items}
            </div>
            <div className="basket-wrapper">
                <h2>장바구니</h2>
                {basket}
            </div>
        </div>
    );
};

export default SuperMarketTemplete;