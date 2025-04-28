import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      alert(`Count is a multiple of 10! Current count: ${count}`);
    }
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <section id="counter" className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center bg-slate-100/10 backdrop-filter backdrop-blur-sm rounded-3xl shadow-lg p-24 md:p-12 max-w-xl w-full border border-slate-50/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Counter</h2>

        <div className="text-6xl md:text-7xl font-extrabold mb-8 text-white drop-shadow">
          {count}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={increment}
            className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 hover:from-green-900 hover:via-green-700 hover:to-green-900  text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md w-full md:w-auto"
          >
            Inc
          </button>
          <button
            onClick={reset}
            className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 hover:from-yellow-900 hover:via-yellow-700 hover:to-yellow-900  text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md w-full md:w-auto"
          >
            Reset
          </button>
          <button
            onClick={decrement}
            className="bg-gradient-to-r from-red-600 via-red-400 to-red-600 hover:from-red-900 hover:via-red-700 hover:to-red-900  text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md w-full md:w-auto"
          >
            Dec
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;