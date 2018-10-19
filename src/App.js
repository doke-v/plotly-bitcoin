import React, { Component } from 'react';
import History from './components/History.js'
import Current from './components/Current.js'
class App extends Component {
  state = {history: {}, current: {}}
  getHistory(){
    fetch("https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR").then(res=>res.json()).then(data=>{
      this.setState({history: data.bpi})
    })
  }
  getCurrent(){
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(res=>res.json()).then(data=>{
      this.setState({current: data})
    })
    
  }

  componentDidMount(){
    this.getHistory()
    this.getCurrent()
    setInterval(()=>{
      this.getCurrent()
    }, 180000)
  }
  render() {
    return (
      <div className="App">
          <Current data={this.state.current}/>
          <History data={this.state.history}/>
      </div>
    );
  }
}

export default App;
