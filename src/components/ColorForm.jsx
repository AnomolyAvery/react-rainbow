import React, { useState } from 'react';

const ColorForm = ({ onColorAdd }) => {
    const [input, setInput] = useState();

    const handleForm = (e) => {
        e.preventDefault();
        onColorAdd(input);
        setInput('');
    };

    return (
        <div>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Add Color</button>
            </form>
        </div>
    );
};

export default ColorForm;
