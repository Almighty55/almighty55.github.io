import React, { Component } from 'react';

export class AboutAdam extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="About Adam" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Adam' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Adam' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Adam' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Adam's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutAdam;

export const displayAboutAdam = () => {
    return <AboutAdam />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Adam Alaraj Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>Some call me <span className="font-bold">Almighty</span>, others <span className="font-bold">Adam</span>.</div>
                <div className="font-normal ml-1"><em>Just</em> an <span className="text-career-neon-green font-bold">Infrastructure Engineer</span>.</div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" mt-3 list-time"> I am a team oriented individual. I thrive on developing skills through collaboration and questioning solutions.</li>
                <li className=" mt-3 list-building"> I enjoy building awesome scripts that solve tedious tasks.</li>
                <li className=" list-pc"> Outside of work I love road biking. My common routes are the north branch trail and lakefront trail.</li>
                <li className=" mt-3 list-star"> I also have a strong interest in finance & space!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Southern Illinois University (SIU)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Carbondale, IL</div>
                    <div className=" text-sm text-gray-400 mt-0.5">2016 - 2018</div>
                    <div className=" text-sm md:text-base">Information Systems Technology</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 3.9/4.0</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Oakton Community College
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Des Plaines, IL</div>
                    <div className=" text-sm text-gray-400 mt-0.5">2014 - 2016</div>
                    <div className=" text-sm md:text-base">Automotive Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 3.9/4.0</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I have a knack for automation primarily PowerShell and Python.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange"> break/fix, AWS & automation!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                    <img className="m-1" src="https://img.shields.io/badge/-AWS-FF9900?logo=amazon-aws&logoColor=black" alt="AWS" />
                    <img className="m-1" src="https://img.shields.io/badge/-VS%20Code-blue?logo=visual-studio-code" alt="VSCode" />
                    <img className="m-1" src="https://img.shields.io/badge/-PhotoShop-31A8FF?logo=adobe-photoshop&logoColor=black" alt="PhotoShop" />
                    <img className="m-1" src="https://img.shields.io/badge/-Tableau-white?logo=tableau" alt="Tableau" />
                    <img className="m-1" src="https://img.shields.io/badge/-GitHub-black?logo=github" alt="GitHub" />
                    <img className="m-1" src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="Git" />
                    <img className="m-1" src="https://img.shields.io/badge/-Jira-0052CC?logo=jira" alt="Jira" />
                    <img src="https://img.shields.io/badge/-Datadog-632CA6?logo=datadog" alt="Datadog" className="m-1" />
                    <img src="https://img.shields.io/badge/-Jupyter%20Hub-3C3B45?logo=jupyter" alt="Juypter Hub" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-PowerShell-white?logo=powershell&logoColor=black" alt="PowerShell" />
                        <img className="m-1" src="https://img.shields.io/badge/-Terraform-7B42BC?logo=terraform" alt="Terraform" />
                        <img className="m-1" src="https://img.shields.io/badge/-Pulumi-8A3391?logo=pulumi" alt="Pulumi" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="Python" />
                        {/* <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="HTML" /></a> */}
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course OS:</span>
                    <img className=" inline ml-1" src="https://img.shields.io/badge/-Windows-0078D6?logo=windows" alt="Windows" />
                    <span>, </span>
                    <img className=" inline ml-1" src="https://img.shields.io/badge/-Apple-727272?logo=apple" alt="Apple" />
                    <span>, </span>
                    <img className=" inline ml-1" src="https://img.shields.io/badge/-Linux-yellow?&logo=linux&logoColor=black" alt="Linux" />
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Remote Desktop Services Cluster",
            date: "Oct 2021",
            // link: "https://github.com",
            description: [
                `Using Terraform, I deployed a Terminal Service cluster to manage rapidly growing analytics team resource usage. 
                I ensured utmost security and smooth user transition leveraging GPO's.`,
            ],
            domains: ["Terrform", "RDS", "Windows Server", "AWS", "Load Balancing"]
        },
        {
            name: "Enterprise Support PowerShell Module",
            date: "Mar 2020",
            // link: "https://github.com",
            description: [
                "Developed a PowerShell module to perform all user terminations. This minimized discrepancies and alleviated tedious HITRUST requirements.",
            ],
            domains: ["PowerShell", "Active Directory", "Compliance", "Automation"]
        },
        {
            name: "SFTP-Automation",
            date: "Feb 2019",
            // link: "https://github.com",
            description: [
                "Developed a PowerShell Script to automate data ingestion of externally hosted SFTP's and notify users upon ingestion.",
            ],
            domains: ["PowerShell", "WinSCP", "NET Framework", "Automation"]
        },
        {
            name: "Smart Home on a Budget",
            date: "June 2018",
            // link: "https://github.com",
            description: [
                `Linked various esp8266 products into a locally hosted Home Assistant platform. 
                I then linked my Google Home to allow for voice control of all my devices on my home network. 
                Also, set up routines that would trigger when my phone was within a geofenced perimeter.`,
            ],
            domains: ["HomeAssistant.io", "Google Assistant", "YAML", "Automation"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">{project.name.toLowerCase()}</div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Adam-Alaraj-Resume.pdf" title="Adam Alaraj Resume" frameBorder="0"></iframe>
    )
}