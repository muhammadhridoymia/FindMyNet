import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/FirstView.css';

function FirstView() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='firstview'>
      <div className='firstview-text'>
        <button onClick={() => setShowForm(true)}>Create Account</button>
        <button>About Us</button>
      </div>

      <div className='firstview-service'>
        <button onClick={() => navigate('/find')}>Find Internet service in your area.</button>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h2>Create Account</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Register</button>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstView;
