import { useState } from 'react';
import ColorBlock from './components/ColorBlock';
import './App.css';
import ColorForm from './components/ColorForm';

function App() {
    const _colors = [
        'violet',
        'blue',
        'lightblue',
        'green',
        'greenyellow',
        'yellow',
        'orange',
        'red',
    ];

    const [colors, setColors] = useState(_colors);

    return (
        <div className="App">
            {colors.map((color, i) => (
                <ColorBlock key={i} color={color} />
            ))}
            <ColorForm
                onColorAdd={(color) => {
                    setColors((c) => [...c, color]);
                }}
            />
        </div>
    );
}

export default App;
