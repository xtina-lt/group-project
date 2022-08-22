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

    
    return(
        <>
            {buckets.length}
            {
                (arr)
                ?
                    arr.map((obj,i) => 
                    <div key={i}>
                        <h2>
                            {buckets.find(e => e._id === obj.bucket).name}
                        </h2>
                        <img src={obj.img}/>
                        <br/>
                        <MemForm list={arr} setList={setArr} old={obj} submit={"update"}/>
                    </div>)
                :
                <div>
                    Create some memories!
                </div>
            }
        </>
    )
}

export default Dash