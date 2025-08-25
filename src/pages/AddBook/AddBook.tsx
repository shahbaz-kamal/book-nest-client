import Heading from "../../components/Shared/Heading";

const AddBook = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <header>
        <Heading title="Add  Book"></Heading>
      </header>
      <main>
        <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Title
            </label>
            <input
              name="title"
              placeholder="Enter the title"
              type="text"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
          </div>
          {/* Author */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Author
            </label>
            <input
              placeholder="Enter the author's name"
              type="text"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
          </div>
          {/* Genre */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Genre
            </label>
            <select
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
              name="isbn"
              placeholder="Enter ISBN number"
              type="text"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
          </div>
          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter book description"
              rows={1}
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            ></textarea>
          </div>
          {/* Coverpage image url */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Cover Image URL
            </label>
            <input
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
              name="price"
              placeholder="Enter book price"
              type="number"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
          </div>
          {/* Copies */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Copies
            </label>
            <input
              name="copies"
              placeholder="Enter available copies"
              type="number"
              className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
            />
          </div>
          {/* Availability */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-light-text dark:text-dark-text  md:text-lg">
              Availability
            </label>
            <select className="w-full rounded-xl border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all">
              <option value="AVAILABLE">AVAILABLE</option>
              <option value="NOT_AVAILABLE">NOT AVAILABLE</option>
            </select>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddBook;
