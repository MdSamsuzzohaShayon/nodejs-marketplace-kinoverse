import React from 'react';

const Modal = (props) => {
    return <div className="Modal">
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" id="modal-close">×</span>
                <div className="modal-body">
                    <h3>Thank you!</h3>
                    <p></p>
                    <p>Share with your friends and potential clients below!</p>
                    <div className="share-wrapper">
                        <a className="icon solid fa-envelope share-email" style="cursor: pointer;">
                            <span className="label">Email</span>
                        </a>
                        <a className="icon brands fa-facebook-f share-facebook" style="cursor: pointer;" target="_blank">
                            <span className="label">Facebook</span>
                        </a>
                        <a className="icon brands fa-twitter share-twitter" style="cursor: pointer;" target="_blank">
                            <span className="label">Twitter</span>
                        </a>
                        <a className="icon brands fa-linkedin-in share-linkedin" style="cursor: pointer;" target="_blank">
                            <span className="label">Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>;
};

export default Modal;
