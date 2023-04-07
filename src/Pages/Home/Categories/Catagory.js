import React from 'react';

const Catagory = () => {
    return (
        <div className='my-16'>
            <h2 className='text-center font-teko font-semibold text-6xl text-primary mb-6'>Featured Products</h2>
            <hr className='text-center w-32 mx-auto' />
            <div className='grid grid-cols-3'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;