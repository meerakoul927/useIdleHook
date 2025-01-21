import React from 'react';
import ReactDOM from 'react-dom';
import {render}  from 'react-dom';

function App() {
  return (
    <div>App</div>
  )
}

export default App;

const domNode = document.getElementById('root');
render(<App/>,domNode);

