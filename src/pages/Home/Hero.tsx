import {
  useAddBookMutation,
  useGetAllBookQuery,
} from "../../redux/api/bookApi";
import { useAppSelector } from "../../redux/hooks";

const Hero = () => {
  const heroData = useAppSelector((state) => state.book.heroData);
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const { data } = useGetAllBookQuery();
  console.log(data);
  console.log(heroData);

  return <div>I am hero</div>;
};

export default Hero;
