import Link from "next/link";
import ProfileFrame from "@/components/ProfileFrame";
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
    <div className="flex flex-col text-black ">
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className=" flex w-full h-[600px] gap-20 " >
        {/* Icons */}
        <div className="w-1/3  md:w-1/12 flex flex-col items-center justify-center space-y-20 ">
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
        <div className="w-2/3 md:w-11/12 h-full flex flex-col md:flex-row gap-5 items-center " >
          {/* Text Container */}
          <div className="flex flex-col gap-5  h-1/2   ">
            <h1 className="text-6xl bold mb-5" >Hello, I'm Canan</h1>
            <h3 className="text-xl" >Frontend Developer</h3>
            <p className="text-xl" >
              Passionate frontend developer creating intuitive, responsive, and
              visually engaging web experiences.
            </p>
            {/* Button */}
            <div className="w-[150px]" >
              <Link href="/contact" className="hover:scale-105 cursor-pointer flex items-center justify-center gap-2 text-white bg-gradient-to-r from-gray-400 to-red-300 p-5 rounded-md  ">
                <button>Contact Me</button>
                <FaLocationArrow />
              </Link>
            </div>
          </div>
          {/* Image Container  */}
          <div className="h-1/2 flex items-center justify-center rounded-lg  ">
            <ProfileFrame />
          </div>
        </div>
      </div>
    </div>
  );
}

/* responsive yapışacal , local storage nasıl kullanıyor öğrensen iyi olur night day için  */
