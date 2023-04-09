import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';

const Catagory = ({ pro }) => {

    const { name, images, Importer, AshContent, ImportFrom, SellingPort, description } = pro;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={images} height="50" alt="coal" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title text-3xl font-semibold font-teko text-primary">{name}</h2>
                <p className='text-xl font-barlow text-left'><span className='font-semibold text-primary text-left'>Importer: </span> {Importer}</p>
                <p className='text-xl font-barlow text-left'><span className='font-semibold text-primary text-left'>Ash Content: </span>{AshContent}</p>
                <p className='text-xl font-barlow text-left'><span className='font-semibold text-primary text-left'>Import From: </span>{ImportFrom}</p>
                <p className='text-xl font-barlow text-left'><span className='font-semibold text-primary text-left'>Selling Port: </span>{SellingPort}</p>
                <p className='text-xl font-barlow leading-relaxed'><span className='font-semibold text-primary'>Details: </span>{description}</p>
                <div className='mt-8 font-barlow'>
                    <button
                        className="font-barlow btn btn-secondary text-black bg-white border-primary hover:text-white hover:btn-primary tracking-widest" >
                        Contact US <BsChevronDoubleRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Catagory;