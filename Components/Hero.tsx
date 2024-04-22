"use client";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Button from "./Button";
import Magnet from '@/assets/images/magnet.png'
import Bag from '@/assets/images/bag.png'
import Hand from '@/assets/images/hand.png'
import Arrow from '@/assets/images/arrow.png'
import Image from "next/image";



const myFont = localFont({ src: "../assets/fonts/Poppins-Extrabold.ttf" });

export default function Hero() {
  const fullstack = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const fullstack1 = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen container grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-end items-center h-full lg:items-start text-center lg:text-start flex-col">
          <motion.p
            variants={fullstack}
            initial="initial"
            whileInView="animate"
            className="font-bold text-cyan-900 mb-2 text-3xl lg:text-[52px]"
          >
            Meet your full-stack
          </motion.p>
          <motion.p
            variants={fullstack1}
            initial="initial"
            whileInView="animate"
            className={`textGradient font-[800] text-3xl lg:text-[52px] leading-snug ${myFont.className}`}
          >
            CRYPTO MARKETING
          </motion.p>
          <motion.p
            variants={fullstack1}
            initial="initial"
            whileInView="animate"
            className={`textGradient2 font-[800] text-3xl lg:text-[52px] leading-snug ${myFont.className}`}
          >
            AGENCY
          </motion.p>
          <div className="w-[90%] mt-6 lg:mt-12">
            <motion.p
              variants={fullstack1}
              initial="initial"
              whileInView="animate"
              className="text-sm"
            >
              We help crypto startups build trust in a trustless ecosystem. Our
              mission is to support great teams in building inspiring crypto
              projects that will shape the future of decentralized Web3. We do
              this by bringing decades of digital marketing, design, technology,
              and content expertise to provide on-demand access to teams that
              need full-stack crypto marketing services.
            </motion.p>
          </div>
          <motion.div
            variants={fullstack1}
            initial="initial"
            whileInView="animate"
            className="flex lg:mb-5 flex-col lg:flex-row items-center gap-6 lg:gap-12 mt-5 lg:mt-10"
          >
            <Button text="Message us on Telegram" />
            <p className="border-b-2 text-blue-500 text-base cursor-pointer border-blue-500 pb-1">
              or Book a meeting
            </p>
          </motion.div>
        </div>
        <div className="">
          <Image src={Magnet} alt="" height={0} width={0} className="h-32 w-32 object-cover"/>
        </div>
      </div>
    </div>
  );
}
