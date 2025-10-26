import React, { useState } from "react";
import "../Styles/ApplyForm.css";

const IspForm = ({ onAddProvider }) => {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    area: "",
    name: "",
    speed: "",
    price: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProvider(formData);
    alert("✅ Provider added successfully!");
    setFormData({
      country: "",
      city: "",
      area: "",
      name: "",
      speed: "",
      price: "",
      phone: "",
      website: "",
    });
  };

  return (
    <div className="isp-section">
      <div className="isp-card">
        <h1>Register Your Internet Service</h1>
        <p className="subtitle">
          Fill out your service details to be visible to users.
        </p>

        <form onSubmit={handleSubmit} className="isp-form">
          {Object.keys(formData).map((key) => (
            <div key={key} className="form-group">
              <label>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
                placeholder={`Enter ${key}`}
              />
            </div>
          ))}

          <button type="submit" className="submit-btn">
            Add Provider
          </button>
        </form>
      </div>
    </div>
  );
};

export default IspForm;
