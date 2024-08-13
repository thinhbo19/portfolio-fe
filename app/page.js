"use client";
import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Home from "@/components/Home/Home";
import Portfolio from "@/components/Portfolio/Portfolio";
import Resume from "@/components/Resume/Resume";
import Services from "@/components/Services/Services";
import Sidebar from "@/components/Sidebar/Sidebar";
import Testimonials from "@/components/Testimonials/Testimonials";
import "./page.module.css";

export default function Page() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
