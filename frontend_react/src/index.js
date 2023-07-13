import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import './index.css';

//connects app straight to root div in public folder
ReactDom.render(<App />, document.getElementById('root'));