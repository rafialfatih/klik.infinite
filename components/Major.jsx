import Image from "next/image";
import { SectionTitle } from "./";

const sectionMajor = [
  {
    major: "Komputer Aplikasi Bisnis",
    majorImage: "/images/kab.webp",
    majorDescription:
      "Pada program studi ini, mahasiswa akan diajarkan ilmu manajemen, komunikasi, Microsoft Office, Sikap Perilaku Professional, ilmu grafis dasar, speed typing, komputer akuntansi, trouble shooting dasar,d an jaringan komputer dasar.",
    majorProspek:
      "Prospek Kerja: Staff Administrasi, Keuangan, Front Officer, EDP.",
  },
  {
    major: "Komputer Grafis",
    majorImage: "/images/kgr.webp",
    majorDescription:
      "Pada Program Studi Ini Mahasiswa Akan Diajarkan Ilmu Grafis Seperti Corel Draw, Adobe Photoshop, Adobe Ilustrator, Image Processing, Tipografi, Animasi, Autocad, Desain Web, Microsoft Office Dasar, Sikap Perilaku Professional Di Dunia Kerja, Maintenance Dasar Dan Ilmu Komunikasi.",
    majorProspek: "Prospek Kerja: Drafter, Designer, Animasi 2D dan 3D.",
  },
  {
    major: "Teknik Informatika",
    majorImage: "/images/tif.webp",
    majorDescription:
      "Pada Program Studi Ini Mahasiswa Akan Diajarkan Pemrograman (Web, Dekstop, Android), Basis Data (SQL), Microsoft Office, Trouble Shooting Jaringan, Ilmu Komunikasi, Ilmu Grafis Dasar, Serta Diajarkan Sikap Perilaku Professional Di Dunia Kerja.",
    majorProspek: "Prospek Kerja: Programer, EDP, Guru TI, Staf TI, Teknisi.",
  },
];

const Major = () => {
  return (
    <div className="w-full h-full">
      <SectionTitle title={"Jurusan dan Prospek Kerja"} />
      <div className="w-11/12 h-full space-y-12 mt-16 mx-auto">
        {sectionMajor.map((item, index) => (
          <div
            key={index}
            className="w-full h-[22rem] bg-gray-100 overflow-hidden grid grid-cols-12 gap-8"
          >
            <div className="w-full h-full relative col-span-5">
              <Image
                src={item.majorImage}
                alt={item.major}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="w-full h-full text-justify col-span-7 pt-6 pr-6">
              <h2 className="uppercase font-bold text-2xl">{item.major}</h2>
              <p className="mt-8 text-xl">{item.majorDescription}</p>
              <p className="mt-12 text-lg italic">{item.majorProspek}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Major;
