import React from 'react'

function Converter(props) {
    return (
        <>
        <input type="number" value={props.theAmount} onChange = {props.onChangeAmount} />
        <select name="" id="" value={props.selectedCurr} onChange = {props.onChangeSelectedCurr}>
            {props.currOptions.map(option => <option value={option} key={option}>{option}</option>)}
        </select>
        </>
    )
}

export default Converter
