import React from 'react';
import SuperMarketTemplete from './SuperMarketTemplete';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList'
const SuperMarket = () => {
    return (
        <SuperMarketTemplete items={<ShopItemList />} basket={<BasketItemList />} />
    );
};

export default SuperMarket;