"use client";

import MotionTransition from "./transitions-component";
import Image from "next/image";

const AvatarPortfolio = () => {
    return ( 
<MotionTransition position="bottom" className="bottom-0 left-0 hidden md:inline-block md:fixed" >
<Image src="/avatar-works.png" alt="Avatar Portfolio" width={280} height={280} className="w-full h-full"></Image> 
</MotionTransition>
     );
}
 
export default AvatarPortfolio;