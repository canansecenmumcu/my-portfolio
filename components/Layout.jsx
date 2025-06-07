import TopRightImage from "./wallpaper/TopRightImage";
import TopLeftImage from "./wallpaper/TopLeftImage";
import BottomLeftImage from "./wallpaper/BottomLeftImage";
import BottomRightImage from "./wallpaper/BottomRightImage";
import BgExplosion from "./wallpaper/BgExplosion";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div
      className={`h-screen w-screen overflow-hidden bg-gradient-to-r from-gray-900 to-gray-900 text-white bg-cover bg-no-repeat  dark:bg-gray-900 dark:text-white relative p-10 sm:p-12 md:p-14 lg:p-16 xl:p-18  `}
    >
      <TopLeftImage />
      <TopRightImage />
      <BottomLeftImage />
      <BottomRightImage />
      <BgExplosion />
      <Navbar />
      <main className="relative z-20 h-[calc(100vh-6rem)]">{children}</main>
    </div>
  );
};

export default Layout;
