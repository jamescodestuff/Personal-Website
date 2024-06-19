import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { MdOutlineWork, MdSchool } from "react-icons/md";

const Experience = () => {
  return (
    <div id="experience">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          work history
        </p>
        <h2 className="py-4 uppercase">Professional Experiences</h2>
        <VerticalTimeline className="bg-gray-200 ">
          <VerticalTimelineElement
            className="vertical-timeline-element--work rounded-lg"
            contentStyle={{
              background: "",
              color: "#000000",
              borderRadius: "10px",
              padding: "20px",
              margin: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #FFFFFF" }}
            date={
              <span style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                Feb 2023 - Aug 2023
              </span>
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title text-[24px] font-bold">
              Mobile App Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Live Boston 617
            </h4>
            <p>
              ● Designed and deployed Live Boston 617's first news app,
              leveraging JavaScript and React Native to provide real-time crime
              updates to users.
              <br></br>● Utilized WordPress API to efficiently fetch HTTP
              requests and seamlessly integrate data into the mobile
              application.
              <br></br>● Significantly contributed to public safety awareness in
              the greater Boston area, achieving over 1,000 downloads within the
              app's first month of release
              <br></br>● Revamped the UI and improved the overall user
              experience by introducing a Breaking News feature, showcasing the
              five most recent articles
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work rounded-lg"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              borderRadius: "10px", 
              padding: "20px",
              margin: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={
              <span style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                Sept 2023 - Present
              </span>
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title text-[24px] font-bold">
              Web Dev Project Lead
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rutgers Enactus, New Beginning{" "}
            </h4>
            <p>
              ● Led a team of four developers in the design and development of a
              website and mobile app aimed to help formerly incarcerated
              individuals access local resources and employment opportunities.
              <br></br>● Mentored and pivoted each member to optimize their
              skill and fostered continuous growth throughout the project.
              <br></br>● Facilitated weekly meetings, including sprint planning,
              code reviews, and deliverable write-ups with each developer to
              track progress and ensure alignment with project goals
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work rounded-lg"
            contentStyle={{
              background: "",
              color: "#000000",
              borderRadius: "10px",
              padding: "20px",
              margin: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #FFFFFF" }}
            date={
              <span style={{ color: "#0f0f0f", fontWeight: "bold" }}>
                Spet 2020 - May 2024
              </span>
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title text-[24px] font-bold">
              Rutgers University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              B.S in Computer Science & Minor in Data Science
            </h4>
            <p>
              ● Proficient in programming languages including Java, JavaScript,
              C, Python, R, and Dart, with experience in tools and software such
              as Flutter, React, HTML & CSS, Flask, Firebase, Node, and Linux.
              <br></br>● Demonstrated leadership as the Web Dev Lead at Rutgers
              Enactus, guiding a team of developers in designing and developing
              a website and mobile app to support formerly incarcerated
              individuals in accessing local resources and employment
              opportunities. <br></br>● Enrolled in relevant coursework,
              including Distributed Systems, Deep Learning, Data Structures,
              Computer Architecture, and others, to enhance technical knowledge
              and skills in computer science and mathematics.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
