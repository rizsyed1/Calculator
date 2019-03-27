import React, { Component } from 'react';
import './resultComponent.css'

class ResultComponent extends Component {

  render() {
    let {result} = this.props;

    if ({result} === '') {
      return (
        <div className='result'>
          <p>Enter calculation...</p>
        </div>
      );
    } else {
        return (
          <div className='result'>
            <p>{result}</p>
          </div>
        );
      }

  }
}

export default ResultComponent;
