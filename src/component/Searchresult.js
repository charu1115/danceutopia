import React from "react"
const Searchresult = (props) => {
    const img=`https://source.unsplash.com/500x500?${props.name}`
    return(
        <>
        
        <img src={img} alt="search" />
        </>
    )
}

export default Searchresult