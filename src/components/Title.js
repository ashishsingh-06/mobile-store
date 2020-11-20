import React from 'react'

function Title(props) {
    return (
        <div className="row">
            <h1 className="text-capitalize">{props.title}</h1>
        </div>
    )
}

export default Title
