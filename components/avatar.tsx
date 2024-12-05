"use client";

import Image from "next/image";
import MotionTransition from "./transitions-component";



const Avatar = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">  
            <Image src="/avatar-1.png" alt="avatar" width={400} height={400} ></Image>
        </MotionTransition>
     );
}
 
export default Avatar;