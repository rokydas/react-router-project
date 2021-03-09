import React from 'react';
import './DetailsHeader.css';

const DetailsHeader = ({ badge }) => {
    return (
        <div className="details-header d-flex justify-content-center align-items-center">
            <img className="badge-image" src={badge} alt="" />
        </div>
    );
};

export default DetailsHeader;