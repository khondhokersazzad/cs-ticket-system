import React from "react";

const TicketCard = ({ ticket,handleOrder }) => {
  const static1 = {
    id: "TCK-004",
    title: "Email notifications not working",
    description: "User not receiving order confirmation emails.",
    customer: "Nusrat Jahan",
    priority: "medium",
    status: "open",
    createdAt: "2025-02-03T09:12:00Z",
  };
  
  return (
    <div onClick={()=>handleOrder(ticket)}
      className="shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]
 p-5"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-[#001931] text-[18px] font-semibold">
          {ticket.title}
        </h1>
        <div>
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full 
                  ${
                    ticket.status === "open"
                      ? "bg-green-100 text-green-700"
                      : ticket.status === "in-progress"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-gray-200 text-gray-700"
                  }
           `}
           >
          <span
              className={`w-3 h-3 rounded-full 
      ${
        ticket.status === "open"
          ? "bg-green-500"
          : ticket.status === "in-progress"
          ? "bg-amber-500"
          : "bg-gray-500"
      }
    `}
            ></span>

            <h1 className="font-medium capitalize">{ticket.status}</h1>
          </div>
        </div>
      </div>
      <p className="text-[#627382] py-3">{ticket.description}</p>
      <div className="flex justify-between">
        <h3>{ticket.id}</h3>
        <h3>{ticket.priority}</h3>
        <h3>{ticket.customer}</h3>
        <h3>{ticket.createdAt}</h3>
      </div>
    </div>
  );
};

export default TicketCard;
