"uise client";
import Image from "next/image";
const CircleImage = () => {
  return (
    <div className="md:inline-block right-0 bottom-0 absolute hidden">
      <Image src={"/circles.png"} alt="Circle" width={200} height={200} className="w-full h-full"></Image>
    </div>
  );
};

export default CircleImage;
