import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axiois from 'axios'
import MemForm from '../BucketList/MemForm'
import axios from 'axios'

const Dash = props => {
    const {id} = useParams()
    const [arr, setArr] = useState([])
    const [buckets, setBuckets] = useState([])

    useEffect(() => {
        getBuckets()
        axios.get(`http://localhost:8000/api/mems/user/${id}`)
        .then( res => setArr(res.data) )
        .catch( res =>  console.log('err in dash', res.response.data.errors) )
    },[])

    const getBuckets = async() => {
        const res = await axios.get("http://localhost:8000/api/buckets")
            .then( res => setBuckets(res.data))
            .catch( res => console.log("no buckets found") )
    }

    const deleteMem = (e, id) => {
        e.preventDefault()
        console.log('trying to delete')
        axios.delete(`http://localhost:8000/api/mems/${id}`)
            .then(res => {
                console.log('worked ', res.data)
                setArr(arr.filter(e=>e._id !== id))} )
            .catch(res=> console.log("couldnt delete") )
    }

    
    return(
        <>
            {
                (arr.length > 0)
                ?
                    arr.map((obj,i) => 
                    <div key={i}>
                        <h2>
                            {buckets.find(e => e._id === obj.bucket).name}
                        </h2>
                        <img src={obj.img}/>
                        <br/>
                        <MemForm list={arr} setList={setArr} old={obj} submit={"update"}/>
                        <button className="fancy-button" onClick={e=>deleteMem(e,obj._id)}>
                            Delete
                        </button>
                    </div>)
                :
                <div>
                    <span className="accent">
                        Create some memories!
                    </span>
                    <br/>
                    <img src="https://i.gifer.com/UaMU.gif"/>
                </div>
            }
        </>
    )
}

export default Dash