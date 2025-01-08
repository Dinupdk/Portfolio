import { useState } from "react";
import Popup from "reactjs-popup";
import ProfileImage from "./assets/profile.jpg";
import Resume from "./assets/Dinesh Kumar Potta.pdf";

import Blog from './assets/blog.png'
import Gemini from './assets/gemini.png'
import Weather from './assets/weather.png'
import Portfolio from './assets/portfolio.png'
import Pic from './assets/pic.jpg'

import "./App.css";

const messageStatus = {
  initial: "",
  sending: "Sending...",
  success: "Message Send Successfully!!!",
};

const App = () => {
  const [menuStatus, setSMenuStatus] = useState(false);
  const [dark, setDark] = useState(false);
  const [result, setResult] = useState(messageStatus.initial);

  const onClickMenubutton = () => {
    setSMenuStatus((prevMenuState) => !prevMenuState);
    setTimeout(() => setSMenuStatus(false), 2500);
  };

  const onClickDarkMode = () => {
    setDark((prevMode) => !prevMode);
    document.body.classList.toggle("dark");
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    setResult(messageStatus.sending);
    const formData = new FormData(event.target);

    formData.append("access_key", "6984ebb6-1b42-4770-b45c-4b6faa6f8f79");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(messageStatus.success);
      setTimeout(() => {
        setResult(messageStatus.initial);
      }, 3000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      {/*Header*/}
      <header className="fixed w-full px-8 md:px-28 py-5 lg:py-7 bg-white dark:bg-[#1E1E24] shadow-sm shadow-gray-100 dark:shadow-[#444140]">
        <div className="flex justify-between">
          <h2 className="text-[#1E1E24] dark:text-[#F7EBE8] font-[Roboto] font-semibold text-xl md:text-2xl">
            Dinesh Kumar <span className="text-[#E54B4B] ft:2px ">Portfolio</span>
          </h2>
          <ul className="hidden lg:flex">
            <li className="mx-3 my-auto text-base font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8] hover:text-[#E54B4B] dark:hover:text-[#E54B4B] transition-colors duration-0">
              <a href="#home">Home</a>
            </li>
            <li className="mx-3 my-auto text-base font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8] hover:text-[#E54B4B] dark:hover:text-[#E54B4B] transition-colors duration-0">
              <a href="#about">About</a>
            </li>
            <li className="mx-3 my-auto text-base font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8] hover:text-[#E54B4B] dark:hover:text-[#E54B4B] transition-colors duration-0">
              <a href="#skills">Skills</a>
            </li>
            <li className="mx-3 my-auto text-base font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8] hover:text-[#E54B4B] dark:hover:text-[#E54B4B] transition-colors duration-0">
              <a href="#projects">Projects</a>
            </li>
            <li className="mx-3 my-auto text-base font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8] hover:text-[#E54B4B] dark:hover:text-[#E54B4B] transition-colors duration-0">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button
            onClick={onClickDarkMode}
            className="text-[#1E1E24] dark:text-[#F7EBE8] ml-auto mr-4 lg:m-0 focus:outline-none"
          >
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={onClickMenubutton}
            className="block lg:hidden text-[#1E1E24] dark:text-[#F7EBE8] focus:outline-none"
          >
            {menuStatus ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {menuStatus && (
          <ul className="mt-3 flex flex-col justify-end lg:hidden">
            <li className="mx-auto my-2 text-base font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8]">
              <a href="#home">Home</a>
            </li>
            <li className="mx-auto my-2 text-base font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8]">
              <a href="#about">About</a>
            </li>
            <li className="mx-auto my-2 text-base font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8]">
              <a href="#skills">Skills</a>
            </li>
            <li className="mx-auto my-2 text-base font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8]">
              <a href="#projects">Projects</a>
            </li>
            <li className="mx-auto my-2 text-bse font-[Roboto] text-[#1E1E24] dark:text-[#F7EBE8]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </header>

      {/*Intro*/}
      <section id="home">
        <div className="px-8 pt-24 pb-14 md:px-28 md:pt-28 md:pb-16 lg:pt-40 lg:pb-28 dark:bg-[#1e1e24fc] font-[Roboto] bg-slate-50">
          <div className="flex flex-col text-center justify-center">
            <img
              className="w-24 md:w-28 lg:w-40 mx-auto border-[5px] border-white  dark:border-[#444140] rounded-full shadow-customShadow dark:shadow-[#444140]"
              src={Pic}
              alt="Dinesh profile"
            />
            <h1 className="mt-5 text-lg md:text-2xl text-[#444140] font-medium dark:text-zinc-300">
              Hey, I am
            </h1>
            <h1 className="text-3xl md:text-4xl my-5 text-[#1E1E24] dark:text-[#F7EBE8] font-bold">
              Dinesh Kumar
            </h1>
            <p className="text-base w-full md:w-10/12 xl:w-7/12 mx-auto text-[#444140] font-normal dark:text-zinc-300">
              I am a Python Developer and passionate to create innovative and
              user-friendly web solutions that address real-world problems and
              needs. I have a passion for design and creativity.

            </p>
            
            <div className="mt-8 md:flex justify-center">
              <a
                href="#about"
                className="max-md:mx-1 md:flex md:mx-5 text-sm md:text-lg border-2 border-[#1E1E24] hover:border-[#E54B4B] hover:text-[#E54B4B] dark:hover:border-[#E54B4B] dark:hover:text-[#E54B4B] dark:border-[#F7EBE8] dark:text-[#F7EBE8] py-3 px-8 rounded-3xl text-[#1E1E24] transition-colors duration-0 dark:transition-colors dark:duration-0"
              >
                <span className="my-auto">About Me</span>
              </a>
              <button className="max-md:mx-1 text-sm md:text-lg py-3 px-6 mt-4 md:mt-0 mx-auto rounded-3xl text-[#F7EBE8] bg-[#E54B4B] hover:bg-[#e54b4be4] dark:hover:bg-[#e54b4bdb] md:mx-5">
                <a
                  href={Resume}
                  download="Dinesh Kumar Potta.pdf"
                  className="flex"
                >
                  <span className="mr-1">My Resume</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5 md:size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*About*/}
      <section id="about">
        <div className="px-8 py-24 md:px-20 md:py-28 lg:px-14 lg:py-28 xl:px-40 xl:py-32 dark:bg-[#1E1E24] font-[Roboto]">
          <p className="text-base md:text-lg text-center font-normal text-[#44140] dark:text-gray-300">
            Introduction
          </p>
          <h1 className="mt-4 text-3xl lg:text-4xl text-center text-[#1E1E24] dark:text-[#E54B4B]">
            About Me
          </h1>
          <div className="lg:flex-row flex flex-col mt-10 lg:mt-20">
            <div className="w-full md:w-80 md:mx-auto lg:mx-0 lg:w-1/2 flex max-md:order-2 max-sm:mt-10">
              <img
                className="w-full md:9/12 lg:w-8/12 mx-auto rounded-xl shadow-customShadow dark:shadow-[#444140] border-[3px] dark:border-[#444140] border-white"
                src={ProfileImage}
                alt="pradeep profile"
              />
            </div>
            <div className="w-full lg:w-1/2 max-md:order-1 ">
              <p className="mt-0 md:mt-10 lg:mt-0 text-base lg:text-lg text-[#444140] dark:text-[#F7EBE8]">
                I am an experienced in Python Developer and Fullstack Developer with over a 2years of proffesional experience in the field.Throughout my career,I want to success in this field
                My Passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project
              </p><br></br>
              <p className="mt-0 md:mt-10 lg:mt-0 text-base lg:text-lg text-[#444140] dark:text-[#F7EBE8]">
              I have a strong foundation in programming, especially in Python and JavaScript. 
            During my studies, I developed an interest in working with databases, and I am proficient in using MySQL. 
            I have completed several projects that helped me enhance my skills and gain practical experience.
            One of my notable projects is an Employee Management System, which I developed using Python and Tkinter for the user interface,
            along with MySQL for database management. 
            This project allowed me to apply my programming knowledge and understand the basics of GUI development and database integration.
            </p><br></br>
            <p className="mt-0 md:mt-10 lg:mt-0 text-base lg:text-lg text-[#444140] dark:text-[#F7EBE8]">
            I am passionate about software development and always strive to improve my skills. 
            I am a quick learner and enjoy solving problems and finding innovative solutions. 
            I am looking forward to starting my career in a dynamic environment where I can contribute and grow as a developer
            </p><br></br>
            <p className="mt-0 md:mt-10 lg:mt-0 text-base lg:text-lg text-[#444140] dark:text-[#F7EBE8]">
            Thank you for considering my application. I am excited about the opportunity to work with a team that values creativity and continuous learning.
            </p>
              <a href="#contact">
                <button className="text-base mx-auto lg:mx-0 md:text-lg py-3 px-6 mt-4 flex hover:bg-[#e54b4be4] rounded-3xl text-[#F7EBE8] bg-[#E54B4B]">
                  <span className="mr-2">Contact me</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                    className="size-5 my-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*Skills*/}
      <section id="skills">
        <div className="px-6 py-24 md:px-20 md:py-28 lg:px-16 lg:py-28 xl:px-40 xl:py-32 bg-slate-50 dark:bg-[#1e1e24fc] font-[Roboto]">
          <p className="text-base md:text-lg text-center font-normal text-[#44140] dark:text-gray-300">
            What I Know
          </p>
          <h1 className="mt-4 text-3xl lg:text-4xl text-center text-[#1E1E24] dark:text-[#E54B4B]">
            My Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8 md:mt-10 lg:mt-14">
            <div className="p-5 border-2 shadow-customShadow dark:shadow-[#444140] dark:border-[#444140] border-[#F7EBE8] rounded-lg m-3 dark:bg-[#1E1E24] bg-[#ffffff]">
              <h1 className="text-lg md:text-xl font-semibold text-center text-[#444140] dark:text-[#F7EBE8]">
                Frontend
              </h1>
              <ul className="mt-4 flex flex-wrap justify-center">
                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    className="my-auto"
                  >
                    <path
                      fill="#E65100"
                      d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                    ></path>
                    <path
                      fill="#FF6D00"
                      d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                    ></path>
                    <path
                      fill="#EEE"
                      d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                    ></path>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">
                    HTML
                  </span>
                </li>
                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    className="my-auto"
                  >
                    <path
                      fill="#0277BD"
                      d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                    ></path>
                    <path
                      fill="#039BE5"
                      d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                    ></path>
                    <path
                      fill="#EEE"
                      d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                    ></path>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">CSS</span>
                </li>
                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    className="my-auto"
                  >
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path
                      fill="#000001"
                      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                    ></path>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">JavaScript</span>
                </li>

                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    className="my-auto"
                  >
                    <path
                      fill="#80deea"
                      d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                    ></path>
                    <path
                      fill="#80deea"
                      d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                    ></path>
                    <path
                      fill="#80deea"
                      d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                    ></path>
                    <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">
                    React Js
                  </span>
                </li>
                
              </ul>
            </div>
            <div className="p-5 border-2 shadow-customShadow dark:shadow-[#444140] dark:border-[#444140] border-[#F7EBE8] rounded-lg m-3 dark:bg-[#1E1E24] bg-[#ffffff]">
              <h1 className="text-lg md:text-xl font-semibold text-center text-[#444140] dark:text-[#F7EBE8]">
                Backend
              </h1>
              <ul className="mt-4 flex flex-wrap justify-center">


                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    className="my-auto"
                  >
                    <path
                      fill="#0277BD"
                      d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                    ></path>
                    <path
                      fill="#FFC107"
                      d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                    ></path>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">
                    Python
                  </span>
                </li>
                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    className="my-auto"
                  >
                    <path
                      fill="#00796b"
                      d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"
                    ></path>
                    <path
                      fill="#00796b"
                      d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"
                    ></path>
                    <path
                      fill="#f57f17"
                      d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"
                    ></path>
                    <path
                      fill="#f57f17"
                      d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"
                    ></path>
                    <path
                      fill="#f57f17"
                      d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"
                    ></path>
                    <path
                      fill="#00796b"
                      d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"
                    ></path>
                    <path
                      fill="#00796b"
                      d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"
                    ></path>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">
                    MySQL
                  </span>
                </li>
                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    width="25"
                    height="25"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#439934"
                      d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#45A538"
                      d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#46A037"
                      d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#409433"
                      d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#4FAA41"
                      d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#4AA73C"
                      d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#57AE47"
                      d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#60B24F"
                      d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#A9AA88"
                      d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#B6B598"
                      d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#C2C1A7"
                      d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#CECDB7"
                      d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#DBDAC7"
                      d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#EBE9DC"
                      d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#CECDB7"
                      d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#4FAA41"
                      d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
                    />
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">
                    Mongo DB
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-5 border-2 shadow-customShadow dark:shadow-[#444140] dark:border-[#444140] border-[#F7EBE8] rounded-lg m-3 dark:bg-[#1E1E24] bg-[#ffffff]">
              <h1 className="text-lg md:text-xl font-semibold text-center text-[#444140] dark:text-[#F7EBE8]">
                Others
              </h1>
              <ul className="mt-4 flex flex-wrap justify-center">
                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    className="my-auto"
                  >
                    <path
                      fill="#F4511E"
                      d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                    ></path>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">Git</span>
                </li>
                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    className="my-auto"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">
                    GitHub
                  </span>
                </li>

                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    className="my-auto"
                  >
                    <linearGradient
                      id="N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1"
                      x1="38.263"
                      x2="10.15"
                      y1="1373.62"
                      y2="1342.615"
                      gradientTransform="translate(0 -1333.89)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#823af3"></stop>
                      <stop offset=".36" stop-color="#4b66e1"></stop>
                      <stop offset=".906" stop-color="#01f1c4"></stop>
                    </linearGradient>
                    <path
                      fill="url(#N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1)"
                      fill-rule="evenodd"
                      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24	S12.955,4,24,4S44,12.955,44,24z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M29.194,26.962c-0.835,0.915-2.007,1.378-2.556,1.378	c-0.635,0-0.982-0.389-1.053-0.974c-0.024-0.224-0.016-0.45,0.024-0.673c0.21-1.31,0.692-2.124,0.662-2.372	c-0.009-0.071-0.049-0.106-0.101-0.106c-0.406,0-1.83,1.47-2.046,2.443l-0.168,0.779c-0.11,0.549-0.648,0.902-1.018,0.902	c-0.177,0-0.311-0.088-0.334-0.283c-0.007-0.089,0-0.178,0.021-0.266l0.079-0.41c-0.768,0.574-1.596,0.962-1.984,0.962	c-0.53,0-0.827-0.283-0.933-0.709c-0.35,0.461-0.813,0.709-1.306,0.709c-0.63,0-1.237-0.417-1.528-1.034	c-0.415,0.466-0.907,0.922-1.496,1.299c-0.869,0.55-1.836,0.992-2.982,0.992c-1.058,0-1.956-0.566-2.453-1.026	c-0.737-0.69-1.126-1.718-1.241-2.656c-0.362-2.957,1.438-6.834,4.227-8.533c0.64-0.39,1.357-0.584,2.008-0.584	c1.34,0,2.34,0.958,2.48,2.104c0.126,1.032-0.286,1.924-1.431,2.501c-0.584,0.296-0.874,0.282-0.965,0.141	c-0.061-0.094-0.026-0.254,0.091-0.351c1.076-0.899,1.096-1.637,0.97-2.677c-0.082-0.669-0.522-1.098-1.016-1.098	c-2.115,0-5.149,4.745-4.727,8.197c0.165,1.346,0.99,2.904,2.682,2.904c0.564,0,1.162-0.159,1.694-0.425	c0.928-0.474,1.453-0.85,1.98-1.464c-0.13-1.596,1.24-3.6,3.278-3.6c0.882,0,1.612,0.354,1.698,1.062	c0.108,0.885-0.646,1.062-0.928,1.062c-0.247,0-0.643-0.071-0.671-0.301c-0.03-0.248,0.534-0.106,0.464-0.673	c-0.043-0.354-0.411-0.478-0.763-0.478c-1.269,0-1.97,1.77-1.835,2.869c0.061,0.496,0.315,0.991,0.774,0.991	c0.37,0,0.904-0.531,1.109-1.31c0.13-0.531,0.632-0.885,1.003-0.885c0.194,0,0.328,0.088,0.352,0.283	c0.008,0.071,0.002,0.16-0.021,0.266c-0.042,0.23-0.219,0.996-0.21,1.154c0.006,0.138,0.086,0.328,0.326,0.328	c0.19,0,0.89-0.378,1.538-0.958c0.203-1.051,0.454-2.351,0.474-2.454c0.079-0.426,0.232-0.865,1.096-0.865	c0.177,0,0.311,0.088,0.337,0.301c0.008,0.07,0.002,0.16-0.021,0.266l-0.242,1.093c0.758-1.01,1.936-1.752,2.642-1.752	c0.3,0,0.531,0.158,0.57,0.478c0.022,0.178-0.03,0.478-0.147,0.814c-0.251,0.69-0.533,1.727-0.72,2.62	c-0.04,0.19,0.026,0.476,0.373,0.476c0.277,0,1.166-0.339,1.885-1.288c-0.005-0.134-0.007-0.27-0.007-0.408	c0-0.744,0.053-1.346,0.194-1.787c0.141-0.461,0.723-0.902,1.11-0.902c0.194,0,0.335,0.106,0.335,0.318	c0,0.071-0.018,0.16-0.053,0.248c-0.264,0.779-0.405,1.506-0.405,2.231c0,0.407,0.088,1.062,0.177,1.398	c0.018,0.071,0.034,0.142,0.105,0.142c0.123,0,0.952-0.814,1.551-1.806c-0.53-0.337-0.829-0.956-0.829-1.718	c0-1.274,0.758-1.93,1.498-1.93c0.582,0,1.11,0.425,1.11,1.274c0,0.532-0.212,1.134-0.51,1.718c0,0,0.123,0.018,0.176,0.018	c0.458,0,0.811-0.213,1.006-0.443c0.088-0.1,0.17-0.178,0.248-0.224c0.59-0.713,1.455-1.228,2.47-1.228	c0.864,0,1.61,0.337,1.696,1.045c0.11,0.902-0.661,1.08-0.926,1.08c-0.264,0-0.661-0.071-0.689-0.301s0.551-0.106,0.484-0.654	c-0.043-0.354-0.413-0.496-0.766-0.496c-1.182,0-1.994,1.576-1.838,2.85c0.062,0.514,0.299,1.01,0.758,1.01	c0.37,0,0.923-0.532,1.127-1.31c0.131-0.514,0.632-0.885,1.002-0.885c0.176,0,0.328,0.088,0.354,0.301	c0.013,0.106-0.03,0.337-0.227,1.168c-0.081,0.354-0.097,0.655-0.066,0.903c0.063,0.514,0.298,0.85,0.516,1.045	c0.079,0.07,0.126,0.158,0.132,0.213c0.017,0.142-0.091,0.266-0.267,0.266c-0.053,0-0.123,0-0.181-0.035	c-0.908-0.372-1.285-0.991-1.391-1.576c-0.35,0.442-0.814,0.69-1.29,0.69c-0.811,0-1.603-0.709-1.715-1.629	c-0.046-0.378-0.001-0.785,0.123-1.184c-0.329,0.203-0.683,0.316-1.001,0.316c-0.106,0-0.194,0-0.299-0.018	c-0.793,1.15-1.622,1.947-2.257,2.302c-0.264,0.142-0.51,0.213-0.687,0.213c-0.142,0-0.3-0.035-0.37-0.159	C29.367,27.91,29.258,27.474,29.194,26.962L29.194,26.962z M32.067,23.191c0,0.496,0.246,1.01,0.564,1.346	c0.124-0.337,0.194-0.673,0.194-1.01c0-0.638-0.247-0.921-0.441-0.921C32.155,22.606,32.067,22.926,32.067,23.191z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">
                    Canva
                  </span>
                </li>
                <li className="m-1 flex border-2 dark:border-[#444140] border-slate-300 p-2 rounded-lg dark:text-[#F7EBE8] text-[#1E1E24] text-md font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    className="my-auto"
                  >
                    <path
                      fill="#29b6f6"
                      d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
                    ></path>
                    <path
                      fill="#0277bd"
                      d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
                    ></path>
                    <path
                      fill="#0288d1"
                      d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
                    ></path>
                  </svg>
                  <span className="my-auto ml-1 text-sm lg:text-base">
                    VS Code
                  </span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*Projects*/}
      <section id="projects">
        <div className="px-5 py-24 md:px-20 md:py-28 lg:px-16 lg:py-28 xl:px-40 xl:py-32 dark:bg-[#1E1E24] font-[Roboto]">
          <p className="text-base md:text-lg text-center font-normal text-[#44140] dark:text-gray-300">
            Latest Work
          </p>
          <h1 className="mt-4 text-3xl lg:text-4xl text-center text-[#1E1E24] dark:text-[#E54B4B]">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-7 md:mt-10 lg:mt-14">
            <div className="p-5 hover:shadow-projectShadow hover:dark:shadow-[#444140] border-2 dark:border-[#444140] border-[#F7EBE8] rounded-2xl m-3 dark:bg-[#1e1e24c4] bg-[#ffffff]">
              <img
                className="w-full rounded-xl"
                src={Blog}
                alt="nxt watch app"
              />
              <ul className="mt-5 flex justify-center flex-wrap md:flex md:flex-wrap gap-2 lg:justify-start">
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  React Js
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  Styled Components
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  Cookies
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  React Icons
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  Firebase
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  Google Authentication
                </li>
              </ul>
              <div className="mt-5 md:flex justify-between">
                <div className="flex-col justify-center md:mt-auto">
                  <h1 className="text-lg font-semibold dark:text-[#F7EBE8] text-[#1E1E24] text-center lg:text-start">
                    Blog-App
                  </h1>
                  <p className="text-base font-semibold text-gray-400 text-center md:text-start">
                    Full Stack
                  </p>
                </div>
                <div className="flex justify-evenly md:flex-col md:self-end mt-4 md:mt-2 xl:flex-row">
                  <div>
                    <Popup
                      modal
                      trigger={
                        <button className="mx-2 text-base flex text-[#E54B4B] font-medium border-2 border-[#E54B4B] py-1 px-3 rounded-2xl">
                          <span className="my-auto text-sm">Demo</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="size-4 my-auto"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </button>
                      }
                    >
                      {(close) => (
                        <>
                          <div className="shadow-projectShadow rounded-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-[#F7EBE8] dark:border-[#444140] p-8">
                            <h1 className="text-xl font-bold text-[#1E1E24] dark:text-[#F7EBE8]">
                              Blog-App
                            </h1>
                            <div className="flex flex-row align-middle mt-6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#E54B4B"
                                class="size-5"
                                className="size-5 my-auto mr-1"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                              <span className="my-auto font-bold dark:text-[#F7EBE8]">
                                Gmail: demo@gmail.com
                              </span>
                            </div>
                            <div className="flex flex-row align-middle mt-2 font-bold ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#E54B4B"
                                class="size-5"
                                className="size-5 my-auto mr-1"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                                />
                              </svg>
                              <span className="my-auto text-base dark:text-[#F7EBE8]">
                                Password: demo@123
                              </span>
                            </div>
                            <div className="flex justify-evenly mt-7">
                              <a
                                href="https://dinu-blog.netlify.app/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="mx-2 text-base text-[#E54B4B] font-medium py-1 px-3 rounded-md"
                              >
                                <span className="my-auto text-base">Demo</span>
                              </a>
                              <button
                                type="button"
                                onClick={() => close()}
                                className="mx-2 flex text-base text-[#1E1E24] font-medium py-1 px-3 rounded-md"
                              >
                                <span className="my-auto text-base dark:text-[#F7EBE8]">
                                  Close
                                </span>
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </Popup>
                  </div>
                  <a
                    href="https://github.com/PradeepArivazhagan/Pradeep_Nxtwatch"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="mx-2 text-base flex text-[#F7EBE8] font-medium bg-[#E54B4B] py-1 px-3 rounded-2xl md:mt-2 xl:mt-0">
                    <span className="my-auto mr-1 text-sm">Code</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-4 my-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-5 hover:shadow-projectShadow hover:dark:shadow-[#444140] border-2 dark:border-[#444140] border-[#F7EBE8] rounded-2xl m-3 dark:bg-[#1e1e24c4] bg-[#ffffff]">
              <img
                className="w-full rounded-xl"
                src={Gemini}
                alt="Gemini-ai-clone-app"
              />
              <ul className="mt-5 flex justify-center flex-wrap md:flex md:flex-wrap gap-2 lg:justify-start">
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  React Js
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                 Tailwind
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  Node JS
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  Express JS
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                 Firebase
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  Google Authentication
                </li>
              </ul>
              <div className="mt-5 md:flex justify-between">
                <div className="flex-col justify-center md:mt-auto">
                  <h1 className="text-lg font-semibold dark:text-[#F7EBE8] text-[#1E1E24] text-center lg:text-start">
                    Blog App
                  </h1>
                  <p className="text-base font-semibold text-gray-400 text-center md:text-start">
                    Full Stack
                  </p>
                </div>
                <div className="flex justify-evenly md:flex-col md:self-end mt-4 md:mt-2 xl:flex-row">
                  <a
                    href="https://dinu-blog.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mx-2 text-base flex text-[#E54B4B] font-medium border-2 border-[#E54B4B] py-1 px-3 rounded-2xl"
                  >
                    <span className="my-auto text-sm">Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-4 my-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Dinupdk/firebase-blog.git"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="mx-2 text-base flex text-[#F7EBE8] font-medium bg-[#E54B4B] py-1 px-3 rounded-2xl md:mt-2 xl:mt-0"
                  >
                    <span className="my-auto mr-1 text-sm">Code</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-4 my-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-5 hover:shadow-projectShadow hover:dark:shadow-[#444140] border-2 dark:border-[#444140] border-[#F7EBE8] rounded-2xl m-3 dark:bg-[#1e1e24c4] bg-[#ffffff]">
              <img
                className="w-full rounded-xl"
                src={Portfolio}
                alt="portfolio"
              />
              <ul className="mt-5 flex justify-center flex-wrap md:flex md:flex-wrap gap-2 lg:justify-start">
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  React Js
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                 Tailwind
                </li>
              </ul>
              <div className="mt-5 md:flex justify-between">
                <div className="flex-col justify-center md:mt-auto">
                  <h1 className="text-lg font-semibold dark:text-[#F7EBE8] text-[#1E1E24] text-center lg:text-start">
                    Portfolio
                  </h1>
                  <p className="text-base font-semibold text-gray-400 text-center md:text-start">
                    React JS
                  </p>
                </div>
                <div className="flex justify-evenly md:flex-col md:self-end mt-4 md:mt-2 xl:flex-row">
                  <a
                    href="https://dinupdk.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mx-2 text-base flex text-[#E54B4B] font-medium border-2 border-[#E54B4B] py-1 px-3 rounded-2xl"
                  >
                    <span className="my-auto text-sm">Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-4 my-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Dinupdk/firebase-blog.git"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="mx-2 text-base flex text-[#F7EBE8] font-medium bg-[#E54B4B] py-1 px-3 rounded-2xl md:mt-2 xl:mt-0"
                  >
                    <span className="my-auto mr-1 text-sm">Code</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-4 my-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-5 hover:shadow-projectShadow hover:dark:shadow-[#444140] border-2 dark:border-[#444140] border-[#F7EBE8] rounded-2xl m-3 dark:bg-[#1e1e24c4] bg-[#ffffff]">
              <img
                className="w-full rounded-xl"
                src={Weather}
                alt="Weather-app"
              />
              <ul className="mt-5 flex justify-center flex-wrap md:flex md:flex-wrap gap-2 lg:justify-start">
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  React Js
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                 Tailwind
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  API
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                  Express JS
                </li>
                <li className="py-1 px-2 border-2 dark:border-[#444140] border-slate-300 rounded-md text-xs my-auto font-medium dark:text-[#F7EBE8] text-[#1E1E24]">
                 Weather API's
                </li>
                
              </ul>
              <div className="mt-5 md:flex justify-between">
                <div className="flex-col justify-center md:mt-auto">
                  <h1 className="text-lg font-semibold dark:text-[#F7EBE8] text-[#1E1E24] text-center lg:text-start">
                    Weather App
                  </h1>
                  <p className="text-base font-semibold text-gray-400 text-center md:text-start">
                    React JS
                  </p>
                </div>
                <div className="flex justify-evenly md:flex-col md:self-end mt-4 md:mt-2 xl:flex-row">
                  <a
                    href="https://dinupdk-weather-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mx-2 text-base flex text-[#E54B4B] font-medium border-2 border-[#E54B4B] py-1 px-3 rounded-2xl"
                  >
                    <span className="my-auto text-sm">Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-4 my-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Dinupdk/weather-app.git"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="mx-2 text-base flex text-[#F7EBE8] font-medium bg-[#E54B4B] py-1 px-3 rounded-2xl md:mt-2 xl:mt-0"
                  >
                    <span className="my-auto mr-1 text-sm">Code</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-4 my-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Contact*/}
      <section id="contact">
        <div className="px-6 py-24 md:px-24 md:py-28 lg:px-20 lg:py-28 xl:px-40 xl:py-32 bg-slate-50 dark:bg-[#1e1e24fc] font-[Roboto]">
          <p className="text-base md:text-lg text-center font-normal text-[#44140] dark:text-gray-300">
            Connect With Me
          </p>
          <h1 className="mt-4 text-3xl lg:text-4xl text-center text-[#1E1E24] dark:text-[#E54B4B]">
            Get In Touch
          </h1>
          <div className="mt-8 md:mt-10 lg:mt-14">
            <form
              onSubmit={onSubmitHandle}
              className="w-full md:w-10/12 lg:w-8/12 xl:w-10/2 mx-auto"
            >
              <div className="flex flex-col md:flex-row md:gap-3">
                <input
                  className="w-full md:w-1/2 px-3 py-5 bg-white dark:bg-[#1E1E24] focus:outline-none rounded-md border-2 dark:border-[#444140] border-slate-200 text-[#444140] dark:text-[#F7EBE8]"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
                <input
                  className="w-full mt-3 md:mt-0 md:w-1/2 px-3 py-5 bg-white dark:bg-[#1E1E24] focus:outline-none rounded-md border-2 dark:border-[#444140] border-slate-200 text-[#444140] dark:text-[#F7EBE8]"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-3">
                <textarea
                  rows={8}
                  name="message"
                  required
                  className="w-full px-3 py-5 bg-white dark:bg-[#1E1E24] focus:outline-none rounded-md border-2 dark:border-[#444140] border-slate-200 text-[#444140] dark:text-[#F7EBE8]"
                  placeholder="Enter your message..."
                />
              </div>
              {result === messageStatus.sending && (
                <span className="text-base ml-2 text-yellow-500">
                  {messageStatus.sending}
                </span>
              )}
              {result === messageStatus.success && (
                <span className="text-base ml-2 text-green-500">
                  {messageStatus.success}
                </span>
              )}
              <button
                type="submit"
                className="mx-auto text-base md:text-lg py-3 px-6 mt-5 flex dark:border-2 hover:bg-[#e54b4be4] dark:border-[#E54B4B] dark:bg-transparent rounded-3xl text-[#F7EBE8] bg-[#E54B4B]"
              >
                <span className="mr-1 my-auto text-lg max-sm:text-sm">
                  Send Message
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-5"
                  className="size-5 my-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <footer className="px-5 pt-10 pb-2 md:px-10 md:pt-16 xl:px-24 xl:pt-28  dark:bg-[#1E1E24] font-[Roboto]">
        <h1 className="text-xl lg:text-3xl text-center font-medium text-[#1E1E24] dark:text-[#F7EBE8]">
          Dinesh Kumar<span className="text-[#E54B4B]">.</span>
        </h1>
        <div className="mt-5 pb-5 md:pb-10 flex justify-center text-[#1E1E24] dark:text-[#F7EBE8] border-b-2  border-b-[#444140] dark:border-b-[#F7EBE8] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className="size-6 my-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <h1 className="ml-2 max-sm:text-sm font-medium my-auto">
            dineshpdk789@gmail.com
          </h1>
        </div>
        <div className="my-5 flex flex-col max-sm:text-center md:justify-between md:flex-row">
          <h1 className="max-sm:text-sm font-medium text-[#1E1E24] dark:text-[#F7EBE8]">
            ©2024 Dinesh Kumar.All rights reserved
          </h1>
          <ul className="flex max-sm:text-sm max-sm:justify-center max-sm:mt-3 gap-5 font-medium text-[#1E1E24] dark:text-[#F7EBE8]">
            <a target="_blank" href="https://www.linkedin.com/in/dinesh-kumar-a79535314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              LinkedIn
            </a>
            <a href="https://github.com/Dinupdk" target="_blank">Github</a>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default App;
