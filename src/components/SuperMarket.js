import React from 'react';
import SuperMarketTemplete from './SuperMarketTemplete';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList'
import TotalPrice from './TotalPrice';
const SuperMarket = () => {
    return (
        <SuperMarketTemplete 
        items={<ShopItemList />} 
        basket={<BasketItemList />}
        total = {<TotalPrice />} />
    );
};

export default SuperMarket;