"use client";
import localFont from "next/font/local";
import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
const myFont = localFont({ src: "../assets/fonts/Poppins-Extrabold.ttf" });

export default function Hero() {
 

  return (
    <div className="min-h-screen mb-16 bg-white">
      <div className="min-h-screen container grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-end items-center h-full lg:items-start text-center lg:text-start flex-col">
          <p className="font-bold text-cyan-900 mb-2 text-3xl lg:text-5xl">
            Meet your full-stack
          </p>
          <p
            className={`textGradient font-[900] text-3xl lg:text-5xl leading-tight ${myFont.className}`}
          >
            CRYPTO MARKETING
          </p>
          <p
            className={`textGradient2 font-[900] text-3xl lg:text-5xl leading-tight ${myFont.className}`}
          >
            AGENCY
          </p>
          <div className="w-[90%] mt-6 lg:mt-12">
            <p className="text-sm">
              We help crypto startups build trust in a trustless ecosystem. Our
              mission is to support great teams in building inspiring crypto
              projects that will shape the future of decentralized Web3. We do
              this by bringing decades of digital marketing, design, technology,
              and content expertise to provide on-demand access to teams that
              need full-stack crypto marketing services.
            </p>
          </div>
          <div className="flex lg:mb-5 flex-col lg:flex-row items-center gap-6 lg:gap-12 mt-5 lg:mt-10">
            <Button text="Message us on Telegram" />
            <p className="border-b-2 text-blue-500 text-base cursor-pointer border-blue-500 pb-1">
              or Book a meeting
            </p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
