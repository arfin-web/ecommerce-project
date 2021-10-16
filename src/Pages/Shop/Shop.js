import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Shop = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])
    return (
        <>
            <div className="container mb-5 mt-3">
                <h2 className="text-primary opacity-75 fw-bold mb-4 mt-4">All Product</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        product.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </>
    );
};

export default Shop;