import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';

const Nav = props => {
    const [isLogged, setIsLogged] = useState(Cookies.get('userId')||null)
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/user-current', { withCredentials: true })
    //         .then(res => {setLogged(res.data);})
    // }, []);

    const handleLogout = e => {
        axios.post('http://localhost:8000/api/logout', { withCredentials: true })
            .then(res => {
                Cookies.remove('userToken'); 
                Cookies.remove('userId'); 
                setIsLogged(null)})
            .catch(res => console.log(res) );
    }

    return (
        <nav>
            <a href="/">
                Home
            </a>
            <a href="https://github.com/xtina-lt/group-project">
                GitHub
            </a>
            <a href="/memory-box">
                Memory Box
            </a>
            {
                (isLogged) ?
                <button onClick={handleLogout}>
                    Logout
                </button>
                :
                <a href="/login">
                    Login
                </a>
            }
        </nav>
    )
}

export default Nav