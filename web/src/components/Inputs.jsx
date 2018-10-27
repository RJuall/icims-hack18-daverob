import React from "react";

export class Inputs extends React.Component{
    constructor(props){
        super(props);
    }

    onSumbit(evt){
        evt.preventDefault(); // don't releod page

        // ajax to node! 
    }

    render(){
        return (
            <div>
                <div className="card card-body bg-light">
                    <form onSubmit={this.onSumbit.bind(this)}>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="#s here" required/>
                        </div>
                        <div className="form-group">
                            <input type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}