import React, {useState} from 'react'
// import axios from 'axios'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Form = props => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        if (!Cookies.get('userId')) {
            navigate('/login')
        } else {
            console.log('logged in')
            // axios post {name:name, done:false, createdBy: Cookie.get('userId')}
            // reset
        }
    }
    return (
        <form onSubmit={handleSubmit}> 
        <label>
            Name:
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        </label>
        <input type="submit" value={"Add Bucket Item"}/>
        </form>
    )
}

export default Form