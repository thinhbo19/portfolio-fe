"use client";

import React from "react";
import "../../Styles/Blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="blog container section" id="Blog">
      <h2 className="section_title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <Link href="/">
              <span className="blog__category">Reviews</span>
            </Link>
            <Link href="/">
              <img src={Image1} alt="" className="blog__img"></img>
            </Link>
          </div>

          <div className="blog__details">
            <h3 className="blog__title">
              5 Best App Development Tool for Your Projects
            </h3>
            <div className="blog__meta">
              <span>09 February, 2022</span>
              <span className="blog__dot">.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <Link href="/">
              <span className="blog__category">Tutorial</span>
            </Link>
            <Link href="/">
              <img src={Image2} alt="" className="blog__img"></img>
            </Link>
          </div>

          <div className="blog__details">
            <h3 className="blog__title">Common Misconceptions About Payment</h3>
            <div className="blog__meta">
              <span>07 February, 2022</span>
              <span className="blog__dot">.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <Link href="/">
              <span className="blog__category">Business</span>
            </Link>
            <Link href="/">
              <img src={Image3} alt="" className="blog__img"></img>
            </Link>
          </div>

          <div className="blog__details">
            <h3 className="blog__title">
              3 Things to know about startup business
            </h3>
            <div className="blog__meta">
              <span>05 February, 2022</span>
              <span className="blog__dot">.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
