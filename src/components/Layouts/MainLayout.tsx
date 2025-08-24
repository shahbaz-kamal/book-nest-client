import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const MainLayout = () => {
  const html = document.documentElement;
  const isDark =
    html.classList.contains("dark") ||
    html.getAttribute("data-theme") === "dark"
      ? true
      : false;

  useEffect(() => {
    console.log("Forom isDark =>", isDark);
  }, [isDark]);
  useGSAP(() => {
    // giving dynamic bg for dark and light mode

    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "header",
        start: "bottom top",
      },
    });
    // navTween.to(
    //   "header",

    //   {
    //     backgroundColor: "#faf6f190",
    //     backgroundFilter: "blur(20px)",
    //     duration: 1,
    //     ease: "power1.inOut",
    //   }
    // );
    gsap.from("header", {
      y: "-100",
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, [isDark]);
  return (
    <div>
      <header className="w-full fixed z-30 bg-light-background/60 dark:bg-dark-background/60  backdrop-blur-2xl ">
        <Navbar></Navbar>
      </header>
      <main className="pt-16">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
