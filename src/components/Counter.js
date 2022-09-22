import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment() {
        // this.setState({
        //     count : this.state.count + 1
        // }, () => {console.log('Callback value', this.state.count)}
        // )
        
        this.setState(prevStat => ({
            count : prevStat.count + 1
        }))

        console.log(this.state.count)
    }

    incrementTwice() {
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick = { () => this.incrementTwice()}>Increment</button>
            </div>
        )
    }
}

export default Counter
