import React, { Component } from 'react';

class Buttons extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }

  }


  render() {
    return (
      <div>
        <button value='AC' >AC</button>
        <button value='/' >/</button>
        <button value='x' >X</button>
        <button value='7' >7</button>
        <button value='8' >8</button>
        <button value='9' >9</button>
        <button value='-' >-</button>
        <button value='4' >4</button>
        <button value='5' >5</button>
        <button value='6' >6</button>
        <button value='+' >+</button>
        <button value='1' >1</button>
        <button value='2' >2</button>
        <button value='3' >3</button>
        <button value='0' >0</button>
        <button value='.' >.</button>
        <button value='=' >=</button>
      </div>
    );
  }
}

export default Buttons
