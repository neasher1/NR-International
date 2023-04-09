import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='font-barlow btn btn-secondary text-black bg-white border-primary hover:text-white hover:btn-primary tracking-widest	
'>{children}</button>
        </div>
    );
};

export default PrimaryButton;