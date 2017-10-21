import React, {Component} from 'react';
import {highlights, expertise} from "./data";
import './App.css';
import Section from "./Section";
import Project from "./Project";
import Expertise from "./Expertise";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header container">
                        <div className="header-title">
                            <h1>Vili Kinnunen</h1>
                            <span>Full-Stack Developer</span>
                        </div>
                        <div className="header-links">
                            <a href="https://github.com/vilikin" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github fa-3x header-icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/vilikinnunen/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square fa-3x header-icon"/>
                            </a>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <Section header="Highlights">
                        {
                            highlights.map((project, i) => <Project key={i} {...project}/>)
                        }
                    </Section>

                    <hr className="large"/>

                    <Section header="Expertise">
                        {
                            expertise.map((field, i) => <Expertise key={i} {...field}/>)
                        }
                    </Section>

                    <hr className="large"/>

                    <Section header="Got any questions?">
                        <div className="more">
                            You can contact me via email at: vili.kinnunen1<i className="fa fa-at"/>gmail.com.
                        </div>
                    </Section>
                </div>

                <footer>
                    &copy; Vili Kinnunen 2017
                </footer>
            </div>
        );
    }
}

export default App;
