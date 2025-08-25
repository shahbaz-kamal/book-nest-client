import { useEffect, useState } from "react";
import { useGetAllBookQuery } from "../../redux/api/bookApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setHeroData } from "../../redux/features/books/bookSlice";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  const heroData = useAppSelector((state) => state.book.heroData);
  // const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const { data } = useGetAllBookQuery();

  useEffect(() => {
    if (data && data.data) {
      dispatch(setHeroData({ allHeroData: data.data }));
    }
  }, [data]);
  // console.log(data);
  // console.log(heroData);
  const totalData: number = heroData.length;
  const goToSlides = (index: number) => {
    const newIndex = (index + totalData) % totalData;
    setCurrentIndex(newIndex);
  };

  const goToBookAt = (indexOfSet: number) => {
    return heroData[(currentIndex + indexOfSet + totalData) % totalData];
  };
  const currentBook = goToBookAt(0);
  const prevBook = goToBookAt(-1);
  const nextBook = goToBookAt(1);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".main-img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".book-details, .borrow-btn",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
    const mainTitleSplit = new SplitText(".main-title", {
      type: "words,chars",
    });
    gsap.from(mainTitleSplit.chars, {
      yPercent: 20,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
    });
  }, [currentIndex]);

  return (
    <div>
      <h3 className="main-title text-center  title text-2xl lg:text-4xl mb-6 font-bold text-light-text dark:text-dark-text">
        A World of{" "}
        <span className="text-light-primary dark:text-dark-primary">
          Knowledge
        </span>{" "}
        Awaits{" "}
      </h3>
      <div className="flex justify-between items-center">
        <div
          onClick={() => goToSlides(currentIndex - 1)}
          className="group text-light-text dark:text-dark-text text-2xl md:text-4xl font-bold relative inline-block cursor-pointer"
        >
          <span
            id="title"
            className="hidden md:absolute -top-[22px] left-0  text-xl whitespace-nowrap md:block"
          >
            {prevBook.title}
          </span>
          <ArrowBigLeft size={30} />
          {/* Hover Image */}
          {/* <img
            src={prevBook.coverPage}
            alt={prevBook.title}
            className="hidden md:absolute md:block -top-[250px] left-0 max-w-[150px]   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          /> */}
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center  md:justify-evenly w-full">
          <div className="flex flex-col lg:justify-between  lg:min-h-80  ">
            <div className="flex-grow">
              {/* <h3 className="hidden lg:block title text-xl md:text-4xl mb-6 font-bold text-light-text dark:text-dark-text">
                A World of{" "}
                <span className="text-light-primary dark:text-dark-primary">
                  Knowledge
                </span>{" "}
                Awaits{" "}
              </h3> */}
              {/* <h1 className="text-lg md:text-xl text-light-secondary dark:text-dark-secondary mb-6">
                Trending Books
              </h1> */}
              <h3 className="book-details text-2xl text-center lg:text-start md:text-3xl font-special font-bold text-light-text dark:text-dark-text">
                {currentBook.title}
              </h3>
              <h3 className="book-details lg:max-w-[400px] text-center lg:text-start text-xl md:text-2xl font-special  text-light-text dark:text-dark-text">
                {currentBook.description}
              </h3>
            </div>
            <div className="flex justify-center lg:justify-start borrow-btn">
              <Button
                variant="outline"
                className=" text-light-text dark:text-dark-text border-light-primary dark:border-dark-primary hover:bg-light-primary hover:text-dark-text dark:hover:bg-dark-primary dark:hover:text-light-text mt-2 font-semibold text-lg font-special flex items-center gap-2 hover:cursor-pointer transition duration-300 ease-in-out"
              >
                Borrow Now
              </Button>
            </div>
          </div>
          <div>
            <img
              className="max-h-80 max-w-60 object-cover main-img"
              src={currentBook.coverPage}
              alt=""
            />
          </div>
        </div>
        <div
          onClick={() => goToSlides(currentIndex + 1)}
          className="group text-light-text dark:text-dark-text text-2xl md:text-4xl font-bold relative"
        >
          <span
            id="title"
            className="absolute -top-[22px] right-0  text-xl whitespace-nowrap"
          >
            {nextBook.title}
          </span>
          <ArrowBigRight size={30} />
          {/* Hover Image */}
          {/* <img
            src={nextBook.coverPage}
            alt={prevBook.title}
            className="hidden md:absolute md:block -top-[250px] right-0 max-w-[150px]   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
