import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class History extends Component {
  render() {
    let x = Object.keys(this.props.data).map(el => el)
    let y = Object.keys(this.props.data).map(el=> this.props.data[el])
    return (
      <div className="history">  
      <Plot
        data={[
          {mode: 'lines', x, y},
        ]}
        layout={ {title: 'Last 30 days:'} }     
        useResizeHandler = {true}
        style = {{width: "100%", height: "100%"}}
        
      />
      </div>
    );
  }
}

export default History;
