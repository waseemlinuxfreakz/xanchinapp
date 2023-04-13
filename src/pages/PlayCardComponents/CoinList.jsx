import React from 'react';

import Coin1 from '../../assets/img/coin/coin-1.svg';
import Coin2 from '../../assets/img/coin/coin-2.svg';

function CoinList() {
    return ( 
        
        <div className="coinList">
            <img src={Coin1} alt="Coin" className='CoinItem' />
            <img src={Coin2} alt="Coin" className='CoinItem' />
            <img src={Coin1} alt="Coin" className='CoinItem' />
            <img src={Coin2} alt="Coin" className='CoinItem inactiveCoin' />
            <img src={Coin1} alt="Coin" className='CoinItem' />
            <img src={Coin2} alt="Coin" className='CoinItem' />
            <img src={Coin1} alt="Coin" className='CoinItem' />
            <img src={Coin2} alt="Coin" className='CoinItem inactiveCoin' />
            <img src={Coin1} alt="Coin" className='CoinItem' />
            <img src={Coin2} alt="Coin" className='CoinItem' />
        </div>
     );
}

export default CoinList;