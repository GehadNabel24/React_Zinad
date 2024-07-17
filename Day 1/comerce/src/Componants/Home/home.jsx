import React, { useState } from 'react';
import './Home.css';

export function Home() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert(`Hello, ${name}`);
  };

  return (
    <div className="bg-light p-5 text-center">
      <h1>Welcome to the Home Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

