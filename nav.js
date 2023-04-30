const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const menuBtn = document.querySelector(".menu-btn");
const nav1 = document.querySelector(".nav-1");
const nav2 = document.querySelector(".nav-2");
const socialContainer = document.querySelector(".social-container");
const socialBtns = document.querySelectorAll(".social-btn");
const navContainer = document.querySelector(".nav-container");
const navBtns = document.querySelectorAll(".nav-btn");
const pageContent = document.querySelector(".page-content");
const body = document.querySelector("body");
const picAndTitle = document.querySelector(".pic-and-title");
const filler = document.querySelector(".filler");
const title = document.querySelector(".title");

let prevScrolled = false;
let prevFullSize = true;
let showMobileMenu = false;

const setTopFullSizeStyles = () => {
  navbar.style.flexDirection = "row";
  navbar.style.padding = "15px 10px";
  navbar.appendChild(nav2);
  picAndTitle.style.flexDirection = "row";
  filler.style.justifyContent = "flex-start";
  title.style.margin = "0 0 0 20px";
  logo.style.width = "90px";
  logo.style.height = "90px";
  menuBtn.style.display = "none";
  nav1.style.flexDirection = "row";
  nav2.style.flexDirection = "row";
  nav2.style.position = "static";
  nav2.style.top = "";
  nav2.style.left = "";
  nav2.style.width = "";
  nav2.style.height = "";
  nav2.style.marginTop = "";
  nav2.style.transform = "";
  socialContainer.style.flexDirection = "column";
  socialContainer.style.margin = "";
  socialBtns.forEach(btn => {btn.style.width = "35px"});
  navContainer.style.flexDirection = "row";
  navContainer.style.alignItems = "flex-end";
  navContainer.style.margin = "0 20px 0 0";
  navContainer.style.justifyContent = "flex-end";
  navBtns.forEach(btn => {
    btn.style.padding = "0.6rem 1.5rem 0.5rem 1.5rem"
    btn.style.fontSize = "1.3rem";
    btn.style.textAlign = "center";
    btn.style.margin = "0 0 0 4px";
    btn.style.transition = "background .2s ease-out";
    btn.classList.remove("rgt");
    btn.classList.add("top");
  });
  pageContent.style.marginTop = "115px";
  menuBtn.classList.remove("close");
  showMobileMenu = false;
};

const setScrolledFullSizeStyles = () => {
  navbar.style.flexDirection = "row";
  navbar.style.padding = "10px";
  logo.style.width = "45px";
  logo.style.height = "45px";
  picAndTitle.style.flexDirection = "row";
  filler.style.justifyContent = "flex-start";
  title.style.margin = "0 0 0 20px";
  menuBtn.style.display = "none";
  nav1.style.flexDirection = "row";
  nav2.style.flexDirection = "row";
  navbar.appendChild(nav2);
  nav2.style.position = "static";
  nav2.style.top = "";
  nav2.style.left = "";
  nav2.style.width = "";
  nav2.style.height = "";
  nav2.style.marginTop = "";
  nav2.style.transform = "";
  socialContainer.style.flexDirection = "row";
  socialContainer.style.margin = "";
  socialBtns.forEach(btn => {btn.style.width = "35px"});
  navContainer.style.flexDirection = "row";
  navContainer.style.alignItems = "flex-end";
  navContainer.style.margin = "0 20px 0 0";
  navContainer.style.justifyContent = "flex-end";
  navBtns.forEach(btn => {
    btn.style.padding = "0.6rem 1.5rem 0.5rem 1.5rem";
    btn.style.fontSize = "1.3rem";
    btn.style.textAlign = "center";
    btn.style.margin = "0 0 0 4px";
    btn.style.transition = "background .2s ease-out";
    btn.classList.remove("rgt");
    btn.classList.add("top");
  });
  pageContent.style.marginTop = "115px";
  menuBtn.classList.remove("close");
  showMobileMenu = false;
};

const setMobileStyles = () => {
  navbar.style.flexDirection = "column";
  navbar.style.padding = "10px";
  logo.style.width = "45px";
  logo.style.height = "45px";
  picAndTitle.style.flexDirection = "row-reverse";
  filler.style.justifyContent = "flex-end";
  title.style.margin = "0 20px 0 0";
  menuBtn.style.display = "inline";
  nav1.style.flexDirection = "row-reverse";
  nav2.style.flexDirection = "column";
  body.appendChild(nav2);
  nav2.style.position = "fixed";
  nav2.style.top = "0";
  nav2.style.left = "0";
  nav2.style.width = "100%";
  nav2.style.height = "calc(100dvh - 65px)";
  nav2.style.marginTop = "65px";
  nav2.style.transform = "translateY(-100%)";
  socialContainer.style.flexDirection = "row";
  socialContainer.style.margin = "20px 20px 20px 20px";
  socialBtns.forEach(btn => {btn.style.width = "70px"});
  navContainer.style.flexDirection = "column";
  navContainer.style.alignItems = "stretch";
  navContainer.style.margin = "20px 20px 20px 20px";
  navContainer.style.justifyContent = "flex-start";
  navBtns.forEach(btn => {
    btn.style.padding = "1.6rem 1.5rem 1.5rem 1.5rem";
    btn.style.fontSize = "2rem";
    btn.style.textAlign = "left";
    btn.style.margin = "0 0 10px 0";
    btn.style.transition = "background .3s ease-out";
    btn.classList.remove("top");
    btn.classList.add("rgt");
  });
  pageContent.style.marginTop = "50px";
  menuBtn.classList.remove("close");
  showMobileMenu = false;
}

const navAdjust = () => {
  const scrolled = (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80);
  const fullSize = window.innerWidth > 800;

  if ((!scrolled && fullSize) && (prevScrolled || !prevFullSize)) {
    setTopFullSizeStyles();
  } else if ((scrolled && fullSize) && (!prevScrolled || !prevFullSize)) { 
    setScrolledFullSizeStyles();
  } else if (!fullSize && prevFullSize) {
    setMobileStyles();
  }

  prevScrolled = scrolled;
  prevFullSize = fullSize;
};

const toggleMenu = () => {
  if (showMobileMenu) {
    showMobileMenu = false;
    nav2.style.overflow = "hidden";
    nav2.style.transform = "translateY(-100%)";
    menuBtn.classList.remove("close");
  } else {
    showMobileMenu = true;
    nav2.style.overflow = "scroll";
    nav2.style.transform = "";
    menuBtn.classList.add("close");
  }
}

const changeActive = (num) => {
  navBtns.forEach(btn => {btn.classList.remove("active")});
  navBtns[num].classList.add("active");
}

navAdjust();
navbar.style.display = "flex";
pageContent.style.display = "inline";

window.onscroll = navAdjust;
window.onresize = navAdjust;






