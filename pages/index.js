import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experiance from "../components/Experiance";

export default function Home() {
  return (
    <div>
      <Head>
        <title>🦊Junfeng Wang🦊</title>
        <meta name="description" content="Welcome to my website!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Experiance />
      <Skills />
      <Projects />
    </div>
  );
}
