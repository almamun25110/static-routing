import React from "react";
import Header from "../assets/Common/Header";
import ProductImg from "../images/unsplash.jpg";
import { blogs } from "./blogs";
import { Link } from "react-router-dom";

function Blog() {
  let alblogs = blogs.map((v, i) => {
    return (
      <div className="shadow-lg rounded-md" key={i}>
        <img src={ProductImg} className="shadow-lg object-cover" />
        <h3 className="text-2xl text-center py-2">{v.title}</h3>
        <p className="text-justify p-2 ">{v.body}</p>
        <button className=" text-blue-600 py-5 cursor-pointer">
          <Link to={`/blog/${v.id}`}>Read more</Link>
        </button>
      </div>
    );
  });
  return (
    <div className="max-w-292 mx-auto">
      <Header />
      <div className="grid grid-cols-4 gap-5 text-center">{alblogs}</div>
    </div>
  );
}
export default Blog;
