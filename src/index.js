import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from 'styled-components';
import TicketList from './features/TicketList'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #E5E5E5;
  }
`
const HelloMessage = () => (
    <React.Fragment>
        <GlobalStyle />
        <TicketList />
    </React.Fragment>
)
let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, App);