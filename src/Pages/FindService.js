import React, { useState } from 'react';
import '../Styles/FindService.css';

function FindService() {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [results, setResults] = useState([]);

  // Sample data
  const internetProviders = [
    { country: 'Bangladesh', city: 'Dhaka', area: 'Uttara Sector 8', name: 'Link3', speed: '100 Mbps', price: '৳1200/month' },
    { country: 'Bangladesh', city: 'Dhaka', area: 'Uttara Sector 8', name: 'Amber IT', speed: '50 Mbps', price: '৳900/month' },
    { country: 'Bangladesh', city: 'Dhaka', area: 'Banani', name: 'MetroNet', speed: '80 Mbps', price: '৳1000/month' },
    { country: 'Bangladesh', city: 'Chattogram', area: 'Agrabad', name: 'Carnival', speed: '60 Mbps', price: '৳850/month' },
  ];

  // Country → City → Area structure
  const dataMap = {
    Bangladesh: {
      Dhaka: ['Uttara Sector 8', 'Banani', 'Gulshan'],
      Chattogram: ['Agrabad', 'Pahartali'],
    },
  };

  const handleSearch = () => {
    const filtered = internetProviders.filter(
      (item) =>
        item.country === country &&
        item.city === city &&
        item.area === area
    );
    setResults(filtered);
  };

  return (
    <div className='find-service'>
      <h1>Find Internet Services Near You</h1>

      <div className='search-fields'>
        {/* Country Selector */}
        <select value={country} onChange={(e) => {
          setCountry(e.target.value);
          setCity('');
          setArea('');
        }}>
          <option value=''>Select Country</option>
          {Object.keys(dataMap).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* City Selector */}
        <select value={city} onChange={(e) => {
          setCity(e.target.value);
          setArea('');
        }} disabled={!country}>
          <option value=''>Select City</option>
          {country &&
            Object.keys(dataMap[country]).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
        </select>

        {/* Area Selector */}
        <select value={area} onChange={(e) => setArea(e.target.value)} disabled={!city}>
          <option value=''>Select Area</option>
          {country && city &&
            dataMap[country][city].map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>

      <div className='results'>
        {results.length > 0 ? (
          results.map((provider, index) => (
            <div className='result-card' key={index}>
              <h3>{provider.name}</h3>
              <p><strong>Speed:</strong> {provider.speed}</p>
              <p><strong>Price:</strong> {provider.price}</p>
              <p>📍 {provider.area}, {provider.city}, {provider.country}</p>
            </div>
          ))
        ) : (
          <p className='no-results'>No results found. Try another location.</p>
        )}
      </div>
    </div>
  );
}

export default FindService;
