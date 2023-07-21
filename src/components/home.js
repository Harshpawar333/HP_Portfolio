import Header from "./Header";
import "./home.css";
import profile from "./profile.JPG"
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
      <div className="about"><h1>A Little Bit About Me</h1>
      <img src={profile} alt="profile-pic"></img></div>
      <p>Hey! My name is Harsh and I am a web developer with a passion for full-stack web development. I am currently a final year student at <a href="https://aissmsioit.org/" target="_blank">AISSMS Institute of Information Technology</a>, pursuing a degree in Information Technology. I aspire to carve a career path that allows me to channel my creativity to its fullest potential by crafting visually stunning and user-friendly software applications. I dream of being part of projects that make a positive impact on people's lives and bring joy through creating seamless digital experiences. When I'm not on computer, I Enjoy watching anime and traveling.</p>
    </div>
  );
}


export default Home;
