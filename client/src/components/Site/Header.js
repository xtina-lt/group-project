import React from 'react'

const Header = props => {
    const {header} = props
    return(
        <header>
            <div>
                {header}
            </div>
            <span className='special-header'>
            Our lives are the sum of our experiences.  
            This is a place to intentionally dream of the experiences we one day wish to remember when looking back at our lives. 
            This is also a place to both find and share inspiration through others’ experience and add to your own.
            Life is meant to be lived and here is where we can keep track of the special experiences we wish to remember most.
            </span>
        </header>
    )
}

export default Header