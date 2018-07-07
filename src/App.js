import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    var suggestion = {
      	name: "McLean Sport & Health",
	distance: "3.4 miles",
	category: "Activity",
	offer: "10",
 	imagelink: "https://test.example.com"		
    };


    return (
      <div className="App">
        <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">SmartHealthGuide</h1>
        </header>
        <p className="App-intro">
        </p>
	<div className="Suggestion-grid">
		<SuggestionCard data={suggestion} />
	</div>
      </div>
    );
  }
}

class SuggestionCard extends React.Component {
  render() {
    return (
      <div className="Suggestion-card">
	<p className="Suggestion-dist"><i className="fa fa-map-marker"> {this.props.data.distance}</i></p>
        <p className="Suggestion-name">{this.props.data.name}</p>
        <p className="Suggestion-data-type">Based on your {this.props.data.metric} data</p>
        <p className="Suggestion-offer">{this.props.data.offer}% OFF</p>
      </div>
    );
  }
}
export default App;
