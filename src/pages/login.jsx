import React from 'react';
import Logo from '../assets/img/logo.svg';


function LoginPage() {
    return ( 
        <div className="login_container">
            <div className="container">
                <a href="#" className='LoginLogo'>
                    <img src={Logo} alt="Logo" />
                </a>
                <div className="loginFormContainer">
                    <form action="/homepage">
                        <div className="inputCol">
                            <input type="text" placeholder='Enter wallet address' name='LoginUser' />
                        </div>
                        <div className="inputCol">
                            <input type="password" placeholder='Enter Private Key' name='LoginKey' />
                        </div>
                        <div className="formBtn">
                            <button type='submit' className='blue_Btn'>Login</button>
                        </div>
                    </form>
                    <div className="alert_box red_box">
                        This page only used for testnet.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;