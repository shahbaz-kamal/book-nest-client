import { useEffect } from "react";
import { useGetAllBookQuery } from "../../redux/api/bookApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setHeroData } from "../../redux/features/books/bookSlice";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

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
    <div className="flex justify-between items-center">
      <div>
        <ArrowBigLeft />
      </div>
      <div className="flex ">
        <img className="max-h-80" src={heroData[0].coverPage} alt="" />
        <div>
          <h3>{heroData[0].title}</h3>
          <h3 className="max-w-[400px]">{heroData[0].description}</h3>
        </div>
      </div>
      <div>
        <ArrowBigRight />
      </div>
    </div>
  );
};

export default Hero;
