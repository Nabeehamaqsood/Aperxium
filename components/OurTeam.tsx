"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function TeamSlider({ teamMembers }: { teamMembers: any[] }) {
  const scrollRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden py-20 bg-white">
      <motion.div
        ref={scrollRef}
        className="flex whitespace-nowrap gap-10 px-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="rounded-full w-72 h-72 bg-gradient-to-br from-[#2e8f7f] to-[#3db1a2] 
                       text-white text-center shadow-lg hover:shadow-2xl 
                       hover:scale-105 transition-all duration-300 flex items-center justify-center flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-4 border-white shadow-md"
                sizes="128px"
                priority
              />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm font-medium opacity-90">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
