import { type } from 'jquery';
import React, { Component } from 'react';
import Typewriter from 'typewriter-effect'
import Typical from 'react-typical'
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Skills</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">{resumeData.name}</h1>
                            <h2> CS Student @ uWaterloo </h2><br /><br />
                            <div className="typewriter-home">
                                <h2>I am a {' '}
                                    <Typical loop={Infinity}
                                        wrapper={'span'}
                                        steps={[
                                            'Student 📚', 2000,
                                            'Developer 👨‍💻', 2000,
                                            'Basketball Fan 🏀', 2000,
                                            'Tech Enthusiast 💻', 2000,
                                            'Gamer 🎮', 2000]

                                        }
                                    /></h2>
                            </div>


                            <hr />
                            <ul className="social">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                            </li>
                                        )
                                    }
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header>
            </React.Fragment>
        );
    }
}
