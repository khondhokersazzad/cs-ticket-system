import React, { useState } from "react";
import SupportCards from "./SupportCards";
import TicketCard from "./cards/TicketCard";
import { toast } from "react-toastify";

const SupportCardsContainer = ({ tickets }) => {
  const [ticketItem, setTicketItem] = useState([]);
  const [completeTicket, setCompleteTicket] = useState([]);

  // add ticket to in-progress
  const handleOrder = (ticket) => {
    const isExist = ticketItem.find((item) => item.id === ticket.id);
    if (isExist) {
      toast.error("Ticket is already in progress");
      return;
    }
    setTicketItem((prev) => [...prev, ticket]);
    toast.success('Added task to inprogress')
  };

  // mark ticket as completed
  const handleCompleted = (ticket) => {
    setCompleteTicket((prev) => [...prev, ticket]);
    toast.success('Ticket is successfully Completed');
    setTicketItem((prev) =>
      prev.filter((item) => item.id !== ticket.id)
    );
  };

  return (
    <div>
      <SupportCards ticket={ticketItem} solved = {completeTicket}/>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Customer tickets */}
        <div className="lg:col-span-7">
          <h2 className="font-semibold text-2xl mb-4">
            Customer Tickets
          </h2>

          <div className="space-y-5">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                handleOrder={handleOrder}
                
              />
            ))}
          </div>
        </div>

        {/* Task Status + Resolved */}
        <div className="lg:col-span-5 space-y-8">
          {/* In Progress */}
          <div>
            <h2 className="font-semibold text-2xl mb-4">
              Task Status
            </h2>

            {ticketItem.length === 0 && (
              <p className="text-gray-500 text-sm">
                No active tasks
              </p>
            )}

            {ticketItem.map((ticket) => (
              <div
                key={ticket.id}
                className="shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] p-5 mb-4 rounded-lg"
              >
                <h1 className="font-semibold text-[18px] mb-3">
                  {ticket.title}
                </h1>

                <button
                  onClick={() => handleCompleted(ticket)}
                  className="btn bg-[#02A53B] hover:bg-[#028c32] text-white w-full"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          {/* Resolved Tasks */}
          <div>
            <h2 className="font-semibold text-2xl mb-4">
              Resolved Tasks
            </h2>

            {completeTicket.length === 0 && (
              <p className="text-gray-500 text-sm">
                No resolved tasks yet
              </p>
            )}

            {completeTicket.map((ticket) => (
              <div
                key={ticket.id}
                className="shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] p-5 mb-4 rounded-lg bg-green-50"
              >
                <h1 className="font-semibold text-[18px] mb-2">
                  {ticket.title}
                </h1>

                <span className="inline-block text-sm px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                  ✔ Completed
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportCardsContainer;
