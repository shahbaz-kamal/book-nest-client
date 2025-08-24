import { useEffect } from "react";
import { useGetAllBookQuery } from "../../redux/api/bookApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setHeroData } from "../../redux/features/books/bookSlice";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const Hero = () => {
  const dispatch = useAppDispatch();
  const heroData = useAppSelector((state) => state.book.heroData);
  // const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const { data } = useGetAllBookQuery();

  useEffect(() => {
    if (data && data.data) {
      dispatch(setHeroData({ allHeroData: data.data }));
    }
  }, [data]);
  console.log(data);
  console.log(heroData);

  return (
    <div>
      <h3 className="text-center lg:hidden title text-2xl lg:text-4xl mb-6 font-bold text-light-text dark:text-dark-text">
        A World of{" "}
        <span className="text-light-primary dark:text-dark-primary">
          Knowledge
        </span>{" "}
        Awaits{" "}
      </h3>
      <div className="flex justify-between items-center">
        <div className="text-light-text dark:text-dark-text text-2xl md:text-4xl font-bold">
          <ArrowBigLeft size={30} />
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center  md:justify-evenly w-full">
          <div className="flex flex-col lg:justify-between  lg:min-h-80  ">
            <div className="flex-grow">
              <h3 className="hidden lg:block title text-xl md:text-4xl mb-6 font-bold text-light-text dark:text-dark-text">
                A World of{" "}
                <span className="text-light-primary dark:text-dark-primary">
                  Knowledge
                </span>{" "}
                Awaits{" "}
              </h3>
              {/* <h1 className="text-lg md:text-xl text-light-secondary dark:text-dark-secondary mb-6">
                Trending Books
              </h1> */}
              <h3 className="text-2xl text-center lg:text-start md:text-3xl font-special font-bold text-light-text dark:text-dark-text">
                {heroData[0].title}
              </h3>
              <h3 className="lg:max-w-[400px] text-center lg:text-start text-xl md:text-2xl font-special  text-light-text dark:text-dark-text">
                {heroData[0].description}
              </h3>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="outline"
                className=" text-light-text dark:text-dark-text border-light-primary dark:border-dark-primary hover:bg-light-primary hover:text-dark-text dark:hover:bg-dark-primary dark:hover:text-light-text mt-2 font-semibold text-lg font-special flex items-center gap-2 hover:cursor-pointer transition duration-300 ease-in-out"
              >
                Borrow Now
              </Button>
            </div>
          </div>
          <div>
            <img className="max-h-80" src={heroData[0].coverPage} alt="" />
          </div>
        </div>
        <div className="text-light-text dark:text-dark-text text-2xl md:text-4xl font-bold">
          <ArrowBigRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
