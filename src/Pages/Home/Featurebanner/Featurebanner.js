import React from 'react';

const Featurebanner = () => {
    return (
        <>
            <div className="container bg-dark p-3 mb-5 shadow-lg rounded-3">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-12">
                        <h1 className="text-white fw-bolder ms-5">100% Secure delivery</h1>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <button className="btn bg-white fw-bold rounded-pill mt-2 ms-5">Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featurebanner;