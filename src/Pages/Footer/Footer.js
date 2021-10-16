import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="mt-5 mb-5">
                <div className="container bg-primary opacity-75 p-3 mb-5 shadow-lg rounded-3">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-12">
                            <h3 className="text-white fw-bolder">+8801478591</h3>
                            <p className="text-white">Maizdee Court, Noakhali, Bangladesh</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <h5 className="ms-5 text-white fw-bold">Follow Us</h5>
                            <div className="social-icons ms-5">
                                <i className="fab fa-facebook-square fs-1 me-3 text-white"></i>
                                <i className="fab fa-whatsapp-square fs-1 me-3 text-white"></i>
                                <i className="fab fa-instagram-square fs-1 me-3 text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card border-0 rounded-3 shadow-lg">
                                <div className="card-header">
                                    <h5 className="text-primary opacity-75 fw-bold">Cloths</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card border-0 rounded-3 shadow-lg">
                                <div className="card-header">
                                    <h5 className="text-primary opacity-75 fw-bold">Electronics</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card border-0 rounded-3 shadow-lg">
                                <div className="card-header">
                                    <h5 className="text-primary opacity-75 fw-bold">Accescories</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card border-0 rounded-3 shadow-lg">
                                <div className="card-header">
                                    <h5 className="text-primary opacity-75 fw-bold">Gadgets</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-5">
                        <p className="text-center fw-bold"><span className="text-primary opacity-75 fs-6 fw-bolder">&#169; </span> Created By Arfin Priom || All Rights Resrved</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;