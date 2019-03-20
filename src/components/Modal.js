import React, { Component } from 'react';
import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button onClick={handleClose} className="close-btn">X</button>

                {children}
                <button className="modal-add-btn">Add</button>
            </section>
        </div>
    );
};

export default Modal
