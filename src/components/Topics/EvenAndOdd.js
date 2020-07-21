import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val})
    }
        
    assignEvenAndOdds(userInput) {
        let nums = userInput.split(",");
        let evens = [];
        let odds = [];

        nums = nums.map( (n) => Number(n))
        nums = nums.filter( (n) => (n) ? true : (n === 0) ? true : false)

        for (let index in nums){
            let num = nums[index]
            if (num % 2 === 0) {
                evens.push(num)}
            else {
                odds.push(num)}
        }
        this.setState({ evenArray: evens, oddArray: odds, })
    }
        
    
    render (){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick= { () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}