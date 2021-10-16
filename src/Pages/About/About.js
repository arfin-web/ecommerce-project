import React from 'react';
import './About.css';

const aboutImg = 'https://industrywired.b-cdn.net/wp-content/uploads/2020/06/E-Commerce.png';

const About = () => {
    return (
        <>
            <div className="container-fluid about-container mt-2 mb-5">
                <div className="about-title">
                    <h1 className="fw-bolder text-white">About Our Dream</h1>
                    <h6 className="text-white fw-bold text-center mt-3">We Can Do More For You</h6>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={aboutImg} className="img-fluid rounded-3 shadow-lg" alt="about" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card border-0 shadow-lg rounded-3">
                            <div className="card-body">
                                <h3 className="card-title fw-bold text-primary opacity-75">About Our Company</h3>
                                <h6 className="card-subtitle mb-2 text-muted">Best E-commerce Company In This Region</h6>
                                <p className="card-text">Welcome to one of the best ecommerce company. We are all in this company belong to Harinarayanpur Union High School, Batch Sixteen. This is our dream Business. We try our best to make this company The Best and Number 1 Company in the Country.</p>
                                <p className="card-text">Welcome to one of the best ecommerce company. We are all in this company belong to Harinarayanpur Union High School, Batch Sixteen. This is our dream Business. We try our best to make this company The Best and Number 1 Company in the Country.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;