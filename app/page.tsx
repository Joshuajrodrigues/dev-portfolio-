import About from "@/components/about";
import Accordion from "@/components/accordian";
import Button from "@/components/button";
import Career from "@/components/career";
import ColorPicker from "@/components/colorPicker";
import Contact from "@/components/contact";
import Github from "@/components/github";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Marquee from "@/components/marquee";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import SmallResume from "@/components/smallResume";
import {
  Copyright,
  Download,
  GitFork,
  GithubIcon,
  Linkedin,
  MailIcon,
  Star,
} from "lucide-react";

export type Marquee = {
  key: number;
  value: string;
}[];
let marqueeItems: Marquee = [
  { key: 0, value: "Web Development" },
  { key: 1, value: "◆" },
  { key: 2, value: "Frontend Engineering" },
  { key: 3, value: "◆" },
  { key: 4, value: "Software Solutions" },
  { key: 5, value: "◆" },
  { key: 6, value: "Web Development" },
  { key: 7, value: "◆" },
  { key: 8, value: "Frontend Engineering" },
  { key: 9, value: "◆" },
  { key: 10, value: "Software Solutions" },
  { key: 11, value: "◆" },
];

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center">
        <Marquee items={marqueeItems} />
      </section>
      <section className="w-full mt-5">
        <div className=" flex flex-col sm:flex-row justify-between lg:justify-evenly items-center">
          <Resume />
          <Github />
        </div>
        <section className="flex flex-wrap pt-5">
          <Intro />
        </section>

        <section className="w-full flex flex-col justify-center items-center">
          {/* <Accordion question="Blog" answer="test" /> */}
          <div id="feat" className="w-full ">
            <Accordion
              hash="#feat"
              open={true}
              question="Featured Projects"
              answer={<Projects />}
            />
          </div>
          <Accordion
            hash="#career"
            open={true}
            question="Career"
            answer={<Career />}
          />
          <Accordion hash="#about" question="About" answer={<About />} />
          <Accordion hash="#contact" question="Contact" answer={<Contact />} />
        </section>
      </section>
      <footer className=" w-full flex flex-col justify-between items-center">
        <span className="flex flex-col items-center justify-center mb-5">
            <span className="font-bold mr-1">Open for opportunities !</span>
          <span className="flex">
            <a
              className="flex"
              target="_blank"
              href="mailto:joshuarodriguesdev@gmail.com"
            >
              <MailIcon className="mr-1" />
            </a>
            <a
              className=""
              target="_blank"
              href="https://linkedin.com/in/joshua-rodrigues-1655091b2"
            >
              <Linkedin className="mr-1" /> 
           
            </a>
            <a target="_blank" href="https://github.com/Joshuajrodrigues">
              <GithubIcon />
            </a>
          </span>
        </span>
        <span className="flex flex-col mb-0">
          <span className="flex mb-2 font-bold text-center">
            <Copyright className="mr-1" />
            2024 Joshua Rodrigues <br /> All rights reserved.{" "}
            <a
              target="_blank"
              href="https://github.com/Joshuajrodrigues/dev-portfolio"
            >
              <GitFork className="ml-1" />
            </a>
          </span>
        </span>
      </footer>
    </>
  );
}
