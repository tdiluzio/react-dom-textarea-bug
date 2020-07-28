import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({
    first: '',
    second: '',
  });

  function handleTextChange({ target }) {
    const { name, value, validity } = target;

    setState({
      [name]: value,
    });

    console.log(`${name} validity:`, validity);
  }
  return (
    <div className="App">
      <textarea
        name="first"
        placeholder="First"
        value={state.first}
        onChange={handleTextChange}
        required={true}
        minLength={10}
      />

      <textarea
        name="second"
        placeholder="Second"
        onChange={handleTextChange}
        required={true}
        minLength={10}
      >
        {state.second}
      </textarea>
    </div>
  );
}

export default App;
