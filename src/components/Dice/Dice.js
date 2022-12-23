import React, { Component } from 'react'
import './Dice.css';

export default class Dice extends Component {
  state = {
    randomNumber : null,
    eventName : null
  }
  getNumber = (e) =>{
    this.setState({
      randomNumber : Math.floor(Math.random()*(7-1)+1),
      eventName : e.key
    }) 
  }
  componentDidMount(){
    window.addEventListener('keypress', this.getNumber)
  }

  render() {
    if(this.state.eventName === " "){
      document.querySelector('.dice').innerHTML = this.state.randomNumber
    }
    return (
      <div className='dice'>
        
      </div>
    )
  }
}
