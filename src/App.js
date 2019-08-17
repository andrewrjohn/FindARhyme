import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import "./App.css";
import SearchResult from "./SearchResult";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
    }
  }
  onChange = (e) => {
    const terms = e.target.value.split(" ");
    const lastWord = terms[terms.length - 1];

    fetch(`https://api.datamuse.com/words?rel_rhy=${lastWord}&md=d`).then(res => {
      return res.json();
    }).then(words => this.setState({ searchResults: words }))
  }
  render() {
    console.log(this.state.searchResults)
    return (
      <>
        <Helmet title="Find a Dope Rhyme">
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="container">
          <div className="title">Find a Rhyme</div>
          <input type="text" onChange={this.onChange} className="searchInput" placeholder="Start typing to find words that rhyme" />
          <div className="resultsContainer">
            {
              this.state.searchResults.map(result => <SearchResult result={result} />)
            }
          </div>
        </div>
      </>
    )
  }
}
