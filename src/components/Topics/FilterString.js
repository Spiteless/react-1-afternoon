import React, { Component } from 'react';

export default class FilterString extends Component{
    constructor(){
        super();

        this.state = {
        names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
        userInput: '',
        filteredNames: []
        };
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterNames(userInput) {
        console.log(userInput)
        let names = this.state.names
        let filtered = []

        filtered = names.filter( (person) => person.includes(userInput))
        console.log(names)
        this.setState({filteredNames: filtered})
        
        console.log(this.state.filteredNames)

    }

    render (){
        // return (<div> </div>)
        return (
        
    <div className="puzzleBox filterObjectPB">
            <h4>Filter String</h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.names, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick= { () => { this.filterNames(this.state.userInput) }}> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredNames, null, 10)} </span>
    </div>
                )
    }
}