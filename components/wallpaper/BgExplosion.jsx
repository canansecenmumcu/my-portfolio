import Image from "next/image";

const BgExplosion = () => {
  return (
    <div className="absolute mix-blend-color-dodge z-10 top-0 left-0 pointer-events-none w-full h-full">
      <Image src="https://images.pexels.com/photos/8887653/pexels-photo-8887653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill priority />
    </div>
  );
};

export default BgExplosion;