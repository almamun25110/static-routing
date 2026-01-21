import React from "react";
import Header from "../assets/Common/Header";

function About() {
  return (
    <div className="max-w-292 mx-auto">
      <Header />
      <h1 className="text-3xl text-center font-bold pb-5">About-Us</h1>
      <p className="text-left">
        An array is a data structure that stores a collection of elements, which
        are typically of the same data type, in a linear sequence. These
        elements are identified by an index, a number that indicates their
        position, and can be accessed to retrieve or modify them.
      </p>
      <p className="text-left">
        An array is a data structure that stores a collection of elements, which
        are typically of the same data type, in a linear sequence. These
        elements are identified by an index, a number that indicates their
        position, and can be accessed to retrieve or modify them. The term
        "array" can also refer to any systematic arrangement of objects in rows
        and columns.
      </p>
    </div>
  );
}

export default About