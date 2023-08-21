import React from 'react'

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-danger my-1" role="alert">
               {props.title}
            </div>
        </div>
    )
}

export default Alert