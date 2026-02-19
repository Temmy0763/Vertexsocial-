// src/ComingSoon.js
import React, { useState } from 'react';
import axios from 'axios';

function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https:                                
        email,
      });
      if (response.status === 200) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="coming-soon-container">
      <h1>Coming Soon!</h1>
      <p>We're working hard to bring you something amazing.</p>
      <p>Stay tuned for updates!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for updates"
        />
        <button type="submit">Notify Me</button>
      </form>
      {submitted && <p>Thanks for subscribing!</p>}
    </div>
  );
}

export default ComingSoon;
      
