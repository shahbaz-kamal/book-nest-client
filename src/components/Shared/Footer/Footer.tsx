const Footer = () => {
  return (
    <footer className="mt-6 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text border-t border-light-muted dark:border-dark-accent">
      <div className="w-11/12 md:w-10/12 mx-auto py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-center md:text-start text-2xl font-bold text-light-primary dark:text-dark-primary mb-2">
            BookNest
          </h2>
          <p className="text-light-muted dark:text-dark-text max-w-xs">
            Explore a world of knowledge. Find your favorite books and borrow
            with ease.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-light-primary dark:hover:text-dark-primary transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/all-books"
                className="hover:text-light-primary dark:hover:text-dark-primary transition"
              >
                Books
              </a>
            </li>
            <li>
              <a
                href="/add-book"
                className="hover:text-light-primary dark:hover:text-dark-primary transition"
              >
                Add Books
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-light-primary dark:hover:text-dark-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22,12a10,10,0,1,0-11.6,9.8v-6.9H8.1v-2.9h2.3V9.8c0-2.3,1.4-3.5,3.4-3.5a13.9,13.9,0,0,1,2,.2v2.2H15c-1.2,0-1.5.6-1.5,1.5v1.8h2.6l-.4,2.9H13.5V21.8A10,10,0,0,0,22,12Z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-light-primary dark:hover:text-dark-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 6.5a9 9 0 01-2.6.7 4.5 4.5 0 002-2.5 9 9 0 01-2.8 1.1 4.5 4.5 0 00-7.7 4.1A12.8 12.8 0 013 5.4a4.5 4.5 0 001.4 6 4.5 4.5 0 01-2-.6v.1a4.5 4.5 0 003.6 4.4 4.5 4.5 0 01-2 .1 4.5 4.5 0 004.2 3.1A9 9 0 013 19a12.8 12.8 0 006.9 2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-light-muted dark:border-dark-accent mt-6 pt-4 text-center text-sm text-light-muted dark:text-dark-text">
        &copy; {new Date().getFullYear()} BookNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
