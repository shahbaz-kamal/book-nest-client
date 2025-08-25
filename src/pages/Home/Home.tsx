import Hero from "./Hero";
import OurBooks from "./OurBooks";

const Home = () => {
  return (
    <div className="space-y-4 md:space-y-5">
      <title>Home || BookNest</title>
      <section className="hero bg-light-background/55 dark:bg-dark-background/80 py-20">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <Hero></Hero>
        </div>
      </section>
      <section>
        <OurBooks></OurBooks>
      </section>
      <div className="h-[100vh] bg-red-500"> </div>
    </div>
  );
};

export default Home;
