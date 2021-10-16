import React from 'react';
import './Banner.css';

const Banner = () => {

    return (
        <div>
            <div className="container mb-5 mt-3">
                <div className="row g-4">
                    <div className="col-lg-8 col-md-6 col-12 overflow-hidden">
                        <div className="card bg-dark text-white banner shadow-lg banner-1">
                            <div className="card-img-overlay mt-5">
                                <h1 className="card-title mt-5 fw-bold">Top Branded Watches</h1>
                                <button className="btn bg-white fw-bold rounded-pill mt-3">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card bg-dark text-white banner shadow-lg banner-2">
                            <div className="card-img-overlay">
                                <h1 className="card-title mt-5 fw-bold">20% Discount for this Weekend</h1>
                                <button className="btn bg-white fw-bold rounded-pill mt-3 ">Grab Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card bg-dark text-white banner shadow-lg banner-3">
                            <div className="card-img-overlay mt-5">
                                <h1 className="card-title fw-bold mt-5 text-white">Stylish Cool T-Shirts</h1>
                                <button className="btn bg-white fw-bold rounded-pill mt-3">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card bg-dark text-white banner shadow-lg banner-4">
                            <div className="card-img-overlay">
                                <h1 className="card-title fw-bold mt-5 text-white">World Class Branded Accescories</h1>
                                <button className="btn bg-white fw-bold rounded-pill mt-3">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;