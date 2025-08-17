import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);
const MainLayout = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "header",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "header",
      { backgroundColor: "#faf6f1" },
      {
        backgroundColor: "#faf6f190",
        backgroundFilter: "blur(20px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.from("header", {
      y: "-100",
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div>
      <header className="w-full fixed z-50 ">
        <Navbar></Navbar>
      </header>
      <main className="pt-20">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
