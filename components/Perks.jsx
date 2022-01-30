import {
  FaBook,
  FaMoneyBillWave,
  FaRecycle,
  FaUsers,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";
import { SectionTitle } from "./";

const perksItems = [
  {
    title: "80% Praktek dan 20% Teori",
    desc: "Infinite memiliki sistem pendidikan dengan 80% praktek dan 20% teori. Sehingga mahasiswa menjadi lebih terampil.",
    icon: <FaBook />,
  },
  {
    title: "Memadukan Iptek, Skill, dan Sikap Perilaku",
    desc: "Semua mahasiswa INFINITE dibekali dengan Sikap Perilaku yang professional, Skill, dan Iptek yang bagus.",
    icon: <FaRecycle />,
  },
  {
    title: "Biaya Terjangkau",
    desc: "Biaya pendidikan bisa diangsur.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Pembinaan Karakter",
    desc: "Mahasiswa dibina baik karakter atau mentalnya supaya siap menghadapi dunia kerja.",
    icon: <FaUserShield />,
  },
  {
    title: "Penempatan Kerja",
    desc: "INFINITE School of Computer bertanggung jawab kepada mahasiswa untuk mendapatkan pekerjaan.",
    icon: <FaUserTie />,
  },
  {
    title: "Instruktur Expert",
    desc: "Para instruktur ada seorang praktisi yang ahli di bidangnya.",
    icon: <FaUsers />,
  },
];

const Perks = () => {
  return (
    <div className="mt-20 w-full h-screen">
      <SectionTitle title={"Keunggulan Infinite"} />
      <div className="mt-24 mx-auto w-11/12 h-96 grid grid-cols-1 md:grid-cols-12 gap-4">
        {perksItems.map((item, index) => (
          <div
            key={index}
            className="col-span-12 h-56 w-full p-2 md:col-span-4"
          >
            <div className="w-full h-56 grid grid-cols-12 gap-4">
              <div className="col-span-3 text-4xl text-orange-500 flex justify-center items-center border border-red-500 h-[5rem] w-[5rem] rounded-full">
                {item.icon}
              </div>
              <div className="col-span-9">
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="mt-4">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perks;
