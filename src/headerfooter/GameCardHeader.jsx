import React from 'react';
import ArrowLeft from '../assets/img/icons/arrow-left-white.svg';
import Affilate from '../assets/img/icons/affilate-blue.svg';
import HomeLineWhite from '../assets/img/icons/HomeLineWhite.svg';
import DipositePopup from '../pages/bigsmallComponents/DipositePopup';
import WithdrawPopup from '../pages/bigsmallComponents/WithdrawPopup';
import GameCardHistory from '../pages/GamgeCardComponents/GameCardHistory';


function GameCardHeader() {
    return ( 
        <hdeader className="bigsmall_headea_are header_area">
            <div className="header_container">
                <nav className="navbar bigSmallNav">
                    <div className="bigsmall_heade_left">
                        <a href="#" className="backLeft arrowBtn"><img src={ArrowLeft} alt="ArrowLeft" /></a>
                        <h2 className='menuPageTitme'>Gourd Crab</h2>
                    </div>
                    <div className="bigsmall_heade_right">
                        <a href="/bankroll" className='walletLink grayBtn' >
                            <img src={HomeLineWhite} alt="HomeLineWhite" />
                            <span><img src={Affilate} alt="Affilate" /> 1520</span>
                        </a>
                        <GameCardHistory/>
                        <div className="bismlDipoWith deskDipoWith">
                            <DipositePopup/>   
                            <WithdrawPopup/>   
                        </div>
                        <div className="affilate_btn">
                            <img src={Affilate} alt="Affilate" /> 1520
                        </div>
                    </div>
                </nav>
            </div>
        </hdeader>
     );
}

export default GameCardHeader;