import { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);

  // Fetch rates from API
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setFromCurrency("USD");
        setToCurrency("INR");
      })
      .catch((err) => console.error("Failed to fetch rates", err));
  }, []);

  const convertCurrency = () => {
    // Prevent conversion if rates not loaded
    if (!rates || Object.keys(rates).length === 0) {
      alert("Rates not loaded yet. Please wait a moment.");
      return;
    }

    if (!rates[fromCurrency] || !rates[toCurrency]) return;

    // Convert from 'fromCurrency' to base and then to 'toCurrency'
    const amountInBase = amount / rates[fromCurrency];
    const converted = amountInBase * rates[toCurrency];

    setResult(converted.toFixed(2));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-orange-200 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-bold">Currency Converter</h1>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border rounded-xl"
          placeholder="Enter amount"
        />

        <div className="flex gap-3">
          {Object.keys(rates || {}).length > 0 && (
            <>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="flex-1 p-3 border rounded-xl"
              >
                {Object.keys(rates).map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </select>

              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="flex-1 p-3 border rounded-xl"
              >
                {Object.keys(rates).map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </select>
            </>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={convertCurrency}
            disabled={Object.keys(rates || {}).length === 0}
            className={`flex-1 px-6 py-3 rounded-xl shadow text-white transition ${
              Object.keys(rates || {}).length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            Convert
          </button>

          <button
            onClick={swapCurrencies}
            className="flex-1 px-6 py-3 bg-gray-500 text-white rounded-xl shadow hover:bg-gray-600 transition"
          >
            Swap
          </button>
        </div>

        {result && (
          <p className="text-xl font-semibold">
            Result: {result} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
}