"use client";
import { itemsNavbar } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "./transitions-component";

const Navbar = () => {
  const router = usePathname();
  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-4"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <Link key={item.id} href={item.link}  className={`px-3 py-2 transition duration-150 cursor-pointer rounded-full hover:bg-secondary ${
              router === item.link ? "bg-secondary" : ""
            } `}>
            
              {item.icon}
           
            </Link>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
