import TopRightImage from "./wallpaper/TopRightImage";
import TopLeftImage from "./wallpaper/TopLeftImage";
import BottomLeftImage from "./wallpaper/BottomLeftImage";
import BottomRightImage from "./wallpaper/BottomRightImage";
import BgExplosion from "./wallpaper/BgExplosion";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div
      className={`h-screen w-screen page bg-gradient-to-r from-gray-900 to-gray-900 text-white bg-cover bg-no-repeat relative flex items-center justify-center p-10 sm:p-14 md:p-16 lg:p-18 xl:p-20 dark:bg-gray-900 dark:text-white  `}
    >
      <div>
        {/* Arka plan görüntüsü */}
        <TopLeftImage />
        <TopRightImage />
        <BottomLeftImage />
        <BottomRightImage />
        <BgExplosion />
      </div>
      <div className="">
        {/* Navbar */}
          <Navbar />
        
        {/* İçerik */}
        <main className="relative z-20 h-[calc(100vh-6rem)]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
