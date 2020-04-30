import React from 'react';
import ToDoItem from './ToDoItem';
import NewItem from './NewItem';
import DoneItem from './DoneItem';

export default class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: '',
			listToDo: [],
			listDone: [],
			listDoneDisplay: [],
			filterDone: 'Show done item(s)',
			showOrHide: 'Show '
		};
	}

	inputNewItem(e) {
		var input = e.target.value.toUpperCase();
		this.setState({ ...this.state, newItem: input });
	}

	addItem() {
		const item = this.state.newItem;
		const list = this.state.listToDo;
		list.push(item);
		this.setState({ ...this.state, listToDo: list });
	}

	isDone(index) {
		const tempListToDo = this.state.listToDo;
		const item = tempListToDo[index];
		const tempListDone = this.state.listDone;
		tempListToDo.splice(index, 1);
		tempListDone.push(item);
		this.setState({ ...this.state, listToDo: tempListToDo, listDone: tempListDone });
	}

	removeItem(index) {
		const tempListDone = this.state.listDone;
		tempListDone.splice(index, 1);
		this.setState({ ...this.state, listDone: tempListDone });
	}

	handleClickShowDone() {
		const f = this.state.filterDone;
		if (f === 'Show done item(s)') {
			const l = this.state.listDone;
			this.setState({ ...this.state, listDoneDisplay: l, filterDone: 'Hide done item(s)' });
		} else {
			this.setState({ ...this.state, listDoneDisplay: [], filterDone: 'Show done item(s)' });
		}
	}

	handleClickShowList() {
		this.state.showOrHide === 'Show '
			? this.setState({ ...this.state, showOrHide: 'Hide ' })
			: this.setState({ ...this.state, showOrHide: 'Show ' });
	}
	render() {
		if (this.state.showOrHide === 'Show ') {
			return (
				<div>
					<h3>
						LIST : {this.props.listName}
						<button onClick={() => this.handleClickShowList()}>
							{this.state.showOrHide}
							{this.props.listName}
						</button>
					</h3>
				</div>
			);
		} else {
			return (
				<div>
					<h3>
						LIST : {this.props.listName}
						<button onClick={() => this.handleClickShowList()}>
							{this.state.showOrHide}
							{this.props.listName}
						</button>
					</h3>
					<NewItem inputNewItem={(e) => this.inputNewItem(e)} handleClickAdd={() => this.addItem()} />
					<button onClick={() => this.handleClickShowDone()}>{this.state.filterDone}</button>
					<h6>
						TO BE DONE :
						{this.state.listToDo.map((itemList, itemIndex) => (
							<ToDoItem item={itemList} handleClickDone={() => this.isDone(itemIndex)} />
						))}
					</h6>
					<h6>
						DONE :
						{this.state.listDoneDisplay.map((itemList, itemIndex) => (
							<DoneItem item={itemList} handleClickRemoveItem={() => this.removeItem(itemIndex)} />
						))}
					</h6>
				</div>
			);
		}
	}
}
