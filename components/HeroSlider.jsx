import Image from "next/image";

const HeroSlider = () => {
  return (
    <div className="w-full h-[95vh] overflow-x-hidden -z-10 relative">
      <Image
        src="/images/slide0.webp"
        alt="image"
        objectFit="cover"
        layout="fill"
      />
    </div>
  );
};

export default HeroSlider;
