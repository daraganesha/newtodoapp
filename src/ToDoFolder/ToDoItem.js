import React from 'react';

export default class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1,
			displayPerson: 'None'
		};
	}

	inputPerson(e) {
		var input = e.target.value;
		input = input.toUpperCase();
		this.setState({ ...this.state, displayPerson: input });
	}

	handleClickAddPerson() {
		this.setState({ ...this.state, page: 2 });
	}

	render() {
		if (this.state.page === 1) {
			return (
				<div>
					{this.props.item},
					<button onClick={() => this.handleClickAddPerson()}>Add person in charge :</button>
					<input onChange={(e) => this.inputPerson(e)} />
				</div>
			);
		} else {
			return (
				<div>
					{this.props.item}. Person in charge :
					{this.state.displayPerson}.
					<button onClick={() => this.props.handleClickDone()}>DONE</button>
				</div>
			);
		}
	}
}
