import { useEffect, useState } from "react";
import './App.css';
import Converter from './components/Converter';
import {FaArrowsAltV} from 'react-icons/fa';
const BASE_URL = "https://api.openrates.io/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

let toAmount, fromAmount;
if(amountInFromCurrency){
  fromAmount = amount
  toAmount = amount*exchangeRate
}else{
  toAmount = amount
  fromAmount = amount/exchangeRate
}

useEffect(() => {
  fetch(BASE_URL)
    .then (res => res.json())
    .then (data => {
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base,...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
}, [])

useEffect(() => {
  if(fromCurrency != null && toCurrency != null){
    fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
  }
}, [fromCurrency, toCurrency])

const handleFromAmountChange = (e) => {
  setAmount(e.target.value)
  setAmountInFromCurrency(true)
}
const handleToAmountChange = (e) => {
  setAmount(e.target.value)
  setAmountInFromCurrency(false)
}

  return (
   <>
    <h1>Currency Converter</h1>
    <Converter currencyOptions={currencyOptions} selectedCurrency={fromCurrency} onChangeCurrency={e => setFromCurrency(e.target.value)} onChangeAmount={handleFromAmountChange} amount={fromAmount} />
    <div className="arrow"><FaArrowsAltV /></div>
    <Converter currencyOptions={currencyOptions} selectedCurrency={toCurrency} onChangeCurrency={e => setToCurrency(e.target.value)} onChangeAmount={handleToAmountChange} amount={toAmount} />
   </>
  );
}

export default App;