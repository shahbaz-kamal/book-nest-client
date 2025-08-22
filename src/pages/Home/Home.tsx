import Hero from "./Hero";

const Home = () => {
  return (
    <div className="space-y-4 md:space-y-5">
      <title>Home || BookNest</title>
      <section>
        <Hero></Hero>
      </section>
      <div className="h-[100vh] bg-red-500"> </div>
    </div>
  );
};

export default Home;
