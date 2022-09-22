
//functional component
import React from 'react'

// function Greet() {
//     return <h1>Hello Buddy</h1>
// }

//named export ask for exact name while importing
//export const Greet = () => <h1>Hello Buddy</h1>

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}

export default Greet