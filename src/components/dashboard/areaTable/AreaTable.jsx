import React, { useState, useEffect } from 'react';
import AreaTableAction from './AreaTableAction';
import './AreaTable.scss';

const TABLE_HEADS = [
  'Products',
  'Order ID',
  'Date',
  'Customer name',
  'Status',
  'Amount',
  'Action',
];

const TABLE_DATA = [
  {
    id: 100,
    name: 'Iphone 13 Pro',
    order_id: 11232,
    date: 'Jun 29,2022',
    customer: 'Afaq Karim',
    status: 'delivered',
    amount: 400,
  },
  {
    id: 101,
    name: 'Macbook Pro',
    order_id: 11232,
    date: 'Jun 29,2022',
    customer: 'Afaq Karim',
    status: 'pending',
    amount: 288,
  },
  {
    id: 102,
    name: 'Apple Watch',
    order_id: 11232,
    date: 'Jun 29,2022',
    customer: 'Afaq Karim',
    status: 'canceled',
    amount: 500,
  },
  {
    id: 103,
    name: 'Microsoft Book',
    order_id: 11232,
    date: 'Jun 29,2022',
    customer: 'Afaq Karim',
    status: 'delivered',
    amount: 100,
  },
  {
    id: 104,
    name: 'Apple Pen',
    order_id: 11232,
    date: 'Jun 29,2022',
    customer: 'Afaq Karim',
    status: 'delivered',
    amount: 60,
  },
  {
    id: 105,
    name: 'Airpods',
    order_id: 11232,
    date: 'Jun 29,2022',
    customer: 'Afaq Karim',
    status: 'delivered',
    amount: 80,
  },
];

const AreaTable = () => {
  const [statusFilter, setStatusFilter] = useState('delivered'); // Default to 'delivered'
  const [sortedFilteredData, setSortedFilteredData] = useState([]);

  useEffect(() => {
    filterAndSortData(statusFilter);
  }, [statusFilter]);

  const filterAndSortData = (status) => {
    const filteredData = TABLE_DATA.filter(item => item.status === status);

    // Sort the filtered data by amount
    const sorted = filteredData.sort((a, b) => a.amount - b.amount);
    setSortedFilteredData(sorted);
  };

  const handleSortByAmount = () => {
    // Toggle sorting order if needed
    const sorted = [...sortedFilteredData].reverse(); // Reverse the array to toggle sorting
    setSortedFilteredData(sorted);
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <div className="status-filter">
          <label htmlFor="status">Filter by Status:</label>
          <select
            id="status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="delivered">Delivered</option>
            <option value="pending">Pending</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>
                  {th}
                  {th === 'Amount' && (
                    <button className="sort-btn" onClick={handleSortByAmount}>
                      ▲▼
                    </button>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedFilteredData.map((dataItem) => (
              <tr key={dataItem.id}>
                <td>{dataItem.name}</td>
                <td>{dataItem.order_id}</td>
                <td>{dataItem.date}</td>
                <td>{dataItem.customer}</td>
                <td>
                  <div className="dt-status">
                    <span className={`dt-status-dot dot-${dataItem.status}`} />
                    <span className="dt-status-text">{dataItem.status}</span>
                  </div>
                </td>
                <td>${dataItem.amount.toFixed(2)}</td>
                <td className="dt-cell-action">
                  <AreaTableAction />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
