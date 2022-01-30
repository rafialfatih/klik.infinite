import {
  Gallery,
  HeroSlider,
  Landing,
  Major,
  ParallaxOne,
  ParallaxTwo,
  Perks,
  Pricings,
} from "../components";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Landing />
      <Perks />
      <ParallaxOne />
      <Major />
      <ParallaxTwo />
      <Gallery />
      <Pricings />
    </>
  );
};

export default Home;
