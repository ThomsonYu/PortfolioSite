import React, { Component } from 'react'; // Allows us to use JSX html in our javascript code
import ReactDOM from 'react-dom'; // Allows us to render elements
import App from './Components/App';

// ReactDOM.render(What to Render, Where to Render)
ReactDOM.render(<App />, document.getElementById('app'));