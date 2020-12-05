import React, { useRef, useState } from "react";
import "./Portfolio.scss";
import Obfuscate from "react-obfuscate";
import { gsap } from "gsap";
import { useIntersection } from "react-use"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsChevronCompactDown } from "react-icons/bs";
import calculatorThumb from "./images/thumbs/calculator.jpg"
import beatMachineThumb from "./images/thumbs/beat-machine.jpg"
import infinitePhotosThumb from "./images/thumbs/infinite-photos.jpg"
import intervalTimerThumb from "./images/thumbs/interval-timer.jpg"
import markdownPreviewThumb from "./images/thumbs/markdown-preview.jpg"

const arrows = (
  <div className="arrows">
    <BsChevronCompactDown className="arrow" /> <BsChevronCompactDown className="arrow" />{" "}
    <BsChevronCompactDown className="arrow" />
  </div>
);

function App() {
  const [page2Animation, setPage2Animation] = useState(false)
  const [page3Animation, setPage3Animation] = useState("initial")
  const [page4Animation, setPage4Animation] = useState(false)

  const page2Ref = useRef(null);
  const page2Intersection = useIntersection(page2Ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  })

  const page3Threshold = 0.3;
  const page3Ref = useRef(null);
  const page3Intersection = useIntersection(page3Ref, {
    root: null,
    rootMargin: "0px",
    threshold: page3Threshold
  })

  const page4Threshold = 0.5;
  const page4Ref = useRef(null);
  const page4Intersection = useIntersection(page4Ref, {
    root: null,
    rootMargin: "0px",
    threshold: page4Threshold
  })

  // ---------------------------- +-- Page 2 Animations --+
  const slideIn = (e) => {
    gsap.to(e, {
      duration: 1.5,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: 1
    })
  }
  const slideOut = (e) => {
    gsap.to(e, {
      duration: 1,
      x: "-100vw",
      opacity: 0,
      ease: "power2.out",
    })
  }

  const fadeIn = (e) => {
    gsap.to(e, {
      duration: 1,
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power4.out"
    })
  }
  const fadeOut = (e) => {
    gsap.to(e, {
      duration: 1,
      opacity: 0,
      ease: "power4.out",
    })
  }

  const fadeDown = (e) => {
    gsap.to(e, {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 3.5,
      ease: "power4.out",
      stagger: 0.5
    })
  }
  const fadeUp = (e) => {
    gsap.to(e, {
      duration: 1,
      y: "-20",
      opacity: 0,
      ease: "power4.out",
    })
  }

  // ---------------------------- +-- Page 2 Animation Conditions --+

  // if page2 is loading for the first time, run the long animation
  if (!page2Animation) {
    if (page2Intersection && page2Intersection.intersectionRatio > 0.7) {
      fadeIn("#page-2-text-wrap")
      slideIn(".page-2-text");
      fadeDown(".page-2-bottom");
      setTimeout(() => setPage2Animation(true), 4500)
    }
  }

  // every subsequent time page 2 animates, it does so quickly
  if (page2Animation) {
    if (page2Intersection && page2Intersection.intersectionRatio > 0.7) {
      fadeIn("#page-2-text-wrap")
      fadeIn(".page-2-text");
      fadeIn(".page-2-bottom");
    }
    else {
      fadeOut("#page-2-text-wrap")
      slideOut(".page-2-text");
      fadeUp(".page-2-bottom");
    }
  }

  // ----------------------------------------- +-- Page 3 Animations --+

  const slowFadeIn = (e) => {
    gsap.to(e, {
      duration: 3,
      opacity: 1,
      ease: "power4.out"
    })
  }

  const projectSlideIn = (e) => {
    gsap.to(e, {
      duration: 1.5,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: 0.3
    })
  }

  const projectSlideInFast = (e) => {
    gsap.to(e, {
      duration: 1.5,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: 0.1
    })
  }

  const projectSlideOut = (e) => {
    gsap.to(e, {
      duration: 0.5,
      x: "-40",
      opacity: 0,
      ease: "power4.out",
    })
  }

  const fadeInDelay = (e) => {
    gsap.to(e, {
      duration: 1,
      opacity: 1,
      x: 0,
      y: 0,
      delay: 2.2,
      ease: "power4.out"
    })
  }

  // ---------------------------- +-- Page 3 Animation Conditions --+

  if (page3Animation === "initial") {
    if (page3Intersection && page3Intersection.intersectionRatio > page3Threshold) {
      projectSlideIn(".project")
      slowFadeIn("#page-3-title")
      fadeInDelay(".page-3-bottom")
      setTimeout(() => setPage3Animation("visible"), 3000)
    }
  }

  if (page3Animation === "visible") {
    if (page3Intersection.intersectionRatio < page3Threshold) {
      projectSlideOut(".project");
      fadeOut("#page-3-title")
      fadeOut(".page-3-bottom")
      setTimeout(() => setPage3Animation("invisible"), 1000)
    }
  }

  if (page3Animation === "invisible") {
    if (page3Intersection.intersectionRatio > page3Threshold) {
      projectSlideInFast(".project")
      fadeIn("#page-3-title")
      fadeIn(".page-3-bottom")
      setTimeout(() => setPage3Animation("visible"), 1000)
    }
  }

  // ----------------------------------------- +-- Page 4 Animations --+

  const fadeInStagger = (e) => {
    gsap.to(e, {
      duration: 1.5,
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power4.out",
      stagger: 1,
    })
  }

  const fadeInStaggerFast = (e) => {
    gsap.to(e, {
      duration: 1,
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power4.out",
      stagger: 0.1
    })
  }

  const scaleUp = (e) => {
    gsap.to(e, {
      duration: 0.5,
      opacity: 1,
      scale: 1,
      delay: 3,
      ease: "power4.out",
      stagger: 0.5,
    })
  }

  const scaleUpFast = (e) => {
    gsap.to(e, {
      duration: 0.5,
      opacity: 1,
      scale: 1,
      delay: 0.2,
      ease: "power4.out",
    })
  }

  const scaleDown = (e) => {
    gsap.to(e, {
      duration: 0.5,
      opacity: 0,
      scale: 0.1,
      ease: "power4.out",
    })
  }

  // ------------------------------- +-- Page 4 Animation Conditions --+

  if (!page4Animation) {
    if (page4Intersection && page4Intersection.intersectionRatio > page4Threshold) {
      fadeInStagger(".page-4-text")
      scaleUp(".contact-circle")
      setTimeout(() => setPage4Animation(true), 5000)
    }
  }

  if (page4Animation) {
    if (page4Intersection && page4Intersection.intersectionRatio > page4Threshold) {
      fadeInStaggerFast(".page-4-text")
      scaleUpFast(".contact-circle")

    } else {
      fadeOut(".page-4-text")
      scaleDown(".contact-circle")
    }
  }


  // const borderBoxStyle = {
  //   margin: "0",
  //   padding: "0",
  //   MozBoxSizing: "border-box",
  //   WebkitBoxSizing: "border-box",
  //   boxSizing: "border-box",
  // }

  return (
    <div id="portfolio-wrapper">
      {/* --------------------------------------------------  PAGE 1  */}
      <div id="page-1" className="page">
        <div id="page-1-cover">
        </div>
        <div className="main-text" id="page-1-main-text">
          <p id="page-1-block-1">Hello.</p>
          <p id="page-1-block-2">My name is Mackenzie.</p>
          <p id="page-1-block-3">I'm a web developer.</p>
        </div>
        <p className="bottom-text" id="page-1-block-4">
          Scroll down to learn more
        </p>
        {arrows}


      </div>
      {/* ------------------------------------------------  PAGE 2  */}

      <div id="page-2" className="page" ref={page2Ref} >

        <div id="page-2-text-wrap" >
          <p className="main-text page-2-text" id="page-2-block-1">
            I specialize in front-end web development.
            </p>
          <p className="main-text page-2-text" id="page-2-block-2" >
            (I make websites.)
            </p>
          <p className="main-text page-2-text" id="page-2-block-3">
            Like this one!
            </p>
        </div>

        <p className="bottom-text page-2-bottom" >
          check out some of my recent projects
          </p>
        <div className="arrows page-2-bottom">
          <BsChevronCompactDown className="arrow" />
          <BsChevronCompactDown className="arrow" />
          <BsChevronCompactDown className="arrow" />
        </div>

      </div>
      {/* ------------------------------------------------  PAGE 3  */}
      <div id="page-3" className="page" ref={page3Ref}>
        <h2 id="page-3-title">Projects</h2>
        <div id="project-wrap">
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/calculator"
              alt=""
            >
              <img className="project-img" alt="Clever Calculator" src={calculatorThumb} width="300" height="200"></img>
            </a>
            <h3 className="project-title">Clever Calculator</h3>
            <p className="project-description">
              A clever calculator app written with React.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/calculator"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="https://github.com/mackenziewritescode/calculator"
              alt=""
            >
              GitHub
            </a>
          </div>
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/drum-machine"
              alt=""
            >
              <img className="project-img" alt="Beat Machine" src={beatMachineThumb} width="300" height="200"></img>
            </a>
            <h3 className="project-title">Beat Machine</h3>
            <p className="project-description">
              A cool React-based drum machine incorporating pads, background tracks and volume control.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/drum-machine"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="https://github.com/mackenziewritescode/drum-machine"
              alt=""
            >
              GitHub
            </a>
          </div>
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/photo-search"
              alt=""
            >
              <img className="project-img" alt="Infinite Photos" src={infinitePhotosThumb} width="300" height="200"></img>
            </a>
            <h3 className="project-title">Infinite Photos</h3>
            <p className="project-description">
              An infinite-scrolling photo app using React, Node and Unsplash API.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/photo-search"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="https://github.com/mackenziewritescode/infinite-photos"
              alt=""
            >
              GitHub
            </a>
          </div>
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/interval-timer"
              alt=""
            >
              <img className="project-img" alt="Interval Timer" src={intervalTimerThumb} width="300" height="200"></img>
            </a>
            <h3 className="project-title">Interval Timer</h3>
            <p className="project-description">
              A stylish interval timer that uses two separate timers with thoughtful features. Written in JavaScript.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/interval-timer"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="https://github.com/mackenziewritescode/interval-timer"
              alt=""
            >
              GitHub
            </a>
          </div>
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/markdown-app"
              alt=""
            >
              <img className="project-img" alt="Markdown Preview" src={markdownPreviewThumb} width="300" height="200"></img>
            </a>
            <h3 className="project-title">Markdown Preview</h3>
            <p className="project-description">
              A markup preview app that converts plain text written in Markdown to rich text in real time, using React.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/markdown-app"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="https://github.com/mackenziewritescode/markdown-app"
              alt=""
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="arrows page-3-bottom" >
          <BsChevronCompactDown className="arrow" />
          <BsChevronCompactDown className="arrow" />
          <BsChevronCompactDown className="arrow" />
        </div>
      </div>
      {/* ------------------------------------------------  PAGE 4  */}
      <div id="page-4" className="page" ref={page4Ref}>
        <p className="main-text page-4-text" id="page-4-block-1">
          You can see all the code for each project, along with detailed
          descriptions, on my{" "}
          <a href="https://github.com/mackenziewritescode" alt="">
            GitHub
          </a>
          .
        </p>
        <p className="main-text page-4-text" id="page-4-block-2">
          Need a web developer? I'd love to help!
        </p>
        <p className="main-text page-4-text" id="page-4-block-3">
          Get in touch:
        </p>
        <div id="contact-wrap">
          <Obfuscate
            email="xxxxxxxxxx@gmail.com"
            aria-label="Email"
            className="contact-circle"
            id="contact-email"
          >
            <MdEmail className="contact-icon" />
          </Obfuscate>
          <a
            className="contact-circle"
            id="contact-linkedin"
            href="https://www.linkedin.com/in/mackenzie-charlton-702517169/"
            alt=""
          >
            <FaLinkedin className="contact-icon" />
          </a>
        </div>
        <footer id="portfolio-footer">
          <p>
            This site was made by{" "}
            <a className="footer-link" href="http://www.sunkenworld.com/">
              Mackenzie Charlton
            </a>{" "}
            in 2020 with{" "}
            <a className="footer-link" href="https://reactjs.org">
              React
            </a>
            .
            Background photos:{" "}
            <a className="footer-link" href="https://unsplash.com/photos/HyZaYuPXyEo">
              1
            </a> |{" "}
            <a className="footer-link" href="https://unsplash.com/photos/RVX2STx44UI">
              2
            </a> |{" "}
            <a className="footer-link" href="https://unsplash.com/photos/OWsdJ-MllYA">
              3
            </a> |{" "}
            <a className="footer-link" href="https://unsplash.com/photos/5ULk8EgE8tg">
              4
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;



// photo credits:

// trees:
// Rohit Tandon
// https://unsplash.com/photos/HyZaYuPXyEo

// sea: 
// James Eades
// https://unsplash.com/photos/RVX2STx44UI

// mountain:
// Etienne Bösiger
// https://unsplash.com/photos/OWsdJ-MllYA

// city:
// Miltiadis Fragkidis
// https://unsplash.com/photos/5ULk8EgE8tg
