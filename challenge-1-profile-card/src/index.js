import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: 'React',
    level: 'intermediate',
    color: '#149eca',
  },
  {
    skill: 'JavaScript',
    level: 'intermediate',
    color: '#f0db4f',
  },
  {
    skill: 'HTML+CSS',
    level: 'intermediate',
    color: '#f06529',
  },
  {
    skill: 'Git & GitHub',
    level: 'intermediate',
    color: '#171515',
  },
];

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
      <img src="bruno.jpg" alt="Bruno" className="avatar" />
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
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          textColor="white"
        />
      ))}
    </div>
  );
};

const Skill = ({ skill, color, level, textColor }) => {
  return (
    <div className="skill" style={{ backgroundColor: color, color: textColor }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
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
