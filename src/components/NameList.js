import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 33,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 31,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 25,
            skill: 'Vue'
        }
    ]
        
    const personList = persons.map(person=>(
        <Person key={person.id} person={person}></Person>  
    ))

    return <div>
        {personList}
    </div>
    
    
}

export default NameList
