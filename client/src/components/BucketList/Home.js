import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from '../BucketList/BucketForm'
import { useNavigate } from 'react-router-dom'

const Home = ({setHeader}) => {
    setHeader('Bucket List')
    // initialize a state for bucket.find() request
    const [list, setList] = useState([])
    const navigate = useNavigate()
    // temp for fluff
    var temp=[{name: 'Hike a mountain', complete: false}, {name: 'Code in a cabin', complete: false}, {name: 'Be a Software Engineering Apprentice', complete: false}, {name: 'Run a color "Color Run"', complete: false}, {name: 'learn to code', complete: true}, {name: 'Eat something exotic', complete: false}, {name: 'Complete a coding project with a group', complete: true}, {name: 'Paint a landscape', complete: false}, {name: 'Surf in the ocean', complete: false}, {name: 'Swim with the dolphins', complete: true}, {name: 'Visit Alaska', complete: false}, {name: 'Visit another country', complete: false}, {name: 'See a volcano', complete: false}, {name: 'See a Hot Springs', complete: false}]
    
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
                    (obj.complete) ?
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
                list.map( (obj,i)=>
                    (obj.complete) ?
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
                list.map( (obj,i)=>
                    (obj.complete) ?
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