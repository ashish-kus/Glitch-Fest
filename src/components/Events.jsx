import React from "react";
import Cards from "./cards/Cards";
import bgImage from "../assets/Videos/city.gif";

const Events = () => {
  const eventsList = ["Event 1", "Event 2", "Event 3", "Event 4", "Event 2", "Event 3", "Event 4", "Event 2",  "Event 3", "Event 2", "Event 3", "Event 3", "Event 4",];
  return (
    <>
      <section className=" bg-bg bg-opacity-20 backdrop-blur-sm min-h-full flex justify-center items-center rounded-lg gap-6 flex-col">
        <h1 className="text-9xl text-nbg font-silkscreen uppercase mt-5">Events</h1>
        <hr className="bg-nbg h-auto w-5/6 mb-5" />
        <Cards title="Day 1" bgImg={bgImage} events={eventsList}/>
        <Cards title="Day 2" bgImg={bgImage} events={eventsList}/>
        <Cards title="Day 3" bgImg={bgImage} events={eventsList}/>
      </section>
    </>
  );
};

export default Events;

