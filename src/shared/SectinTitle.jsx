import React from 'react';

const SectinTitle = ({title, subTitle}) => {
    return (
        <div className='text-white text-center'>
            
            <p>{subTitle}</p>
            <h2 className='text-3xl'><span className='text-red-500'>Services</span> {title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem dolorem nesciunt dicta qui necessitatibus placeat non minima perferendis. Sed corrupti magnam deleniti minus suscipit inventore aspernatur ad sit quae voluptatum.</p>
        </div>
    );
};

export default SectinTitle;