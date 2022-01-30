import { SectionTitle } from ".";

const items = [
  {
    title: "Komputer Aplikasi Bisnis",
    price: "Rp. 8.000.000",
    lists: [
      "Jalur reguler gel 1\n(1 Jan - 31 Mar 2022)",
      "Potongan: 1 Juta - 1,5 Juta",
      "Jalur reguler gel 2\n(1 Apr - 30 Jun 2022)",
      "Potongan: 750 Ribu - 1 Juta",
      "Jalur reguler gel 3\n(1 Jul - 31 Agust 2022)",
      "Potongan: 500 Ribu",
    ],
  },
  {
    title: "Komputer Grafis",
    price: "Rp. 8.000.000",
    lists: [
      "Jalur reguler gel 1\n(1 Jan - 31 Mar 2022)",
      "Potongan: 1 Juta - 1,5 Juta",
      "Jalur reguler gel 2\n(1 Apr - 30 Jun 2022)",
      "Potongan: 750 Ribu - 1 Juta",
      "Jalur reguler gel 3\n(1 Jul - 31 Agust 2022)",
      "Potongan: 500 Ribu",
    ],
  },
  {
    title: "Teknik Informatika",
    price: "Rp. 8.000.000",
    lists: [
      "Jalur reguler gel 1\n(1 Jan - 31 Mar 2022)",
      "Potongan: 1 Juta - 1,5 Juta",
      "Jalur reguler gel 2\n(1 Apr - 30 Jun 2022)",
      "Potongan: 750 Ribu - 1 Juta",
      "Jalur reguler gel 3\n(1 Jul - 31 Agust 2022)",
      "Potongan: 500 Ribu",
    ],
  },
];

const Pricings = () => {
  return (
    <div className="mt-10 w-full h-[120vh]">
      <SectionTitle title={"Biaya Kuliah"} />
      <div className="mt-24 w-11/12 h-[95vh] mx-auto grid grid-cols-12 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full h-full bg-gray-200 rounded-lg col-span-4"
          >
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="font-bold mt-4 text-gray-600">{item.price}</p>
            </div>
            <div className="w-full h-[25rem] my-4 p-6 border border-gray-400">
              {item.lists.map((list, index) => (
                <div
                  key={index}
                  className="w-full odd:bg-blue-300 odd:text-blue-800 even:text-yellow-800 even:bg-yellow-300"
                >
                  <p className="text-center px-6 py-3">{list}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricings;
