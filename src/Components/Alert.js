import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"60px"}}>
            {props.myAlert && <div>
            <div className={`alert alert-${props.myAlert.type.toLowerCase()} alert-dismissible fade show`} role="alert">
                <strong>{props.myAlert.type}</strong> {props.myAlert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>}
        </div>
        
    )
}
