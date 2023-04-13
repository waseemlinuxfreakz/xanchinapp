import React from 'react';
import Spin from '../assets/img/spin.svg';
import GameCardHeader from '../headerfooter/GameCardHeader';

function DailySpin() {
    return ( 
        
        <div className='PageWraper dailySpinWraper'>
            <GameCardHeader/>
            <section className="dailySpin_area">
                <div className="container">
                    <div className="dailySpin_box">
                        <div className="dailySpin">
                            <h2>You can spin only once in a day</h2>
                            <div className="theSpin">
                                <img src={Spin} alt="" />
                            </div>
                            <button type='button' className='BlueBtn SpinBtn'>Spin</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default DailySpin;