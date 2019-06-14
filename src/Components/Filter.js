import React from "react"

const Filter = (props) =>{
    return(
        <div>
        Search : <input type="text"  value = {props.searchedValue} onChange={props.handleSearch} />
        </div>
    )
}

export default Filter