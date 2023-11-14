// App.js
import React, { useState, useEffect } from 'react';
import Column from './Components/column';
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortOption, setSortOption] = useState('priority');
  const [displayOption, setDisplayOption] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();

        if (Array.isArray(data.tickets)) {
          setTickets(data.tickets);
        } else {
          console.error('Data does not contain a valid tickets array:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleGroupByChange = (option) => {
    setGroupBy(option);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const handleDisplayToggle = () => {
    setDisplayOption(!displayOption);
  };

  const allStatusValues = ["Todo", "In progress", "Backlog", "Completed", "Blocked"];
  const allUserValues = ["usr-1", "usr-2", "usr-3", "usr-4", "usr-5"];
  const allPriorityValues = [0, 1, 2, 3, 4];

  return (
    <div className='app'>
      <div className='display'>
        {/* Dropdown for Display */}
        <label htmlFor="displayDropdown">Display:</label>
        <button
          id="displayDropdown"
          onClick={handleDisplayToggle}
        >
          &#9662;
        </button>

        {/* Display Options */}
        {displayOption && (
          <div className="display-options">
            <div className='option-a'>
              {/* Dropdown for Grouping */}
              <label htmlFor="groupingDropdown">Grouping</label>
              <select
                id="groupingDropdown"
                value={groupBy}
                onChange={(e) => handleGroupByChange(e.target.value)}
              >
                <option value='status'>By Status</option>
                <option value='user'>By User</option>
                <option value='priority'>By Priority</option>
              </select>
            </div>

            <div className='option-b'>
              {/* Dropdown for Ordering */}
              <label htmlFor="orderingDropdown">Ordering:</label>
              <select
                id="orderingDropdown"
                value={sortOption}
                onChange={(e) => handleSortOptionChange(e.target.value)}
              >
                <option value='priority'>By Priority</option>
                <option value='title'>By Title</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className='hero-section'>
        {/* Render a Column for each possible status, user, or priority value */}
        {groupBy === 'user' ? (
          allUserValues.map((userId) => (
            <Column
              key={userId}
              title={userId}
              tickets={tickets}
              groupBy={groupBy}
              sortOption={sortOption}
            />
          ))
        ) : groupBy === 'priority' ? (
          allPriorityValues.map((priority) => (
            <Column
              key={priority}
              title={priority.toString()}
              tickets={tickets}
              groupBy={groupBy}
              sortOption={sortOption}
            />
          ))
        ) : (
          allStatusValues.map((status) => (
            <Column
              key={status}
              title={status}
              tickets={tickets}
              groupBy={groupBy}
              sortOption={sortOption}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
