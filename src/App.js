import { React, useState } from 'react';
import './App.css';
import { ChromePicker } from 'react-color';

function App() {
  const [color, setColor] = useState('#D7B7E4');
  const [hidden, setHidden] = useState(false);


  return (
    <div className="App" style={{ background: color }}>
      <div className="container">
        {hidden &&
          < ChromePicker color={color} onChange={(updatedColor) => setColor(updatedColor.hex)} />
        }
        <button onClick={() => setHidden(!hidden)}>
          {hidden ? "Close Color Picker" : "Open Color Picker"}
        </button>
      </div>
    </div>
  );
}

export default App;
