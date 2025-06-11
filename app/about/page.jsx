import Image from "next/image";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const AboutPage = () => {
  return (
    <div className=" p-10  ">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-5  ">
        {/* Image Container */}
        <div className="hidden flex-1 lg:flex items-center justify-center">
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
        <div className="flex-1 px-4 text-white space-y-10  ">
          <h1 className="md:text-8xl font-extrabold tracking-wide text-left text-5xl ">about.</h1>
          <p className="text-sm leading-relaxed text-gray-300 ">
            I graduated with a full scholarship from Atılım University, majoring in Electrical and Electronics Engineering. After graduation, I shifted my focus to frontend development, where I create modern, responsive, and user-friendly web interfaces.
          </p>
          <p
            className={`${poppins.className} text-sm leading-relaxed text-gray-300 hidden md:flex `}
          >
           In my projects, I focus on clean and accessible design, smooth user experience, and high performance. I prioritize mobile responsiveness, intuitive interfaces, and fast-loading pages to ensure a seamless experience across all devices. I make use of modern development tools like Git, GitHub, Visual Studio Code, and Figma to streamline my workflow and collaborate effectively. I’m highly motivated to keep learning, explore new technologies, and continuously improve both my technical skills and design approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
