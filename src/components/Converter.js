import React from 'react'

function Converter(props) {
    return (
        <>
        <input type="number" value={props.amount} onChange = {props.onChangeAmount} />
        <select name="" id="" value={props.selectedCurrency} onChange = {props.onChangeCurrency}>
            {props.currencyOptions.map((option, index) => <option value={option} key={index}>{option}</option>)}
        </select>
        </>
    )
}

export default Converter
