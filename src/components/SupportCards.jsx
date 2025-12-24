import React from "react";
import vector1 from "../assets/vector1.png"
import vector2 from "../assets/vector2.png"




export default function SupportCards({ticket, solved}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-5xl mx-auto">
      <div
        className="
          relative rounded-xl p-8 text-white
          flex flex-col items-center justify-center
          shadow-md overflow-hidden min-h-40 bg-no-repeat
        "
        style={{
          
          backgroundImage: `
            url(${vector1}),
            url(${vector1}),
            linear-gradient(135deg, #632EE3 0%, #9F62F2 100%)
          `,
          backgroundPosition: `
            top left,
            bottom right,
            center
          `,
          backgroundSize: `
            430px,
            430px,
            cover
          `,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          
          backgroundBlendMode: "screen, screen, normal",
        }}
      >
        
        <h3 className="relative text-lg font-medium z-10">In-Progress</h3>
        <div className="relative text-5xl font-bold mt-2 z-10">{ticket.length}</div>
      </div>

      <div
        className="
          relative rounded-xl p-8 text-white
          flex flex-col items-center justify-center
          shadow-md overflow-hidden min-h-40 bg-no-repeat
        "
        style={{
          
          backgroundImage: `
            url(${vector1}),
            url(${vector1}),
            linear-gradient(135deg, #632EE3 0%, #9F62F2 100%)
          `,
          backgroundPosition: `
            top left,
            bottom right,
            center
          `,
          backgroundSize: `
            430px,
            430px,
            cover
          `,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          
          backgroundBlendMode: "screen, screen, normal",
        }}
      >
        
        <h3 className="relative text-lg font-medium z-10">Resolved</h3>
        <div className="relative text-5xl font-bold mt-2 z-10">{solved.length}</div>
      </div>

      
      
    </div>
  );
}
