import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    };
  }
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
	targetUrl = 'https://pz3bm5zpgh.execute-api.us-east-1.amazonaws.com/dev/suggestions'
    fetch(proxyUrl + targetUrl )
      .then(res => res.json())
      .then(
		(result) => {
			this.setState({
            			suggestions: JSON.parse(result.message)
          		});
		}
	);
  }

  render() {
    const {suggestions} = this.state;
    
    var sugg = {
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
		{suggestions.map(suggestion => (
			<SuggestionCard data={suggestion} />	
		) )} 
	</div>
      </div>
    );
  }
}

class SuggestionCard extends React.Component {
  render() {
    return (
      <div className="Suggestion-card">
	<p className="Suggestion-dist"><i className="fa fa-map-marker"></i> {this.props.data.distance} miles</p>
        <p className="Suggestion-name">{this.props.data.name}</p>
        <p className="Suggestion-data-type">Based on your {this.props.data.categories} data</p>
        <p className="Suggestion-offer">10% OFF</p>
      </div>
    );
  }
}
export default App;
