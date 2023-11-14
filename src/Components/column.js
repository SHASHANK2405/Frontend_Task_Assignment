// // Column.js
// import React from 'react';
// import Card from './card';

// const Column = ({ title, tickets, groupBy }) => {
//   let filteredTickets;

//   if (groupBy === 'status') {
//     // If grouping by status, filter based on the specified status
//     filteredTickets = tickets.filter((ticket) => ticket.status === title);
//   } else if (groupBy === 'user') {
//     // If grouping by user, filter based on the specified userId
//     filteredTickets = tickets.filter((ticket) => ticket.userId === title);
//   } else {
//     // If grouping by priority, filter based on the specified priority
//     filteredTickets = tickets.filter((ticket) => ticket.priority === parseInt(title));
//   }

//   return (
//     <div className="ticket-column">
//       <h2>{groupBy === 'status' ? title : groupBy === 'user' ? title : title}</h2>
//       <div className="ticket-list">
//         {filteredTickets.map((ticket) => (
//           <Card key={ticket.id} ticket={ticket} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Column;




// Column.js
import React from 'react';
import Card from './card';

const Column = ({ title, tickets, groupBy }) => {
  let filteredTickets;

  if (groupBy === 'status') {
    // If grouping by status, filter based on the specified status
    filteredTickets = tickets.filter((ticket) => ticket.status === title);
  } else if (groupBy === 'user') {
    // If grouping by user, filter based on the specified userId
    filteredTickets = tickets.filter((ticket) => ticket.userId === title);
  } else {
    // If grouping by priority, filter based on the specified priority
    filteredTickets = tickets.filter((ticket) => ticket.priority === parseInt(title));
  }

  return (
    <div className="ticket-column">
      <h2>{groupBy === 'status' ? title : groupBy === 'user' ? title : title}</h2>
      <div className="ticket-list">
        {filteredTickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Column;
