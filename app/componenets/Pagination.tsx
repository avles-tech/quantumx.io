import React from 'react';

type PaginationProps = {
    onNext: () => void;
    onPrevious: () => void;
};

const Pagination: React.FC<PaginationProps> = ({ onNext, onPrevious }) => {
    return (
        <div className='m-5'>
            <button className='mr-5' onClick={onPrevious}>Previous</button>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default Pagination;
