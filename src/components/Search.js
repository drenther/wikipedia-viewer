import React, { Component } from 'react';

export class Search extends Component {
	state = {
		open: false
	}

	handleClick = (e) => {
		if (!this.state.open) {
			document.querySelector('input').focus();
			this.setState({open: true});
		} else {
			if (e.target.className === 'cross') {
				this.setState({open: false});
			} 
		}
	}

	render() {
		const currentClass = this.state.open ? 'search open' : 'search';
		const submitHandler = this.props.query ? this.props.handleValidInput : this.props.handleEmptyInput;
		return (
			<div className="wrapper" onClick={this.handleClick}>
				<form className={currentClass} onSubmit={submitHandler}>
					<input type="text" onChange={this.props.handleInputChange} />
					<div className="cross"></div>
				</form>
			</div>
		);
	}
}