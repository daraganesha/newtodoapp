import React from "react"

export default class NewItem extends React.Component{
    render(){
        return(
            <div>
                <input
                    onChange={(e)=> this.props.inputNewItem(e)}
                />
                <button onClick={()=> this.props.handleClickAdd()}>ADD</button>
            </div>
        );
    }
}