import { useEffect, useState } from "react";
import Heading from "../../components/Shared/Heading";
import { useGetAllBookQuery } from "../../redux/api/bookApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAllBookData } from "../../redux/features/books/bookSlice";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { PencilOff, Trash, View } from "lucide-react";

const AllBooks = () => {
  const { data, isLoading, isError } = useGetAllBookQuery();
  const dispatch = useAppDispatch();
  const allBookData = useAppSelector((state) => state.book.allBookData);

  useEffect(() => {
    if (data && data.data)
      dispatch(setAllBookData({ allBookData: data.data || [] }));
  }, [data]);

  console.log(allBookData);
  //   for showing in category tabs
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  useEffect(() => {
    if (allBookData.length > 0) {
      const uniqueCategories = Array.from(
        new Set(allBookData.map((book) => book.genre))
      );
      uniqueCategories.unshift("ALL");
      setCategories(uniqueCategories);
    }
  }, [allBookData]);
  console.log(categories);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <header>
        <Heading title={"Our Book"} subtitle="Find Our latest books"></Heading>
      </header>
      <section className="textlight-text dark:text-dark-text">
        {/* catageory div */}
        {categories.length > 0 && (
          <Tabs defaultValue={categories[0] || "all"} className="w-full">
            <TabsList className="w-full flex-wrap">
              {categories.map((cat) => (
                <TabsTrigger
                  onClick={() => setSelectedCategory(cat)}
                  value={cat}
                  className={`text-light-text dark:text-dark-text ${
                    cat === selectedCategory
                      ? "opacity-100  bg-light-primary/50 dark:bg-dark-primary/50"
                      : "opacity-50"
                  }`}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* Tabs Content */}
            {categories.map((cat, index) => (
              <TabsContent key={index} value={cat}>
                {/* Filter and display books of this category */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-3 md:mt-6">
                  {allBookData
                    .filter((book) => cat === "ALL" || book.genre === cat) // if ALL, show all
                    .map((book) => (
                      <div
                        key={book._id}
                        className="shadow dark:shadow-xl  p-4 rounded-lg"
                      >
                        <img
                          src={book.coverPage}
                          alt={book.title}
                          className="h-60 w-auto object-contain rounded-md mx-auto"
                        />
                        <h3 className="mt-2 font-semibold text-light-text dark:text-dark-text text-center">
                          {book.title}
                        </h3>
                      </div>
                    ))}
                </div> */}
                <Table>
                  <TableCaption>
                    {" "}
                    {cat === "ALL" ? "All Books" : `Books in ${cat}`}
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead></TableHead>
                      <TableHead></TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Genre</TableHead>
                      <TableHead>ISBN</TableHead>
                      <TableHead>Copies</TableHead>
                      <TableHead>Availability</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allBookData
                      .filter((book) => cat === "ALL" || book.genre === cat) // filter by category
                      .map((book, idx) => (
                        <TableRow key={book._id}>
                          <TableCell>{idx + 1}</TableCell>
                          <TableCell>
                            <div className="w-20 max-h-30 object-cover">
                              <img src={book.coverPage} alt="" />
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">
                            {book.title}
                          </TableCell>
                          <TableCell>{book.author}</TableCell>
                          <TableCell>{book.genre}</TableCell>
                          <TableCell>{book.isbn || "—"}</TableCell>
                          <TableCell>{book.copies || "—"}</TableCell>
                          <TableCell>
                            {book.available ? (
                              <span className="text-green-600 font-semibold">
                                Available
                              </span>
                            ) : (
                              <span className="text-red-600 font-semibold">
                                Unavailable
                              </span>
                            )}
                          </TableCell>
                          <TableCell className="">
                            <div className="flex gap-2">
                              <div className="relative group cursor-pointer transition ">
                                <button className="px-2 py-1 text-sm bg-blue-500 hover:bg-blue-600  text-white rounded-md hover:opacity-80 hover:cursor-pointer">
                                  <View />
                                </button>
                                <p className="opacity-0 absolute group-hover:opacity-100 group-hover:cursor-pointer -top-6 font-bold text-light-color-text dark:text-dark-color-text bg-light-background dark:bg-dark-background">
                                  View
                                </p>
                              </div>
                              <div className="relative group cursor-pointer transition ">
                                <button className="px-2 py-1 text-sm bg-green-500 hover:bg-green-600  text-white rounded-md hover:opacity-80 hover:cursor-pointer ">
                                  <PencilOff />
                                </button>
                                <p className="opacity-0 absolute group-hover:opacity-100 group-hover:cursor-pointer -top-6 font-bold text-light-color-text dark:text-dark-color-text bg-light-background dark:bg-dark-background">
                                  Details
                                </p>
                              </div>
                              <div className="relative group cursor-pointer transition ">
                                {" "}
                                <button className="px-2 py-1 text-sm bg-red-500 hover:bg-red-600  text-white rounded-md hover:opacity-80 hover:cursor-pointer">
                                  <Trash />
                                </button>
                                <p className="opacity-0 absolute group-hover:opacity-100 group-hover:cursor-pointer -top-6 font-bold text-light-color-text dark:text-dark-color-text hover:cursor-poiter bg-light-background dark:bg-dark-background">
                                  Delete
                                </p>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </section>
    </div>
  );
};

export default AllBooks;
