import React from 'react';

const Button = () => {
    const openPage = () => {
        window.location.href = '/addProductForm';
    };

    return (
        <div>
            <button className="custom-button" onClick={openPage}>TISCH 3</button>
        </div>
    );
};

export default Button;