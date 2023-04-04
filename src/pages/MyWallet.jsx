import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


import Link from '../assets/img/icons/Link.svg';
import SwapForm from './SwapForm';
import SendDIMEto from './SendDIMEto';


function MyWallet() {
    return ( 
        <div className='PageWraper'>  
            <Header/>
            <section className="mywallet_area">
                <div className="wallet_top">
                    <div className="wallet_number">235L5423GH1</div>
                </div>
                <div className="wallet_container">
                    <div className="waxp-dime">
                        <div className="waxoBox">
                            <span className="box_title">WAXP</span>
                            <h2>12,35,450</h2>
                        </div>
                        <span className="hrLine"></span>
                        <div className="dimeBox">
                            <span className="box_title">DIME</span>
                            <h2>12,35,450</h2>
                        </div>
                    </div>
                    <div className="swapBtns">
                        <SwapForm/>
                        {/* <a href="#" className='BlueBtn'>Swap From WAXP to DIME</a> */}
                        {/* <a href="#" className='BlueBtn'>Send DIME token to friend</a> */}
                        <SendDIMEto/>
                    </div>
                    <div className="exchangeTokken">
                        <img src={Link} alt="Link" /> Exchange token p2p
                    </div>
                    <div className="walletBtnBox">
                        <a href="#" className="RedBtn">Logout</a>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
     );
}

export default MyWallet;