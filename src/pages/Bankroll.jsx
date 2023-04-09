import React from 'react';
import GameCardHeader from '../headerfooter/GameCardHeader';
import BankrollList from './BankrollComponents/BankrollList';
import BankrollBox from './BankrollComponents/BankrollBox';



function Bankroll() {
    return ( 
        <div className='PageWraper bigSmallWrap BankRollWraper'>
            <GameCardHeader/>
            <section className="bankrollArea bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <BankrollBox/>
                        </div>
                        <div className="col-lg-6">
                            <BankrollList/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Bankroll;
