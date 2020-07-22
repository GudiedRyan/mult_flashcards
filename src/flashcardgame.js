import React from 'react';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            input: "",
            num1: Math.floor(Math.random()*10),
            num2: Math.ceil(Math.random()*10),
            incorrect: false
        }
    }
    render() {
        return(
            <div className="game">
                <h1 className={this.state.incorrect ? "incorrect" : ""}>{this.state.num1} x {this.state.num2}</h1>
                <input onKeyPress={this.inputEnter} onChange={this.updateAnswer} value={this.state.input}></input>
                <h3>Score: {this.state.score}</h3>
            </div>
        )
    }
    updateAnswer = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    inputEnter = (event) => {
        if (event.key === "Enter") {
            const answer = parseInt(this.state.input);
            if (answer === this.state.num1*this.state.num2) {
                this.setState((state) => ({
                    num1: Math.floor(Math.random()*10),
                    num2: Math.ceil(Math.random()*10),
                    score: state.score + 1,
                    input: "",
                    incorrect: false
                }))
            } else {
                this.setState((state) => ({
                    input: "",
                    incorrect: true
                }))
            }
        }
    }
}

export default Game;