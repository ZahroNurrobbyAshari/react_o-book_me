import React from 'react'

const Button=(props)=> {
    return (
        <div>
            <button className="btn"><span>{props.btn}</span></button>
        </div>
    )
}

export default Button
