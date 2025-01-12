import Image from "next/image";
import { Roboto } from "next/font/google";
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const AboutPage = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 py-20  ">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 ">
        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-gray-700 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out h-[600px] w-[400px] ">
            <Image
              src="/kiki.jpeg"
              alt="hiking"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Container */}
        <div className="flex-1 bg-gray-800 p-8 xl:p-10 rounded-lg shadow-md text-white space-y-10  ">
          <h1
            className="text-red-300 text-5xl font-extrabold tracking-wide uppercase border-b-4 border-red-300 hover:border-yellow-500 pb-2 hover:text-yellow-500 transition-colors duration-300 shadow-lg md:pt-20 "
          >
            about
          </h1>
          <p
            className="text-lg leading-relaxed text-gray-300 px-10 "
          >
            I am a web developer living in Ankara, the capital city of Turkey.
          </p>
          <p className={`${poppins.className} text-base leading-relaxed text-gray-300 px-10 `}>
            I've been developing attractive and easy-to-use websites that are
            compatible with all devices since 2022. When I'm not coding, I enjoy
            doing my mothering duties, designing my home, taking care of my
            flowers, and hiking outdoors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
