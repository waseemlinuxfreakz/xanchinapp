import React from 'react';
import GameCardHeader from '../headerfooter/GameCardHeader';
import StartCard from './PlayCardComponents/StartCard';
import CoinFlipBox from './PlayCardComponents/CoinFlipBox';
import GameOver from './PlayCardComponents/GameOver';
import ZeroTokken from './PlayCardComponents/ZeroTokken';


function CoinFlip() {
    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <GameCardHeader/>
            <section className="PlayCard_area bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <CoinFlipBox/>
                            <GameOver/>
                        </div>
                        <div className="col-xl-5">
                            <StartCard/>
                            <br />
                            <br />
                            <ZeroTokken/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default CoinFlip;
