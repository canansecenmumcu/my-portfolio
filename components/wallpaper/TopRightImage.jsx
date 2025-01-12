import Image from "next/image";

const TopRightImage = () => {
  return (
    <div className="absolute right-0 top-0 filer mix-blend-color-dodge z-10 w-[400px] xl:w-[400px] opacity-50 pointer-events-none h-auto " >
        <Image src="/top-right-img.jpg" alt="" width={400} height={400}  />
    </div>
  );
}

export default TopRightImage;