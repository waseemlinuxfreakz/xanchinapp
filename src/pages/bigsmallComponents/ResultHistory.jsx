import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Close from '../../assets/img/icons/close.svg';
import Dot1 from '../../assets/img/dices/dot-1.png';
import Dot4 from '../../assets/img/dices/dot-4.png';
import Dot6 from '../../assets/img/dices/dot-6.png';
import Dot1Red from '../../assets/img/dices/dot-1-red.png';
import Dot4Red from '../../assets/img/dices/dot-4-red.png';
import Dot6Red from '../../assets/img/dices/dot-6-red.png';


function ResultHistory() {

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
                    <div className="historyTable">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Game ID</th>
                                    <th>3 Dices</th>
                                    <th>Winning side</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-green">Big</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4Red} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6Red} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1Red} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-red">Small</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4Red} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6Red} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1Red} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-red">Small</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-green">Big</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4Red} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6Red} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1Red} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-red">Small</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-green">Big</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4Red} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6Red} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1Red} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-red">Small</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4Red} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6Red} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1Red} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-red">Small</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-green">Big</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4Red} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6Red} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1Red} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-red">Small</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-green">Big</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4Red} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6Red} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1Red} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-red">Small</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4Red} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6Red} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1Red} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-red">Small</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-green">Big</span></td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                <img src={Dot4Red} alt="Dot4" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot6Red} alt="Dot6" />
                                            </div>
                                            <div className="singleDices">
                                                <img src={Dot1Red} alt="Dot1" />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="color-red">Small</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default ResultHistory;