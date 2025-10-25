import React, { useState } from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPlus, setShowPlus] = useState(false);

  return (
    <>
      <div className='navbar'>
        <div className='logo'>Logo</div>
        <div className='profile'></div>

        <div className='buttons'>
          <div className='login-button' onClick={() => setShowLogin(true)}>
            Login
          </div>
          <div className='get-plus' onClick={() => setShowPlus(true)}>
            Get Plus
          </div>
        </div>
      </div>

      {/* ===== LOGIN FORM ===== */}
      {showLogin && (
        <div className='overlay'>
          <div className='popup-container'>
            <h2>Login</h2>
            <form>
              <input type='email' placeholder='Email' required />
              <input type='password' placeholder='Password' required />
              <button type='submit'>Login</button>
              <button
                type='button'
                className='close-btn'
                onClick={() => setShowLogin(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===== GET PLUS FORM ===== */}
      {showPlus && (
        <div className='overlay'>
          <div className='popup-container'>
            <h2>Get Plus Membership</h2>
            <form>
              <input type='text' placeholder='Full Name' required />
              <input type='email' placeholder='Email' required />
              <select required>
                <option value=''>Choose Plan</option>
                <option value='basic'>Basic - $5/month</option>
                <option value='premium'>Premium - $10/month</option>
                <option value='vip'>VIP - $20/month</option>
              </select>
              <button type='submit'>Subscribe</button>
              <button
                type='button'
                className='close-btn'
                onClick={() => setShowPlus(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
