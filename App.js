import React from 'react';
import ReactDOM from 'react-dom';
import {render}  from 'react-dom';
import useIdleHook from './constants/utils/useIdleHook';

function App() {
    const idle = useIdleHook(2000);
  return (
    <>
       <p>{idle ? 'user is inactive' : 'user is active'}</p>
    </>
  )
}

export default App;

const domNode = document.getElementById('root');
render(<App/>,domNode);

