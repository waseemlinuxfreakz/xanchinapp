import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Close from '../assets/img/icons/close.svg';


function SendDIMEto() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>

        <a href="javascript:void(0)" className='BlueBtn' onClick={handleShow}>Send DIME token to friend</a>
  
        <Modal className='swapModal' show={show} onHide={handleClose} centered>
            <span className="modalTitleArt"></span>
          <Modal.Body className='swapFormModal' >
            <div className="modalTItle">Send DIME to friend</div>
            <img src={Close} alt="Close" onClick={handleClose} className="closeModal" />
            <div className="swapformInner">
                <form action="#">
                    <div className="inputCol">
                        <input type="text" placeholder='Enter wallet address' name='WAXPToken' id='WAXPToken' />
                    </div>
                    <div className="inputCol">
                        <input type="text" placeholder='Send DIME to friend.' name='WAXPToken' id='WAXPToken' />
                    </div>
                    <div className="formBtn">
                        <button className='BlueBtn'>Send</button>
                    </div>
                </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
     );
}

export default SendDIMEto;