import "../lib/bootstrap.min.css";
import React from "react";
import { HEREMap } from "react-here-maps";

export class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div>
                    <HEREMap
                        appId={"itrCtesJG8SmB2bRpsAJ"}
                        appCode={"_2eCy3-1g4UKxTNtgRWoxQ"}
                        center={{lat: 1, lng: 1}}
                        zoom={14}
                        hidpi={true}
                    />
                </div>
            </div>
        );
    }
}