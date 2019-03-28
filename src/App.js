import React, { Component } from 'react';
import './App.css';
import KeypadComponent from './Components/keypadComponent';
import ResultComponent from './Components/resultComponent'

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      result: ' '
    }

  }

  onClick = (button) => {
    if (button === '='){
      this.calculate()
    } else if (button === 'C') {
      this.backSpace()
    } else if (button === 'CE') {
      this.reset()
    } else {
      this.setState({result: this.state.result + button})
    }
  }

  calculate = () => {
    try {
      this.setState({
        //eslint-disable-next-line
        result: (eval(this.state.result) || '')
      })
    } catch (e) {
      this.setState({
        result: 'error'
      })
    }
  };

  reset = () => {
    this.setState({
      result: ''
    })
  };


  backSpace = () => {
    if (this.state.result === ''){
      return
    } else {
      this.setState({
        result: this.state.result.slice(0, -1)
      })
    }
  }


  render() {
    return (
      <div className='container'>
        <div className='calculator-body'>
          <h1>Calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeypadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
