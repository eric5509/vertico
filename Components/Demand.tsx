"use client";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Demand() {
  const variantsParent = {
    initial: {},
    animate: {
      transition: {
        duration: 1,
        staggerChildren: 0.25,
      },
    },
  };

  const variantsChild = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const infos = [
    ["", ""],
    [
      "https://altorise.com/wp-content/uploads/2023/11/growth-chart-icon.png.webp",
      "Project growth engineering",
      "Integrate key marketing engineering strategies to increase usage and referrals.",
    ],
    [
      "https://altorise.com/wp-content/uploads/2023/11/code-icon.png.webp",
      "Developer relations",
      "We work with your dev-relations team to increase project adoption by developers.",
    ],
    [
      "https://altorise.com/wp-content/uploads/2023/11/code-icon.png.webp",
      "Investor strategy",
      "Position your early-stage project and team effectively to attract the ideal investors.",
    ],
    [
      "https://altorise.com/wp-content/uploads/2023/11/loyalty-icon.png.webp",
      "Retention and loyalty",
      "Get users to invite more users using growth hacks and incentive-driven levers.",
    ],
    [
      "https://altorise.com/wp-content/uploads/2023/11/audit-icon.png.webp",
      "Compliance audits",
      "Marketing and finance audits to increase global compliance and reduce user friction.",
    ],
  ];
  return (
    <div className="bg-blue-100 py-10 lg:py-16 padding" id="careers">
      <motion.div
        variants={variantsParent}
        initial="initial"
        viewport={{once: true}}
        whileInView="animate"
        className="grid container py-16 gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {infos.map((data, key) => (
          <motion.div variants={variantsChild} className="">
            {key === 0 ? (
              <div className="text-center sm:text-start flex flex-col items-center justify-center sm:items-start sm:justify-start">
                <p className="px-6 py-3 rounded-full w-fit bg-gradient-to-r from-[#cbe693] to-[#98dab9]">
                  Expertise on-demand
                </p>
                <div className="text-3xl mt-4">
                  <p>Crypto Growth</p>
                  <p>Consulting</p>
                  <p>Company</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="h-12 w-12 rounded-full bg-white">
                  <Image
                    alt=""
                    src={data[0]}
                    unoptimized
                    height={0}
                    width={0}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <p className="font-bold text-base">{data[1]}</p>
                <p>{data[2]}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
