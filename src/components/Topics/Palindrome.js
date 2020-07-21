import React, { Component } from 'react';

export default class Palindrome extends Component{
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }
    
    isPalindrome(userInput) {
        let halfNum = (userInput.length - userInput.length % 2) / 2
        let front = userInput.split("").slice(0, halfNum).join("")
        let back = userInput.split("").reverse().slice(0, halfNum).join("")
        
        let answer = (front === back)

        this.setState( { palindrome: answer + ""} )
    }

    render (){
        return (

    <div className="puzzleBox filterObjectPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick= { () => { this.isPalindrome(this.state.userInput) }}> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
    </div>

        )
    }
}