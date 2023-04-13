import React from 'react';
import ArrowLeft from '../assets/img/icons/arrow-left-white.svg';
import Affilate from '../assets/img/icons/affilate-blue.svg';
import Info from '../assets/img/icons/i.svg';
import HomeLineWhite from '../assets/img/icons/HomeLineWhite.svg';
import DipositePopup from '../pages/bigsmallComponents/DipositePopup';
import WithdrawPopup from '../pages/bigsmallComponents/WithdrawPopup';
import ShakeDishCardHistory from '../pages/ShakeDishComponents/ShakeDishCardHistory';


function ShakeDishHeader() {
    return ( 
        <hdeader className="bigsmall_headea_are header_area">
            <div className="header_container">
                <nav className="navbar bigSmallNav">
                    <div className="bigsmall_heade_left">
                        <a href="#" className="backLeft arrowBtn"><img src={ArrowLeft} alt="ArrowLeft" /></a>
                        <h2 className='menuPageTitme'>Shake Dish</h2>
                    </div>
                    <div className="bigsmall_heade_right">
                        <a href="#" className='infoLink'><img src={Info} alt="Info" /></a>
                        <a href="/bankroll" className='walletLink grayBtn' >
                            <img src={HomeLineWhite} alt="HomeLineWhite" />
                            <span><img src={Affilate} alt="Affilate" /> 1520</span>
                        </a>
                        <ShakeDishCardHistory/>
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

export default ShakeDishHeader;