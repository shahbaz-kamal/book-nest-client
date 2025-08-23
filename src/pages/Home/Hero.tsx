import { useEffect } from "react";
import { useGetAllBookQuery } from "../../redux/api/bookApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setHeroData } from "../../redux/features/books/bookSlice";

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

  return <div>I am hero</div>;
};

export default Hero;
