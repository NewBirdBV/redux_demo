import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './components/App'
import reducer from './reducers'
const store = createStore(reducer,composeWithDevTools())


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
