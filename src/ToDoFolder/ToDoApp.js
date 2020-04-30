import React from 'react';
import NewList from './NewList';
import ToDo from './ToDo';

export default class ToDoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1,
			newList: '',
			listArr: [],
			showButtoninList: 'Show list',
			index: -1
		};
	}

	inputList(e) {
		const name = e.target.value.toUpperCase();
		this.setState({ ...this.state, newList: name });
	}

	addList() {
		const l = this.state.listArr;
		const n = this.state.newList;
		l.push(n);
		this.setState({ ...this.state, listArr: l });
	}

	showList(i) {
		if (this.state.index === -1) {
			this.setState({ ...this.state, page: 2, showButtoninList: 'Hide list', index: i });
		} else this.setState({ ...this.state, page: 1, showButtoninList: 'Show list', index: -1 });
	}

	render() {
		return (
			<div>
				<NewList inputNewList={(e) => this.inputList(e)} handleClickAddList={() => this.addList()} />
				{this.state.listArr.map((list, index) => (
					<ToDo listName={list} showButton={this.state.showButtoninList} />
				))}
			</div>
		);
	}
}
