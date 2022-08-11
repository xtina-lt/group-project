import React from 'react'
import Form from '../BucketList/Form'

const Home = ({setHeader}) => {
    setHeader('Bucket List')
    var list=[{name: 'Hike a mountain', done: false}, {name: 'Code in a cabin', done: false}, {name: 'Be a Software Engineering Apprentice', done: false}, {name: 'Run a color "Color Run"', done: false}, {name: 'learn to code', done: true}, {name: 'Eat something exotic', done: false}, {name: 'Complete a coding project with a group', done: true}, {name: 'Paint a landscape', done: false}, {name: 'Surf in the ocean', done: false}, {name: 'Swim with the dolphins', done: true}, {name: 'Visit Alaska', done: false}, {name: 'Visit another country', done: false}, {name: 'See a volcano', done: false}, {name: 'See a Hot Springs', done: false}]
    return (
        <> 
            {
                list.map( (e,i)=>
                    (e.done) ?
                    <div key={i} className="done">
                        <button> {e.name} </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> {e.name} </button> 
                    </div>
                )
            }
                        {
                list.map( (e,i)=>
                    (e.done) ?
                    <div key={i} className="done">
                        <button> {e.name} </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> {e.name} </button> 
                    </div>
                )
            }
                        {
                list.map( (e,i)=>
                    (e.done) ?
                    <div key={i} className="done">
                        <button> {e.name} </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> {e.name} </button> 
                    </div>
                )
            }
                        {
                list.map( (e,i)=>
                    (e.done) ?
                    <div key={i} className="done">
                        <button> {e.name} </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> {e.name} </button> 
                    </div>
                )
            }
                        {
                list.map( (e,i)=>
                    (e.done) ?
                    <div key={i} className="done">
                        <button> {e.name} </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> {e.name} </button> 
                    </div>
                )
            }
                        {
                list.map( (e,i)=>
                    (e.done) ?
                    <div key={i} className="done">
                        <button> {e.name} </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> {e.name} </button> 
                    </div>
                )
            }
            <div>
                <h2>
                    Add Bucket Item
                </h2>
                <Form/>
            </div>
        </>
    )
}

export default Home