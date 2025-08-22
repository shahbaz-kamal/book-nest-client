import { useAppSelector } from "../../redux/hooks";

const Hero = () => {
  const heroData = useAppSelector((state) => state.book.heroData);
  console.log(heroData);

  return <div>I am hero</div>;
};

export default Hero;
