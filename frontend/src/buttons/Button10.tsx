import React from 'react';

const Button = () => {
    const openPage = () => {
        window.location.href = '/addProductForm';
    };

    return (
        <div>
            <button className="custom-button" onClick={openPage}>TISCH 10</button>
        </div>
    );
};

export default Button;