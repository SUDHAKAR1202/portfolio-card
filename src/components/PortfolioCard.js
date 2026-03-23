import React, {useState} from "react";
import Header from "./Header";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Bio from "./Bio";

import "./PortfolioCard.css";

function PortfolioCard() {
  const [isDark, setIsDark] = useState(false);
  const [likes, setLikes] = useState(0);
  const [avatarIndex, setAvatarIndex] = useState(0);

  const avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://media.istockphoto.com/id/1542566108/photo/young-businessman-smiling-at-camera.jpg?s=2048x2048&w=is&k=20&c=fhjNCzVb8pijG09XiptTOKwucLpyD6jVy0VzsZW2FaY=",
    "https://i.pravatar.cc/150?img=3",
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const changeAvatar = () => {
    setAvatarIndex((prev)=> (prev + 1) % avatars.length);
  }

  const showAlert = () => {
    alert("Hello! Thanks for visiting profile");
  }
  return (
    <div className={`portfolio-card ${isDark ? "dark" : "light"}`}>
      <Header />

      <div className="card-content">
        <Avatar  image={avatars[avatarIndex]}/>
        <PersonalInfo />
        <Bio />

        <div className="actions">
          <button onClick={toggleTheme}>
            {isDark ? "Light Mode": "Dark Mode"}

          </button>

          <button onClick={changeAvatar}>Change Photo</button>

          <button onClick={showAlert}>Alert</button>

          <button onClick={handleLike}>Like ({likes})</button>

        </div>
      </div>
    </div>
  );
}
export default PortfolioCard;
