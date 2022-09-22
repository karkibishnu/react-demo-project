import React from 'react'

//component using jsx
const Hello  = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Dumbass !!!</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className:'dummyClass'}, 
        React.createElement('h1', null, 'Hello Dumbass!!!')
    )
}

export default Hello