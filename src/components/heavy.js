import React, { Component } from 'react';
import moment from 'moment'; // 227.7K (gzipped: 64.7K)

export default class extends Component {
  state = {
    date: '',
  };

  componentDidMount() {
    this.setState({
      date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
    });
  }

  render() {
    return <div>{this.state.date}</div>;
  }
}
