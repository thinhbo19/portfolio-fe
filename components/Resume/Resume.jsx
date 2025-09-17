import React from "react";
import "../../Styles/Resume.css";
import SchoolIcon from "@mui/icons-material/School";
import Shapes from "../Shapes";

const Resume = () => {
  return (
    <section className="resume container section relative" id="Resume">
      {/* <Shapes /> */}

      <h2 className="section_title">Resume</h2>

      <div class="container mx-auto px-4">
        <div class="grid justify-center text-center pb-16">
          <h2 class="text-xl font-medium text-[#00a68e] pb-4">Experience</h2>
          <h3 class="text-3xl font-medium pb-8">Work Experience</h3>
          <ul class="flex justify-center gap-3 pb-12">
            <li class="w-12 h-1 rounded-lg bg-[#00a68e]"></li>
            <li class="w-6 h-1 rounded-lg bg-[#00a68e]"></li>
            <li class="w-4 h-1 rounded-lg bg-[#00a68e]"></li>
          </ul>
        </div>
        <div style={{ marginTop: "16px" }} class="grid md:block">
          <div class="flex flex-col md:grid grid-cols-12 md:items-center group odd:flex-col-reverse  md:gap-0">
            <div
              style={{ padding: "16px" }}
              class="col-span-5 shadow-[4px_4px_18px_0px_#ddd] p-16 rounded-lg bg-[#00a68e] text-white transition duration-300"
            >
              <p class="line-clamp-6 leading-relaxed">
                Currently working as a Frontend Developer at CAS Technology
                Solutions Company Limited. Responsible for developing and
                maintaining web applications using modern frontend technologies.
                Collaborating with cross-functional teams to deliver
                high-quality software solutions.
              </p>
            </div>
            <div class="col-span-2 h-full md:flex items-center justify-center relative hidden">
              <span class="w-0.5 h-full bg-[#00a68e] inline-block absolute top-0"></span>
              <p class="w-16 h-16 flex justify-center items-center rounded-full border-2 border-[#00a68e] text-xl bg-[#00a68e] text-white transition duration-300 z-10">
                01
              </p>
            </div>
            <div class="col-span-5 md:pl-8">
              <h2 class="text-2xl font-medium pb-3">Frontend Developer</h2>
              <h3 class="text-lg text-[#00a68e] pb-3 pt-2">
                CAS Technology Solutions Company Limited
              </h3>
              <p class="font-medium text-gray-600">March 2025 - Present</p>
            </div>
          </div>
          <div class="flex flex-col md:grid grid-cols-12 md:items-center group odd:flex-col-reverse gap-6 md:gap-0">
            <div class="col-span-5 md:text-right md:pr-8">
              <h2 class="text-2xl font-medium pb-3">
                Frontend Developer Intern
              </h2>
              <h3 class="text-lg text-[#00a68e] pb-3 pt-2">
                CAS Technology Solutions Company Limited
              </h3>
              <p class="font-medium text-gray-600">
                November 2024 - February 2025
              </p>
            </div>
            <div class="col-span-2 h-full md:flex items-center justify-center relative hidden">
              <span class="w-0.5 h-full bg-[#00a68e] inline-block absolute top-0"></span>
              <p class="w-16 h-16 flex justify-center items-center rounded-full border-2 border-[#00a68e] text-xl bg-[#00a68e] text-white transition duration-300 z-10">
                02
              </p>
            </div>
            <div
              style={{ padding: "16px" }}
              class="col-span-5 shadow-[4px_4px_18px_0px_#ddd] p-16 rounded-lg bg-[#00a68e] text-white transition duration-300 my-6"
            >
              <p class="line-clamp-6 leading-relaxed">
                Completed internship as Frontend Developer at CAS Technology
                Solutions Company Limited. Gained hands-on experience in web
                development, learned modern frontend frameworks, and contributed
                to real-world projects under professional supervision.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ marginTop: "16px" }}
          class="grid justify-center text-center pb-16 pt-20"
        >
          <h2 class="text-xl font-medium text-[#00a68e] pb-4">Education</h2>
          <h3 class="text-3xl font-medium pb-8">Academic Background</h3>
          <ul class="flex justify-center gap-3 pb-12">
            <li class="w-12 h-1 rounded-lg bg-[#00a68e]"></li>
            <li class="w-6 h-1 rounded-lg bg-[#00a68e]"></li>
            <li class="w-4 h-1 rounded-lg bg-[#00a68e]"></li>
          </ul>
        </div>
        <div class="grid gap-16 md:block">
          <div class="flex flex-col md:grid grid-cols-12 md:items-center group odd:flex-col-reverse gap-6 md:gap-0">
            <div
              style={{ padding: "16px" }}
              class="col-span-5 shadow-[4px_4px_18px_0px_#ddd] p-16 rounded-lg bg-[#00a68e] text-white transition duration-300 my-6"
            >
              <p class="line-clamp-6 leading-relaxed">
                Graduated from Ho Chi Minh City University of Education with a
                Bachelor's degree in Software Engineering, specializing in
                Information Technology. Completed comprehensive coursework in
                programming, software development methodologies, and computer
                science fundamentals.
              </p>
            </div>
            <div class="col-span-2 h-full md:flex items-center justify-center relative hidden">
              <span class="w-0.5 h-full bg-[#00a68e] inline-block absolute top-0"></span>
              <p class="w-16 h-16 flex justify-center items-center rounded-full border-2 border-[#00a68e] text-xl bg-[#00a68e] text-white transition duration-300 z-10">
                01
              </p>
            </div>
            <div class="col-span-5 md:pl-8">
              <h2 class="text-2xl font-medium pb-3">
                Bachelor of Software Engineering
              </h2>
              <h3 class="text-lg text-[#00a68e] pb-3 pt-2">
                Ho Chi Minh City University of Education
              </h3>
              <p class="font-medium text-gray-600">2021 - July 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
