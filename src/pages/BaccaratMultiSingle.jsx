import React from 'react';
import BaccaratMultiHeader from '../headerfooter/BaccaratMultiHeader';
import DipositePopup from './bigsmallComponents/DipositePopup';
import WithdrawPopup from './bigsmallComponents/WithdrawPopup';
import UserBettingList from './bigsmallComponents/UserBettingList';
import BaccaratGame from './BaccaratComponents/BaccaratGame';
import BaccaratGameStartDeal from './BaccaratComponents/BaccaratGameStartDeal';

function BaccaratMultiSingle() {
    return ( 
        <div className='PageWraper bigSmallWrap gameCardWraper'>
            <BaccaratMultiHeader/>
            <section className="baccarat_area affilate_area">
                <div className="bigSmallGame_container">
                    <div className="bismlDipoWith MobileDipoWith">
                        <DipositePopup/>   
                        <WithdrawPopup/>   
                    </div>
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="BaccaratGame_area">
                                <BaccaratGame/>
                                <BaccaratGameStartDeal/>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <UserBettingList/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default BaccaratMultiSingle;