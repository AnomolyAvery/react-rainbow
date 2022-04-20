import React from 'react';

const ColorBlock = ({ color }) => {
    return (
        <div
            style={{
                backgroundColor: color,
            }}
        >
            <p>{color}</p>
        </div>
    );
};

export default ColorBlock;
