import { useEffect, useState } from "react";
import './App.css';
import Converter from './components/Converter';
import {FaArrowsAltV} from 'react-icons/fa';

function App() {
  const BASE_URL = "https://data.fixer.io/api/latest";

  const [currOptions, setCurrOptions] = useState([]);
  const [fromCurr, setFromCurr] = useState();
  const [toCurr, setToCurr] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurr, setAmountInFromCurr] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

  useEffect( () => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurr = Object.keys(data.rates)[0];
        setCurrOptions([data.base, ...Object.keys(data.rates)])
        console.log(data);
        setFromCurr(data.base);
        setToCurr(firstCurr);
        setExchangeRate(data.rates[firstCurr])
      })
  },[])

useEffect(() => {
  if(fromCurr != null && toCurr != null){
    fetch(`${BASE_URL}?base=${fromCurr}&symbols=${toCurr}`)
    .then(res => res.json())
    .then(data => setExchangeRate(data.rates[toCurr]))
  }
}, [fromCurr, toCurr])

  const onChangeSelectedFromCurr = (e) => setFromCurr(e.target.value);
  const onChangeSelectedToCurr = (e) => setToCurr(e.target.value);

  let toAmount, fromAmount;
  if (amountInFromCurr){
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  }else{
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }
  const handleFromAmountChange = (e) => {setAmount(e.target.value); setAmountInFromCurr(true)}
  const handleToAmountChange = (e) => {setAmount(e.target.value); setAmountInFromCurr(false)}
  

  return (
   <>
   <Converter currOptions = {currOptions} selectedCurr = {fromCurr} onChangeSelectedCurr = {onChangeSelectedFromCurr} amount = {fromAmount} onChangeAmount = {handleFromAmountChange} />
   <div className="arrow"><FaArrowsAltV /></div>
   <Converter currOptions = {currOptions} selectedCurr = {toCurr} onChangeSelectedCurr = {onChangeSelectedToCurr} amount = {toAmount} onChangeAmount = {handleToAmountChange} />

   </>
  );
}

export default App;
