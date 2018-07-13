import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'

// import reducers from './store/reducers'
import store from './store'
import * as action from './store/actions'
import { Provider } from 'react-redux'


store.dispatch(action.dispatchPosts())
//store.dispatch(action.dispatchCat())

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();



