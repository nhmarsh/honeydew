import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

//Entry point for our react application


//Create our top-level store with thunk
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Pull our root element and app element into consts for readability
const containerElement = document.getElementById('root');
const appElement = (
    <Provider store={store}>
        <App/>
    </Provider>
);
//Render our App (enclosed in a provider which contains the store we just created)
//Onto containerElement on the page.
//This "injects" our app onto the page.
ReactDOM.render(appElement, containerElement);
