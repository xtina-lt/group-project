import React from 'react'

const Header = props => {
    const {header} = props
    return(
        <header>
            <div>
                {header}
            </div>
            <span className='special-header'>
                description description description description description description description description
            </span>
        </header>
    )
}

export default Header