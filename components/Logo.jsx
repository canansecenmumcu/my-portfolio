import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="relative w-[300px] h-[75px] hover:scale-105  " >
          <Image src="/logo.png" alt="logo" layout="fill" className="" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
