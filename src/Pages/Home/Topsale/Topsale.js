import React, { useEffect, useState } from 'react';
import Topproduct from '../Topproduct/Topproduct';

const Topsale = () => {
    const [topSale, setTopSale] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(res => res.json())
            .then(json => setTopSale(json))
    }, [])

    return (
        <>
            <div className="container mb-5">
                <h2 className="text-primary opacity-75 fw-bold mb-4">Top Sale</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        topSale.map(topProduct => <Topproduct
                            key={topProduct.id}
                            topProduct={topProduct}
                        ></Topproduct>)
                    }
                </div>
            </div>
        </>
    );
};

export default Topsale;