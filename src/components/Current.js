import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="current">
        <div className = "info">Bitcoin price right now:</div>
        {this.props.data.bpi && this.props.data.bpi["EUR"].rate + "€"}
        {this.props.data.bpi && <div className = "updated"> Updated: {this.props.data.time.updated}</div>}
      </div>
    );
  }
}

export default App;
