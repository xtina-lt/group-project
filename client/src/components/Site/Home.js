import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from '../BucketList/Form'
import { useNavigate } from 'react-router-dom'

const Home = ({setHeader}) => {
    setHeader('Bucket List')
    // initialize a state for bucket.find() request
    const [list, setList] = useState([])
    const navigate = useNavigate()
    // temp for fluff
    var temp=[{name: 'Hike a mountain', done: false}, {name: 'Code in a cabin', done: false}, {name: 'Be a Software Engineering Apprentice', done: false}, {name: 'Run a color "Color Run"', done: false}, {name: 'learn to code', done: true}, {name: 'Eat something exotic', done: false}, {name: 'Complete a coding project with a group', done: true}, {name: 'Paint a landscape', done: false}, {name: 'Surf in the ocean', done: false}, {name: 'Swim with the dolphins', done: true}, {name: 'Visit Alaska', done: false}, {name: 'Visit another country', done: false}, {name: 'See a volcano', done: false}, {name: 'See a Hot Springs', done: false}]
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/buckets')
            .then( res => {setList(res.data); console.log('yo')} )
            .catch( res => console.log(res.data) )
    }, [])

    const seeItem = (e, obj) => {
        e.preventDefault();
        console.log('id: ', obj._id)
        console.log('creator: ', obj.creator)
        navigate(`/bucket/${obj._id}`)
    }

    return (
        <> 
            {
                list.map( (obj,i)=>
                    (obj.done) ?
                    <div key={i} className="done">
                        <button onClick={e=>seeItem(e, obj)}> 
                            {obj.name} 
                        </button> 
                    </div>
                    :
                    <div key={i}>
                        <button onClick={e=>seeItem(e, obj)}> 
                            {obj.name} 
                        </button> 
                    </div>
                )
            }
            {
                temp.map( (obj,i)=>
                    (obj.done) ?
                    <div key={i} className="done">
                        <button> 
                            {obj.name} 
                        </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> 
                            {obj.name} 
                        </button> 
                    </div>
                )
            }
                        {
                temp.map( (obj,i)=>
                    (obj.done) ?
                    <div key={i} className="done">
                        <button> 
                            {obj.name} 
                        </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> 
                            {obj.name} 
                        </button> 
                    </div>
                )
            }
                        {
                temp.map( (obj,i)=>
                    (obj.done) ?
                    <div key={i} className="done">
                        <button> 
                            {obj.name} 
                        </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> 
                            {obj.name} 
                        </button> 
                    </div>
                )
            }
                        {
                temp.map( (obj,i)=>
                    (obj.done) ?
                    <div key={i} className="done">
                        <button> 
                            {obj.name} 
                        </button> 
                    </div>
                    :
                    <div key={i}>
                        <button> 
                            {obj.name} 
                        </button> 
                    </div>
                )
            }
            <div>
                <h2>
                    Add Bucket Item
                </h2>
                <Form list={list} setList={setList}/>
            </div>
        </>
    )
}

export default Home