import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App'

// Render recibe dos parametros. El componente, y donde lo vamos a empujar
ReactDom.render(<App />, document.getElementById('app'));
