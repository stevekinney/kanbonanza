import React from 'react';
import ReactDOM from 'react-dom';

import ApplicationContainer from './containers/ApplicationContainer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import './index.scss';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><ApplicationContainer /></Provider>, document.getElementById('root'));
