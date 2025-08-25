import Heading from "../../components/Shared/Heading";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { useCreateBookMutation } from "../../redux/api/bookApi";

const AddBook = () => {
  const [createBook, { isLoading, isError, isSuccess }] =
    useCreateBookMutation();
  type FormField = {
    title: string;
    author: string;
    genre: string;
    isbn: string | number;
    description: string;
    coverPage: string;
    price: number;
    copies: number;
    available: string | boolean;
  };
  const form = useForm<FormField>();
  const register = form.register;
  const handleSubmit = form.handleSubmit;
  const errors = form.formState.errors;
  const onSubmit: SubmitHandler<FormField> = async (data) => {
    console.log("from hook form before", data);
    if (data.available === "AVAILABLE") {
      data.available = true;
    }
    if (!data.coverPage) {
      data.coverPage = "https://i.ibb.co.com/n8KXFkF0/photo-Not-Found.png";
    }
    // console.log("from hook form after", data);
    const res = await createBook(data);
    console.log(res);
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <header>
        <Heading title="Add  Book"></Heading>
      </header>
      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-light-primary/10 dark:bg-dark-primary/5 p-6 md:p-10 rounded-2xl mb-10"
        >
          {/* title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Title
            </label>
            <input
              {...register("title", {
                required: true,
              })}
              name="title"
              placeholder="Enter the title"
              type="text"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
            {errors.title && (
              <span className="text-red-600 ml-2">Title is required</span>
            )}
          </div>
          {/* Author */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Author
            </label>
            <input
              {...register("author", {
                required: true,
              })}
              placeholder="Enter the author's name"
              type="text"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
            {errors.author && (
              <span className="text-red-600 ml-2">Author is required</span>
            )}
          </div>
          {/* Genre */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Genre
            </label>
            <select
              {...register("genre", { required: true })}
              name="genre"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            >
              <option value="FANTASY">FANTASY</option>
              <option value="BIOGRAPHY">BIOGRAPHY</option>
              <option value="HISTORY">HISTORY</option>
              <option value="SCIENCE">SCIENCE</option>
              <option value="NON_FICTION">NON_FICTION</option>
              <option value="FICTION">FICTION</option>
            </select>
          </div>
          {/* ISBN */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              ISBN
            </label>
            <input
              {...register("isbn", { required: true })}
              name="isbn"
              placeholder="Enter ISBN number"
              type="text"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
            {errors.isbn && (
              <span className="text-red-600 ml-2">ISBN is required</span>
            )}
          </div>
          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              name="description"
              placeholder="Enter book description"
              rows={1}
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            ></textarea>
            {errors.description && (
              <span className="text-red-600 ml-2">Description is required</span>
            )}
          </div>
          {/* Coverpage image url */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Cover Image URL
            </label>
            <input
              {...register("coverPage")}
              name="coverPage"
              placeholder="Enter the image url"
              type="url"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
          </div>
          {/* Price */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Price
            </label>
            <input
              {...register("price", { required: true })}
              name="price"
              placeholder="Enter book price"
              type="number"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
            {errors.price && (
              <span className="text-red-600 ml-2">Price is required</span>
            )}
          </div>
          {/* Copies */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Copies
            </label>
            <input
              {...register("copies", {
                required: true,
                min: { value: 1, message: "Copies must be at least 1" },
              })}
              placeholder="Enter available copies"
              type="number"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
            {errors.copies?.type === "required" && (
              <span className="text-red-600 ml-2">Copies are required</span>
            )}
            {errors.copies?.type === "min" && (
              <span className="text-red-600 ml-2">{errors.copies.message}</span>
            )}
          </div>
          {/* Availability */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Availability
            </label>
            <select
              {...register("available")}
              name="available"
              className="w-full  rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            >
              <option value="AVAILABLE">AVAILABLE</option>
              <option value="NOT_AVAILABLE">NOT AVAILABLE</option>
            </select>
          </div>
          <div className="flex flex-col  md:col-span-2 gap-2">
            {/* <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Availability
            </label> */}
            <Button
              type="submit"
              {...register("available")}
              name="available"
              className="w-full rounded-md bg-light-primary dark:bg-dark-primary hover:bg-light-primary/80 dark:hover:bg-dark-primary/80 px-4 py-3 text-white text-lg font-semibold  outline-none transition-all"
            >
              Submit
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddBook;
