import React, { useState } from 'react';
import './App.css';

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
    <section className="App">
      <div>
        <h1>Please type a character in each textarea</h1>
        <p>
          And open the console to compare&nbsp;
          <span className="italic">
            event.target.validity
          </span>
        </p>
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
    </section>
  );
}

export default App;
