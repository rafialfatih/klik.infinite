import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

const items = [
  {
    title: "Program Reguler 1 & 2 Tahun",
    image: "/images/reguler.png",
  },
  {
    title: "Program Khusus 1 Tahun (Sore)",
    image: "/images/khusus.png",
  },
  {
    title: "Program Kursus Singkat",
    image: "/images/kursus.png",
  },
];

const perkItems = [
  {
    title: "Kuliah Singkat",
    desc: "Waktu kuliah singkat (1 s/d 2 Tahun)",
  },
  {
    title: "Siap Kerja",
    desc: "Karena kurikulum yang diterapkan menyesuaikan dengan kebutuhan dunia kerja",
  },
];

const Landing = () => {
  return (
    <div className="w-full h-[120vh]">
      <div className="w-5/6 mx-auto -translate-y-4 flex space-x-8 justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-96 h-48 rounded-2xl bg-blue-900 shadow-2xl"
          >
            <div className="mt-6 space-y-6 flex flex-col items-center justify-center">
              <Image width={96} height={80} alt={item.title} src={item.image} />
              <p className="text-white font-semibold text-md uppercase">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-28">
        <div className="col-span-12 md:col-span-6">
          <div className="w-full mb-4 h-[18rem] relative p-2 border-4 border-slate-100 rounded">
            <Image
              src="/images/heroimg.webp"
              alt="heroimage"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
        <div className="col-span-12 text-slate-800 md:col-span-6">
          <h1 className="text-3xl font-semibold">
            Welcome to <span className="font-extrabold">INFINITE</span>
          </h1>
          <p className="mt-4 text-xl text-justify">
            INFINITE School of Computer adalah sebuah lembaga yang menawarkan
            alternatif bagi lulusan SMA sederajat yang ingin melanjutkan studi
            dengan durasi yang lebih singkat namun dengan peluang bekerja yang
            besar.
          </p>
          <div className="w-full h-24 space-y-4 mt-4">
            {perkItems.map((item, index) => (
              <div key={index} className="flex space-x-6 items-center h-full">
                <div>
                  <BsCheckCircle className="text-4xl" />
                </div>
                <div className="space-y-1">
                  <h2 className="font-bold text-xl">{item.title}</h2>
                  <p className="text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
