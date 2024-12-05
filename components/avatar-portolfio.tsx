"use client";

import MotionTransition from "./transitions-component";
import Image from "next/image";

const AvatarPortfolio = () => {
    return ( 
<MotionTransition position="bottom" className="bottom-0 left-0 hidden md:inline-block md:fixed" >
<Image src="/avatar-works.png" alt="Avatar Portfolio" width={400} height={400} ></Image> 
</MotionTransition>
     );
}
 
export default AvatarPortfolio;