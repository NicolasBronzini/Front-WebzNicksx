import { motion } from "framer-motion";

const Logo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        initial={{ rotate: -10, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <path
          d="M10 10 L20 40 L30 15 L40 40 L50 10"
          stroke="#3b82f6"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="25" r="20" stroke="#10b981" strokeWidth="2" className="opacity-50" />
      </motion.svg>
      <div className="flex flex-col justify-center">
        <span className="text-xl font-bold leading-none tracking-tight text-white">
          WEBZ<span className="text-primary">NICK</span>
        </span>
        <span className="text-[0.6rem] font-medium tracking-widest text-gray-400 uppercase">
          Software Factory
        </span>
      </div>
    </div>
  );
};

export default Logo;
