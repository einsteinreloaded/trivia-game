import React from 'react'
import loaderImage from 'loading-paddle.gif'
const Button = (props)=>{
    if(props.isButtonVisbile){
        return <button className={props.className} onClick={props.onClick}>{props.text}</button>
    }
    return null
}
const Loader = (props)=>{
    if(props.isVisible){
        return(
            <div className="loader">
                <img src={loaderImage} alt="Loading Quiz"/>
            </div>
        )
    }
    return null
}

export {Button,Loader}