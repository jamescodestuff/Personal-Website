import React from "react";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600"></p>
          <p className="py-2 text-gray-600">
            My name is Junfeng Wang, but I go by James. I'm a rising senior at
            Rutgers University, New Brunswick, pursuing a Bachelor of Science
            degree in Computer Science with a minor in Data Science. My passion
            for technology started when I was just a kid, looking around in my
            parent's living room and wondering what is that black box on the
            table, illuminating lights, and different images. I fell in love
            with the hardware at a young age, putting pieces together in
            different machines and eventually assembling my first computer.
          </p>
          <p className="py-2 text-gray-600">
            As I turned older and started learning my first computer science
            class, I was immediately hooked on problem-solving. Encountering a
            problem and breaking it down into small pieces, and tackling them
            one by one, it's like I'm solving a puzzle. In the end, when all the
            problems are finished, all the pieces come together, and that is an
            incredible feeling.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://www.usnews.com/cmsmedia/a7/b4/fc82a15549afac6b47117ceb53b1/161031-stock.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
