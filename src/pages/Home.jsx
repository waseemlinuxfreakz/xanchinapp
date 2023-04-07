import React from 'react';
import Header from '../headerfooter/header';
import Footer from '../headerfooter/footer';

import Spin from '../assets/img/icons/Spin.svg';
import GameSlider from './GameSlider';



function HomePage() {
    return ( 
        <div className='PageWraper'>  
            <Header/>
            <section className="homepage_area">
                <div className="home_top_button">
                    <a href="#" className='spinBtn'><img src={Spin} alt="Spin" /> Daily Spin</a>
                </div>
                <div className="HomeGameSlider">
                    <GameSlider/>
                </div>
            </section>
            <Footer/>
        </div>
     );
}

export default HomePage;