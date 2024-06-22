import React, { useState } from 'react';

const data = [
  {
    id: 1,
    name: "Jeans",
    percentValues: 70,
  },
  {
    id: 2,
    name: "Shirts",
    percentValues: 40,
  },
  {
    id: 3,
    name: "Belts",
    percentValues: 60,
  },
  {
    id: 4,
    name: "Caps",
    percentValues: 80,
  },
  {
    id: 5,
    name: "Others",
    percentValues: 20,
  },
];

const AreaProgressChart = () => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Function to filter data based on name
  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Sold Items</h4>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filter by name..."
          className="filter-input"
        />
      </div>
      <div className="progress-bar-list">
        {filteredData.map((progressbar) => (
          <div className="progress-bar-item" key={progressbar.id}>
            <div className="bar-item-info">
              <p className="bar-item-info-name">{progressbar.name}</p>
              <p className="bar-item-info-value">
                {progressbar.percentValues}
              </p>
            </div>
            <div className="bar-item-full">
              <div
                className="bar-item-filled"
                style={{
                  width: `${progressbar.percentValues}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaProgressChart;
