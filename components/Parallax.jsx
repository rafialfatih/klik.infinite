import Link from "next/link";

const ParallaxOne = () => {
  return (
    <div className="w-full h-screen my-6 flex items-center ">
      <div className="w-full h-1/2 text-slate-100 contrast-125 bg-blue-200/70 bg-blend-multiply bg-[url('/images/bg-parallax-one.jpg')] bg-cover bg-center bg-fixed">
        <div className="w-full h-full backdrop-brightness-50 pt-5 pl-5 bg-white/10">
          <p className="font-semibold drop-shadow-lg text-3xl brightness-100">
            Kuliah GRATIS sampai LULUS
          </p>
          <div className="h-3/4 w-full flex flex-col items-center space-y-6 justify-center">
            <p className="text-center text-4xl font-semibold">
              Program Beasiswa Penuh
            </p>
            <div className="h-[0.15rem] w-48 -translate-y-2 bg-white/60"></div>
            <Link href="/">
              <a className="p-2 rounded-md bg-red-500 hover:bg-red-700 transition duration-150 -translate-y-5">
                Daftar Sekarang
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ParallaxTwo = () => {
  return (
    <div className="w-full h-screen my-6 flex items-center ">
      <div className="w-full h-3/4 text-slate-100 contrast-125 bg-blue-200/70 bg-blend-multiply bg-[url('/images/bg-parallax-two.jpg')] bg-cover bg-center bg-fixed">
        <div className="w-full h-full backdrop-brightness-50 pt-5 pl-5 bg-white/10">
          <div className="h-3/4 w-full flex flex-col items-center space-y-6 justify-center">
            <p className="font-bold text-orange-500 text-5xl drop-shadow-lg brightness-100">
              Jadi Tunggu Apalagi?
            </p>
            <p className="text-center text-xl italic font-thin">
              &ldquo;Setiap Orang Berhak Mendapatkan Kehidupan Yang Sejahtera
              Melalui Karir Yang Cemerlang.&ldquo;
            </p>
            <p className="italic font-semibold my-8 text-xl">
              Daftar Sekarang atau Hubungi Kami.
            </p>
            <Link href="/">
              <a className="p-2 rounded-md bg-red-500 hover:bg-red-700 transition duration-150 translate-y-5">
                Daftar Sekarang
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ParallaxOne, ParallaxTwo };
