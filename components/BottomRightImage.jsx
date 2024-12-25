import Image from "next/image";

const TopRightImage = () => {
  return (
    <div className="absolute right-0 bottom-0 mix-blend-color-dodge w-[400px] xl:w-[400px] opacity-50 z-0 pointer-events-none h-auto" >
        <Image src="/bottom-right-img.jpg" alt="" width={400} height={400} />
    </div>
  );
}

export default TopRightImage;