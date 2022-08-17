import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Form from '../BucketList/Form'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const BucketItem = props => {
    const {id} = useParams()
    const [item, setItem] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/bucket/${id}`)
            .then( res => setItem(res.data) )
            .catch( err => console.log("error in bucket findone") )
    },[])

    const handleDelete = e =>{
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/bucket/${id}`)
            .then( res => navigate('/'))
            .catch( res => console.log('could not delete'))
    }

    return(
        <>
        {
            (Cookies.get("userId") && Cookies.get("userId") === item.creator)
            ?
            <div>
                <Form old={item} submit={"Update"}/>
                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>
            :
            <div>
                not creator
            </div>
        }
        </>
    )
}

export default BucketItem