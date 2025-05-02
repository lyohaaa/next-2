import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted: ', email);
  };

  return (
    <div className="newsletter">
      <div className="news">
        <p>Subscribe to<br />our Newsletter</p>
        <form>
          <input type="email" placeholder="Your Email Address" value={email} />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
