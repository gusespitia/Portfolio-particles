import MotionTransition from "./transitions-component";
import Image from "next/image";

const AvatarServices = () => {
    return ( 
    <MotionTransition position="right" className="bottom-0 left-0 hidden md:inline-block md:absolute " >
        <Image src="/services.png" alt="avatar" width={300} height={300} className="mt-10 " />
    </MotionTransition>
);    
}
 
export default AvatarServices;