import React from "react";

export default class NewList extends React.Component{
    render(){
        return(
            <div>
                <input
                    onChange={(e)=> this.props.inputNewList(e)}
                />
                <button onClick={()=>this.props.handleClickAddList()}>Add new list</button>
            </div>
        );
    }
}