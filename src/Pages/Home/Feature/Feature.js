import React from 'react';

const Feature = () => {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-satellite me-2 fs-4 text-primary opacity-75"></i>
                                Best Quality Products
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-truck me-2 fs-4 text-primary opacity-75"></i>
                                Get Free Delivery
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-tags me-2 fs-4 text-primary opacity-75"></i>
                                Mega Discount Offer
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-comment-dollar me-2 fs-4 text-primary opacity-75"></i>
                                Affordable Price Range
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;