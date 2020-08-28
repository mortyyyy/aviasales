import React from "react";
import 'regenerator-runtime/runtime'
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './app/store';
import {createGlobalStyle} from 'styled-components';
import TicketList from './features/TicketList'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #E5E5E5;
  }
`
let App = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <GlobalStyle/>
            <TicketList/>
        </React.Fragment>
    </Provider>, App);