"use client";

import Image from "next/image";
import MotionTransition from "./transitions-component";



const Avatar = () => {
    return ( 
        <MotionTransition position="bottom" className="md:inline-block right-0 bottom-0 fixed hidden">  
            <Image src="/avatar-1.png" alt="avatar" width={400} height={400} ></Image>
        </MotionTransition>
     );
}
 
export default Avatar;