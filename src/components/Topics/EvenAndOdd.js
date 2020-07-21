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

        console.log(nums)
        for (let index in nums){
            let num = nums[index]
            console.log(index, ":", num)
            if (num % 2 === 0) {
                console.log("EVEN PUSH", num)
                evens.push(num)}
            else {
                console.log("EVEN PUSH", num)
                odds.push(num)}
        }
        console.log(evens)
        console.log(odds)
        this.setState({ evenArray: evens, oddArray: odds, })
    }
        
    
    render (){
        return (
            <div class="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick= { () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}