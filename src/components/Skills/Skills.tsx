import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-container" id="skills">
            <div className="skills-wrapper">
                <div className="skills-title">Skills</div>
                <div className="skills-subtitle">
                    Here are some of my skills I have been improving for the last years
                </div>
                <div className="skills-list-container">
                    <div className="skill-card">
                        <h2 className="skill-title">UI/UX Design</h2>
                        <div className="skill-items-list">
                            <div className="skill-item">
                                <img className="skill-image" src="/product-skills.png" alt="UX Researcher" />
                                Product Designer
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/figma-skills.png" alt="UI/UX Developer" />
                                Figma
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/ux-skills.png" alt="Product Designer" />
                                UX Researcher
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/ui-skills.png" alt="Figma" />
                                UI Designer
                            </div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <h2 className="skill-title">Front-end</h2>
                        <div className="skill-items-list">
                            <div className="skill-item">
                                <img className="skill-image" src="/js-skills.png" alt="JavaScript" />
                                JavaScript
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/react-skills.png" alt="React" />
                                React
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/html-skills.png" alt="HTML" />
                                HTML
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/css-skills.png" alt="CSS" />
                                CSS
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/bootstrap-skills.png" alt="Bootstrap" />
                                Bootstrap
                            </div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <h2 className="skill-title">Back-end</h2>
                        <div className="skill-items-list">
                            <div className="skill-item">
                                <img className="skill-image" src="/nodejs-skills.png" alt="Node.js" />
                                Node.js
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/express-skills.png" alt="Express" />
                                Express.js
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/python-skills.png" alt="Python" />
                                Python
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/django-skills.png" alt="Django" />
                                Django
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/mongodb-skills.png" alt="MongoDB" />
                                MongoDB
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/postman-skills.png" alt="Postmn" />
                                Postman
                            </div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <h2 className="skill-title">Others</h2>
                        <div className="skill-items-list">
                            <div className="skill-item">
                                <img className="skill-image" src="/git-skills.png" alt="Git" />
                                Git
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/github-skills.png" alt="GitHub" />
                                GitHub
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/scrum-skills.png" alt="Scrum" />
                                Scrum
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/agile-skills.png" alt="Agile Methods" />
                                Agile Methods
                            </div>
                            <div className="skill-item">
                                <img className="skill-image" src="/translator-skills.png" alt="Professional Translator" />
                                Professional Translator
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
