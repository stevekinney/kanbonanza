import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';

import { UsersProvider } from './UsersContext';

import './index.scss';

ReactDOM.render(<UsersProvider><Application /></UsersProvider>, document.getElementById('root'));
