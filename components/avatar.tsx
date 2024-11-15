"use client";

import Image from "next/image";
import MotionTransition from "./transitions-component";



const Avatar = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">  
            <Image src="/avatar-1.png" alt="avatar" width={350} height={350} className="w-full h-full"></Image>
        </MotionTransition>
     );
}
 
export default Avatar;