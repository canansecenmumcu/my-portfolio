import Link from "next/link";
import ProfileFrame from "@/components/wallpaper/ProfileFrame";
import Navbar from "@/components/Navbar";
import {
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaLocationArrow
} from "react-icons/fa";


export default function Home() {
  
  return (
    <div className="flex flex-col text-red-100 ">
      <div className=" flex flex-col md:flex-row w-full h-[600px] gap-20 items-center md:items-baseline " >
        {/* Icons */}
        <div className="sm:w-1/3  md:w-1/12 hidden md:flex md:flex-col items-center justify-center md:space-y-20 ">
          <Link href=" https://dribbble.com/canansecenmumcu">
            <FaDribbble size={30} />
          </Link>
          <Link href=" https://dribbble.com/canansecenmumcu">
            <FaGithub size={30} />
          </Link>
          <Link href=" https://dribbble.com/canansecenmumcu">
            <FaLinkedinIn size={30} />
          </Link>
          <Link href=" https://dribbble.com/canansecenmumcu">
            <FaInstagram size={30} />
          </Link>
        </div>
        <div className="w-2/3 md:w-11/12 h-full flex flex-col md:flex-row gap-5 items-center justify-center md:items-start " >
          {/* Text Container */}
          <div className="flex flex-col gap-8 h-1/2 items-center md:items-start md:mt-40 ">
            <h1 className="text-2xl sm:text-4xl md:text-6xl bold md:mb-5" >Hello, I'm Canan</h1>
            <h3 className="text-xl" >Frontend Developer</h3>
            <p className="text-xl text-center md:text-start" >
              Passionate frontend developer creating intuitive, responsive, and
              visually engaging web experiences.
            </p>
            {/* Button */}
            <div className="w-[150px] md:mt-10 " >
              <Link href="/contact" className="hover:scale-105 cursor-pointer flex items-center justify-center gap-2 text-white bg-gradient-to-r from-gray-400 to-red-300 p-5 rounded-md  ">
                <button>Contact Me</button>
                <FaLocationArrow />
              </Link>
            </div>
          </div>
          {/* Image Container  */}
          <div className="h-1/2 flex items-center justify-center rounded-lg md:mt-44">
            <ProfileFrame />
          </div>
        </div>
      </div>
    </div>
  );
}

/* responsive yapışacal , local storage nasıl kullanıyor öğrensen iyi olur night day için  */
