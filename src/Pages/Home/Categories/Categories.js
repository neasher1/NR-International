import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';

const Categories = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            setProducts(data.products);
        }
        fetchData();
    }, []);

    console.log(products);

    return (
        <div className='my-32'>
            <h2 className='text-center font-teko font-semibold text-4xl text-primary mb-6'>Our Importing Products</h2>
            <hr className='text-center w-64 mx-auto mb-12' />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    products?.map(pro => <Catagory key={pro.id} pro={pro}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Categories;