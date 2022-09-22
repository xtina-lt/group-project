import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Form from './BucketForm'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import MemForm from './MemForm'

const BucketItem = props => {
    const {id} = useParams()
    const [item, setItem] = useState({})
    const [arr, setArr] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/bucket/${id}`)
            .then( res => {setItem(res.data); getMems(res.data._id);} )
            .catch( err => console.log("error in bucket findone") )
    },[])

    const getMems = async(bucketId) => {
        console.log("getmems function")
        console.log("item id", bucketId)
        const res = await axios.get(`http://localhost:8000/api/mems/bucket/${bucketId}`);
        console.log('getmems data', res.data)
        setArr(res.data)
    }

    const handleDelete = e =>{
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/bucket/${id}`)
            .then( res => navigate('/'))
            .catch( res => console.log('could not delete'))
    }

    return(
        <>
        <div className='no-background'>
            {/* BUCKET ITEM READ */}
            {
                (Cookies.get("userId") && Cookies.get("userId") === item.creator)
                ?
                <>
                    {/*creator*/}
                    <div>
                        <h2>
                            Bucket item
                        </h2>
                        <Form old={item} submit={"Update"}/>
                        <button onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </>
                :
                <>
                {/* not creator*/}
                    <div className='no-background'>
                        <h2>
                            Bucket item
                        </h2>
                        <h3>
                            {item.name}
                        </h3>
                    </div>
                </>
            }
            {/* READ ALL MEMORIES */}
            <h2>
                Memories
            </h2>
            {
                arr.map((obj, i) => 
                    <div key={i}>
                        {(obj.img)
                        ?
                        <img src={obj.img}/>
                        :
                        null
                        }
                        <br/>
                        Id: {obj._id}
                        <br/>
                        Price: {obj.price}
                        <br/>
                        Notes: {obj.notes.join(', ')}
                        <br/>
                        Location: {obj.location}
                    </div>
            )}
        </div>
        
        <div className='no-background'>
            {/* CREATE A MEMORY */}
            <div>
                <h2>
                    Add a Memory
                </h2>
                <MemForm list={arr} setList={setArr} bucket={item}/>
            </div>
        </div>
        </>
    )
}

export default BucketItem