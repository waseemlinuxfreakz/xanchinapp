import React from 'react';
import GameCardHeader from '../headerfooter/GameCardHeader';
import StartCard from './PlayCardComponents/StartCard';
import CardSelectBox from './PlayCardComponents/CardSelectBox';
import GameOver from './PlayCardComponents/GameOver';


function PlayCard() {
    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <GameCardHeader/>
            <section className="PlayCard_area bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <CardSelectBox/>
                            <GameOver/>
                        </div>
                        <div className="col-xl-5">
                            <StartCard/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default PlayCard;
