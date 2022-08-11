import React from 'react'

const Catchall = ({setHeader}) => {
    setHeader('Ooops')
    return (
        <>
            <div>
                <span className="accent">
                    Page not found
                <br/>
                    <h2>
                        Make another memory...
                    </h2>
                </span>
                <img src="https://cineblur.com/wp-content/uploads/2017/10/Polaroid-gif.gif" alt="polaroid"/>
            </div>
        </>
    )
}

export default Catchall