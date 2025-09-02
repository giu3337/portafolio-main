"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import SmoothAnimations from "./ui/SmoothAnimations";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <SmoothAnimations delay={0.2} y={40} duration={1.0}>
        <h1 className="heading">
          Kind words from
          <span className="text-purple"> satisfied clients</span>
        </h1>
      </SmoothAnimations>

      <div className="flex flex-col items-center max-lg:mt-10">
        <SmoothAnimations delay={0.4} y={30} duration={1.0}>
          <div
            // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
            className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </SmoothAnimations>

        <SmoothAnimations delay={0.6} y={25} duration={1.0}>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company, index) => (
              <SmoothAnimations
                key={company.id}
                delay={0.8 + index * 0.1}
                y={20}
                scale={true}
                duration={0.8}
              >
                <React.Fragment>
                  <div className="flex md:max-w-60 max-w-32 gap-2">
                    <img
                      src={company.img}
                      alt={company.name}
                      className="md:w-10 w-5"
                    />
                    <img
                      src={company.nameImg}
                      alt={company.name}
                      width={company.id === 4 || company.id === 5 ? 100 : 150}
                      className="md:w-24 w-20"
                    />
                  </div>
                </React.Fragment>
              </SmoothAnimations>
            ))}
          </div>
        </SmoothAnimations>
      </div>
    </section>
  );
};

export default Clients;
