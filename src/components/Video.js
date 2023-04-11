import React from 'react'

const Video = ({title, color}) => {
    return (
        <>
        <img src="https://placeimg.com/180/180/nature" alt="picking image from the website" />
        <h1 style={{backgroundColor:color}}>{title} </h1>
        </>
    )
}

export default Video




