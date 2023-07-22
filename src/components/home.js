import Header from "./Header";
import "./home.css";
import profile from "./profile.JPG";
import dev from "./dev.png";
import anime from "./anime.png";
import dataa from "./analyst.png";
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
<div>        <h4 className="cap1">Web Developer</h4>
        <h4 className="cap1">Data Analystr</h4>
        <h4 className="cap1">Anime</h4></div>

      </div>
    </div>
  );
}

export default Home;
