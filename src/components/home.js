import Header from "./Header";
import "./home.css";
import profile from "./profile.JPG";
import dev from "./dev.png";
import anime from "./anime.png";
import dataa from "./analyst.png";
import complogo from "./complogo.png";
import weblogo from "./weblogo.png";
import managelogo from "./managelogo.png";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="overlay"></div>
        <Header />
        <div id="maindiv">
          <h1>HI, I'M Harshvardhan</h1>
          <h2>web developer</h2>
        </div>
      </div>
      <div className="about">
        <h1>A Little Bit About Me</h1>
        <img src={profile} alt="profile-pic" className="profile"></img>

        <p className="infoo">
          Hey! My name is Harsh and I am a web developer with a passion for
          full-stack web development. I am currently a final year student at{" "}
          <a href="https://aissmsioit.org/" target="_blank" rel="noreferrer">
            AISSMS Institute of Information Technology
          </a>
          , pursuing a degree in Information Technology. I aspire to carve a
          career path that allows me to channel my creativity to its fullest
          potential by crafting visually stunning and user-friendly software
          applications. I dream of being part of projects that make a positive
          impact on people's lives and bring joy through creating seamless
          digital experiences.
          <br />
          <br /> When I'm not on computer, I enjoy watching anime, gym and
          traveling.
        </p>
        <h2 className="about-TL">TL;DR? SELF PROCLAMATIONS:</h2>
        <img src={dev} alt="logo" className="iconss"></img>

        <img src={dataa} alt="logo" className="icons"></img>

        <img src={anime} alt="logo" className="icons"></img>

        <div>
          <h4 className="cap1">Web Developer</h4>
          <h4 className="cap1">Data Analystr</h4>
          <h4 className="cap1">Anime</h4>
        </div>
      </div>
      <div className="passion">
        <h1>WHAT I DO<br/><br/></h1>
        <img src={complogo} alt="profile-pic" className="profile22"></img>
        <img src={weblogo} alt="profile-pic" className="profile2"></img>
        <img src={managelogo} alt="profile-pic" className="profile2"></img>
        <div>
          <h4 className="cap12">Design </h4>
          <h4 className="cap12">Development</h4>
          <h4 className="cap12">Management</h4>
        </div>
        <div className="infooo">
          <h4 className="capinfo">
            As a web developer with a passion for innovation and a user-centric
            approach, I thrive on crafting visually captivating and responsive
            user interfaces. With a strong foundation in front-end development,
            I expertly leverage modern frameworks like React and Vue.js to build
            immersive web experiences. My commitment to continuous learning
            drives me to stay ahead of the latest industry trends, enabling me
            to deliver cutting-edge solutions that exceed client expectations.
          </h4>
          <h4 className="capinfo">
            Web development is my passion and profession, where I create dynamic
            and engaging websites and web applications. With expertise in both
            front-end and back-end technologies, I bring designs to life with
            HTML, CSS, and JavaScript while ensuring seamless functionality and
            interactivity with frameworks like React and Node.js. I strive for
            responsive designs that adapt to various devices, providing an
            optimal user experience. As a constant learner, I stay updated with
            the latest trends and technologies, allowing me to deliver
            innovative solutions that cater to the evolving needs of the digital
            world.
          </h4>
          <h4 className="capinfo">
            As a web developer, I am passionate about creating user-friendly and
            visually appealing websites. I enjoy working on diverse projects,
            from building interactive web applications to crafting engaging
            landing pages. With a focus on clean code and attention to detail, I
            strive to deliver high-quality results on time. I am committed to
            continuous learning and staying up-to-date with the latest web
            development trends to provide innovative and effective solutions for
            each project.<br/><br/><br/><br/><br/><br/><br/>
          </h4>
        </div>
      </div>
      <div className="experience">
        <h1>EXPERIENCE</h1>
        <h4>I've been doing web development for about 3 years now, and I'm always eager to learn more in this fast paced industry.</h4>
        <div className="techno"></div>
        <div className="worked">

        </div>
      </div>
    </div>
  );
}

export default Home;
