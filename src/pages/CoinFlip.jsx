import React from 'react';
import GameCardHeader from '../headerfooter/GameCardHeader';
import CoinFlipBox from './PlayCardComponents/CoinFlipBox';
import CoinFlipStart from './PlayCardComponents/CoinFlipStart';


function CoinFlip() {
    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <GameCardHeader/>
            <section className="PlayCard_area bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <CoinFlipBox/>
                        </div>
                        <div className="col-xl-5">
                            <CoinFlipStart/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default CoinFlip;
