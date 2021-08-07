import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Main from "./Main";
import Block from "./Block";

function App()
{
    const content = 
        <div>
            <Header />
            <Main />
            <Block />
        </div>
    return (content);
}
export default App;
