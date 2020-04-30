import React from "react";

export default class DoneItem extends React.Component{
    render(){
        return(
            <div>
                {this.props.item}
                <button onClick={()=> this.props.handleClickRemoveItem()}>DELETE ITEM</button>
            </div>
        );
    }
}