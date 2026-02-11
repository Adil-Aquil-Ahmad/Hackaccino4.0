import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FaBars, FaTimes } from "react-icons/fa";
import HackaccinoLogo from '../HackaccinoLogo';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Navbar = ({ children, className }) => {
  return (
    <div className={cn("fixed top-0 inset-x-0 w-full z-[5000]", className)}>
      {children}
    </div>
  );
};

export const NavBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "hidden xxl:flex items-center justify-between w-[85%] max-w-[1400px] mx-auto mt-6 px-10 py-3 rounded-full border border-white/[0.08] bg-black/20 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavbarLogo = ({ className, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 cursor-pointer select-none",
        className
      )}
    >
      {children || (
        <>
          <HackaccinoLogo className="w-9 h-9 mb-1 gap-2" />
          <span className="font-['Array-semiBold'] text-2xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            HACKACCINO
          </span>
          <span className="bg-white/20 text-white px-2.5 py-0.5 rounded-full text-xs font-bold font-['Poppins'] border border-white/30 backdrop-blur-sm">
            4.0
          </span>
        </>
      )}
    </div>
  );
};

export const NavItems = ({ items, className }) => {
  return (
    <div className={cn("flex items-center gap-12", className)}>
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          onClick={item.onClick}
          className="relative text-white hover:text-white transition-colors text-sm font-semibold font-['Poppins'] tracking-wide group"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E61933] to-[#FF33CC] transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </div>
  );
};

export const NavbarButton = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-br from-[#E61933] to-[#FF33CC] text-white hover:shadow-[0_0_25px_rgba(230,25,51,0.5)] border-none",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 border border-white/20",
  };

  return (
    <button
      className={cn(
        "px-6 py-2.5 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 font-['Poppins'] tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const MobileNav = ({ children, className }) => {
  return (
    <div className={cn("block xxl:hidden", className)}>
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 text-white hover:bg-white/10 rounded-full transition-colors",
        className
      )}
    >
      {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  );
};

export const MobileNavMenu = ({ isOpen, onClose, children, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/10",
            className
          )}
        >
          <div className="flex flex-col gap-6 p-6">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
