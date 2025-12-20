import React from "react";
import { FadeIn } from "./fade-in";

const steps = [
  {
    title: "LEARN",
    description: "SHORT, SIMPLE LESSONS ON ESSENTIAL MONEY CONCEPTS",
    image: "/Free Trial.jpeg",
    bgColor: "bg-[#C99663]", // Tan
    textColor: "text-[#0A1A2F]"
  },
  {
    title: "APPLY",
    description: "COMPLETE GUIDED WORKBOOK EXERCISES DESIGNED FOR ACTION",
    image: "/download (23).jpeg",
    bgColor: "bg-[#0A1A2F]", // Navy
    textColor: "text-white"
  },
  {
    title: "TRACK",
    description: "COMPLETE GUIDED WORKBOOK EXERCISES DESIGNED FOR ACTION",
    image: "/download (25).jpeg",
    bgColor: "bg-[#D9CBB5]", // Beige
    textColor: "text-[#0A1A2F]"
  },
  {
    title: "STAY ACCOUNTABLE",
    description: "MONITOR YOUR PROGRESS AND REFLECT ON YOUR FINANCIAL JOURNEY",
    image: "/Digital Marketing & Business Growth.jpeg",
    bgColor: "bg-[#0A1A2F]", // Navy
    textColor: "text-white"
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white px-4 py-20 md:py-28 font-sans">
      <FadeIn className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A2F] mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">A simple, structured approach to financial education</p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col overflow-hidden rounded-[45px] ${step.bgColor} h-[500px]`}
            >
              {/* Image Section */}
              <div className="h-3/5 w-full p-3 pb-0">
                 <div className="relative h-full w-full overflow-hidden rounded-[35px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-[400px] w-full object-cover"
                    />
                 </div>
              </div>

              {/* The "Arrow" Notch (Speech Bubble effect) */}
              <div className="relative flex justify-center h-6 overflow-hidden">
                 <div className={`w-8 h-8 rotate-45 -mt-4 ${step.bgColor}`}></div>
              </div>

              {/* Text Section */}
              <div className={`flex flex-col p-8 pt-2 ${step.textColor}`}>
                <h3 className="text-2xl font-black mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[11px] font-bold leading-tight opacity-90 uppercase tracking-wide">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}