import React from 'react';

const loading = () => {
    return (
        <div className='min-h-5 flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default loading;