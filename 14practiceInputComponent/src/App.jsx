import { useState } from "react";
import "./App.css";
import Input from "./Input/Input";

function App() {
  const [amount, setAmount] = useState('');
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const options = ["usa", "india", "landan", "gugrat", "mumbai"];

  const convert = (amount) => {
    return setConvertedAmount(amount * 2);
  };
  
  return (
    <>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        convert(amount)
        setAmount('')
      }}
      >
        <Input
          className=""
          label="From: "
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
        />
        <Input
          className=""
          label="To: "
          amount={convertedAmount}
          onAmountChange={(amount) => setAmount(amount)}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
        />

        <button
          type="submit"
          className="mt-1 w-[440px] border-2 rounded-lg p-2 text-2xl bg-blue-400 border-sky-400"
        >
          Convert Amount ${from} to ${to}
        </button>
      </form>
    </>
  );
}

export default App;
