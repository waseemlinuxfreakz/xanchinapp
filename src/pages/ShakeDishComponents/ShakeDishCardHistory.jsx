import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Close from '../../assets/img/icons/close.svg';


function ShakeDishCardHistory() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return ( 
        <>
            <span onClick={handleShow} className="history_tab borderBtn">Result History</span>

            <Modal className='historyModal' show={show} onHide={handleClose}>
                <div className='modal_header'>
                    <h2 className='modal_title'>Result History</h2>
                    <img src={Close} alt="Close" onClick={handleClose} className="closeModal" />
                </div>
                <Modal.Body>
                    <div className="ShakeDishHistory gameCardHis historyTable">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Game ID</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" className='color-blue'># 23265323</a></td>
                                    <td>
                                        <div className="dottedList"><div className="dottedItem"><span></span></div><div className="dottedItem"><span></span></div><div className="dottedItem blackDotted"><span></span></div><div className="dottedItem blackDotted"><span></span></div></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default ShakeDishCardHistory;