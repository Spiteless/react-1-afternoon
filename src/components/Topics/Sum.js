import React, { Component } from 'react';

export default class Sum extends Component{
    constructor() {
        super();

        this.state = {
            numbers: [],
            sum: [],
        }
    }
    
    handleChange(val) {
        this.setState({ userInput: val });
    }

    updateNumbers(nums) {
        if (nums.includes(",")) nums = nums.split(",")
        if (nums.includes(" ")) nums = nums.split(" ")
        
        nums = nums.filter( (num) => Number(num) )
        this.setState({ numbers: nums });
      }

    sum(nums) {
        if (nums.includes(",")) nums = nums.split(",")
        if (nums.includes(" ")) nums = nums.split(" ")
        
        console.log(nums)
        nums = nums.map( (num) => Number(num) ).filter( (num) => num)
        
        nums = nums.reduce( (acc, cur) => acc + cur )
        console.log(nums)
       
        this.setState({ sum: nums });    
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

<div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick= { () => { this.sum(this.state.userInput) }}> Add </button>
        <span className="resultsBox "> Sum: { this.state.sum } </span>
</div>

        )
    }
}