import React from 'react';

const Timeline = () => {
  const schedule = [
    {
      day: "5th April — Day 1",
      events: [
        { time: "9:00 AM - 10:30 AM", description: "Registrations" },
        { time: "10:30 AM - 12:00 PM", description: "Orientation" },
        { time: "12:00 Onwards", description: "Hackathon Begins", highlight: true },
        { time: "3:00 PM - 5:00 PM", description: "Idea Pitching Round" },
        { time: "5:00 PM Onwards", description: "Snacks (Provided by us)" }
      ]
    },
    {
      day: "6th April — Day 2",
      events: [
        { time: "8:00 AM Onwards", description: "Breakfast (Provided by us)" },
        { time: "12:00 PM (Sharp)", description: "Hackathon Ends", highlight: true },
        { time: "12:00 PM - 2:30 PM", description: "Evaluation Round" },
        { time: "2:30 PM Onwards", description: "Closing Ceremony & Prize Distribution" }
      ]
    }
  ];

  return (
    <section id="timeline" className="text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-8">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F24E1E] to-[#F29D38] font-['Inter']">Timeline</h2>
          <p className="text-[#a3a3a3] text-xl">
            Follow the schedule to make the most out of your 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {schedule.map((day, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 relative overflow-hidden">
               {/* Decorative background elements matching the reference site style */}
               <div className="absolute top-[20%] -left-5 w-[100px] h-[200px] bg-gradient-to-r from-[#F24E1E] to-transparent opacity-10 rotate-[15deg] blur-[20px] pointer-events-none"></div>

              <div className="mb-6 border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F24E1E] to-[#F29D38] font-['Inter']">{day.day}</h3>
              </div>
              <div className="flex flex-col gap-6">
                {day.events.map((event, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className={`text-sm ${event.highlight ? 'text-[#F24E1E] font-bold' : 'text-[#a3a3a3] font-normal'}`}>{event.time}</span>
                    <span className={`text-lg ${event.highlight ? 'text-white font-semibold' : 'text-[#e5e5e5] font-normal'}`}>{event.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
