import React, { Component } from 'react';
import './App.css';
import BChart from './BChart';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.receivedData = this.receivedData.bind(this);
  }

  receivedData = data => {
    const time = new Date(data.time).toLocaleTimeString();
    data = { ...data, time };
    this.setState({
      data: [...this.state.data, data]
    })
  }

  componentDidMount() {
    const subscribe = {
      type: 'subscribe',
      channels: [
        {
          name: "ticker",
          product_ids: ["BTC-USD"]
        }
      ]
    };
    this.ws = new WebSocket('wss://ws-feed.gdax.com');
    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe));
    }
    this.ws.onmessage = event => {

      const data = JSON.parse(event.data);
      console.log(data);
      this.receivedData(data);
    }
  }
  componentWillUnmount() {
    this.ws.close();
  }
  render() {
    return (
      <div>
        <BChart data={this.state.data} />
      </div>
    )
  }



}

export default App;
