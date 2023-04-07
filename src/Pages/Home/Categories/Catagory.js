import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import PrimaryButton from '../../../Button/PrimaryButton/PrimaryButton';

const Catagory = ({ pro }) => {

    const { name, images, Importer, AshContent, ImportFrom, SellingPort, description } = pro;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={images} height="50" alt="coal" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title text-5xl font-semibold font-teko text-primary">{name}</h2>
                <p className='text-xl font-barlow'><span className='font-semibold text-primary'>Importer: </span> {Importer}</p>
                <p className='text-xl font-barlow'><span className='font-semibold text-primary'>Ash Content: </span>{AshContent}</p>
                <p className='text-xl font-barlow'><span className='font-semibold text-primary'>Import From: </span>{ImportFrom}</p>
                <p className='text-xl font-barlow'><span className='font-semibold text-primary'>Selling Port: </span>{SellingPort}</p>
                <p className='text-xl font-barlow leading-relaxed'><span className='font-semibold text-primary'>Details: </span>{description}</p>
                <div className='mt-8 font-barlow'>
                    <PrimaryButton>Contact US <BsChevronDoubleRight /></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Catagory;