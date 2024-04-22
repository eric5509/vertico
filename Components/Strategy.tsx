'use client'

import { motion } from "framer-motion";

export default function Strategy() {
  const items = [
    "GameFi 🎮",
    "SoFi 🏠",
    "Hedge Funds 🐻",
    "VC Funds 💰",
    "Blockchains 🔗",
    "Public Goods 🌎",
    "dApps 📱",
  ];
  const items2 = [
    "Infrastructure Services 🏗️",
    "Wallets 🏦	",
    "NFTs 🖼️",
    "DeFi 💸",
    "VC Funds 💰",
    "GameFi 🎮",
    "Hedge Funds 🐻",
  ];

  const var1 = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: (key: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: key * 0.05,
      },
    }),
  };
  return (
    <div
      className="padding py-16 lg:py-28 font-bold bg-white  text-center"
      id="strategy"
    >
      <p className="text-2xl w-full items-center justify-center gap-2 flex flex-wrap text-center">
        {"Delivering marketing strategy across crypto companies"
          .split(" ")
          .map((data, key) => (
            <motion.span
              variants={var1}
              viewport={{ once: true }}
              custom={key}
              initial="initial"
              whileInView="animate"
              className="inline-block"
            >
              {data}{" "}
            </motion.span>
          ))}
        
      </p>
      <div className="flex cursor-grab text-[22px] lg:text-[27px] overflow-hidden whitespace-nowrap mt-10 lg:mt-14">
        <div className="flex animate items-center">
          {items.map((data, key) => (
            <div className="mx-10">{data}</div>
          ))}
        </div>
        <div className="flex animate items-center">
          {items.map((data, key) => (
            <div className="mx-10">{data}</div>
          ))}
        </div>
      </div>
      <div className="flex cursor-grab text-[22px] lg:text-[27px] overflow-hidden whitespace-nowrap mt-9 lg:mt-14">
        <div className="flex animate2 items-center">
          {items2.map((data, key) => (
            <div className="mx-10">{data}</div>
          ))}
        </div>
        <div className="flex animate2 items-center">
          {items2.map((data, key) => (
            <div className="mx-10">{data}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
