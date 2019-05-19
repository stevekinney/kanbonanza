import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';

import { lists, users } from './default-state';

import './index.scss';

ReactDOM.render(<Application lists={lists} users={users} />, document.getElementById('root'));
