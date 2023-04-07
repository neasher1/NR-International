import React from 'react';
import banner from "../../../Images/coal-banner1.jpg";
import { BsChevronDoubleRight } from 'react-icons/bs';
import PrimaryButton from '../../../Button/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse gap-24 md:gap-14 justify-between items-center">
                <div>
                    <img src={banner} className="w-full rounded-lg shadow-2xl" alt='fiveM Heist Cover' />
                </div>
                <div className='w-full lg:w-full'>
                    <h1 className="text-4xl md:text-6xl font-semibold font-teko text-primary leading-relaxed">High-Quality Coal and Stone Products for Your Needs</h1>
                    <p className='font-barlow my-8 w-11/12 text-xl leading-loose'>We're an export-import company in Bangladesh, specializing in high-quality coal, stone, and onion products. Trust us to deliver excellence and reliability, whether you need products for construction, landscaping, or cooking.</p>
                    <div className='mt-8 font-barlow'>
                        <PrimaryButton>Contact US <BsChevronDoubleRight /></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;