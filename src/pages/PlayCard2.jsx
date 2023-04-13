import React from 'react';
import GameCardHeader from '../headerfooter/GameCardHeader';
import GameOver from './PlayCardComponents/GameOver';
import StartCardBalance from './PlayCardComponents/StartCardBalance';
import CardSelectBox2 from './PlayCardComponents/CardSelectBox2';


function PlayCard2() {
    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <GameCardHeader/>
            <section className="PlayCard_area bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <CardSelectBox2/>
                            <GameOver/>
                        </div>
                        <div className="col-xl-5">
                            <StartCardBalance/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default PlayCard2;
