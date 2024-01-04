import React, { useState } from 'react';
import '../assets/css/LoginSignup.css';
import { Link } from 'react-router-dom';

import email_icon from '../assets/images/email.png';
import password_icon from '../assets/images/password.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    // If there are no errors, you can proceed with the login logic here
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Add your login logic here
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="forgot-password">
          Forget Password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
          <div className="submit">
            <Link to='/signup'>Sign Up</Link>
          </div>
          <div className="submit">
            <button type="submit" style={{ backgroundColor: 'violet' }}><Link to='/'>
                            Login</Link>

            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Login;
