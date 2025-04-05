import { motion } from "framer-motion";

export default function ThreeDotsWave() {
  return (
    <div className="pt-20 flex justify-center items-center w-full">
      <div className="flex justify-between w-32">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-6 h-6 bg-black rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"], 
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2, 
            }}
          />
        ))}
      </div>
    </div>
  );
}
