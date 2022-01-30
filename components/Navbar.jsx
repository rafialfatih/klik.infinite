import Image from "next/image";
import Link from "next/link";

const items = [
  "Home",
  "About",
  "Jurusan",
  "Biaya Kuliah",
  "Profil Alumni",
  "Contact Us",
  "Gallery",
];

const Navbar = () => {
  return (
    <div className="relative h-36">
      <div className="w-96 relative h-24 top-6 -left-4">
        <Image
          layout="fill"
          objectFit="cover"
          className="items-center"
          src="/images/logo-infinite.png"
          alt="logo"
        />
      </div>

      <nav className="w-5/6 mx-auto bg-blue-900 top-5 relative text-white h-14 overflow-hidden">
        <div className="w-full h-full flex justify-between">
          <div className="flex">
            {items.map((item, index) => (
              <Link key={index} href="/">
                <a className="flex items-center hover:text-slate-200 transition duration-150 justify-center px-6 h-full">
                  {item}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center mr-8">
            <button className="px-4 py-1 border-2 border-white rounded-md font-semibold hover:bg-blue-700/40 transition duration-300">
              Daftar Online
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
