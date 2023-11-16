import React from "react";
const About = () => {
  return (
    <div id="about" className="w-full min-h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600"></p>
          <p className="py-2 text-xl text-gray-600">
            My name is Junfeng, but I go by James. I'm currently a student at
            Rutgers University, New Brunswick, pursuing a Bachelor of Science
            degree in Computer Science with a minor in Data Science. My passion
            for technology sparked when I was a child. From playing video games
            to tinkering with computers, I knew from an early age that I wanted
            to pursue a career involving technology. I was particularly
            interested in PC building, spending hours of my free time
            researching various computer components, watching tutorials on
            YouTube, and learning about the different steps involved in building
            a computer from scratch. These tutorials helped me to gain a deeper
            understanding of the various components and how to assemble them
            correctly. Through this process, not only did I learn about the
            technical aspects of building a computer, but I’ve also developed a
            strong sense of determination and problem-solving skills, breaking a
            complex problem into small pieces, which have proven to be valuable
            skills in my career in tech.
          </p>
          <p className="py-2 text-xl text-gray-600">
            As I grew older, my passion for technology only grew stronger. I
            kept expanding my knowledge in programming, computer systems, and
            the latest advancements in the tech industry. I found myself
            particularly drawn to the problem-solving aspect of computer
            science. It was like a puzzle to me, breaking down a problem into
            smaller pieces and tackling them one by one, much like how I would
            assemble different computer parts. Seeing everything come together
            in the end and work seamlessly was an incredibly satisfying feeling.
            I am grateful for the experiences I had growing up that allowed me
            to develop my curiosity and skills in technology. They have helped
            shape me into who I am today, and provided a solid foundation to
            chase my dreams in the tech industry.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl items-center justify-center p-4 hover:scale-120 ease-in duration-300">
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
