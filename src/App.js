import React, { useState } from 'react';

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "Success usually comes to those who are too busy to be looking for it.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going.",
];

const colors = ["#f9c74f", "#90be6d", "#f94144", "#577590", "#43aa8b", "#f3722c", "#277da1"];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [bgColor, setBgColor] = useState(colors[0]);

  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generateQuote = () => {
    setQuote(getRandomItem(quotes));
    setBgColor(getRandomItem(colors));
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        transition: 'all 0.5s ease',
        textAlign: 'center'
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', maxWidth: '600px' }}>{quote}</h2>
      <button
        onClick={generateQuote}
        style={{
          padding: '10px 20px',
          backgroundColor: '#fff',
          color: bgColor,
          fontSize: '16px',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        New Quote
      </button>
    </div>
  );
}

export default App;
