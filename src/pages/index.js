import * as React from "react";
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import SocialList from '../components/SocialList';
import Tools from '../components/Tools';

import "./index.scss";

const Home = () => {
  return (
    <React.Fragment>
        <Header/>
        <SocialList/>
        <main>
          <h1>Hi, my name is David Solà and I am a software engineer. Welcome to my site :)</h1>
          <About/>
          <Experience/>
          <Tools/>
          <Skills/>
          <Contact/>
        </main>
    </React.Fragment>
  );
}

export default Home;
