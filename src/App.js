import React, { Component } from 'react';
import { Search, Random, Article } from './components';

class App extends Component {
	state = {
		query: '',
		articles: []
	}

	linkToRandom = () => {
		window.open("https://en.wikipedia.org/wiki/Special:Random");
	}

	handleValidInput = (e) => {
		e.preventDefault();
		fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&generator=search&origin=*&gsrsearch=${this.state.query}`)
			.then(res => res.json(), err => alert("Error while fetching results. Please try again."))
			.then(json => {
				const query = json.query;
				if (query) {
					const articles = [];
					Object.keys(json.query.pages).forEach( k => articles.push(Object.assign({}, json.query.pages[k])));
					this.setState({articles});
				} else {
					alert("No results found! Search for something else");
				}
			});
	}

	handleEmptyInput = (e) => {
		e.preventDefault();
		alert("Please provide a valid query!");
	}

	handleInputChange = (e) => {
		this.setState({
			query: e.target.value
		});
	}

  render() {
    return (
      <div className="app">
        <div className="header">
					<Search handleInputChange={this.handleInputChange} handleEmptyInput={this.handleEmptyInput} handleValidInput={this.handleValidInput} query={this.state.query}/>
					<Random linkToRandom={this.linkToRandom}/>
				</div>
				<div className="main">
					{this.state.articles.map( article => <Article key={article.pageid} pageid={article.pageid} title={article.title} extract={article.extract}/>)}
				</div>
      </div>
    );
  }
}

export default App;
