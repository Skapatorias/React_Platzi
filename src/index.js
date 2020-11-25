import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld'

// Render recibe dos parametros. El componente, y donde lo vamos a empujar
ReactDom.render(<HelloWorld />, document.getElementById('app'));
