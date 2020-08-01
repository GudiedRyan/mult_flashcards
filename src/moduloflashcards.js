import React from 'react';

class ModuloGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            input: "",
            a: Math.floor(Math.random()*10),
            b: Math.ceil(Math.random()*10),
            incorrect: false
        }
    }
    render() {
        return(
            <div className="game">
                <h1 className={this.state.incorrect ? "incorrect" : ""}>{this.state.a} mod {this.state.b}</h1>
                <input onKeyPress={this.inputEnter} onChange={this.inputChange} value={this.state.input}></input>
                <h3>Score: {this.state.score}</h3>
            </div>
        )
    }
    inputEnter = (event) => {
        if (event.key === "Enter") {
            const answer = parseInt(this.state.input);
            if (answer === this.state.a % this.state.b) {
                this.setState(state => ({
                    a: Math.floor(Math.random()*10),
                    b: Math.ceil(Math.random()*10),
                    incorrect: false,
                    score: state.score + 1,
                    input: ""
                }))
            } else {
                this.setState(state => ({
                    incorrect: true,
                    input: ""
                }))
            }
        }
    }
    inputChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }
}

export default ModuloGame;