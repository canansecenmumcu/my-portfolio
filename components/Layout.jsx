import TopRightImage from "./TopRightImage";
import TopLeftImage from "./TopLeftImage";
import BottomLeftImage from "./BottomLeftImage";
import BottomRightImage from "./BottomRightImage";
import BgExplosion from "./BgExplosion";


const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-gradient-to-r from-gray-900 to-gray-900 text-white bg-cover bg-no-repeat relative flex items-center justify-center p-12 sm:p-14 md:p-16 lg:p-18 xl:p-20 dark:bg-gray-900 dark:text-white  `}
    >
      <div>
        {/* Arka plan görüntüsü */}
        <TopLeftImage />
        <TopRightImage />
        <BottomLeftImage />
        <BottomRightImage />
        <BgExplosion />
      </div>
      {/* Navbar */}
      <div className="bg-white rounded-lg max-w-screen-xl w-full h-full p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16">
        {/* İçerik */}
        <main className="relative z-20">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
