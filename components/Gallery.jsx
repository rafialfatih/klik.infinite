import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { SectionTitle } from ".";

const images = [
  "/images/pmb-8.webp",
  "/images/pmb-9.webp",
  "/images/kegiatan-di-kelas-8.webp",
  "/images/kegiatan-di-kelas-7.webp",
  "/images/kegiatan-di-kelas-6.webp",
  "/images/kegiatan-di-kelas-5.webp",
];

const Gallery = () => {
  return (
    <div className="h-full w-full mb-16">
      <SectionTitle title={"Gallery"} />
      <div className="w-11/12 h-full mx-auto mt-20">
        <div className="w-full h-full grid grid-cols-12 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-60 relative col-span-4 drop-shadow-xl"
            >
              <Image
                src={image}
                alt="alternative text"
                objectFit="cover"
                layout="fill"
              />
            </div>
          ))}
        </div>
        <Link href="/">
          <a className="mt-6 text-xl h-6 w-[16rem] flex items-center p-6 border-[3px] border-orange-500 font-semibold hover:bg-orange-500/50 hover:border-orange-500/50 transition duration-300">
            <p>Kunjungi Gallery </p>
            <BiRightArrowAlt className="text-orange-500 text-4xl ml-2" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
