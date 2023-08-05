import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <div className="crop-container">
      <img src="../public/bruno.jpg" alt="Bruno" className="avatar" />
    </div>
  );
};

const Intro = () => {
  return (
    <div>
      <h1>Bruno Martins</h1>
      <p>
        Junior Front-end Developer, currently working as a lab technician. Loves
        playing games like World of Warcraft and Halo, and listening to music
        such as Slipknot, Linkin Park and Tool.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="turquoise" textColor="white" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" textColor="black" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" textColor="white" />
      <Skill skill="Git & GitHub" emoji="💪" color="grey" textColor="white" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.color, color: props.textColor }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
