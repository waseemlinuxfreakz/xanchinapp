import React from 'react';
import Logo from '../assets/img/logo.svg';
import LogoMobile from '../assets/img/logo-2.svg';

import Walet from '../assets/img/icons/wallet-color.svg';
import world from '../assets/img/icons/world-line.svg';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return ( 
        <hdeader className="header_area">
            <div className="header_container">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="navbarCollapse" />
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Logo" className='desklogo' />
                        <img src={LogoMobile} alt="Logo" className='Mobilelogo' />
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarCollapse">
                        <Nav className="mainNavBar">
                            <Nav.Link href="#" className='gameMenu active'>Game</Nav.Link>
                            <Nav.Link href="#" className='sportMenu'>Sport</Nav.Link>
                            <Nav.Link href="/homepage" className=''>Home</Nav.Link>
                            <Nav.Link href="/affilate" className=''>Affilate</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="RightNavBox">
                        <a href="/my-wallet" className="BlueBtn"><img src={Walet} alt="Walet" /> Connect to wallet</a>
                        <div className="languageDrop">
                            <img src={world} alt="world" />
                            <select name="language_change" id="language_change">
                                <option value="Eng">Eng</option>
                                <option value="Eng">Eng</option>
                            </select>
                        </div>
                    </div>
                </Navbar>
            </div>
        </hdeader>
     );
}

export default Header;