import React from 'react';

type Button01Props = {
   name: string;
}

const Button = (props: Button01Props) => {
    const openPage = () => {
        window.location.href = '/tables/' + props.name;
    };

    return (
        <div>
            <button className="custom-button" onClick={openPage}>{props.name}</button>
        </div>
    );
};

export default Button;