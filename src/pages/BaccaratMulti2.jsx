import React from 'react';
import BaccaratMultiHeader from '../headerfooter/BaccaratMultiHeader';
import DipositePopup from '../pages/bigsmallComponents/DipositePopup';
import WithdrawPopup from '../pages/bigsmallComponents/WithdrawPopup';
import UserBettingList from './bigsmallComponents/UserBettingList';
import BaccaratGame2 from './BaccaratComponents/BaccaratGame2';
import BaccaratGameStartDeal from './BaccaratComponents/BaccaratGameStartDeal';

function BaccaratMulti2() {
    return ( 
        <div className='BaccaratMulti2Page PageWraper bigSmallWrap gameCardWraper'>
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
                                <BaccaratGame2/>
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

export default BaccaratMulti2;