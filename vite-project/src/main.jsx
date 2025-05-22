import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Chinmaya from './Chinmaya';
function MyApp() {
  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}

const anotherObj = (
  <a href="https://www.facebook.com" target="_blank">Visit Google</a>
)
const obj=React.createElement(
  'a',
  { href:"https://www.google.com", target: '_blank'},
  'Click me to visit Google'
);
createRoot(document.getElementById('root')).render(
  <App />
);
