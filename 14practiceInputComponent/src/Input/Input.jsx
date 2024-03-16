import React, { useId } from "react";

function Input({
    label,
    amount,
    currencyOptions = [],
    selectCurrency="",
    onAmountChange,
    onCurrencyChange,
    amountDisable= false,
    currencyDisable = false,
    className="",
}) {

    const inputId = useId()
  return (
    <div className={`py-8 px-8 max-w-md mx-auto ${className} bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 `}>
      <div className=" w-1/2 block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0">
        <label htmlFor={inputId} className="flex flex-start py-1">
          {label}
        </label>
        <input
          className="text-black p-1 outline-none border-2"
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          id={inputId}
          disabled={amountDisable}
        />
      </div>

      <div className=" w-1/2 text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">Currency Type</p>

          <select
            className="text-slate-500 font-medium p-5"
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => {
              <option key={currency} value={currency}>
                {currency}
              </option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Input;
