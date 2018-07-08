import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/lib/Button';


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
{/* result.message= '[{"name": "Sport and Health", "distance": 2, "categories": 4}, {"name": "Sleepwell Matress Store", "distance": 3, "categories": 2}]'*/}
    const {suggestions} = this.state;
    var categoryList = [
	 "Sleep Tracking",
      	 "BMI",
	 "Activity data",
	 "Body Composition",
    ];


    return (
      <div className="App">
        <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title"><span className="Smart">Smart</span><span className="Health">Health</span><span className="Guide">Guide</span></h1>
        </header>
    {/*    <p className="App-intro">
        </p> */}
	<div className="Suggestion-grid">
		{suggestions.map(suggestion => (
			<SuggestionCard data={suggestion}  categoryList={categoryList}/>	
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
	<p className="Suggestion-dist"><i className="fa fa-map-marker fa-2x"></i> {this.props.data.distance} mi</p>
        <img className="Suggestion-image" src={this.props.data.icon} /><p className="Suggestion-name">{this.props.data.name}</p>
        <p className="Suggestion-data-type">Based on your {this.props.categoryList[this.props.data.metric]}</p>
        <p className="Suggestion-offer">{this.props.data.discount}% Off</p>
        <Button bsStyle="primary" className="Suggestion-cta">SUBSCRIBE</Button>
      </div>
    );
  }
}
export default App;
