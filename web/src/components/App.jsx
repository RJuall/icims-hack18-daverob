import "../lib/bootstrap.min.css";
import React from "react";
import { Inputs } from "./Inputs";

export class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <Inputs/>
                <div>
                    
                </div>
                <footer className="container text-center">    
                    <hr></hr>
                    Rob Juall & David Rosenblum
                </footer>
            </div>
        );
    }
}