import React from 'react';
import "./card.css";

const Card = ({ ticket }) => {

    if (!ticket) {
    return <div>No ticket data available</div>;
  }
  const { id, title, user, status, priority ,tag} = ticket;

  return (
    <div className="ticket-card">
      <h3>{id}</h3>
      <div className='checky'>
        <input type="checkbox" name="ticketCheckbox" /> {/* Add radio button */}
        <p>{title}</p>
      </div>
      
      <p>{tag}</p>
      
    </div>
  );
};

export default Card;
