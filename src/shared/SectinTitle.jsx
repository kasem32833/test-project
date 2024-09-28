import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-white text-center'>
            
            <p>{subTitle}</p>
            <h2 className='text-3xl'><span className='text-red-500'>Services</span> {title}</h2>
            
        </div>
    );
};

export default SectionTitle;