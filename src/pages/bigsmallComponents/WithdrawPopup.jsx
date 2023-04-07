import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Close from '../../assets/img/icons/close.svg';


function WithdrawPopup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>

        <span className="BlueBtn WithdrawBtn" onClick={handleShow}>Withdraw</span>   
  
        <Modal className='DipoWithdeModal' show={show} onHide={handleClose} centered>
          <Modal.Body className='' >
            <img src={Close} alt="Close" onClick={handleClose} className="closeModal" />
            <div className="swapformInner">
                <form action="#">
                    <br />
                    <div className="inputCol">
                        <input type="text" placeholder='Enter Withdraw amount' name='DepositeAmount' id='DepositeAmount' />
                    </div>
                    <div className="formBtn">
                        <button className='BlueBtn'>Withdraw</button>
                    </div>
                    <br />
                </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
     );
}

export default WithdrawPopup;