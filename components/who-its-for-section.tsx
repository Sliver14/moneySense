import { GraduationCap, Briefcase, Users2 } from "lucide-react"

import React from "react";
import { FadeIn } from "./fade-in";

const audiences = [
  {
    title: "University Students",
    description: "Learn to manage money before entering the workforce",
    image: "/CCNA.jpeg",
    imagePosition: "top" // Image is above the text
  },
  {
    title: "Recent Graduates",
    description: "Build a strong financial foundation early in your career",
    image: "/Spelman College graduates are an inspiration to black women (photos).jpeg",
    imagePosition: "bottom" // Image is below the text
  },
  {
    title: "Early-Career Professionals",
    description: "Take control of your finances as your income grows",
    image: "/Here’s How To Avoid 5 Tragic Presentation Mistakes.jpeg",
    imagePosition: "top" // Image is above the text
  }
];

export function WhoItsForSection() {
  return (
    <section className="bg-[#0A1A2F] px-6 py-20 md:py-28 font-sans">
      <FadeIn className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Who It's For
          </h2>
          <p className="text-lg text-white/90 font-medium max-w-md">
            Designed specifically for young people starting their financial journey
          </p>
        </div>

        {/* Audience Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-[10px] md:rounded-[30px] bg-[#C99663] p-8 min-h-[450px]"
            >
              {/* Conditional Rendering based on Image Position */}
              {audience.imagePosition === "top" ? (
                <>
                  <div className="mb-8 overflow-hidden rounded-[10px] md:rounded-[30px] aspect-[4/3]">
                    <img 
                      src={audience.image} 
                      alt={audience.title} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div className="mt-auto">
                    <h3 className="mb-4 text-2xl font-bold text-white">{audience.title}</h3>
                    <p className="text-white/90 leading-snug">{audience.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="mb-4 text-2xl font-bold text-white">{audience.title}</h3>
                    <p className="text-white/90 leading-snug">{audience.description}</p>
                  </div>
                  <div className="mt-auto overflow-hidden rounded-[10px] md:rounded-[30px] aspect-[4/3]">
                    <img 
                      src={audience.image} 
                      alt={audience.title} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-[10px] md:rounded-[30px] bg-[#C99663] py-6 px-10 text-center">
          <p className="text-white font-bold text-lg">
            You don't need prior financial knowledge.
          </p>
          <p className="text-white/90 text-sm">
            Everything is explained from the ground up in plain language.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}