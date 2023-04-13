import React from 'react';
import GameCardHeader from '../headerfooter/GameCardHeader';
import CoinFlipBox from './PlayCardComponents/CoinFlipBox';
import GameOver from './PlayCardComponents/GameOver';
import CoinFlipStart2 from './PlayCardComponents/CoinFlipStart2';
import CoinList from './PlayCardComponents/CoinList';


function CoinFlip2() {
    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <GameCardHeader/>
            <section className="PlayCard_area bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <CoinList/>
                            <CoinFlipBox/>
                            <GameOver/>
                        </div>
                        <div className="col-xl-5">
                            <CoinFlipStart2/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default CoinFlip2;