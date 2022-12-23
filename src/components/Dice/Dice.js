import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
  state = {
   data : null
  }
 
  componentDidMount(){
    fetch('https://acb-api.algoritmika.org/api/transaction')
    .then(response => response.json())
    .then(data => {
      this.setState({ data : data})
    });
  }

  render() {

    return (
      <div>{
        document.write(this.state.data)
        }</div>
    )
  }
}
export default Dice