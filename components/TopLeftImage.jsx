import Image from "next/image";

const TopLeftImage = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[400px] xl:w-[600px] opacity-50 pointer-events-none h-auto ">
      <Image src="/top-left-img.png" alt="" width={400} height={400} />
    </div>
  );
};

export default TopLeftImage;
