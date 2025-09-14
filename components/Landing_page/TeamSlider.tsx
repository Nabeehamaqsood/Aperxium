"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function TeamSlider({ teamMembers }: { teamMembers: any[] }) {
  const scrollRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={scrollRef}
        className="flex whitespace-nowrap py-12 gap-10 px-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="inline-block w-80 flex-shrink-0 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-4 border-white dark:border-gray-800"
                sizes="160px"
                priority
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}