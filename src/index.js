import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render() {
        return <div>
            <div className='dasdas'>
                <h1>Hello12312{this.props.name}</h1>
            </div>
        </div>
    }
}
let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, App);