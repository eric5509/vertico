"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

export default function Web3() {
  const images = [
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/frontier.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Pachira.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Rollux.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Self-chain.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/superdapp.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Camada.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Bisonfund.svg",
  ];
 
  const var1Parent = {
    initial: {

    },
    animate:{
      transition: {
        staggerChildren: .1
      }
    }
  }
  
  
  const var1 = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate:{
      y: 0,
      opacity: 1,
      transition: {
        duration: .5
      }
    }
  }
  


  return (
    <div className="bg-black my-16 text-white relative cursor  overflow-hidden py-16 text-center">
      <motion.div   animate="animate" className="absolute h-12 w-12 rounded-full bg-amber-500"></motion.div>
      <motion.p variants={var1Parent} initial="initial" animate="animate" className="text-2xl font-bold items-center justify-center w-full flex gap-2">
        {"We work with the leading Web3 projects like".split(" ").map((data) => (
          <motion.span whileInView="animate" className="inline-block">{data}{' '}</motion.span>
        ))}
      </motion.p>
      <div className="flex overflow-hidden mt-12 items-center">
        <div className="animate flex">
          {images.map((data) => (
            <div className="w-40 mx-5 bg-black">
              <Image
                src={data}
                alt=""
                height={0}
                width={0}
                className="h-14 w-36 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="animate flex">
          {images.map((data) => (
            <div className="w-40 mx-5 bg-black">
              <Image
                src={data}
                alt=""
                height={0}
                width={0}
                className="h-14 w-36 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
