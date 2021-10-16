import React from 'react';
import './Topproduct.css';

const Topproduct = ({ topProduct }) => {
    const { title, image, price } = topProduct;
    const { rate, count } = topProduct.rating;
    return (
        <>
            <div className="col-lg-3 col-md-6 col-12">
                <div class="card top-product-card border-0 rounded-3 shadow-lg text-center">
                    <img src={image} class="card-img-top img-fluid top-product-img m-auto mt-2 text-center" alt="topproduct" />
                    <div class="card-body">
                        <h5 class="card-title text-primary opacity-75">{title}</h5>
                        <p class="card-text">Rating: <span className="text-warning fw-bolder">{rate}</span></p>
                        <p class="card-text">Rate: <span className="text-muted">{count}</span></p>
                        <h5 class="card-title">Price: <span className="text-primary opacity-75 fw-bold">${price}</span></h5>
                    </div>
                    <div class="card-footer">
                        <button className="btn btn-primary opacity-75 rounded-pill mt-1 me-2">Add to Cart</button>
                        <button className="btn btn-outline-primary opacity-75 rounded-pill mt-1">Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topproduct;