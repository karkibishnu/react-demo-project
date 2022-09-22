import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Buddy</div> ||
            <div>Welcome Guest</div>

        // return (
        //     this.state.isLoggedIn ? 
        //     <div>Welcome Buddy</div> :
        //     <div>Welcome Guest</div>
        // )

        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Buddy</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome Buddy</div>
        //         </div>
        //     )
        // } else {
        // return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
